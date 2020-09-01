import React, { FunctionComponent, useState } from "react";
import { Modal } from "../components/atoms/Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 10,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 11,
  backgroundColor: "red",
  padding: "10px",
};

const Test: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          モーダル
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}> OtherContent </div>
    </>
  );
};

export default Test;
