/*  Dilip Mahadik, Abhinav - 1002077234
    Misba, Asfiya - 1002028239
    Rajesh Neelam, Haswanth  - 1002063344
    Ponugupati, Maruthi Murali Krishna - 1002069076
    Vyas, Shalini - 1002087896 */
import React from 'react';
import { Link } from 'react-router-dom'; 


function Homepage() {
  return (
    <div className="App">
      <header>
        <h1>Course Compass</h1>
      </header>
      <main>
        <div className="homepagecontent">
          <p>
            Welcome to the MSC in Computer Science program,
            where innovation meets excellence. Explore the world
            of cutting-edge technology and prepare for a
            rewarding career in the digital age.
            <br /><br />
            Our academic program aims to nurture knowledge
            acquisition, critical thinking, research, and ethical
            values among students. Performance measurement
            and assessment play a crucial role in enhancing
            accountability, customizing learning, ensuring quality,
            and preparing graduates for successful careers in a
            globally interconnected world
          </p>
          <div className="image-and-button">
            <button className="homepageButton">
              <Link to="/login" className="footer_anchor">JOIN NOW!</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;



