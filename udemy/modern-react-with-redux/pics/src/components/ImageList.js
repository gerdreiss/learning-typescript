const ImageList = (props) => {
  return (
    <div>
      {props.images.map(({ alt_description, id, urls }) => (
        <img alt={alt_description} key={id} src={urls.regular} />
      ))}
    </div>
  );
};

export default ImageList;
