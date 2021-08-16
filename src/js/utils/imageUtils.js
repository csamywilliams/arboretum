export const importAll = (context) => {
    let images = {};

    context.keys().map((item) => {
        images[item.replace('./', '')] = context(item);
    });

    return images;
};
