import React, { useEffect, useState } from 'react';
import Requirements from './components/Requirements';
import DevelopmentProcess from './components/DevelopmentProcess';
import './styles.css';

function App() {
  const [adId, setAdId] = useState<string | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 받은 메시지가 객체일 경우, JSON.stringify()로 문자열로 변환하여 저장
 
      setAdId(typeof event.data === 'object' ? JSON.stringify(event.data) : event.data);
      
    };

    // WebView에서 전달된 메시지를 처리
    window.addEventListener('message', handleMessage);
    

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="container">
      <header>
      <h1 style={{
          whiteSpace: 'normal', /* 줄바꿈 허용 */
          wordWrap: 'break-word', /* 긴 단어가 넘어갈 경우 자동으로 줄바꿈 */
          width: '100%', /* 부모 컨테이너의 너비에 맞추기 */
          textAlign: 'center', /* 텍스트가 가운데 정렬되도록 */
          display: 'block'
        }}>📄 광고ID - {adId ? adId : '로딩 중...'}</h1>
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
