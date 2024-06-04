import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../About.css';   
import { 
    AboutStyle, 
  } from "../component/StyledAbout";
import Hotel from  '../img/hotel.jpg'; 

const About = () => {
  const readMore = () => {
    alert("Redirecting to the detailed page...");
    // Replace the alert with actual navigation if needed.
    // window.location.href = "link_to_detailed_page.html";
  };

  return (
    <>
        <AboutStyle>About</AboutStyle>
      
        <div className="container about-section">
          <div className="about-text">
            <p>
              The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
            </p>
            <button className="read-more" onClick={readMore}>Read More</button>
          </div>
          <div className="about-image">
            <img src={Hotel} alt="View Hotel" />
          </div>
        </div>

    </>
  );
};

export default About;
