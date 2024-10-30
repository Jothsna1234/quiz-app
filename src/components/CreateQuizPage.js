// import React, { useState } from 'react';

// const CreateQuizPage = () => {
//     const [question, setQuestion] = useState('');
//     const [options, setOptions] = useState(['', '', '', '']);

//     const handleOptionChange = (index, value) => {
//         const newOptions = [...options];
//         newOptions[index] = value;
//         setOptions(newOptions);
//     };

//     return (
//         <div style={styles.container}>
//             <h2>Create Quiz</h2>
//             <input
//                 type="text"
//                 placeholder="Type your Question"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 style={styles.input}
//             />
//             {options.map((option, index) => (
//                 <input
//                     key={index}
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                     style={styles.input}
//                 />
//             ))}
//             <button style={styles.button}>SAVE</button>
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
//     input: {
//         margin: '10px',
//         padding: '10px',
//         width: '300px'
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

// export default CreateQuizPage;
// CreateQuiz.js
import React from "react";
import "./CreateQuizPage.css"; // Import the CSS

const CreateQuizPage = () => {
  return (
    <div className="quiz-grid-container">
      {/* Left section */}
      <div className="quiz-left-section">
        <div className="logo"></div> {/* Logo */}

        <button>Add Question</button>
        <button>Correct Option</button>
        <button>Attach Picture</button>
        <button>Allocate Point</button>
        <button>Timer</button>

        <button className="save-button">Save</button> {/* Save Button */}
      </div>

      {/* Right section */}
      <div className="quiz-right-section">
        <div className="exit-button">Exit</div> {/* Exit Button */}
        
        <div className="question-label">Type your Question</div>

        <div className="options-container">
          <input type="text" placeholder="Option 1" />
          <input type="text" placeholder="Option 2" />
          <input type="text" placeholder="Option 3" />
          <input type="text" placeholder="Option 4" />
        </div>

        <div className="navigation-buttons">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuizPage;
