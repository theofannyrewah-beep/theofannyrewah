import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theo Fanny - Portfolio",
  description: "Portfolio - Full Stack Developer & Designer",
};

import SmoothScroll from "@/components/SmoothScroll";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.onerror = function(msg, url, line, col, error) {
            var d = document.createElement('div');
            d.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#1a0000;color:#ff6b6b;padding:20px;font-family:monospace;font-size:14px;white-space:pre-wrap;word-break:break-word;max-height:50vh;overflow:auto;border-bottom:2px solid #ff0000';
            d.textContent = 'ERROR: ' + msg + '\\nFile: ' + url + '\\nLine: ' + line + ':' + col + '\\nStack: ' + (error && error.stack ? error.stack : 'N/A');
            document.body.insertBefore(d, document.body.firstChild);
            return false;
          };
          window.onunhandledrejection = function(e) {
            var d = document.createElement('div');
            d.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#1a0000;color:#ff6b6b;padding:20px;font-family:monospace;font-size:14px;white-space:pre-wrap;word-break:break-word;max-height:50vh;overflow:auto;border-bottom:2px solid #ff0000';
            d.textContent = 'UNHANDLED REJECTION: ' + (e.reason ? (e.reason.message || e.reason) : 'Unknown') + '\\nStack: ' + (e.reason && e.reason.stack ? e.reason.stack : 'N/A');
            document.body.insertBefore(d, document.body.firstChild);
          };
        `}} />
      </head>
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
