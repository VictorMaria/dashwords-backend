import anagram from '../../database/models/anagram';

export const addToAnagramBank = async (wordList) => {
    const bulkList = [];
    for(let word of wordList) {
        bulkList.push({
            updateOne: {
                "filter": { word },
                "update": { word },
                "upsert": true,
            }
        });
    };
    try {
        await anagram.bulkWrite(bulkList);
    } catch(error) {
        console.log(error)
    };
};

export const beamRandomAnagram = () => {
    const randomAnagram = anagram.aggregate([{ $sample: { size: 1 } }]);
    return randomAnagram;
};

export const getRandomAnagram = async (RequiredNumberOfDocuments) => {
    const result = await anagram.aggregate([{ $sample: { size: RequiredNumberOfDocuments } }]);
    return result;
};