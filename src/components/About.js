import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {
  const display= props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
     { display ? <p>{props.bio}</p>: ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
