import { useState } from "react";
import { multiplyBy2 } from "./Practice";

export const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="p-4">
      <p className="text-3xl font-bold">Count: {count}</p>
      <p className="text-3xl font-bold">Double Count: {multiplyBy2(count)}</p>
      <div className="h-5"></div>
      <div className="flex gap-3">
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Subtract
        </Button>
      </div>
    </div>
  );
};

export const Button = ({ children, onClick }: any) => {
  return (
    <button
      className="border rounded-2xl  px-5 py-3 cursor-pointer hover:bg-red-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
