const path = require('path');

module.exports = {
  // other webpack configurations...

  resolve: {
    fallback: {
      path: false,
      stream: false,
      crypto: false,
    },
  },
  
};
