import { useDispatch, useSelector } from 'react-redux';
import { plusOne, minusOne } from './redux/modules/counter';
import { useState } from 'react';
import { plusN, minusN } from './redux/modules/counter';

function App() {

  const [number, setNmber] = useState(0);

  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // useSelector
  const counter = useSelector((state) => { // state: store안에 있는 전체 state
    return state.counter;
  });

  // useEffect : 화면이 렌더링될 때 작동하는 hook
  // useEffect(() => {
  //   console.log(number)
  // }, [number])

  // dispatch를 가져와보자
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input type="number" value={number} onChange={(event) => {
          const { value } = event.target // 구조 분해 할당
          setNmber(+value); // + : 숫자로 형변환
        }} />
      </div>
      <button onClick={() => {
        // dispatch(plusOne());
        dispatch(plusN(number)); // dispatch는 action객체를 store에 던진다.
      }}>
        +</button>
      <button onClick={() => {
        // dispatch(minusOne())
        dispatch(minusN(number))
      }}>
        -</button>
    </>
  );
}

export default App;
