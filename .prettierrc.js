'use strict';

module.exports = {
  printWidth: 120,
  overrides: [
    {
      files: '*.hbs',
      options: {
        parser: 'glimmer',
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.[jt]s',
      options: {
        printWidth: 80,
        singleQuote: true,
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
};
