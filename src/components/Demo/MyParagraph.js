import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph_OUTPUT");
  return <p>{props.children}</p>;
};

export default MyParagraph;
