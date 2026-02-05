export default function SectionItem({ icon, title, children }) {
  return (
    <section className="not-prose mt-8 text-black">
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <span aria-hidden>{icon}</span>
        {title}
      </h3>
      <div className="mt-2 text-base leading-7 text-white">{children}</div>
    </section>
  );
}
