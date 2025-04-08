import "./globals.css";

export const metadata = {
  title:
    "Discover, Create, and Chat with your lifelike AI                characters in Bezu ",
  description: "Our AI can see, listen and speak to you.",
  keywords:
    "AI video chat, AI personalities, AI clones, real-time conversations",
  authors: [{ name: "Bezu Ai" }],
  creator: "Bezu Ai",
  publisher: "Bezu Ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mybezu.com/",
    site_name: "Bezu Ai",
    title:
      "Discover, Create, and Chat with your lifelike AI               characters in Bezu ",
    description: "Lifelike AI friends for you to support and entertain",
    images: [
      {
        url: "https://www.mybezu.com/meta.png",
        width: 1200,
        height: 630,
        alt: "AI Video Chat Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bezu_ai",
    creator: "@bezu_ai",
    title:
      "Discover, Create, and Chat with your lifelike AI                characters in Bezu ",
    description: "Lifelike AI friends for you to support and entertain",
    images: ["https://www.mybezu.com/meta.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`euclid antialiased`}>{children}</body>
    </html>
  );
}
