import truncateWords from './truncateWords';

const maxWords = 10;
const shortSentence = 'Hello, my name is Bob';
const longSentence =
  'Chocolate cake jujubes sugar plum donut pudding. Caramels tart apple pie jelly-o muffin bear claw. Sweet tart marshmallow biscuit cake cheesecake.';

describe('Truncate words', () => {
  it('should not truncate the string when the string has less than 10 words', () => {
    expect(truncateWords(shortSentence, maxWords)).toBe(shortSentence);
  });

  it('should truncate the string when the string has more than 10 words', () => {
    const truncatedSentence =
      'Chocolate cake jujubes sugar plum donut pudding. Caramels tart apple...';
    expect(truncateWords(longSentence, maxWords)).toBe(truncatedSentence);
  });
});
