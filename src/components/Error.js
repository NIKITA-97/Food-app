import { useRouteError } from "react-router-dom";

const Error = () =>{
    const Err = useRouteError();
    return(
        <div>
            <h1>Opps</h1>
            <h3>Something went wrong</h3>
        </div>
    )
}
export default Error;