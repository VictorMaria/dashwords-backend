import * as anagramService from '../modules/anagram/anagramService';

export const addRackToAnagramBank = (socket) => {
    socket.on('rack', (rack) => {
        anagramService.addToAnagramBank(rack);
      })
};

export const beamRandomAnagram = (socket) => {
    socket.on('randomAnagramRequest', async() => {
        const result = await anagramService.beamRandomAnagram();
        socket.emit('randomAnagramResponse', result);
    });
};