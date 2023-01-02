import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({img, handleModalInfo}) => {
    
    return (
        <>
        {img.map((el) => (
            <GalleryItem key={el.id} onClick={() => handleModalInfo(el.largeImageURL, el.user)} >
            <GalleryImage  src={el.webformatURL} alt={el.user}/>
            </GalleryItem>
        ))}
        </>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    img: PropTypes.arrayOf(PropTypes.object.isRequired),
}

