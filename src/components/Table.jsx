import React from 'react'
const Table = (props) => {
    // console.log(props)
    return (
        <ul>
            {props.list.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}


export default Table