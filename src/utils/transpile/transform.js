import { transform as _transform } from "sucrase";

/** @type {import('sucrase').Options} */
const opts = {
  transforms: ["typescript", "jsx", "imports"],
  jsxRuntime: "automatic",
  production: true,
};

export default (code) => _transform(code, opts).code;
