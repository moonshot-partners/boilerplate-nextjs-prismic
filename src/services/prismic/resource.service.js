import {getItemsByDocumentType} from "../../api"
import { RESOURCE_SEO } from "../../constants/prismic-documents.constant"

/**
 * Get blog data from prismic api and return it with a new format
 * @returns formmated blog from prismic api result
 */
export const getMainSlice = async () => {
    const response = await getItemsByDocumentType(RESOURCE_SEO)

    return response[0]
}