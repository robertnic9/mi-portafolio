import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Load all json files from the /messages/[locale]/ folder and merge them into one messages object.
  // This allows the use of /messages/es/componente.json structure.
  const messagesPath = path.join(process.cwd(), 'messages', locale);
  let messages = {};

  try {
    if (fs.existsSync(messagesPath)) {
      const files = fs.readdirSync(messagesPath);
      for (const file of files) {
        if (file.endsWith('.json')) {
          const namespace = file.replace('.json', '');
          const fileContent = await import(`../../messages/${locale}/${file}`);
          messages[namespace] = fileContent.default;
        }
      }
    }
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
  }

  return {
    locale,
    messages
  };
});
