// import React from 'react';
// import { Link } from 'react-router-dom';

// const WelcomePage = () => {
//     return (
//         <div style={styles.container}>
//             <h1>WELCOME TASK MASTER!</h1>
//             <div>
//                 <Link to="/login"><button style={styles.button}>LOG IN</button></Link>
//                 <Link to="/signup"><button style={styles.button}>SIGN UP</button></Link>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         backgroundColor: '#f0f4f7'
//     },
//     button: {
//         margin: '10px',
//         padding: '10px 20px',
//         backgroundColor: '#007BFF',
//         color: 'white',
//         border: 'none',
//         cursor: 'pointer'
//     }
// };

// export default WelcomePage;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// const LoginPage = () => {
//     return (
//         <div className="login-grid-container">
//             {/* Left side: Blue background with the logo */}
//             <div className="login-left-section">
//                 <div className="logo">
//                     {/* Logo can be added here if needed */}
//                 </div>
//             </div>

//             {/* Right side: Boy image at the top and buttons below */}
//             <div className="login-right-section">
//                 <div className="boy-image"></div>
//                 <div className="button-container">
//                     <Link to="/enter-quiz">
//                         <button className="login-button">ENTER QUIZ</button>
//                     </Link>
//                     <Link to="/create-quiz">
//                         <button className="login-button">CREATE QUIZ</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure the correct import of CSS file
import boyImage from './boy2.png'; // Ensure the correct path for your image

const HomePage = () => {
  return (
    <div className="login-grid-container">
      {/* Left section for the logo */}
      <div className="login-left-section">
        <div className="logo"></div> {/* This div will now contain the logo */}
      </div>

      {/* Right section for the image and buttons */}
      <div className="login-right-section">
        {/* <div className="boy-image"></div> */}
        <img src={boyImage} alt="Boy" className="boy2-image" />
        
        {/* Buttons */}
        <div className="button-container">
          <Link to="/player-entry">
            <button className="login-button">ENTER QUIZ</button>
          </Link>
          
          <Link to="/create-quiz">
            <button className="login-button">CREATE QUIZ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
