import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  if (process.browser) {
    const element = document.querySelector("#__next");
    return element ? ReactDOM.createPortal(children, element) : null;
  }
};

export default Portal;
