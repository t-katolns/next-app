import { DecisionModal } from "components/molecules/Modal/DecisionModal";
import React, { FunctionComponent } from "react";

export const Test: FunctionComponent = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
      <DecisionModal url={"images/test.jpg"} name={"太郎"}></DecisionModal>
    </>
  );
};

export default Test;
