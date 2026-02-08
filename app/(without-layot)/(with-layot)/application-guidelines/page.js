'use client';

import { motion } from 'framer-motion';

export default function ApplicationGuidelinesPage() {
  const pdfUrl = '/pdfs/application_guide_for_international_students.pdf'; // put your pdf in /public/pdfs/

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -left-24 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-10"
        >
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Application Guidlines
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
            Download the PDF or view it directly below.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-6"
        >
          {/* Top actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white/90 backdrop-blur">
                📄
              </div>
              <div>
                <p className="text-sm font-medium text-white">Application Guidelines PDF</p>
                <p className="text-xs text-white/60">View online or download for offline reading</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              {/* download */}
              <a
                href={pdfUrl}
                download
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/15 hover:text-white active:scale-[0.99]"
              >
                <span className="transition group-hover:translate-y-[-1px]">⬇️</span>
                Download PDF
              </a>

              {/* open in new tab (optional) */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-transparent px-4 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                ↗ Open in new tab
              </a>
            </div>
          </div>

          {/* Viewer */}
          <div className="mt-5 overflow-hidden rounded-3xl border border-white/15 bg-black/20">
            {/* Responsive height: mobile shorter, desktop taller */}
            <div className="h-[60vh] min-h-[420px] w-full sm:h-[70vh]">
              <iframe
                title="Application Guidelines PDF Viewer"
                src={`${pdfUrl}#view=FitH`}
                className="h-full w-full"
              />
            </div>
          </div>

          {/* tiny footer note */}
          <p className="mt-3 text-xs text-white/50">
            If the embedded viewer doesn’t load (some browsers block it), use “Open in new tab” or download the file.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
