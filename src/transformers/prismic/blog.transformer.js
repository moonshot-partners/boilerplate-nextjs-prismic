import { prismicElementType } from "../../constants/prismic.constant"

/**
 * Take a prismic response and format it
 * @param {object} source Prismic response
 * @returns Formmated blog
 */
export const transformBlog = (source) => {
    return {
        id: source.id,
        uid: source.uid,
        type: source.type,
        publication_date: source.last_publication_date,
        lang: source.lang,
        tags: source.tags,
        slugs: source.slugs,
        attributes: {
            title: {
                value: source.data.title.length ? source.data.title[0].text : "",
                type: source.data.title.length ? source.data.title[0].type : "",
                meta: source.data.title
            },
            image: {
                value: source.data.featured_image.url,
                type: prismicElementType.IMG,
                meta: source.data.featured_image
            },
            summary: {
                value: source.data.summary.length > 0 ? source.data.summary[0].text : "",
                type: source.data.summary.length > 0 ? source.data.summary[0].type : "",
                meta: source.data.summary
            }
        }
    }
}