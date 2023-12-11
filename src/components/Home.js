import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home__container">
      <h1>Tajweed Quiz</h1>
      <div>
      <h2>Section One:</h2>
        <h4>Noon Saakinah Rules</h4>
        <div>
            <Link to="/quiz">
                <button className="buttons">Idhaar</button>
            </Link>
      <Link to="/idghaam">
         <button className="buttons">Idghaam</button>
      </Link>
      
      <Link to ="/iqlaab">
         <button className="buttons">Iqlaab</button>
      </Link>
       
       <Link to ="/ikhfah">
              <button className="buttons">Ikhfah</button>
       </Link>
   
        </div>
      </div>
    </div>
  );
};

export default Home;
