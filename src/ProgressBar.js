import React, { useEffect } from "react";
import UseStorage from "./UseStorage";
import "./ProgressBar.css";
import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
  const { url, progress } = UseStorage(file);
  console.log("this is url&progress:", url, progress);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progressBar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
