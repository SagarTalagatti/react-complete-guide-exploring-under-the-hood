import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMO_OUTPUT");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

//React memo is used to tell React to re-evaluate the component only if the value of received props changed, and it works only on functional components, for class based components, there is another approach.

//However, it comes at a performance cost because React must store previous props values so that it can compare it with current props. Hence, we should consider whether the trade-off of comparing props vs re-evaluating component is worth it or not.
export default React.memo(DemoOutput);
