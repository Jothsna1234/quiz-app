import React from 'react';

const SignUpPage = () => {
    return (
        <div style={styles.container}>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Create Password" style={styles.input} />
            <input type="password" placeholder="Confirm Password" style={styles.input} />
            <button style={styles.button}>SIGN UP</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f7'
    },
    input: {
        margin: '10px',
        padding: '10px',
        width: '200px'
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    }
};

export default SignUpPage;
