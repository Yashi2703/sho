import React, { useEffect, useState } from "react";

function Counteffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked {count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>update me</button>
        </div>
    )
}
export default Counteffect;