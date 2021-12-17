import queryString from 'query-string';

const optimizeImage = (path, options) => {
  if (path) {
    const cloudinarySetting = options || 'f_auto,q_auto,w_350';
    if (path.indexOf('res.cloudinary.com') !== -1) {
      path = path.replace('/image/upload/', `/image/upload/${cloudinarySetting}/`);
    } else if (path.indexOf('images.prismic.io') !== -1 || path.indexOf('prismic-io.s3.amazonaws.com') !== -1) {
      path = path.replace('prismic-io.s3.amazonaws.com', 'images.prismic.io');
      if (options) {
        const arrayPath = path.split('?');
        if (!arrayPath[1]) {
          path = `${path}?${options}`;
        } else {
          const query = queryString.parse(arrayPath[1]);
          options = queryString.parse(options);
          path = `${arrayPath[0]}?${queryString.stringify({ ...query, ...options }, { encode: false })}`;
        }
      }
    } else {
      path = `https://res.cloudinary.com/go1/image/fetch/${cloudinarySetting}/${path}`;
    }
  }
  return path;
};

export default optimizeImage;
