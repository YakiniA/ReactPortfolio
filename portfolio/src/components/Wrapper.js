import React from "react";

function Wrapper(props) {
  console.log(props);
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
