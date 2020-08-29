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