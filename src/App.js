// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import WelcomePage from './components/WelcomePage';
// import LoginPage from './components/LoginPage';
// import SignUpPage from './components/SignUpPage';
// import HomePage from './components/HomePage';
// import CreateQuizPage from './components/CreateQuizPage';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<WelcomePage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/signup" element={<SignUpPage />} />
//                 <Route path="/home" element={<HomePage />} />
//                 <Route path="/create-quiz" element={<CreateQuizPage />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import CreateQuizPage from './components/CreateQuizPage';
import PlayerEntryPage from './components/PlayerEntryPage';

import './App.css';
// import logo from './logo.png'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/player-entry" element={<PlayerEntryPage />} />
                <Route path="/create-quiz" element={<CreateQuizPage />} />
            </Routes>
        </Router>
    );
}

export default App;
