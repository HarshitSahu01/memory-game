let defaultArray = ['😈', '🤡', '🤢', '🥶', '🤯', '🤑', '😶‍🌫️', '🦑',
    '😈', '🤡', '🤢', '🥶', '🤯', '🤑', '😶‍🌫️', '🦑']

const shuffleArray = (array) => {
    if (array == undefined) array = defaultArray;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const getArray = () => {
    let arr = shuffleArray();
    let obj = {};
    for (let i = 0; i < 16; i++) {
        obj[i] = {
            'emoji': arr[i],
            'flipped': false,
            'used': false,
            'id': i
        };
    }
    return obj;
}

export default getArray;