import { AnimatePresence, motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { Portal } from "./Portal";
type Props = {
  text: string;
};
export const SnackBar: FunctionComponent<Props> = ({ text }) => {
  return (
    <>
      <Portal>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 30, y: 1000 }}
            animate={{ opacity: 1, x: 30, y: 950 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-8 px-16 width-400 height-50 flex align-items-center background-fourth color-white radius-8 box-size inline-block border-box">
              <p>{text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </Portal>
    </>
  );
};
