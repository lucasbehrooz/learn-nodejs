import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.node,
        },
        plugins: {
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules,
            "prettier/prettier": "error",
            "no-unused-vars": "warn",
            "no-console": ["error", { allow: ["warn", "error"] }],
        },
    },
];
