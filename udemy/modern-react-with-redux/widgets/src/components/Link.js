const Link = ({ href, className, children }) => {
  const handleOnClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <a onClick={handleOnClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
