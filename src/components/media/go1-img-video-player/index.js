import React from 'react';
import PropTypes from 'prop-types';
import { View } from '@go1d/go1d';
import { extractUrlIDGDrive } from '../../../utils/helpers/url-id-extractor';

const validFormat = ['jpg', 'jpge', 'png', 'mp4', 'webm'];

const isGoogleDriveDomain = (url) => {
  return url.slice(0, 24) === 'https://drive.google.com'
} 

const Go1ImgVideoPlayer = ({ 
    width, 
    height, 
    overflow, 
    url, 
    controls = false,
    autoPlay = true, 
    fileType, 
    borderRadius
  }) => {
    const Styles = {
      objectFit: 'cover',
      display: 'none'
    }
  return (
    <View  
      width={width} 
      height={height} 
      css={{ 
        overflow: overflow || 'hidden', 
        borderRadius: borderRadius || 20
      }}
    >
      {fileType === 'mp4' || fileType === 'webm' ? (
        <video style={{
              objectFit: Styles.objectFit, 
              background: 'rgba(255,255,255,0.5)'
            }}
            data-testid="go1VideoPlayer" 
            autoPlay={autoPlay}
            controls={controls}
            height="100%" 
            muted
            width="100%" 
            loop 
          >
            <source 
              data-testid="go1PlayerVideoSource"
              src={ isGoogleDriveDomain(url) ? `https://drive.google.com/uc?export=download&id=${extractUrlIDGDrive(url)}` : url }
            />
        </video>
      ) : (
        <View 
          data-testid="go1ImgPlayer" 
          element="img" 
          src={url} 
          width="100%" 
          height="100%" 
        ></View>
      ) }
    </View>
  )
}

Go1ImgVideoPlayer.propTypes = {
  controls: PropTypes.bool,
  url: PropTypes.string.isRequired,
  fileType: function(props, propName, componentName) {
    if (typeof props.fileType === 'undefined') {
      return new Error(
        'Required prop `' + propName + '` was not specified in `' + componentName + '`.'
      );
    }
    else if (!validFormat.includes(props.fileType)) {
      return new Error(
        'Invalid value for `' + propName + '` in `' + componentName + '`.'
      );
    }
  }
}

export { Go1ImgVideoPlayer };
