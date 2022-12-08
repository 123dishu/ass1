
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);
  const [showConnection, setConnection] = useState([{ name: "", friend: "" }]);
  const [showFriend1, setFiend1] = useState("");
  const [showFriend2, setFiend2] = useState("");
  const [showFinal, setFinal] = useState("")
let conn=[]
  const onSubmitFriend = (e) => {
    e.preventDefault();
    setConnection([...showConnection, { name: data, friend: add }]);
    setData("");
    setAdd("");
  };
 

  const sub = (e) => {
    setData(e.target.value);
  };

  const handel = (e) => {
    setAdd(e.target.value);
  };
  const selectFriend1 = (event) => {
    setFiend1(event.target.value);
  };
  const selectFriend2 = (event) => {
    setFiend2(event.target.value);
  };

  const calMatch = () => {
    showConnection.map(items=>{
  if(items.name==showFriend1){
    setFinal({...showFinal, name:items.name})
    conn.push(items.name)
    conn.push(items.friend)

  }
  else if((showFinal && showFinal.length) >0 && items.name != showFriend2){
    conn.push(items.name)
    conn.push(items.friend)


    
  }
  else if(items.name ==showFriend2){
    conn.push(items.name)
    conn.push(items.friend)

showData()
    return
  }
})


  };

  const showData =()=>{
  console.log(conn)
  
    

  }


  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="dFlex">
            <h3>name</h3>

            <input
              type="text"
              className="tex"
              value={data}
              onChange={sub}
            ></input>

            <h3>friends name</h3>

            <input
              type="text"
              className="tex"
              value={add}
              onChange={handel}
            ></input>
            <button onClick={(e) => onSubmitFriend(e)}> add friends</button>
            
          </div>
          <div style={{ display: "flex", marginTop: "15px" }}>
            <div>
              <label for="cars">choose first friend</label>

              <select name="cars" onChange={selectFriend1} id="cars">
                {showConnection.map((items) => (
                  <option value={items.name}>{items.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label for="cars">choose second friend</label>

              <select name="cars" onChange={selectFriend2} id="cars">
                {showConnection.map((items) => (
                  <option value={items.name}>{items.name}</option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={calMatch}>Show</button>
            </div>
          </div>

          <div>
            {showConnection.map((items) => (
              <p>
                {items.friend} is friend of {items.name}
              </p>
            ))}

          </div>
          <div>
          </div>
          <div>
          {
            conn.map((items)=>(
              <>
              <p>sad</p>
              <span>{`=>`}{items}</span>
              </> 
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
