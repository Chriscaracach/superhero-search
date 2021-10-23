import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

const AvgWeightHeight = () => {
  const weight = useSelector((state) => state.heroReducer.pesoPromedio);
  const height = useSelector((state) => state.heroReducer.alturaPromedio);

  return (
    <div className="card p-4">
      <div className="my-1">
        <p className="d-inline">Avg. weight</p>
        <div className="float-end">
          <CountUp start={0} end={weight} duration={1} />
        </div>
      </div>
      <div className="my-1">
        <p className="d-inline">Avg. height</p>
        <div className="float-end">
          <CountUp start={0} end={height} duration={1} />
        </div>
      </div>
    </div>
  );
};

export default AvgWeightHeight;
