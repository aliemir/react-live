import { transform as _transform } from "sucrase";

/** @type {import('sucrase').Options} */
const opts = {
  transforms: ["typescript", "jsx", "imports"],
};

export default (code, options = {}) =>
  _transform(code, { ...opts, ...options }).code;
