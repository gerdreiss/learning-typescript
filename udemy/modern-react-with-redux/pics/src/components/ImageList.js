import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
