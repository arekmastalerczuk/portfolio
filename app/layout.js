import "./globals.css";
import Image from "next/image";
import { NavBar } from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Armast. Arkadiusz Mastalerczuk",
  description: "JavaScript Fullstack Developer wannabe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-b from-secondary to-primary text-primary-text flex flex-col">
        <header className="fixed t-0 l-0 flex w-full items-center justify-between p-4 bg-secondary opacity-95">
          <a className="flex space-x-4 items-center" href="/">
            <Image
              width={60}
              height={60}
              className="w-15 h-15 bg-white rounded-full"
              src="/logo.png"
              alt="logo yoda"
            />
            <span className="font-bold text-lg">Armast</span>
          </a>
          <NavBar />
        </header>
        <main className="flex-1 pt-32 max-w-[1600px] self-center">
          {children}
        </main>
        <footer className="bg-secondary w-full h-24 mt-12 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-center mt-0">
            <span className="font-bold text-highlight">
              Armast. Arkadiusz Mastalerczuk
            </span>
          </p>
          <p className="mt-0">Copyright &copy; 2024</p>
        </footer>
      </body>
    </html>
  );
}
