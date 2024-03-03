import './App.css';

import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import pic from "./data/1705599704141.jpg"

import ButtonCharm from "./components/ButtonCharms/ButtonCharm"

function App() {
  return (
    <div className="App">
      <div className='about-me-row'>
        <img className='profile-pic' src={pic} alt="Girl Working Hard" width="150" height="150"/>
        <ButtonCharm icon={<LinkedinOutlined />} link="https://www.linkedin.com/in/paula-reagan-565816197/" />
        <ButtonCharm icon={<MailOutlined />} link="mailto:reagan.paula10@gmail.com"  />
        <ButtonCharm icon={<GithubOutlined />} link="https://github.com/Cakiez" />
      </div>
      {/* ProfilePicture ButtonCharms */}
      <div className='content-row'>Content</div>
      {/* NameSection DrowpDown */}
    </div>
  );
}

export default App;
