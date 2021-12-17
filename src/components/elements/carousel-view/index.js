import { Carousel, Heading, View } from "@go1d/go1d";
import { CardWrapped } from  "../../../components/wrapped/card-wrapped";
import React from "react";
import PropTypes from "prop-types";
import styles from "../../../pages/index.module.css";
export function CarouselView(props) {
  let { items, title } = props;
  
  items = items || [];

  const breakpoints = {
    "sm": {
      slidesToShow: 1.2
    },
    "md": {
      slidesToShow: 3.5
    },
    "lg": {
      slidesToShow: 4
    }
  }

  if (!Array.isArray(items) || items.length === 0) {
    return <></>
  }

  let headingTitle =
    <Heading
      semanticElement="h4"
      fontWeight="medium"
      lineHeight="22"
      paddingLeft={ "1rem" }
      fontSize={ 3 }
      color="accent"
      visualHeadingLevel="Heading 4"
      >
      { title }
    </Heading>;

  return (
      <Carousel title={ headingTitle }
                items={ items }
                clickScrollAmount={ 2 }
                breakpoints={ breakpoints }
                css={ { padding: 0 } }
                className={ styles.carouselTitle }>
           {
              items?.map((item, index) =>
              <View element="a"
                    target="_blank"
                    href={ `blog/${ item.slugs[0] }` } 
                    key={ `blog_${ index }` } rel="noreferrer"
                    minWidth={272}>
                      <CardWrapped type={item.type}
                                   height={173}
                                   color={"contrast"}
                                   tags={item.tags}
                                   visualHeadingLevel={"Heading 4"}
                                   semanticElement={"h5"}
                                   image={item.attributes.image}
                                   title={item.attributes.title.value}
                                   summary={item.attributes.summary.value}/>
              </View>
              )
            }
      </Carousel>
  );
}

CarouselView.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}
