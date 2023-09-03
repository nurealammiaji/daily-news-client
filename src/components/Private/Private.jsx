import { useContext } from "react";
import { AuthContext } from '../Providers/Providers';
import { Navigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";


const Private = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <>
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>
        </>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default Private;