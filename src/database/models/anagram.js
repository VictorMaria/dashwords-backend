import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const anagramSchema = new Schema({
    word: {
      type: String,
    },
    }, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});

const anagram = model('anagram', anagramSchema);

export default anagram;