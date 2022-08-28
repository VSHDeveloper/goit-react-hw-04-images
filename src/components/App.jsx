import { useState, useEffect } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import Notification from './Notification';
import imagesFetch from '../services/imagesFetch';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const [largeImageUrlAndTags, setLargeImageUrlAndTags] = useState(null);
  const [totalImages, setTotalImages] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    imagesFetch(query, page)
      .then(dataImages => {
        setImages(prevImages => [...prevImages, ...dataImages.hits]);
        setShowLoader(false);
        setTotalImages(dataImages.totalHits);
      })
      .catch(error => {
        console.log(error);
        setShowLoader(false);
      });
  }, [query, page]);

  const handleSubmitSearch = newQuery => {
    if (query === newQuery) {
      return;
    }

    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setShowLoader(true);

    window.scrollTo({ top: 0, left: 0 });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setShowLoader(prevShowLoader => !prevShowLoader);
  };

  const handleGetLargeImageUrlAndTags = newImageUrlAndTags => {
    setLargeImageUrlAndTags(newImageUrlAndTags);
  };

  const handleModalClose = () => {
    setLargeImageUrlAndTags(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmitSearch} />

      {totalImages === null && !showLoader && (
        <Notification>Please Enter search query</Notification>
      )}

      {totalImages === 0 && (
        <Notification eventColor="red">Enter something normal :)</Notification>
      )}

      {images.length > 0 && (
        <>
          <ImageGallery
            images={images}
            onGetLargeImageUrlAndTags={handleGetLargeImageUrlAndTags}
          />
          {images.length < totalImages ? (
            <Button onClick={handleLoadMore} />
          ) : (
            <Notification>The images are end!</Notification>
          )}
        </>
      )}

      {showLoader && <Loader />}

      {largeImageUrlAndTags && (
        <Modal
          onModalClose={handleModalClose}
          largeImage={largeImageUrlAndTags}
        />
      )}
    </>
  );
};

export default App;
