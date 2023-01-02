import PropTypes from 'prop-types';


const ModalInfo = ({url, alt}) => {
    
    return (
        <>
        <img src={url} alt={alt} />
        </>
    )
}

export default ModalInfo;

ModalInfo.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,

}