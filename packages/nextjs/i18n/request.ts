import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale: Locale = locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
