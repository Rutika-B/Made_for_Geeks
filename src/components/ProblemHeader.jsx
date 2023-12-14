import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Typography } from "@material-tailwind/react";
import React from "react";
import problems from "../ListofProblems/Problems";

function ProblemHeader({ ...props }) {
  const topic = props.topic;
  const problem = props.problem;

  const data = problems[`${topic}`][`${problem}`];

  return (
    <div className="flex flex-col w-full border-opacity-50 mx-7 my-4">
      <div className="grid h-15 card  rounded-none place-items-start py-4 mb-2">
        <Typography variant="h2">{data.title}</Typography>
      </div>
      <div className="grid h-50 card  rounded-none place-items-start">
        <Typography variant="h5" className="py-2">
          {data.statement.brief}
        </Typography>
        {data.statement.points.map((item, index) => (
          <li key={index} className="flex flex-wrap my-1">
            <Typography variant="h5" className="">
            <ArrowForwardIcon />
              {item}
            </Typography>
          </li>
        ))}
        <div className="grid h-30 bg-base-300 card rounded-box place-items-start mx-2 my-2">
          <Typography variant="h5" className="py-4 px-3 pr-4">
            Examples:<br></br>
            Input:{data.examples.input}
            <br></br> Output : {data.examples.output}
          </Typography>
        </div>
        <div className="py-4">
          <Typography variant="h4" className="py-2">
            Approach:
          </Typography>
          <div className="px-5">
            {data.approach.map((item, index) => (
              <ul key={index}>
                <li>
                  <Typography variant="h5">
                    {item}
                  </Typography>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div>no</div>
  );
}

export default ProblemHeader;
