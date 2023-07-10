import React, { useCallback, useState } from 'react';
import Box1 from '../components/Box1';
import Box2 from '../components/Box2';
import Box3 from '../components/Box3';

function App() {

    const [count, setCount] = useState(0);

    const plusCountHandler = () => {
        setCount(count + 1)
    }

    const minusCountHandler = () => {
        setCount(count - 1)
    }

    const initCount = useCallback(() => {
        setCount(0);
    }, []); // 의존성 배열

    return (
        <>
            <h3>카운트 예제</h3>
            <p>현재 카운트 {count}</p>
            <button onClick={plusCountHandler}>+</button>
            <button onClick={minusCountHandler}>-</button>
            <div style={{
                display: 'flex',
                marginTop: '10px'
            }}>
                <Box1 initCount={initCount}/>
                <Box2 />
                <Box3 />
            </div>
        </>
    )
}

export default App