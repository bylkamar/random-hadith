import { Suspense } from "react";
import SkeletonText from "./lib/skeletons";
import DisplayHadith from "./components/displayHadith";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Hadith",
  description: "A simple app to display a random hadith from the hadith-api",
};

export default async function Home() {
  return (
    <main className="mt-8">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold md:mt-20 text-orange-300">
          Random-Hadith
        </h1>
        <p className="text-gray-200 italic">refresh to pick another hadith</p>
        <div className="flex items-center mt-10 mx-8">
          {/* <ArrowPathIcon className="h-10 mx-2  text-gray-200" /> */}
          {/* <button className="rounded-full px-[100px] text-2xl hover:bg-gray-100 bg-gray-200">
            Generate
          </button> */}
        </div>
        <Suspense fallback={<SkeletonText />}>
          <DisplayHadith />
        </Suspense>
      </div>
    </main>
  );
}
