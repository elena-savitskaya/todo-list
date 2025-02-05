import { motion } from "framer-motion";
import React, { useRef } from "react";

type TodoFormProps = {
  onAdd(title: string): void;
};

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
      onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="container">
      <motion.div
        className="input-field mt2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          ref={ref}
          type="text"
          id="title"
          placeholder="Enter a name for the task"
          onKeyPress={keyPressHandler}
        />
        <label htmlFor="title" className="active">
          Enter a name for the task
        </label>
      </motion.div>
    </div>
  );
};
