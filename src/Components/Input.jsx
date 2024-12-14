
import PropTypes from "prop-types";

function Input(props){
    return <div>
        <input type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}/>
    </div>
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default Input;