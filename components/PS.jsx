/**
 * Responsive modern "P.S." section with custom bullet images.
 * - Works great inside pages or MDX (if you export/import it)
 * - Uses Tailwind + subtle glassmorphism + hover highlights
 *
 * Usage:
 * <PSSection
 *   title="P.S."
 *   subtitle="A few quick notes before you apply"
 *   bullets={[
 *     { iconSrc: "/icons/check-crimson.png", text: <>Submit all documents as <b>PDF</b>.</> },
 *     { iconSrc: "/icons/pin-crimson.png", text: "Deadlines are strict — late submissions aren’t accepted." },
 *     { iconSrc: "/icons/info-crimson.png", text: "Scholarship results are announced after document screening." },
 *   ]}
 * />
 */

const PS = ({
  title = 'P.S.',
  subtitle = 'Important notes',
  bullets = [],
  className = '',
}) => (
  <section className={`w-full ${className}`}>
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_18px_70px_rgba(0,0,0,0.35)]">
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative p-5 pb-7 sm:p-7 sm:pb-9 lg:p-10 lg:pb-16">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              {title}
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-100">
              {subtitle}
            </h3>
          </div>

          {/* Accent badge */}
          <div className="mt-3 sm:mt-0">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200">
              Please read carefully
            </span>
          </div>
        </div>

        {/* Bullets */}
        <div className="mt-5 sm:mt-6">
          <ul className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
            {bullets.map((b, idx) => (
              <li
                key={idx}
                className="group flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition
                             hover:border-white/20 hover:bg-white/7"
              >
                {/* icon */}
                <div className="mt-0.5 shrink-0">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">
                      <img
                        src={b.iconSrc}
                        alt={b.iconAlt || 'bullet icon'}
                        className="h-6 w-6 object-contain opacity-90 transition group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                </div>

                {/* text */}
                <div className="min-w-0">
                  {b.title ? (
                      <p className="text-sm sm:text-base font-semibold text-gray-100">
                        {b.title}
                      </p>
                    ) : null}

                  <p className="mt-0.5 text-sm sm:text-[15px] leading-relaxed text-gray-200/90">
                      {b.text}
                    </p>

                  {b.note ? (
                      <p className="mt-2 text-xs sm:text-sm text-gray-300/80">
                        {b.note}
                      </p>
                    ) : null}
                </div>
              </li>
            ))}
          </ul>

          {bullets.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200">
              Add bullets via the <code className="text-gray-100">bullets</code> prop.
            </div>
          ) : null}
        </div>
        
      </div>
    </div>
  </section>
);

export default PS;
