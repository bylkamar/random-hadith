import React from "react";
import { fetchRandomHadith } from "../lib/randomizer";

interface DisplayHadithProps {
  // Define props (not required for now)
}

// Show the picked hadith
const DisplayHadith: React.FC<DisplayHadithProps> = async (props) => {
  let randomhadith = await fetchRandomHadith();
  return (
    <div className="mt-12">
      <h3 className="text-center text-3xl font-bold text-cyan-200 mb-5">
        {randomhadith.name}
      </h3>
      <p className="text-center text-2xl font-bold text-gray-300 mb-5 mx-12">
        {randomhadith.arabicText}
      </p>
      <p className="text-center text-1xl font-bold text-gray-300 mb-20 mx-12">
        {randomhadith.englishText}
      </p>
      {randomhadith.grades.length > 0 && (
        <h2 className="text-center text-cyan-200">Grades:</h2>
      )}
      <>
        {randomhadith.grades.map((grade) => {
          return (
            <p className="text-center text-gray-200" key={grade.name}>
              {grade.name}: {grade.grade}
            </p>
          );
        })}
      </>
    </div>
  );
};

export default DisplayHadith;
