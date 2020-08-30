import * as anagramService from '../modules/anagram/anagramService';

export const addRackToAnagramBank = (socket) => {
    socket.on('rack', (rack) => {
        anagramService.addToAnagramBank(rack);
      })
};

export const beamRandomAnagram = async (socket) => {
    socket.on('randomAnagramRequest', () => {
        const result = await anagramService.beamRandomAnagram();
        socket.emit('randomAnagramResponse', result);
    });
};