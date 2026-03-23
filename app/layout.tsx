import type { Metadata, Viewport } from "next";
import { Lora, DM_Sans, Gochi_Hand } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  variable: "--font-gochi-hand",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tolga Ozgun | Software Engineer",
  description: "Personal website of Tolga Ozgun, a software engineer who loves building things and writing about life.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1TR5WQ43MD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1TR5WQ43MD');
            `,
          }}
        />
      </head>
      <body
        className={`${lora.variable} ${dmSans.variable} ${gochiHand.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
