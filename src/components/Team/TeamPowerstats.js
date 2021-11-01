import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { POWERSTATS_NAMES } from "../../constants/constants";

const TeamPowerstats = () => {
  const powerStats = useSelector((state) => state.heroReducer.powerStats);

  const powerstatsValues = Object.values(powerStats);
  const powerstatsNewFormat = [];
  for (let i = 0; i < POWERSTATS_NAMES.length; i++) {
    let stat = {
      name: POWERSTATS_NAMES[i],
      power: powerstatsValues[i],
    };
    powerstatsNewFormat.push(stat);
  }
  powerstatsNewFormat.sort(function (a, b) {
    return a.power > b.power ? -1 : a.power < b.power ? 1 : 0;
  });
  const map = powerstatsNewFormat.map((item, i) => (
    <div key={i} className="my-1 team-powerstats-highlight">
      <p className="d-inline">{item.name}</p>
      <div className="float-end">
        <CountUp start={0} end={item.power} duration={1} />
      </div>
    </div>
  ));

  return (
    <>
      <div className="card p-4 col" id="team-powerstats">
        {map}
      </div>
    </>
  );
};

export default TeamPowerstats;
