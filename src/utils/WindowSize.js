const windowSize = () => {
  let windowSize = window.innerWidth;

  if (windowSize < 768) {
    return true;
  } else {
    return false;
  }
};

export default windowSize;
