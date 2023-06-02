import React from "react";
import { useState } from "react";


const ThemeContext = React.createContext();

const themes = {
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  dark: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
};

 export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const LoginForm = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const formDetails = {
      ...details,
      [e.target.name]: e.target.value,
    };
    setDetails(formDetails);
  };

  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      details.email.trim() === "" &&
      details.password.trim() === "" 
    ) {
      setError("Please Fill in All Details");
    } else {
     alert(JSON.stringify(details, null, 2));
    }
  };
  return (
    <ThemeContext.Consumer>
    {(context) => (
      <form action="" className="form" onSubmit={handleOnSubmit} style={context.theme}>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={details.email}
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={details.password}
          name="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
        />
        <button type="submit" >SUBMIT</button>
        {error && <p>{error}</p>}
      </form>
      )}
    </ThemeContext.Consumer>
  );
};

export default LoginForm;
