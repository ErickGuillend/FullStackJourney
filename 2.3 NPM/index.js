import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const superheroes = require('superheroes');

console.log(superheroes); 