import React, { useState, useRef } from "react";
import axios from "axios";
import '../fonts/quicksand.css';

const styles = {
  app: {
    fontFamily: 'Quicksand, sans-serif',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
    minHeight: "80vh",
    backgroundColor: "white",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "10px",
  },
  title: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "30px",
  },
  input: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxSizing: "border-box",
  },
  submit: {
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "15px",
    background: "#01d28e",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
  },
  submitHover: {
    background: "#cdcdcd",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  loginForm: {
    color: "white",
    justifyContent: "center",
    backgroundColor: "#89CBF0",
    borderRadius: "18px",
    padding: "3rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  listContainer: {
    display: "flex",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  newAccount: {
    marginTop: "60px",
    justifyContent: "center",
    textAlign: "center",
  },
  form: {
    maxWidth: "600px",
    width: "100%",
  },
};

function Register(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const occupationRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (isLoginForm) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          username,
          password,
        });

        if (response.status === 200) {
          setIsSubmitted(true);
          props.setUsername(username)
          setErrorMessages({});
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessages({ message: error.response.data.message });
        } else {
          setErrorMessages({ message: "Error occurred while logging in" });
        }
      }
    } else {
      const age = ageRef.current.value;
      const occupation = occupationRef.current.value;

      try {
        const response = await axios.post("http://localhost:5000/register", {
          username,
          password,
          age,
          occupation,
        });

        if (response.status === 201) {
          setIsSubmitted(true);
          props.setUsername(username)
          setErrorMessages({});
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessages({ message: error.response.data.message });
        } else {
          setErrorMessages({ message: "Error occurred while registering user" });
        }
      }
    }
  };

  const renderErrorMessage = () =>
  errorMessages.message && <div style={styles.error}>{errorMessages.message}</div>;

  const renderForm = (
  <div style={styles.form}>
  <form onSubmit={handleSubmit}>
  <div style={styles.inputContainer}>
  <label>Username </label>
  <input
           type="text"
           name="userError"
           ref={usernameRef}
           style={styles.input}
           required
         />
  </div>
  <div style={styles.inputContainer}>
  <label>Password </label>
  <input
           type="password"
           name="passError"
           ref={passwordRef}
           style={styles.input}
           required
         />
  </div>
  {!isLoginForm && (
  <>
  <div style={styles.inputContainer}>
  <label>Age </label>
  <input type="text" name="age" ref={ageRef} style={styles.input} required />
  </div>
  <div style={styles.inputContainer}>
  <label>Occupation </label>
  <input
               type="text"
               name="occupation"
               ref={occupationRef}
               style={styles.input}
               required
             />
  </div>
  </>
  )}
  <div style={styles.buttonContainer}>
  <input type="submit" style={styles.submit} />
  </div>
  </form>
  <div
  style={styles.newAccount}
  onClick={() => {
  setIsLoginForm(!isLoginForm);
  setIsSubmitted(false);
  }}
  >
  {isLoginForm ? "Create new account" : "Already have an account? Sign In"}
  </div>
  </div>
  );

  return (
  <div style={styles.app}>
  <div style={styles.loginForm}>
  <div style={styles.title}>{isLoginForm ? "Sign In" : "Register"}</div>
  {isSubmitted ? (
  <div>
  {isLoginForm
  ? "Sign in was successful"
  : "Registration was successful"}
  </div>
  ) : (
  <>
  {renderForm}
  {renderErrorMessage()}
  </>
  )}
  </div>
  </div>
  );
  }

  export default Register;