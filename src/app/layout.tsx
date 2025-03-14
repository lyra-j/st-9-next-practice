import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home(SSG)
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/news" className="nav-link">
                News(ISR)
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" className="nav-link">
                Blogs(SSR)
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/todolist" className="nav-link">
                TodoList(CSR)
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
