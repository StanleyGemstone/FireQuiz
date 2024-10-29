import { useNavigate, useLocation } from 'react-router-dom';

const withRouterUtils = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        return <Component {...props} navigate={navigate} location={location} />;
    };
};

export default withRouterUtils;
