import React from "react";
import { motion } from "framer-motion";
import "../style/TimeLine.css";

// Sample data for the timeline
const timelineData = [
  { title: "Project A", date: "12/4/2024" },
  { title: "Project B", date: "01/15/2024" },
  { title: "Project C", date: "03/22/2024" },
  { title: "Project D", date: "02/2/2024" },
  { title: "Project E", date: "03/12/2024" },
];

const TimeLine = () => {
  return (
    <div id="timeLine">
      {timelineData.map((entry, index) => (
        <motion.div
          key={index}
          className="timelineBox"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div
            className={`${index % 2 == 0 ? "timeLineRight" : "timeLineLeft"}`}
          >
            <h2
              className={`${
                index % 2 == 0 ? "ml-4" : "mr-4"
              } text-2xl mt font-bold text-teal-600 mb-2`}
            >
              {entry.title}
            </h2>
            <span
              className={` ${index % 2 == 0 ? "ml-4" : "mr-4"} text-gray-500`}
            >
              {entry.date}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeLine;
