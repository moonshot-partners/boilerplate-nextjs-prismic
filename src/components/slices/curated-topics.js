import { View  } from "@go1d/go1d";
import { THEME } from "../../constants/theme.constant";
import { Go1Title } from "../texts/go1-title";
import { ResponsiveLayer } from "../../components/layers/responsive-layer";
import { CarouselView } from "../../components/elements/carousel-view";

export function CuratedTopics({ title, topic_1, topic_2, topic_3, items }) {
  return (
      <ResponsiveLayer paddingY={ [6, 8] } backgroundColor={ THEME.DANGER_HIGHEST }>
        <Go1Title text= { title[0]?.text }
                  paddingLeft={ "1rem" }
                  semanticElement={ title[0]?.semanticElement }
                  visualHeadingLevel={ title[0]?.visualHeadingLevel }
                  marginTop={ [2, 4] }
                  marginBottom={ [4, 6] }/>
        <CarouselView title={ topic_1 } items={ items.topic_1 } />
        <CarouselView title={ topic_2 } items={ items.topic_2 } />
        <CarouselView title={ topic_3 } items={ items.topic_3 } />
      </ResponsiveLayer>
  )
}