export default function NoticeHeader({ title, dateCreated, pageViews }) {
  return (
    <header className="not-prose border-b border-black/10 pb-6 text-black">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>

      <div className="mt-3 text-sm text-black">
        <span>Date Created : {dateCreated}</span>
        <span className="mx-2">|</span>
        <span>Page Views : {pageViews}</span>
      </div>
    </header>
  );
}
