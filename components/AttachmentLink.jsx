export default function AttachmentLink({ href, label }) {
  return (
    <div className="not-prose border-b border-black/10 py-4 text-sm text-white">
      <span className="mr-2">The attached file</span>
      <a
        className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-neutral-900"
        href={href}
        download
      >
        <span aria-hidden>📎</span>
        {label}
      </a>
    </div>
  );
}
