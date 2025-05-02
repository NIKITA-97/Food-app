import { useState } from "react";

const User = ({name, age}) =>{

    const count = useState(0);
    const count1 = useState(1);

return(
    <div className="user-card"> 
    <h2>Count: {count}</h2>
     <h2>Count: {count1}</h2>
    <h3>Name:{name}</h3>
    <h4>Age: {age}</h4>
    </div>
)
}
export default User;