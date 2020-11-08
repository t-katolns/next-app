import ReactDOM from "react-dom";

export const Portal = ({ children }) => {
  if (process.browser) {
    const element = document.querySelector("#__next");
    return element ? ReactDOM.createPortal(children, element) : null;
  } else return null;
};
