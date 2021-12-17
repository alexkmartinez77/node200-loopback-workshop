'use strict';

module.exports = {
  'db': {
    'name': 'db',
    'connector': 'memory',
  },
  'MongoDB': {
    'name': 'MongoDB',
    'connector': 'mongodb',
    'url': process.env.MONGODB_URI,
  },
};