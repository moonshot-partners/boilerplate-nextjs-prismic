import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { CardWrapped } from  "../wrapped/card-wrapped";
import { Dot } from "./dot";
import styles from "../../pages/index.module.css";

export function CarouselRes (blogs) {
  const FirstThreeBlogs = blogs.blogs.slice(0, 3);
  const customIndicator = (
    clickHandler,
    isSelected,
    index,
    label
  ) => <Dot isSelected={ isSelected } clickHandler={clickHandler} />;
  

    return (
        <Carousel blogs={ blogs } 
                  autoPlay
                  interval={ 5000 }
                  showStatus={ false }
                  infiniteLoop
                  width={"96%"}
                  className={ styles.carousel }
                  showArrows={ false }
                  renderIndicator= { customIndicator }
                  >
           {
              FirstThreeBlogs?.map((item, index) =>
              <a target="_blank"
                  href={ `blog/${ item.uid }` } 
                  key={ `blog_${ index }` } rel="noreferrer">
                    <CardWrapped type={ item.type }
                              tags={ item.tags }
                              height={ [253, 360] }
                              color={"successLowest"}
                              visualHeadingLevel={"Heading 2"}
                              semanticElement={"h2"}
                              image={ item.attributes.image }
                              title={ item.attributes.title.value }
                              summary={ item.attributes.summary.value }/>
              </a>
              )
            }
        </Carousel>
    );
};
