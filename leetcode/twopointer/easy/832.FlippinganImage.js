var flipAndInvertImage = function (image) {
    for (let i of image) {
        i.reverse();
        for (let j = 0; j < i.length; j++) {
            i[j] = i[j] == 0 ? 1 : 0;
        }
    }
    return image;
};
flipAndInvertImage([1, 0, 0], [0, 1, 0], [0, 0, 0]);