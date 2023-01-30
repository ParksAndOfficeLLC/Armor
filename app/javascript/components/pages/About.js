import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import AndrePic from "../assets/AndrePic.png";
import MikePic from "../assets/MikePic.jpg";
import CesarPic from "../assets/CesarPic.png";

const About = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <CardImg alt="Mike's image" src={MikePic} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Product Manager</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Mike SC
            </CardSubtitle>
            <CardText>
              Hello, my name is Mike Santacruz. I have gained my experience from
              Learn Academy, a software development bootcamp school. There I was
              taught to become a Full Stack web developer utilizing Javascript,
              Ruby, HTML, and CSS withing the Ruby on Rails and React
              Frameworks. I am very excited to create, debug, and maintain
              software and or cloud-based servers, however AR is my late night
              programming passion. After a 27 year career in US Naval Aviation
              Maintenance, I enthusiastically moved into software development.
              Interlacing my analytical and technical skills, with new creative
              design and development abilities. I can be reached on LINKEDIN at
              www.linkedin.com/in/mike-santacruz, GITHUB where my Portfolio is
              currently available, https://mikesc27.github.io , or my email
              mcruzen89@gmail.com
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Catfish kool aides" src={AndrePic} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Design Lead</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Andre G
            </CardSubtitle>
            <CardText>
              Experienced Software Developer adept in bringing forth expertise
              in design, installation, testing and maintenance of software
              systems. Equipped with a diverse and promising skill-set.
              Proficient in various platforms, languages, and embedded systems.
              Experienced with the latest cutting edge development tools and
              procedures. Able to effectively self-manage during independent
              projects, as well as collaborate as part of a productive team.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={CesarPic} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Tech Lead</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Cesar C
            </CardSubtitle>
            <CardText>
              Full stack web developer with strong analytical and communication
              skills. Dedicated to discovering, developing, and implementing
              creative solutions to complex web application challenges.
              Extensive experience in troubleshooting steps from current role as
              a ground radio maintainer in the Marine Corps Reserves.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default About;
