interface MajorCredits {
  credits: number;
  _majorCreditsBrand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  _minorCreditsBrand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, _majorCreditsBrand: "MajorCredits" } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, _minorCreditsBrand: "MinorCredits" } as MinorCredits;
}

const subject1: MajorCredits = { credits: 4, _majorCreditsBrand: "MajorCredits" };
const subject2: MajorCredits = { credits: 3, _majorCreditsBrand: "MajorCredits" };

const majorTotal = sumMajorCredits(subject1, subject2);
console.log("Total major credits:", majorTotal.credits);

const subject3: MinorCredits = { credits: 2, _minorCreditsBrand: "MinorCredits" };
const subject4: MinorCredits = { credits: 1, _minorCreditsBrand: "MinorCredits" };

const minorTotal = sumMinorCredits(subject3, subject4);
console.log("Total minor credits:", minorTotal.credits);