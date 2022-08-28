import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  smallUrl,
  alt,
  largeUrl,
  onGetLargeImageUrlAndTags,
}) => {
  return (
    <Item
      onClick={() =>
        onGetLargeImageUrlAndTags({
          largeUrl: largeUrl,
          alt: alt,
        })
      }
    >
      <Img src={smallUrl} alt={alt} width="300" />
    </Item>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  onGetLargeImageUrlAndTags: PropTypes.func.isRequired,
};
