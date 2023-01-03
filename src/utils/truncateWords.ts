const truncateWords = (
  sentence: string,
  maxLengthWords: number = 20,
): string => {
  const sentenceSplitted = sentence.split(' ', maxLengthWords);

  return sentenceSplitted.length < maxLengthWords
    ? sentenceSplitted.join(' ')
    : `${sentenceSplitted.join(' ')}...`;
};

export default truncateWords;
