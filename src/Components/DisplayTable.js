import React from "react";
import JsonData from "./Data/peopleNew.json";

// const[value,setValue]=useState('');
// const[dataSource,setDataource]=useState(dataSource);

// const filterData=(e)=>{
//   if(e.target.value!=""){
//     setValue(e.target.value);
//     const filterTable = dataSource.filter(o=>Object.keys(o))
//   }
// }

function DisplayTable() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info._id}</td>
        <td>{info.uid}</td>
        <td>{info.university}</td>
        <td>{info.State}</td>
        <td>{info.approval}</td>
      </tr>
    );
  });

  return (
    <div>
      <input
        type="text"
        style={{ width: "10rem", height: "2rem", textAlign: "center" }}
      />
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>UID</th>
            <th>University</th>
            <th>State</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
