import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import data from '../shared/data';

function Works() {

    // const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    return (
        <>
            <div>
                Works
                <br />
                <button onClick={() => {
                    // navigate('/')
                }}>Home으로 이동</button>
                <br />
                <Link to={'/contact'}>contact로 이동</Link>
            </div>
            <div>
                <h2>Todo List</h2>
                {
                    data.map((value) => {
                        return (
                            <div key={value.id}>
                                <Link to={`/works/${value.id}`}>{value.id} {value.todo}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Works