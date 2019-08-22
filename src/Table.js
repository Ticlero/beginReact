import React, { Component } from 'react'


class Table extends Component {
    render() 
    {
        const { arrayData, removeCharacter } = this.props
        return (
            <table>
                <TableHeader/>
                <TableBody arrayData={ arrayData } removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>삭제</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.arrayData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        )
    })
    console.log(props.arrayData)
    return <tbody>{rows}</tbody>
}

export default Table