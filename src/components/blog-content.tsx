import { copyTextToClipboard } from "@/utils";
import hljs from "highlight.js";
import { Check, Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const code = `
const copyText = () => {
  setCopied(true)
  copyTextToClipboard(code.trim());
  setTimeout(() => {
    setCopied(false);
  }, 2000);
}

useEffect(() => {
  hljs.highlightAll();
}, []);
`;

export const BlogContent: React.FC = () => {
  // const codeFormatted = code.trim().split('\n');
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    setCopied(true)
    copyTextToClipboard(code.trim());
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="bg-slate-950 rounded-xl flex-1 -order-1 max-w-[1238px] col-span-9 p-10 my-10">
      <div className="relative rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950/50 to-slate-900/80 p-6 pt-3">
        <div className="-mx-6 mb-6 flex items-center justify-between border-b border-slate-700 px-6 pb-3">
          <div className="flex items-center gap-3">
            <button className="rounded px-1.5 py-0.5 text-sm font-medium transition-colors bg-indigo-600 text-slate-50">
              code-example.tsx
            </button>
            <button className="rounded px-1.5 py-0.5 text-sm font-medium transition-colors bg-slate-900 text-slate-50 hover:bg-slate-700">
              React
            </button>
          </div>

          
          <Button
            size="sm"
            disabled={copied}
            className='flex items-center disabled:opacity-80 gap-2 bg-gradient-to-br from-slate-800 to-slate-950 hover:from-slate-700 hover:to-slate-950 text-xs text-slate-50 transition-all'
            onClick={copyText}
          >
            {copied ? <Check className="size-3.5 text-green-500" /> : <Copy className="size-3" />}
            <span>{copied ? "Copiado!" : "Copiar código"}</span>
          </Button>
        </div>

        <div className="overflow-auto">
          <pre>
            <code className="language-tsx">
              {code.trim()}
            </code>
          </pre>
        </div>
        <span className="absolute left-0 top-1/2 h-48 w-px -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
      </div>
    </div>
  );
};
