import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Last = () => {
   
    const style = {
        textAlign: "center"
    }

    const links = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "25px",
        gap: '3px',
        padding: "0 50px",
        marginBottom: "40px"
    }

  return (
    <div style={style}>
        <div style={links}>
        <a href="https://github.com/clint360"> <div><FaGithub /></div></a>
        <a href="https://www.linkedin.com/in/chia-clint-animbom-657a5722b/"> <div><FaLinkedinIn /></div></a>
        <a href="https://twitter.com/clint360codes"><div><FaTwitter /></div></a>
        <a href="https://instagram.com/clintanimbom"> <div><FaInstagram /></div></a>
        </div>
        <div>
            Built with ❤️ on ReactJS by Clint Animbom
        </div>
    </div>
  );
}

export default Last