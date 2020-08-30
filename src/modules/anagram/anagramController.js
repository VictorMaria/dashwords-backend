import * as anagramService from './anagramService';

export const getRandomAnagram = async (req, res) => {
    const numberOfRequiredDocuments = !req.query.size || req.query.size <= 0 ? parseInt(1, 10) : parseInt(req.query.size, 10);
    try {
        const result = await anagramService.getRandomAnagram(numberOfRequiredDocuments);
        const singularOrPlural = result.length > 1 ? 'documents' : 'document';
        return res.status(200).json({
            message: `${result.length} ${singularOrPlural} returned out of ${numberOfRequiredDocuments} requested`,
            result,
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Oops, DASHWORDS experienced a slight shock, please DASH again' });
    };
};