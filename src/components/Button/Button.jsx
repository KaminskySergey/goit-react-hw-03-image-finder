import PropTypes from 'prop-types';
import { LoadMoreBtn } from "./Button.styled";

const Button = ({onClick}) => {
    
    return (
        <LoadMoreBtn type="button" onClick={onClick}>Load more</LoadMoreBtn>
        
    )
}

export default Button;

Button.propTypes = {
    onClick:  PropTypes.func.isRequired,
}