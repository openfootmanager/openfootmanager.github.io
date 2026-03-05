import { useState, useRef, useEffect } from 'react';
import type { DownloadOption } from '../data/downloads';

interface Props {
  label: string;
  iconSvg: string;
  defaultIndex?: number;
  options: DownloadOption[];
}

export default function DownloadSplitButton({ label, iconSvg, defaultIndex = 0, options }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options[selectedIndex];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex rounded-xl overflow-hidden shadow-lg shadow-emerald-500/25">
        {/* Main download button */}
        <a
          href={selected.url}
          onClick={() => {
            if (typeof window !== 'undefined' && 'gtag' in window) {
              // @ts-ignore
              window.gtag('event', 'click_download', {
                platform: label,
                file_name: selected.filename,
                architecture: selected.arch
              });
            }
          }}
          className="flex-1 min-w-0 flex items-center gap-3 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-white transition-all duration-200"
        >
          <span
            className="w-5 h-5 flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: iconSvg }}
          />
          <div className="min-w-0 overflow-hidden">
            <div className="font-heading font-bold uppercase tracking-wider text-sm truncate">
              {label}
            </div>
            <div className="text-[11px] text-emerald-100/80 truncate">
              {selected.label} · {selected.arch} · {selected.size}
            </div>
          </div>
        </a>

        {/* Arrow toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          className="flex-shrink-0 w-10 flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white border-l border-emerald-400/30 transition-all duration-200 cursor-pointer"
          aria-label="Show download options"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 max-h-72 overflow-y-auto">
          {options.map((opt, i) => (
            <button
              key={`${opt.label}-${opt.arch}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof window !== 'undefined' && 'gtag' in window) {
                  // @ts-ignore
                  window.gtag('event', 'click_download', {
                    platform: label,
                    file_name: opt.filename,
                    architecture: opt.arch
                  });
                }
                setSelectedIndex(i);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors text-left cursor-pointer ${i === selectedIndex
                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                : 'text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400'
                } ${i !== options.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <svg
                  className="w-4 h-4 opacity-50 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                  <path d="M4 12H2" />
                  <path d="M10 12H8" />
                  <path d="M16 12h-2" />
                  <path d="M22 12h-2" />
                </svg>
                <span className="font-medium">{opt.label}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 truncate">{opt.arch}</span>
              </div>
              <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">{opt.size}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
