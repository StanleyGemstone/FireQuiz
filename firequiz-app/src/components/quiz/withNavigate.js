import { useNavigate } from 'react-router-dom';

// Higher-Order Component to inject `navigate` into class components
const withNavigate = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
};

export default withNavigate;