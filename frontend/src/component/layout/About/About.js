import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import { ImLinkedin } from "react-icons/im";
import { SiGithub } from "react-icons/si";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/novaabhi1729";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dektrfsju/image/upload/v1688909845/MySelf/6_3_2023_5_08_35_PM_cnqpjg.png"
              alt="Founder"
            />
            <Typography>Abhishek Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              The MERN-based eCommerce project is a comprehensive web
              application that demonstrates my understanding of the MERN stack
              (MongoDB, Express.js, React.js, Node.js) in building scalable
              e-commerce platforms.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=abhishek-kumar-ld"
              target="blank"
            >
              <ImLinkedin style={{ color: "#0072b1" }} />
            </a>

            <a href="https://github.com/abhishekkumar11724" target="blank">
              <SiGithub style={{ color: "black" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
