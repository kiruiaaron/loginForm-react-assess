import React from 'react'
import { ThemeProvider } from './components/loginForm';
import './App.css';
import LoginForm from './components/loginForm';

function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <LoginForm />
    </ThemeProvider> 
    </div>
  );
}

export default App;
