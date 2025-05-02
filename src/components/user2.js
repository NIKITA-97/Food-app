import { useState } from "react";


const User2 = (props) => {
    const count = useState(0);
    const count1 = useState(1);
    return(
        <div className="user-card">
        <h3>count : {count}</h3>
        <h3>count1 : {count1}</h3>
            <h2>Name:{props.name}</h2>
            <h3>Location: Kolkata</h3>
        </div>
    )
}

export default User2;