"use client";

import { useState } from "react";

interface ResourceCodeViewerProps {
  title: string;
  filename: string;
  code: string;
  language: "json" | "plaintext" | "robots";
  rawUrl: string;
  description?: string;
}

export default function ResourceCodeViewer({
  title,
  filename,
  code,
  language,
  rawUrl,
  description,
}: ResourceCodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="glass-panel overflow-hidden border border-white/10 shadow-2xl">
      {/* Viewer Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-obsidian-900/90 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-slate-200 sm:text-sm" title={title}>
              {filename}
            </span>
            <span className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400">
              {language.toUpperCase()}
            </span>
            <span className="hidden text-xs text-slate-500 sm:inline">
              ({lines.length} lines)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-koral-blue/40 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-koral-blue/50 active:scale-95"
            title="Copy entire content to clipboard"
          >
            {copied ? (
              <>
                <svg
                  className="h-3.5 w-3.5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="h-3.5 w-3.5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy Code</span>
              </>
            )}
          </button>

          {/* Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-koral-blue/40 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-koral-blue/50 active:scale-95"
            title={`Download ${filename}`}
          >
            <svg
              className="h-3.5 w-3.5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="hidden sm:inline">Download</span>
          </button>

          {/* Raw Link */}
          <a
            href={rawUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-koral-blue/30 bg-koral-blue/10 px-3 py-1.5 text-xs font-medium text-koral-blue-light transition-all hover:bg-koral-blue/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-koral-blue/50"
            title="Open raw machine endpoint in new tab"
          >
            <span>Raw Endpoint</span>
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {description && (
        <div className="border-b border-white/5 bg-obsidian-950/40 px-4 py-2.5 text-xs text-slate-400 sm:px-6">
          {description}
        </div>
      )}

      {/* Code Body */}
      <div className="max-h-[600px] overflow-auto bg-obsidian-950/90 p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
        <pre className="flex">
          {/* Line Numbers */}
          <div
            className="select-none pr-4 text-right text-slate-600 border-r border-white/5"
            aria-hidden="true"
          >
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Content */}
          <div className="overflow-x-auto pl-4 flex-1">
            {lines.map((line, i) => {
              // Lightweight syntax highlighting touches
              let styledLine = <span className="text-slate-300">{line}</span>;

              if (language === "json") {
                if (line.includes('":')) {
                  const parts = line.split('":');
                  const key = parts[0];
                  const value = parts.slice(1).join('":');
                  styledLine = (
                    <>
                      <span className="text-cyan-400">{key}&quot;</span>
                      <span className="text-slate-400">:</span>
                      <span className={value.includes('"') ? "text-emerald-300" : "text-amber-300"}>
                        {value}
                      </span>
                    </>
                  );
                } else if (line.trim().startsWith('"')) {
                  styledLine = <span className="text-emerald-300">{line}</span>;
                }
              } else if (language === "robots") {
                if (line.trim().startsWith("#")) {
                  styledLine = <span className="text-slate-500 italic">{line}</span>;
                } else if (line.startsWith("User-agent:")) {
                  styledLine = (
                    <>
                      <span className="text-indigo-400 font-semibold">User-agent:</span>
                      <span className="text-amber-300">{line.substring(11)}</span>
                    </>
                  );
                } else if (line.startsWith("Allow:")) {
                  styledLine = (
                    <>
                      <span className="text-emerald-400 font-semibold">Allow:</span>
                      <span className="text-slate-200">{line.substring(6)}</span>
                    </>
                  );
                } else if (line.startsWith("Sitemap:")) {
                  styledLine = (
                    <>
                      <span className="text-cyan-400 font-semibold">Sitemap:</span>
                      <span className="text-koral-blue-light underline">{line.substring(8)}</span>
                    </>
                  );
                }
              } else if (language === "plaintext") {
                if (line.startsWith("# ")) {
                  styledLine = <span className="text-white font-bold text-base">{line}</span>;
                } else if (line.startsWith("## ")) {
                  styledLine = <span className="text-cyan-300 font-bold">{line}</span>;
                } else if (line.trim().startsWith("- **")) {
                  styledLine = <span className="text-indigo-300">{line}</span>;
                } else if (line.trim().startsWith("|")) {
                  styledLine = <span className="text-teal-300">{line}</span>;
                }
              }

              return <div key={i}>{styledLine}</div>;
            })}
          </div>
        </pre>
      </div>
    </div>
  );
}
