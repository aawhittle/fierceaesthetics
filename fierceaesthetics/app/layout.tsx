import "./globals.css";

export const metadata = {
  title: "Fierce Aesthetics | Beauty",
  description: "Elegant beauty services. Book your appointment today.",
  openGraph: {
    title: "Fierce Aesthetics | Beauty",
    description: "Elegant beauty services. Book your appointment today.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}