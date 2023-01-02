import PropTypes from 'prop-types';

import { GalleryList } from "./ImageGallery.styled";


const ImageGallery = ({children}) => {
    
    return (
        <GalleryList >
        {children}
        </GalleryList>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    children:  PropTypes.any.isRequired,
}