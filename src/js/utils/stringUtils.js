export const truncateWords = (sentence, maxLengthWords = 10) => {
	const sentenceSplitted = sentence.split(' ', maxLengthWords);

	return sentenceSplitted.length < maxLengthWords
		? sentenceSplitted.join(' ')
		: `${sentenceSplitted.join(' ')}...`;
};
