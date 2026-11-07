import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/data/seo';

// Header band for inner pages. `crumbs` = [{ name, href }] shown before the current page; `path` = this page's URL.
const PageHeader = ({ title, description, crumbs = [], path }) => (
  <section className="on-dark bg-navy-800 text-white">
    {path && <JsonLd data={breadcrumbJsonLd([...crumbs.map((c) => ({ name: c.name, path: c.href })), { name: title, path }])} />}
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12">
      <nav aria-label="Đường dẫn">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-200">
          <li><Link href="/" className="hover:text-white hover:underline">Trang chủ</Link></li>
          {crumbs.map((c) => (
            <li key={c.href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <Link href={c.href} className="hover:text-white hover:underline">{c.name}</Link>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">{title}</span>
          </li>
        </ol>
      </nav>
      <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
      {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">{description}</p>}
    </div>
    <div className="teeth" aria-hidden="true" />
    <div className="h-2 bg-gold-500" aria-hidden="true" />
  </section>
);

export default PageHeader;
