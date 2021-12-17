import _groupBy from "lodash/groupBy"
import {getItemsByDocumentType, getPageByDocumentIdList} from "../../api"
import {transformBlog} from "../../transformers"
import { POST } from "../../constants/prismic-documents.constant"

/**
 * Get blog data from prismic api and return it with a new format
 * @returns formmated blog from prismic api result
 */
export const getBlogs = async () => {
    const params = {
        orderings: "[document.last_publication_date desc]"
    }

    const response = await getItemsByDocumentType(POST, params, 5, "prod")

    const result = response.map(source => transformBlog(source))

    return result
}

/**
 * Get a array of post from prismic and return all post data with format, grouped by topic
 * @param {array} items array of post items of prismic
 * @returns 
 */
export const getBlogsByTopic = async (items) => {
    const gropedItems = _groupBy(items, "topic")

    for (const key of Object.keys(gropedItems)){
        const mappedItems = gropedItems[key].map(item => item.post.id)
        
        const response = await getPageByDocumentIdList(mappedItems, "dev")

        gropedItems[key] = response.map(source => transformBlog(source))
    }

    return gropedItems
}