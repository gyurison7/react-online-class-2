import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const style = {
    border: "1px solid black",
    margin: '10px',
    padding: '10px'
}

function App() {

    const idRef = useRef('');
    const pwRef = useRef('');

    const [id, setId] = useState('');

    const idChangeHandler = ((event) => {
        setId(event.target.value);
    })

    // 화면이 렌더링될 때 어떤 작업을 하고 싶다! : useEffect
    useEffect(() => {
        idRef.current.focus();
    }, [])

    useEffect(() => {
        if(id.length >= 10) {
            pwRef.current.focus();
        }
    })

    return (
        <>
            <div>
                아이디 <input type='text' ref={idRef} onChange={idChangeHandler} value={id} />
            </div>
            <div>
                비밀번호 <input type='password' ref={pwRef} />
            </div>
        </>
    )

}

export default App;

    // 이렇게 설정된 ref값은 컴포넌트가 계속해서 렌더링 되어도
    // unmount 전까지 값을 유지한다!

    // const ref = useRef('초기값');
    // console.log(ref);

    // ref.current = '변경값';
    // console.log(ref);

    // const [count, setCount] = useState(0);
    // const countRef = useRef(0);

    // const plusStateCountHandler = () => {
    //     setCount(count + 1)
    // }

    // const plusRefCountHandler = () => {
    //     countRef.current++;
    //     console.log(countRef.current);
    // }

    // return <>
    //     <div style={style}>
    //         state 영역입니다. {count} <br />
    //         <button onClick={plusStateCountHandler}>state 증가</button>
    //     </div>
    //     <div style={style}>
    //         ref 영역입니다. {countRef.current} <br />
    //         <button onClick={plusRefCountHandler}>ref 증가</button>
    //     </div>
    // </>