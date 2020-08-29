import * as anagramService from '../modules/anagram/anagramService';

export const addRackToAnagramBank = (socket) => {
    socket.on('rack', (rack) => {
        anagramService.addToAnagramBank(rack);
      })
};