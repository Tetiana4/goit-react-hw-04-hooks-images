import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchImages } from '../services/api';
import { Container } from './App.styled';
import { Searchbar } from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';

import { Button } from '../components/Button/Button';
import { Spinner } from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import { scrollTo } from '../helpers/scroll';

import 'react-toastify/dist/ReactToastify.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [imageName, setImageName] = useState(null);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeUrl, setLargeUrl] = useState('');

  useEffect(() => {
    if (!imageName) {
      return;
    }
    async function getImages() {
      try {
        setStatus(Status.PENDING);
        const images = await fetchImages(imageName, page);

        if (images.length === 0) {
          return toast.error('Please, write something better');
        }
        setImages(prevState => [...prevState, ...images]);
        setStatus(Status.RESOLVED);
        scrollTo();
      } catch (error) {
        setStatus(Status.REJECTED);
        toast.error('Error');
      }
    }

    getImages();
  }, [imageName, page]);

  const handleFormSubmit = value => {
    if (imageName === value) {
      toast('😲 You are so boring... Maybe something new');
      return;
    }
    if (value.trim() === '') {
      setStatus(Status.IDLE);
      return toast.error('Common... write something.');
    }

    setImages([]);
    setImageName(value);
    setPage(1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const showButtonMore = images.length > 11;

  const handleLargeUrl = e => {
    toggleModal();
    setLargeUrl(e.target.dataset.src);
  };

  return (
    <Container>
      <Searchbar onSearch={handleFormSubmit} />
      {status === 'pending' && <Spinner />}
      <ImageGallery
        images={images}
        toggleModal={toggleModal}
        selectedImage={setLargeUrl}
        handleSelectedImg={handleLargeUrl}
      />
      {showButtonMore && <Button onClick={handleLoadMore} />}

      {showModal && (
        <Modal
          largeImg={largeUrl}
          showLoader={showModal}
          toggleModal={toggleModal}
        />
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
