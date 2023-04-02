import Image from "next/image";
import { useState } from "react";

const WhoWeAre = () => (


  <>
    <section className="hero team-hero">
      <div className="pl-container">
        <div className="hero-text">
          <h1 className="big-2 w-900 text-[#22b14c]">Meet the Dream Team</h1>
          <p className=" lead-1 text-[#fff]">As travelers ourselves and developers, we are dedicated to delivering the next generation of travel search and discovery, fueled by our passion for innovation.</p>
        </div>
      </div>
    </section>
  
    <div className="who-we-are-section">
      <div className="pl-container">
        <h2 className="big-2 ">Team</h2>
        <div className="teams-wrap">
                <div className="team-box">
                  <div className="team-img">
                    <Image src="/images/dragos.webp" alt="Profile" width={300} height={300} />
                  </div>
                  <div className="team-text">
                    <h4>DRAGOS OVIDIU OLTEANU</h4>
                    <h5>Co-Founder, CEO</h5>
                  </div>
                  <div className="hide-text">
                    <p className="lead-2">Dragos finished his MSc degree in Sustainable Energy Engineering with a focus on AI and offshore robotics from Aalborg University Denmark and TU Delft Netherland.
                    Founder and CEO of E-commerce companies, involved in the development of several product design projects. Speaker at E-commerce & Blockchain Conference in Miami, invited by the Romanian American Chamber of Commerce.
                    More than 7 years of experience in project management, GMT strategies, and more than 5 years of B2B & B2C expertise.
                    4 Years of part-time cryptocurrency investor, blockchain, and NFT expertise.
                    </p>
                  </div>
                </div>
                <div className="team-box">
                  <div className="team-img">
                    <Image src="/images/team/radu.jpg" alt="radu" width={300} height={300} />
                  </div>
                  <div className="team-text">
                    <h4>RADU MARICA</h4>
                    <h5>TECHNICAL LEAD</h5>
                  </div>
                  <div className="hide-text">
                    <p className="lead-2">Radu finished his bachelor's in Electronics and Computer Engineering, at Aalborg University Denmark.
                    More than 4 years of experience working and a Back-end Developer for multiple projects, becoming an expert in Python, ReactJS, Node.js, Robotics, Cryptography in Kali Linux, Applied Machine Learning, Blockchain Technology.
                    </p>
                  </div>
                </div>
                <div className="team-box">
                  <div className="team-img">
                    <Image src="/images/team/Riz.png" alt="riz" width={300} height={300} />
                  </div>
                  <div className="team-text">
                    <h4>RIZ</h4>
                    <h5>Full - Stack Developer</h5>
                  </div>
                </div>
                <div className="team-box">
                  <div className="team-img">
                    <Image src="/images/team/Jack.png" alt="Jack" width={300} height={300} />
                  </div>
                  <div className="team-text">
                    <h4>Jack</h4>
                    <h5>Full - Stack Developer</h5>
                  </div>
                </div>
        </div>
        <h2 className="big-2 ">Legal Advisor</h2>
        <div className="teams-wrap">
          <div className="team-box">
            <div className="team-img">
              <Image src="/images/team/daniel.png" alt="daniel" width={300} height={300} />
            </div>
            <div className="team-text">
              <h4>RADU MARICA</h4>
              <h5>Co-Founder, CEO</h5>
              <a href="https://www.ecija.com" target="_blank" rel="noreferrer">https://www.ecija.com</a>
            </div>
            <div className="hide-text lead-2">
                <p> Dragos finished his MSc degree in Sustainable Energy Engineering with a focus on sustainable energy building from Aalborg University Denmark and TU Delft Netherland.
                Founder and CEO of E-commerce companies, involved in the development of several product design projects.
                Speaker at E-commerce Conference in Miami, invited by the Romanian American Chamber of Commerce.</p>
                <p>More than 7 years experience in project management and more than 5 years of entrepreneurial expertise, including several projects of building Sustainable Energy Buildings.2 Years of part-time Cryptocurrency trading experience and NFT expertise.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WhoWeAre;






        

