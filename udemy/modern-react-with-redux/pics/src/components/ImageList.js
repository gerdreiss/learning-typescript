const ImageList = (props) => {
  return (
    <div>
      {props.images.map((image) => (
        <img alt={image.alt_description} key={image.id} src={image.urls.regular} />
      ))}
    </div>
  );
};

export default ImageList;
