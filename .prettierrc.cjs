module.exports = {
  plugins: ["./node_modules/prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  bracketSpacing: true,
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
}
