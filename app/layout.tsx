import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Slack Bot — Auto-post formatted changelogs to Slack",
  description: "Monitor GitHub repositories for new releases and automatically post formatted changelogs to your Slack channels. Real-time updates via GitHub webhooks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="381f2a3d-bae2-4768-8ecf-a83081c842fd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
