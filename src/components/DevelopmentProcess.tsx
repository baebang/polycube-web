import React from 'react';

const DevelopmentProcess = () => {
  return (
    <div>
      <h2>🚀 개발 과정</h2>
      <p>1. 프로젝트를 생성하고 환경을 설정했습니다.</p>
      <p>2. 웹뷰 기능을 추가하고, 광고 ID를 불러오는 기능을 구현했습니다.</p>
      <p>3. Bottom navigation을 적용하여 화면을 구성했습니다.</p>
      <p>4. UI/UX를 고려하여 디자인을 개선했습니다.</p>
      <p>5. 최종 테스트를 진행한 후 배포했습니다.</p>

      <h3>📌 사용한 라이브러리</h3>
      <ul>
        <li><code>react-native-webview</code> - 웹뷰를 구현했습니다.</li>
        <li><code>react-native-google-mobile-ads</code> - AdMob 광고를 적용했습니다.</li>
        <li><code>expo-router</code> - 페이지 네비게이션을 관리했습니다.</li>
        <li><code>expo-splash-screen</code> - 스플래시 화면을 설정했습니다.</li>
        <li><code>expo-build-properties</code> - iOS 설정을 변경했습니다.</li>
      </ul>

      <h3>📢 AdMob 설정 과정</h3>
      <ol>
        <li>Google AdMob에서 새로운 앱을 등록했습니다.</li>
        <li>광고 유형에 따라 배너 광고 / 전면 광고 등의 광고 단위를 생성했습니다.</li>
        <li>AdMob에서 제공하는 `App ID`와 `Ad Unit ID`를 프로젝트에 설정했습니다.</li>
        <li>React Native에서 `react-native-google-mobile-ads` 라이브러리를 사용하여 광고를 표시했습니다.</li>
        <li>배포 전에는 테스트 광고 ID를 사용하여 테스트를 진행하고, 실제 배포 시에는 실제 광고 ID로 변경했습니다.</li>
      </ol>
    </div>
  );
};

export default DevelopmentProcess;
