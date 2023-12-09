import React from "react";

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  className?: string;
  placeholder?: string;
}

const TextArea: React.FC<Props> = ({ className, placeholder, ...props }) => {
  return (
    <textarea
      {...props}
      className={`max-w-full dark:text-white text-black border-gray-700 rounded w-full dark:placeholder-gray-400 focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none border bg-white dark:bg-darkTheme ${className}`}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
