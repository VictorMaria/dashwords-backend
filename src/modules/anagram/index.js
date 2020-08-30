import express from 'express';
import * as anagramController from './anagramController';
import * as validate from '../../validations/queryString';

const Router = express.Router();

Router.get(
  '/anagrams/random',
  validate.numberInQueryString,
  anagramController.getRandomAnagram,
);

export default Router;