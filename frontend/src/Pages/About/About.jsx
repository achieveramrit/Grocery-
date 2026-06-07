import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{
                  width: "20rem",
                  height: "20rem",
                  margin: "2rem 0",
                  borderRadius: "100%",
                }}
                src="https://media.licdn.com/dms/image/v2/D5603AQGbeRJ8DA3BBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676695469014?e=1745452800&v=beta&t=MkkV5cX7nKh3ARf2-Ca9cSTIyKDFT4JlIrLKzBKOr58"
                alt="Founder"
              />
              <h1>Amrit Singh</h1>
              <button
                onClick={() =>
                  window.open("https://www.linkedin.com/in/amrit-singh-606150311/", "_blank")
                }
              >
                Linkedin
              </button>
              <br />
              <p>
                This is project website made by Amrit Singh.
                <br />
                Only with the purpose to Learn and practice MERN Stack
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
