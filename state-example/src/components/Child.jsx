import React, { useContext } from 'react'
import { FamilyContext } from '../context/FamilyContext'

const style = {
    color: 'red',
    fontWeight: "900"
}

function Child() {
    const data = useContext(FamilyContext);
    console.log(data);

    return (
        <div>
            우리 집 이름은 <span style={style}>{data.houseName}</span>
            <br />
            용돈은 <span style={style}>{data.pocketMoney}</span>원 이에요!
        </div>
    )
}

export default Child