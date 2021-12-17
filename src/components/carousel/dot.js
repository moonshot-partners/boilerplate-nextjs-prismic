import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from "../../pages/index.module.css";
import { View  } from "@go1d/go1d";

export const Dot = ({ isSelected, clickHandler}) =>
   <View onClick={clickHandler} 
         className={`${isSelected ? styles.dotSelected : styles.dot } `}/>;
  
export default Dot;