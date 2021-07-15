import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/Searchbar/Searchbar';
import fetchImages from './components/ApiService/ApiService.jsx';
import ImageGallery from './components/ImageGallery/ImageGalleryList';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader.jsx';
import Modal from './components/Modal/Modal.jsx';
import style from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    error: null,
    loading: false,
    showModal: false,
    largeImage: '',
    // status: 'idle',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.onFetchImages();
      // console.log('Image name changed');
      // console.log('prevState.searchQuery: ', prevState.searchQuery);
      // console.log('this.state.searchQuery: ', this.state.searchQuery);
    }

    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  onFetchImages = () => {
    const { searchQuery, currentPage, error } = this.state;

    const options = { searchQuery, currentPage, error };

    this.setState({ loading: true });

    fetchImages(options)
      .then(response => {
        if (response.length === 0) {
          toast.error('No images with this keyword to be found!');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...response],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = modalImage => {
    console.log('Open Modal', modalImage);
    this.setState(() => ({ largeImage: modalImage }));
    this.toggleModal();
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
    this.toggleModal();
  };

  render() {
    const { images, loading, showModal, largeImage } = this.state;

    const shouldRenderOnLoadMore = images.length > 0 && !loading;

    return (
      <div className={style.App}>
        <SearchBar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} onClickImage={this.openModal} />
        {loading && <Loader />}
        {shouldRenderOnLoadMore && <Button onClick={this.onFetchImages} />}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            bigImage={largeImage.largeImageURL}
          />
        )}

        <Toaster position="top-right" />
      </div>
    );
  }
}
