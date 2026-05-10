import React from "react";
import List from "./List";

const UL = () => {
  const skills = ["Javascript", "React", "Angular", "Vue"];

  return (
    <ul>
      {skills.map((element, index) => (
        <List key={index} name={element} />     //! key here is a special attribute used by React when we try to console this it's value we get undefined


      ))}
    </ul>
  );
};

export default UL;
