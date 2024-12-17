
import PropTypes from "prop-types";

function Input(props){
    return <div>
        <input type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.name} />
        
    </div>
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.any
};

export default Input;