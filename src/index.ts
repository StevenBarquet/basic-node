import { envsData } from 'src/entities/health/config/envsData';

const debugDev = require('debug')('app:dev');
const debugProd = require('debug')('app:prod');

debugProd('El mawas es hetero');
debugDev('El mawas me la pela x2\n', envsData);
