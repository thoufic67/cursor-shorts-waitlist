import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import { PHProvider } from "@/components/providers/posthog-provider";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CursorShorts",
  description: "Create Viral AI videos easily",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "CursorShorts",
    description: "Create Viral AI videos easily",
    url: "https://cursorshorts.com",
    siteName: "CursorShorts",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "CursorShorts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CursorShorts",
    description: "Create Viral AI videos easily",
    images: ["/favicon/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta property="og:site_name" content="CursorShorts" />
      <meta property="og:url" content="https://cursorshorts.com/" />
      <meta name="twitter:image" content="/opengraph.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={FigtreeFont.className}>
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <NavigationBar />
            {children}
            <Footer />
            <Toaster richColors position="top-center" />
            <Analytics />
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
