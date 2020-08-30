
import anagramRouter from './anagram';

const apiPrefix = '/api/v1';

const routes = [anagramRouter];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};