export function calculateOverallBand(scores) {
  const { listening, reading, writing, speaking } = scores;
  const average = (listening + reading + writing + speaking) / 4;
  return Math.round(average * 2) / 2; // Rounds to nearest 0.5
}

export const listeningBandTable = {
  30: 7.0,
  31: 7.0,
  32: 7.5,
  33: 7.5,
  // Add more mappings from IELTS resources
};

export const readingBandTable = {
  Academic: {
    30: 7.0,
    31: 7.0,
    32: 7.5,
    // Add more
  },
  General: {
    34: 7.0,
    35: 7.5,
    // Add more
  },
};

export function getBandScore(rawScore, section, testType = 'Academic') {
  const table = section === 'listening' ? listeningBandTable : readingBandTable[testType];
  return table[rawScore] || 0;
}