import { View  } from "@go1d/go1d";
import { THEME } from "../../constants/theme.constant";
import { Go1Title } from "../texts/go1-title";
import { CarouselRes } from "../carousel/carousel-res";
import { SlatBlog } from "../elements/slat-blog";
import { ResponsiveLayer } from "../../components/layers/responsive-layer";

export function Blog({ title, background_color, blogs }) {

  return (
      <ResponsiveLayer paddingY={ [6, 8] } backgroundColor={ background_color || THEME.BACKGROUND }>
        <Go1Title text= { title[0]?.text }
                  semanticElement={ title[0]?.semanticElement }
                  visualHeadingLevel={ title[0]?.visualHeadingLevel }
                  paddingLeft={ "1rem" }
                  marginTop={ [2, 4] }
                  marginBottom={ [4, 6] }/>
        <View display={ ["flex", "grid"] }
              css={{ gridTemplateColumns: "50% 50%", gap: "0.5rem"}}
              alignItems={["center", "left"]}
              justifyContent={["center", "left"]}>
                <View>     
                  <CarouselRes blogs={ blogs } />
                </View>        
                <View>
                  <SlatBlog blogs={ blogs } />
                </View> 
        </View>
      </ResponsiveLayer>
  )
}
  
