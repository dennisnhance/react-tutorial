 import { Link } from "react-router-dom";

 const Table = (props) => {
    const {characterData, removeCharacter} = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.email}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th><Link to='addNew' /*className="button round-button"*/>Add</Link></th>
        </tr>
      </thead>
    )
  }

  export default Table;