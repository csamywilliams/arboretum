import { importAll } from 'utils/imageUtils';

const testData = {
    image: './filename',
};

describe('Image utils', () => {
    it('should not truncate the string when the string has less than 10 words', () => {
        const context = () => {
            const files = testData;

            function Module(file) {
                return `test-${file}`;
            }

            Module.keys = () => Object.keys(files);

            return Module;
        };

        expect(importAll(context())).toStrictEqual({ image: 'test-image' });
    });
});
