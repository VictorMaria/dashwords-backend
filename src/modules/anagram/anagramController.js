import * as anagramService from './anagramService';

export const getRandomAnagram = async (req, res) => {
    const numberOfRequiredWords = !req.query.size || req.query.size <= 0 ? parseInt(1, 10) : parseInt(req.query.size, 10);
    try {
        const wordRack = await anagramService.getRandomAnagram(numberOfRequiredWords);
        const singularOrPlural = wordRack.length > 1 ? 'potential anagrams' : 'potential anagram';
        return res.status(200).json({
            message: `${wordRack.length} ${singularOrPlural} returned out of ${numberOfRequiredWords} requested`,
            wordRack,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Oops, DASHWORDS experienced a slight shock, please DASH again' });
    };
};