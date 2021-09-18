import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  selectedImg = e => {
    this.props.selectedImg(e.target.dataset.src);
    this.props.toggleModal();
  };

  render() {
    const { images } = this.props;
    return images.map(image => (
      <Item key={image.id}>
        <Image
          src={image.webformatURL}
          alt=""
          data-src={image.largeImageURL}
          onClick={this.selectedImg}
        />
      </Item>
    ));
  }
}
