import React, {useState, useEffect} from 'react'

export const useWindowDimension = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return {
    width,
    height
  };
}
