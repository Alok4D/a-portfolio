import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock/CodeBlock";
import Facts from "../../ui/Facts/Facts";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import BreathCircle from "../../ui/BreathCircle"

const code = `
const developer = {
    firstName: "Alok",
    lastName: "Roy"
    aka: "DJ",
    hobby: repeat = () => {
        //coder()
        //developer()
        //code()
        //repeat();
        }
    }
`
const Header = () => {
  return (
    <header id="header">
        <BreathCircle/>
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className="profile__photo" id="banner-photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock
            language={"javascript"}
            code={code}
          />
          <div>
            <p className="text__muted description">
            I dissect intricate user experience challenges to engineer integrity-focused solutions that resonate with billions of users.
            </p>
            <Facts></Facts>
            <SocialHandles></SocialHandles>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
