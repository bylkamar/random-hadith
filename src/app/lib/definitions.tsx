type grade = {
  name: string;
  grade: string;
};

type editionName = {
  name: string;
  section: string;
  hadithNumber: number;
  arabicText: string;
  englishText: string;
  grades: Array<grade>;
};
