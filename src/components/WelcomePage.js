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


















import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; 

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <div className="left-section">
                <div className="logo"></div> 
                <h1>WELCOME TASK MASTER!</h1>
            </div>
            <div className="right-section">
                <Link to="/login"><button className="auth-button">LOG IN</button></Link>
                <Link to="/signup"><button className="auth-button">SIGN UP</button></Link>
            </div>
        </div>
    );
}

export default WelcomePage;
