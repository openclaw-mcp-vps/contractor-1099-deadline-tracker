import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1099 Deadline Tracker — Never Miss Contractor Tax Form Deadlines",
  description: "Track contractor payments, calculate 1099 thresholds, and get automated email reminders with pre-filled PDF forms. Built for small business owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76e65dd3-0715-453d-af0c-e0f814330236"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
