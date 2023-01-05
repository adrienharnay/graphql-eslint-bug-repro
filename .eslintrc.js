module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.gql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      extends: ["plugin:@graphql-eslint/operations-recommended"],
      rules: {
        /**
         ** graphql-eslint
         ** https://github.com/B2o5T/graphql-eslint/blob/master/docs/README.md#available-rules
         **/
        "@graphql-eslint/lone-executable-definition": "error",
        "@graphql-eslint/match-document-filename": [
          "error",
          {
            fileExtension: ".gql",
            fragment: "matchDocumentStyle",
            query: "matchDocumentStyle",
            mutation: "matchDocumentStyle",
          },
        ],
        "@graphql-eslint/naming-convention": "off",
        "@graphql-eslint/unique-fragment-name": "error",
        "@graphql-eslint/unique-operation-name": "error",
      },
    },
  ],
};
