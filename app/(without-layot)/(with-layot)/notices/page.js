'use client';

import NoticeList from '../../../../components/NoticeList';
import { getSortedNotices } from '../../../../lib/notices';

export default function NoticesPage() {
  const items = getSortedNotices();

  return (
    <main className="relative min-h-screen py-14">
      <section className="mx-auto w-full max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Notices
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            Official announcements and updates.
          </p>
        </div>

        <NoticeList items={items} />
      </section>
    </main>
  );
}
