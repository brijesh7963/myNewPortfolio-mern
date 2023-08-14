import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import brijeshImage from '../../assets/docs/brijesh.jpeg';
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={brijeshImage}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I have completed Btech from NIT Kurukshetra in 2023,
              I have completed C++ with Data Structure and Algorithm certified
              from Coding Ninja. I have also knowledge of full stack web
              development , MERN development and I have learnt C, C++ , Java, Python, HTML,CSS,Javascript. I am hardworking ,fast Learner and
              dedicated person.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
