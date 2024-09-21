"use client"; // This is a client component
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale(); // Get the current locale
  const router = useRouter(); // Get the router instance
  const searchParams = useSearchParams(); // Get current query parameters

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value; // Get the selected locale from the dropdown

    // Check if the new locale is different from the current locale
    if (newLocale !== locale) {
      // Extract the pathname and remove the current locale from it
      const newPathname = window.location.pathname.replace(`/${locale}`, '') || '/';
      
      // Preserve query parameters if any
      const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
      
      // Navigate to the new locale path
      router.push(`/${newLocale}${newPathname}${query}`);
    }
  };

  return (
    <select value={locale} onChange={handleLocaleChange}>
      <option value="en">English</option>
      <option value="fa">Farsi</option>
      {/* Add more locales as needed */}
    </select>
  );
}
