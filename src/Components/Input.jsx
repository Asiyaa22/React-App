
import PropTypes from "prop-types";

function Input(props){
    return <div>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default Input;