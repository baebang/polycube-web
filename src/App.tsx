import React, { useEffect, useState } from 'react';
import Requirements from './components/Requirements';
import DevelopmentProcess from './components/DevelopmentProcess';
import './styles.css';

function App() {
  const [adId, setAdId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 메시지가 객체인 경우, JSON.stringify()로 문자열로 변환하여 저장
      try {
        if (typeof event.data === 'object') {
          setAdId(JSON.stringify(event.data));
        } else {
          setAdId(event.data);
        }
        setLoading(false); // 메시지를 처리한 후 로딩 완료 상태로 변경
      } catch (error) {
        console.error('Error processing message:', error);
        setLoading(false); // 에러가 발생해도 로딩 종료
      }
    };

    // WebView에서 전달된 메시지를 처리
    window.addEventListener('message', handleMessage);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // 만약 adId가 null인 경우, 환경변수나 메시지 처리에 문제가 있음을 콘솔에 출력
  useEffect(() => {
    if (adId === null && !loading) {
      console.error('Error: 광고 ID가 환경변수나 메시지에서 제공되지 않았습니다.');
      
    }
  }, [adId, loading]);

  return (
    <div className="container">
      <header>
        <h1
          style={{
            whiteSpace: 'normal', /* 줄바꿈 허용 */
            wordWrap: 'break-word', /* 긴 단어가 넘어갈 경우 자동으로 줄바꿈 */
            width: '100%', /* 부모 컨테이너의 너비에 맞추기 */
            textAlign: 'center', /* 텍스트가 가운데 정렬되도록 */
            display: 'block',
          }}
        >
          📄 광고ID - {loading ? '로딩 중...' : adId} {/* 로딩 상태일 때는 '로딩 중...' 표시 */}
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
