import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Component } from "react";
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import {Loader} from './Loader/Loader';

import { Container } from './App.styled';
import {Toast} from './ToastContainer/ToastContainer'
import Modal from './Modal/Modal';
import ModalInfo from './Modal/ModalInfo';



const KEY = '31274653-67696640fdcd1e011de901f6c'
const BASE_URL = 'https://pixabay.com/api/?'

export class App extends Component {
  state = {
    image: [],
    name: '',
    isLoader: false,
    page: 1,
    disabled: true,
    imageHits: [],
    showModal: false,
    url: '',
    alt: '',
  }

  addFormState = (data) => {
    this.setState({name: data, page: 1, image: []})
    }

  loadMore = async () => {
    this.setState((pS) => ({
      page: pS.page + 1,
    }))
  }
  
    async componentDidUpdate(_,prevState){
    
    const {page} = this.state;
    if ( prevState.name !== this.state.name || prevState.page !== this.state.page){
      this.setState({isLoader: true, })
    try {
      
      const {data} = await axios.get(`${BASE_URL}q=${this.state.name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      
      this.setState((prevState) => ({
        image: [...prevState.image, ...data.hits],
        imageHits: data,
      }))
      

      if(this.state.image.length === 0){
        toast.success(`Found ${data.total} photos`)
        
      }
      
      if(data.total === 0){
        this.setState({image: []})
      }
    
    } catch (error) {
      console.log(error);
      toast.error('We were unable to process your request')
    } finally {
      this.setState({isLoader: false})
    }
    }
  }
  
  toggleModal = () => {
    this.setState((pS) => ({
        showModal: !pS.showModal,
    }))
    
}
  handleModalInfo = (url, alt) => {
    this.toggleModal()
    this.setState({url, alt})
    
  }


  
  render(){
    const {isLoader, image, disabled, imageHits, showModal, url, alt} = this.state;
    
    return (
      <Container>
      <Searchbar onSubmit={this.addFormState} disabled={disabled}/>
      {/* {image && image.totalHits === 0 && <p>Пожалуйста введите что-то другое</p>} */}
      {<ImageGallery>
       { <ImageGalleryItem img={image} handleModalInfo={this.handleModalInfo}/>}
      </ImageGallery> }
      <Loader visible={isLoader}/>
      { <Toast />}
      {showModal && <Modal onClose={this.toggleModal}>
        <ModalInfo url={url} alt={alt}/>
        </Modal>}
      {image.length === 0 || imageHits.totalHits ===  image.length ||  <Button onClick={this.loadMore}/>}
      </Container>
    );
  }
};
