import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <br /><br />
            <h3>{error.status}</h3>
            <br />
            <h3>{error.statusText}</h3>
            <br />
            <h5>{error.data}</h5>
        </div>
    );
};

export default Error;