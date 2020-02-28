module.exports = {
  singleQuote: false,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.js', '*.ts'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['*.hbs'],
      options: {
        printWidth: 120,
      },
    },
  ],
};
