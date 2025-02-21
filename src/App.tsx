import React, { useEffect, useState } from 'react';
import Requirements from './components/Requirements';
import DevelopmentProcess from './components/DevelopmentProcess';
import './styles.css';

function App() {
  const [adUnitId, setAdUnitId] = useState<any>('로딩 중...');



  useEffect(() => {
   
    document.addEventListener('message', (e:any) => {
      const message = e.data as string;
      const adIdMatch = message.match(/ca-app-pub-\d+\/\d+/);
      setAdUnitId(adIdMatch)
    })



  }, [])

  return (
    <div className="container">
      <header>
        <h1
          style={{
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            width: '100%',
            textAlign: 'center',
            display: 'block',
          }}
        >
          📄 광고ID - {adUnitId}
        </h1>
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
