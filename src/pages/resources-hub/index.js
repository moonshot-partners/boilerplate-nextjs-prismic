import React from "react";
import _get from "lodash/get";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/footer.component";
import { THEME } from "../../constants/theme.constant";
import { sliceTypeToComponentMapping } from "../../utils/helpers/slice-type-to-component-mapping";
import { parseInData } from "../../utils/prismic/parse-data";
import { prismicSliceType} from "../../constants/prismic.constant";
import { Meta } from "../../components/meta";
import {getMainSlice, getBlogs, getBlogsByTopic} from "../../services"

const ResourcesHub = ({document, blogs}) => {
  const rawData = document && document.data || {};
  const rawMeta = rawData.meta;
  const renderBody = (rawData) => {
    return rawData?.map((section, index) => {
      if (section?.slice_type) {
        return renderSlices(section, index);
      }
      return null;
    });
  };

  const renderSlices = (sliceData, index) => {
    //console.log(sliceData);
    const Component = sliceTypeToComponentMapping[sliceData?.slice_type];
    if (!Component) {
      console.warn(`Unsupported Prismic slice type: ${ sliceData?.slice_type }`);
      return null;
    }
    if(sliceData.slice_type === prismicSliceType.BLOG){
      sliceData.blogs = blogs
    }
    return <Component { ...sliceData } key={ index }/>;
  };

  return (
    <>
      <Meta { ...rawMeta }/>
      <Header theme={ THEME.ACCENT }/>
      { renderBody(rawData.body) } 
      <Footer/>
    </>
  );
};

ResourcesHub.getInitialProps = async () => {
  try {
    const document = await getMainSlice();
    const blogs = await getBlogs();
    parseInData(document.data.body);

    const curatedTopicsIndex = document.data.body.findIndex(value => value?.slice_type === prismicSliceType.CURATED_TOPICS)
    
    if(curatedTopicsIndex !== -1){
      document.data.body[curatedTopicsIndex].items = await getBlogsByTopic(document.data.body[curatedTopicsIndex].items)
    }

    document.data.meta = {
      title: document.data.page_title[0].text,
      summary: document.data.meta_description,
    };

    const props = {document, blogs};
    return props;
  } catch (error) {
    console.error("Prismic error");
    console.log(error);
    return { document: null, prismicErr: error, pageOptions: {} };
  }
};

export default ResourcesHub;
