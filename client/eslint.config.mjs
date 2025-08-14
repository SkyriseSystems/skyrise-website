<<<<<<< HEAD
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
=======
version https://git-lfs.github.com/spec/v1
oid sha256:3de4ba23ff1f687685651cad622700613998de80daa30ac4d82c47776a04019d
size 393
>>>>>>> origin/main
