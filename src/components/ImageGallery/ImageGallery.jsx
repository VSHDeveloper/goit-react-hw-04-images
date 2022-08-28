import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onGetLargeImageUrlAndTags }) => {
  return (
    <>
      <List>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallUrl={webformatURL}
              alt={tags}
              onGetLargeImageUrlAndTags={onGetLargeImageUrlAndTags}
              largeUrl={largeImageURL}
            />
          );
        })}
      </List>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
