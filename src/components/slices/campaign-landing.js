import React from "react";
import { ColumnLayer } from "../layers/column-layer";
import { View, Text, TextInput, ButtonFilled } from "@go1d/go1d";
import { Go1Title } from "../texts/go1-title";
import { THEME, THEME_COLOR_ACCENT } from "../../constants/theme.constant";
import { ImageView } from "../views/image-view";
import { RichText } from "prismic-dom";
import styles from "../../pages/index.module.css";

export function CampaignLanding({ title, subtitle, image: { url, alt }, previousVersion }) {

  return (
    <ColumnLayer paddingY={ [6, 8] } backgroundColor={ THEME.NOTE_HIGHEST }>
      <View 
        display="inline-flex"  
        justifyContent="center"
        alignItems={["center", "start"]}
        textAlign={ ["left", "initial"] }
        width={ ["100%", "100%", "40%"] }
      >
        <Go1Title 
          text={ title[0]?.text }        
          semanticElement={ title[0]?.semanticElement }      
          visualHeadingLevel={ title[0]?.visualHeadingLevel }       
          marginTop={ [2, 5] }   
          marginBottom={ [4, 5] }       
          previousVersion={ previousVersion }
        />
        <Text     
          textAlign={ "left" } 
          fontSize={ 2 }
          lineHeight="paragraph"
          color={ THEME_COLOR_ACCENT }    
        >
          { RichText.asText(subtitle) }
        </Text>
        <View  
          marginTop={"24"}
          marginBottom={"44"}
          element="a"
          justifyContent="left"
          href="https://readyset.go1.com/subscribe"
        >
          <ButtonFilled 
            color="accent" 
            size="md"
            fontWeight="medium"
          >
            Subscribe to updates
          </ButtonFilled>
        </View>
      </View>
      <View 
        display="inline-flex"
        height="fit-content"
        alignItems="center"
        paddingX={ [0, 4] }
        width={ ["100%", "100%", "47%"] }
      >
        <ImageView 
          src={ url }
          alt={ alt }
          css={ { objectFit: "cover" } }
        />
      </View>
    </ColumnLayer>
  )
}
