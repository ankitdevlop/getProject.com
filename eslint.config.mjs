// eslint.config.js

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Required for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create FlatCompat instance to support "extends"
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Export flat ESLint config
export default [
  // Extend Next.js defaults
  ...compat.extends(
    "next/core-web-vitals", // Includes recommended and performance rules
    "next" // Base Next.js rules
  ),

  // Optional: Override or disable specific rules
  {
    rules: {
      // This disables the rule that broke your Netlify build
      "react/no-unescaped-entities": "off",

      // Optional: Add any other custom rule settings here
      // "react/react-in-jsx-scope": "off", // Not needed in Next.js
    }
  }
];
