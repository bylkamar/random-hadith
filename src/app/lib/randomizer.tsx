export const revalidate = 0;
export async function fetchRandomHadith(): Promise<editionName> {
  try {
    // Fetch all the editions
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/info.json",
      { cache: "no-store" }
    );
    const data = await response.json();

    // pick a random edition
    var editionsList = Object.keys(data);
    let randomEditionName =
      editionsList[(editionsList.length * Math.random()) << 0];
    let randomEdition = data[randomEditionName];

    // Pick a random number between 1 and the last hadith number
    const hadithNumber =
      (randomEdition.metadata.last_hadithnumber * Math.random()) << 0; //

    // get the english and arabic translation of the hadith
    const englishTranslation = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-${randomEditionName}/${hadithNumber}.json`,
      { cache: "no-store" }
    );
    const englishHadith = await englishTranslation.json();

    const arabicTranslation = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-${randomEditionName}/${hadithNumber}.json`,
      { cache: "no-store" }
    );
    const arabicHadith = await arabicTranslation.json();

    return {
      name: englishHadith.metadata.name,
      section: "0",
      hadithNumber: hadithNumber,
      arabicText: arabicHadith.hadiths[0].text,
      englishText: englishHadith.hadiths[0].text,
      grades: englishHadith.hadiths[0].grades,
    };
  } catch (error) {
    throw new Error("Failed to fetch page");
  }
}
