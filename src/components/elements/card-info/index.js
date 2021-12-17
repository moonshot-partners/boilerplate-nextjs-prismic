import React from "react";
import { Text, View, Heading } from "@go1d/go1d";
import { ImageView } from "../../elements/image-view";

export function CardInfo({ type, width, tags, image, title, summary, height, semanticElement, visualHeadingLevel, color }) {

 const tagsString = tags.join(" ･ ");

  return (
    <View
      padding={ 4 }
      css={ {
        cursor: "pointer",
        margin: "0",
        "&:hover": {
          backgroundColor: "#F1F3F3",
          borderRadius: "32px"
        },
        "&:active, &:focus ": {
          border: "2px solid #317481",
          borderRadius: "32px"
        }
      } }
    >
      <View>
        <ImageView src={ image.value } 
                   alt={ title.value } 
                   height={ height }
                   width={ width }
                   style={ { borderRadius: 32, objectFit:"cover", width:"-webkit-fill-available" } } />
        <Text color="subtle" 
              fontSize={ 2 } 
              fontWeight="medium" 
              paddingTop={ 3 } 
              textAlign="left"  
              textTransform="capitalize">
                { `${ type } ${ tagsString.length == 0 ? "" : " ･ " } ${ tagsString }` }
        </Text>
        <Heading
          semanticElement={ semanticElement }
          visualHeadingLevel={ visualHeadingLevel }
          color={color}
          textAlign="left"
          marginY={ 3 }
          width={["100%", "80%"]}>
            { title }
        </Heading>
      </View>
      <View width={["100%", "90%"]}>
        <Text color="default" 
              fontSize={ 1 } 
              lineHeight="paragraph"
              textAlign="left">
                { summary }
        </Text>
      </View>
    </View>
  )
}
