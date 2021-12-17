const { prismicSliceType } = require("./prismic.constant");

export const prismicParseData = {
    [prismicSliceType.CAMPAIGN_LANDING] : {
        semanticelement: (props) => {
            props['title'][0]['semanticElement'] = props['semanticelement']
        },
        visualheadinglevel: (props) => {
            props['title'][0]['visualHeadingLevel'] = props['visualheadinglevel']
        },        
    },
    [prismicSliceType.BLOG] : {
        semanticelement: (props) => {
            props['title'][0]['semanticElement'] = props['semanticelement']
        },
        visualheadinglevel: (props) => {
            props['title'][0]['visualHeadingLevel'] = props['visualheadinglevel']
        },        
    },
    [prismicSliceType.CURATED_TOPICS] : {
        semanticelement: (props) => {
            props['title'][0]['semanticElement'] = props['semanticelement']
        },
        visualheadinglevel: (props) => {
            props['title'][0]['visualHeadingLevel'] = props['visualheadinglevel']
        },        
    }
}