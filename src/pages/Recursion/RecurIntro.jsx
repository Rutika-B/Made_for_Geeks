import React from "react";
import Intro from "../../components/Intro";
import { Typography } from "@material-tailwind/react";
import recurFun from "../../assets/recursion.png";
const comp = [
  {
    title: "Base case:",
    desc: "Every recursive function must have a base case. The base case is the simplest scenario that does not require further recursion. This is a termination condition that prevents the function from calling itself indefinitely. Without a proper base case, a recursive function can lead to infinite recursion.",
  },
  {
    title: "recursive case:",
    desc: "In the recursive case, the function calls itself with the modified arguments. This is the essence of recursion – solving a larger problem by breaking it down into smaller instances of the same problem. The recursive case should move closer to the base case with each iteration.",
  },
];
function RecurIntro() {
  return (
    <Intro>
      <Typography variant="h5">
        A Recursive function can be defined as a routine that calls itself
        directly or indirectly.
      </Typography>
      <div className="flex flex-col justify-center items-center">
        <img src={recurFun} alt="recursion-fun" className="w-2/3" />
        {comp.map((item, index) => (
          <div key={index}>
            <Typography variant="h5">
              <Typography variant="h4" className="text-cyan-600">{item.title}</Typography>
              {item.desc}
            </Typography>
          </div>
        ))}
      </div>
    </Intro>
  );
}

export default RecurIntro;
