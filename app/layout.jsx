import "@/styles/tailwind.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space_grotesk = Space_Grotesk({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className={`${inter.variable} ${space_grotesk.variable}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
