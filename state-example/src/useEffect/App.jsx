import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('hello useEffect');

    // clean up
    return () => {
      // 컴포넌트가 사라질 때 동작
    }
  }, []); // 의존성 배열
  // 의존성 배열에 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행한다!

  return (
    <div>
      <input type='text' value={value} onChange={(event) => {
        setValue(event.target.value)
      }}
      />

    </div>
  );
}

export default App;

// 1. input에 값을 입력
// 2. value, 즉 state가 변경
// 3. state가 바뀌었기 때문에 -> App컴포넌트가 리렌더링
// 4. 리렌더링 -> useEffect()
// 5. 1~4번 반복
