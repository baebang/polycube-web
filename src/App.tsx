import React from 'react';
import Requirements from './components/Requirements';
import DevelopmentProcess from './components/DevelopmentProcess';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>📄 폴리큐브 코딩 테스트 - 지원자 김재정</h1>
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
