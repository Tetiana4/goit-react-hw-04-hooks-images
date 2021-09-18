import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchImages } from '../services/api';
import { Container } from './App.styled';
import { Searchbar } from '../Components/Searchbar/Searchbar';
import ImageGallery from '../Components/ImageGallery/ImageGallery';
import ImageGalleryItem from '../Components/ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Components/Button/Button';
import { Spinner } from '../Components/Loader/Loader';
import Modal from '../Components/Modal/Modal';

import '../App.css';
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

    try {
      setStatus(Status.IDLE);
      fetchImages(imageName, page).then(res => {
        if (res.length === 0) {
          return toast.error('Please, write something better');
        }
        setImages(prevState => [...prevState, ...res]);
        setStatus(Status.RESOLVED);
        toast('🎉 Hope you are enjoy');
      });
    } catch (error) {
      setStatus(Status.REJECTED);
      toast.error('Error');
    }

    page > 1 &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
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

  const selectedImg = data => {
    setLargeUrl(data);
  };

  const onLoadMore = e => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Searchbar onSearch={handleFormSubmit} />
      {status === 'pending' && <Spinner />}
      <ImageGallery>
        <ImageGalleryItem
          images={images}
          toggleModal={toggleModal}
          selectedImg={selectedImg}
        />
      </ImageGallery>
      {images.length > 11 && <Button onClick={onLoadMore} />}

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
