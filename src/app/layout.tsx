import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Hadith",
  description: "Pick a random hadith from multiple editions of collections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#333333]`}>
        {children}
        {/* <footer className="p-2 md:p-4 mt-auto">
          <div className="flex justify-center">
            <div className="mr-2">
              <Link href="https://github.com/bylkamar">
                <FaGithub size={25} />
              </Link>
            </div>
            <div>
              <p className="text-center">
                © 2023 AIT CHIKHOUNE Amer. All rights reserved. ❤️
              </p>
            </div>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
