import React from "react";
import Portal from "./Portal";

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "trancelate(50%, 50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "blue",
  zIndex: 1000,
};

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      <Portal>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLE}>
          <button onClick={onClose}>Close Modal</button>
          {children}
        </div>
      </Portal>
    </>
  );
};
