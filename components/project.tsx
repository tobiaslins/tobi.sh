import React from "react";
import { motion, MotionStyle } from "framer-motion";

export const Project: React.FC<{
  name: string;
  logo: JSX.Element;
  color: string;
  description: string;
  style: MotionStyle;
  url: string;
}> = ({ name, url, logo, color, description, style }) => {
  return (
    <motion.a
      href={url}
      data-splitbee-event={`Click Project ${name}`}
      target="_blank"
      variants={{
        hidden: { filter: "grayscale(80%)" },
        visible: {
          transition: { duration: 0.4, easings: "circOut" },
          opacity: 1,
          filter: "grayscale(0%)",
          scale: 1
        }
      }}
      className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
    >
      <div
        className="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
        style={{ backgroundColor: color }}
      >
        {logo}
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <img
            className="text-red-200 ml-auto opacity-0 transform duration-200 group-hover:opacity-100 h-3"
            src="./arrow-right.svg"
          />
        </div>

        <div className="mt-3 text-sm text-gray-700">{description}</div>
        <div className="mt-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
            React
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
            GraphQL
          </span>
        </div>
      </div>
    </motion.a>
  );
};
