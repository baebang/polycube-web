import React from 'react';
import Requirements from './components/Requirements';
import DevelopmentProcess from './components/DevelopmentProcess';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>📄 Test React Native App 문서</h1>
      </header>
      <main>
        <Requirements />
        <DevelopmentProcess />
      </main>
      <footer>
        <p>© 2024 Test React Native App</p>
      </footer>
    </div>
  );
}

export default App;
