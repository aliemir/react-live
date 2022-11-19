import React, { useContext } from "react";
import LiveContext from "./LiveContext";

export default function LiveError({ Context = LiveContext, ...props }) {
  const { error } = useContext(Context);
  return error ? <pre {...props}>{error}</pre> : null;
}
