# dashwords-backend

DASHWORDS is a word puzzle that revolves around the beauty of anagrams.

1. In the [Classic Sprint](https://dashwords.herokuapp.com/classic-sprint) mode of the game, you are allowed to supply your own word and its anagrams to form a rack.
2. In the [Ninja](https://dashwords.herokuapp.com/ninja) mode, words capable of having valid English words as anagrams are thrown at you, so you can supply the anagram(s).
3. Multiplayer mode coming soon.

This repository is a home to the DASHWORDS engine that beams random words to the players in the Ninja mode and also gather valid anagrams from players for the purpose of constantly updating DASHWORDS anagram dictionary with anagrams it lacks.
The DASHWORDS engine is powered by Node.js, Express, MongoDB and socket.io
