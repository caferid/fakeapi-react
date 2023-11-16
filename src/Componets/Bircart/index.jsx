import React from 'react'

function Bircart(x) {
    console.log(x);
    return (
        <div >
            <div>{x.data.ID}</div>
            <div>{x.data.CITY}</div>
            <div>{x.data.DISTRICT}</div>
            <div>{x.data.BIRTHDATE}</div>
            <div>{x.data.GENDER}</div>
            <div>{x.data.AGE}</div>
        </div>

    )
}

export default Bircart