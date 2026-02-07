// lib/notices.js

export const NOTICES = [
  {
    slug: 'launching-career-mentoring-program',
    title: 'Launching a Career Mentoring Program',
    dateCreated: '24.11.27', // display format
    publishedAt: '2024-11-27', // sortable ISO
    pinned: true,
    pageViews: 7099,
    mdx: () => import('../content/notices/launching-career-mentoring-program.mdx'),
  },
  {
    slug: 'another-notice',
    title: 'Another Notice Example',
    dateCreated: '25.02.02',
    publishedAt: '2025-02-02',
    pinned: false,
    pageViews: 120,
    mdx: () => import('../content/notices/another-notice.mdx'),
  },
];

export function getSortedNotices() {
  // pinned first, then newest publishedAt
  console.log(NOTICES);
  return [...NOTICES].sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export function getNoticeBySlug(slug) {
  return NOTICES.find((n) => n.slug === slug) || null;
}
