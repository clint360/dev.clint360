import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import './Banner.css'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front End Developer.", "Full Stack Developer.", "UI Designer.", "Sound Designer.", "Mobile Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="leftbanner">
      <div className="flex flex-col gap-5 landingView">
        <h4 className=" text-lg font-normal">WELCOME TO MY DEV PORTFOLIO SITE</h4>
        <h1 className="text-6xl font-bold text-white bigtext" style={{fontSize: "3.2rem"}}>
          Hi, I'm <span className="text-designColor capitalize">Clint Animbom</span>
        </h1>
        <h2 style={{fontSize: "2rem"}}>
          a <span className='textbl'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a skilled software developer who believes in possibility. In the tech world, it's possible. I just need to figure out how to make it happen and make it happen.
        </p>
      </div>
      <br />
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner