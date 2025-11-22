import { useState } from "react";
import { Button, Counter } from "./Counter";
import { NameAndHeading } from "./NameAndHeading";
import { NavLink } from "react-router";

export const Practice = () => {
  return (
    <div>

      <NameAndHeading/>
      <Counter />
      <NavLink to="/about"><Button>Go to About Page</Button></NavLink>
    </div>
  );
};

export function multiplyBy2(n: number) {
  return n * 2;
}