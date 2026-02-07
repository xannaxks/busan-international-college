// 'use client';

import { notFound } from 'next/navigation';
import { getNoticeBySlug } from '../../../../../lib/notices';

export default async function NoticeDetailPage({ params }) {
  const { slug } = await params;
  const notice = getNoticeBySlug(slug);
  // console.log('here');
  if (!notice) return notFound();

  const mod = await notice.mdx();
  const MDX = mod.default;

  return (
    <main className="relative min-h-screen py-14">
      <section className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="px-5 sm:px-7 py-6">
            <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-li:text-white/75 prose-headings:text-white">
              <MDX />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
