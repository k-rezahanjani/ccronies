import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
    // Check if the requested locale is supported
    if (!routing.locales.includes(locale)) {
        // If the locale is not supported, trigger a 404 error
        notFound();
    }

    try {
        // Dynamically import the locale messages JSON file
        const messages = (await import(`../../messages/${locale}.json`)).default;

        // Return the messages as part of the config
        return { messages };
    } catch (error) {
        // Log the error for debugging purposes
        console.error(`Error loading messages for locale "${locale}":`, error);

        // If there's an error loading the messages, trigger a 404 error
        notFound();
    }
});
