import Hole from "../../ui/Hole";
import "./About.css";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color-primary">Alok Roy</span>
          </h1>
          <p className="text__muted description">
            I am a student and a Creative Front-End Web Developer pursing my
            bachelor's in Computer Science from Dinajpur Polytechnic Institute
            with a great passion for today's technology. I have extensive
            knowledge of Front End Web-Development and I am able to make both
            Dynamic and Responsive Websites in the given time. I have also done
            multiple projects which I have added on myGithub account where you
            can look over to my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
