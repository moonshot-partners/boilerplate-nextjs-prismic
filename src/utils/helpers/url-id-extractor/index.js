export function extractUrlIDGDrive(url) {
  const domain = url.slice(0, 24);

  if (domain !== 'https://drive.google.com') {
    return '';
  }
  let expression = url.match(/([01A-Z])(?=[\w-]*[A-Za-z])[\w-]+/g);
  return expression ? expression[0] : '';
}