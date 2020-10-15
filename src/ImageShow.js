import React from "react";
import "./ImageShow.css";
import UseFirestore from "./UseFirestore";
import { motion } from "framer-motion";

function ImageShow({ setSelectedImg }) {
  const { docs } = UseFirestore("images");
  console.log("this is docs:", docs);
  return (
    <div className="imageShow">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="imgWrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
export default ImageShow;
