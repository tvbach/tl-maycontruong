import { SITE } from '@/data/site';
import { MACHINES } from '@/data/machines';

// Sinh /sitemap.xml cho Google Search Console.
export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = 'monthly') => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page('/', 1, 'weekly'),
    page('/san-pham', 0.9, 'weekly'),
    ...MACHINES.map((m) => page(`/san-pham/${m.slug}`, 0.8)),
    page('/lien-he', 0.7),
    page('/gioi-thieu', 0.5),
  ];
}
