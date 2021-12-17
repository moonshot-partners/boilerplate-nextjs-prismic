module.exports = (cookie) => {
  const cookies = {};
  (cookie || '').split('; ').map((v) => {
    const c = (v || '').split('=');
    cookies[c.shift()] = c.join('=');
  });
  return cookies;
};
