import React from 'react';
import { Link } from 'react-router-dom'; // In case you need navigation
import './PlayerEntryPage.css'; // Import the CSS file for styling
import personImage from './player.png';
 // Make sure to update this path

const PlayerEntryPage = () => {
  return (
    <div className="player-entry-page">
      {/* Left section with background and logo */}
      <div className="left-section">
        <div className="logo"></div> {/* This div will now contain the logo */}
      </div>

      {/* Right section with form */}
      <div className="right-section">
        <img src={personImage} alt="Person" className="person-image" />
        <input type="text" placeholder="USER NAME" className="input-field" />
        <input type="text" placeholder="GAME PIN" className="input-field" />
        <Link to="/quiz-page">
          <button className="start-button">START</button>
        </Link>
      </div>
    </div>
  );
};

export default PlayerEntryPage;
