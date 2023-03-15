import React from 'react' 
const Users = (props)=>{
    let data = props.data 
    return (
        <div>
            <table>
                <tr>
                    <th>Studentname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Degree</th>
                    <th>Branch</th>
                    <th>YOP</th>
                </tr> 
                {data.map((x) => {
                    return <tr> 
                        <td>{x.studentname}</td>
                        <td>{x.age}</td>
                        <td>{x.gender}</td>
                        <td>{x.degree}</td>
                        <td>{x.branch}</td>
                        <td>{x.yop}</td>
                        </tr>  
                }  ) }
            </table>
        </div>
    )
} 
export default Users  