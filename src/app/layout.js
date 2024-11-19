import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
  title: "Invitation for House Warming Celebration | Shree Bhavanam",
  description: "A Special Invite for the Special Person for the House Warming Celebration of Shree Bhavanam from Shree Gowtham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-lato antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
