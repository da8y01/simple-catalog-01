"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { hardhat } from "viem/chains";
import { Bars3Icon, BugAntIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick, useTargetNetwork } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const HeaderMenuLinks = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");

  const menuLinks: HeaderMenuLink[] = [
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("catalog"),
      href: "/catalog",
      icon: <ShoppingBagIcon className="h-4 w-4" />,
    },
    {
      label: t("debugContracts"),
      href: "/debug",
      icon: <BugAntIcon className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href || pathname.endsWith(href);
        return (
          <li key={href} className="h-full">
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-base-300" : ""
              } hover:bg-base-300 focus:!bg-base-300 h-full px-4 text-sm gap-2 flex items-center whitespace-nowrap`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;
  const locale = useLocale();
  const router = useRouter();

  const burgerMenuRef = useRef<HTMLDetailsElement>(null);
  useOutsideClick(burgerMenuRef, () => {
    burgerMenuRef?.current?.removeAttribute("open");
  });

  const setLocale = (nextLocale: string) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-16 shrink-0 justify-between z-20 border-b-2 border-base-300 p-0 sm:px-2">
      <div className="navbar-start w-auto self-stretch">
        <details className="dropdown" ref={burgerMenuRef}>
          <summary className="ml-1 btn btn-ghost lg:hidden hover:bg-transparent">
            <Bars3Icon className="h-1/2" />
          </summary>
          <ul
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 w-52"
            onClick={() => {
              burgerMenuRef?.current?.removeAttribute("open");
            }}
          >
            <HeaderMenuLinks />
          </ul>
        </details>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Simple Catalog</span>
            <span className="text-xs">articles &amp; items</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap h-full m-0 p-0 list-none">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end grow mr-4 gap-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={`btn btn-ghost btn-xs ${locale === "en" ? "btn-active" : ""}`}
            onClick={() => setLocale("en")}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            className={`btn btn-ghost btn-xs ${locale === "es" ? "btn-active" : ""}`}
            onClick={() => setLocale("es")}
            aria-label="Cambiar a Español"
          >
            ES
          </button>
        </div>
        <RainbowKitCustomConnectButton />
        {isLocalNetwork && <FaucetButton />}
      </div>
    </div>
  );
};
