import React, { useState } from "react";

function Countstate(){
    const[data ,setData] = useState("Anil");
    return(
        <div>
            <p>Using useState</p>
            <h1>{data}</h1>
            <button onClick={()=>setData("Sidhu")}>Click me</button>
        </div>
    )
}
export default Countstate;