import "./Header.css";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock/CodeBlock";
import Facts from "../../ui/Facts/Facts";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
import ReactTypingEffect from "react-typing-effect";

const code = `
const developer = {
  name: "Alok Roy",
  skills: ["React", "NodeJs", "Tailwind", "Express", "MongoDB"],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  },
};`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column banner-title">
            <h5
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Hi, I am
            </h5>
            <h5 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Alok Roy
            </h5>
            <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight">
              <span className="text-white">I am a</span>
              <ReactTypingEffect
                id="banner-span"
                text={[
                  "Junior Web Developer",
                  "Front-End Developer",
                  "React JS Developer",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              ></ReactTypingEffect>
            </h5>
            <p
              id="banner-paragraph"
              className=" text-base sm:text-lg md:text-lg text-gray-400"
            >
              I am a full-stack developer with over 2 years of experience in
              building scalable web applications. Skilled in both front-end and
              back-end development, I specialize in the MERN stack and other
              modern technologies to create seamless user experiences and
              efficient solutions.
            </p>
            <div>
              <a
                className="inline-block text-white rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
                href="/src/assets/Alok-Resume-WD_2.pdf"
                download
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "12px",
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow:
                    "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec",
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          <div className="column">
            <img
              src={profile1}
              className="profile__photo"
              id="banner-photo"
              alt=""
            />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              I dissect intricate user experience challenges to engineer
              integrity-focused solutions that resonate with billions of users.
            </p>
            <Facts></Facts>
            <div className="text-center">
              <small id="codeSocial">
                Get connected with me through my social and GitHub profiles!
              </small>
            </div>
            <SocialHandles></SocialHandles>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



