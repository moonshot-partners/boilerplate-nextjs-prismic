import dynamic from 'next/dynamic';
import { prismicSliceType } from '../../../constants/prismic.constant';

const Header = dynamic(() => import("../../../components/slices/campaign-landing").then((m) => m.CampaignLanding));
const Blog = dynamic(() => import("../../../components/slices/blog").then((m) => m.Blog));
const CuratedTopics = dynamic(() => import("../../../components/slices/curated-topics").then((m) => m.CuratedTopics));

export const sliceTypeToComponentMapping = {
  [prismicSliceType.CAMPAIGN_LANDING]: Header,
  [prismicSliceType.BLOG]: Blog,
  [prismicSliceType.CURATED_TOPICS]: CuratedTopics,
};
