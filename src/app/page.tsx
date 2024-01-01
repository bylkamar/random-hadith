import { Suspense } from "react";
import SkeletonText from "./lib/skeletons";
import DisplayHadith from "./components/displayHadith";
import { Metadata } from "next";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Hadith",
  description: "A simple app to display a random hadith from the hadith-api",
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center mt-8 md:mt-20">
        <h1 className="text-center text-3xl font-bold text-orange-300">
          Random-Hadith
        </h1>
        <p className="text-gray-200 italic">refresh to pick another hadith</p>
        <Suspense fallback={<SkeletonText />}>
          <DisplayHadith />
        </Suspense>
      </div>
      <footer className="p-2 md:p-4 mt-auto">
        <div className="flex justify-center">
          <div className="mr-2">
            <Link href="https://github.com/bylkamar">
              <FaGithub size={25} className="fill-gray-200" />
            </Link>
          </div>
          <div>
            <p className="text-center text-gray-200">
              © 2023 AIT CHIKHOUNE Amer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
