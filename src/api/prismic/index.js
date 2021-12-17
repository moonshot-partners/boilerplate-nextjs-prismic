import axios from 'axios';

/**
 * Return the ref token from any ref id
 * @param {string} refId Reference name to do target on prismic, default master
 * @param {string} enviroment TEMPORAL: use credentials from dev or prod
 * @returns Ref token
 */
export const getPrismicRef = async (refId = "master", enviroment="dev") => {
  const response = await axios.get(`${enviroment === "dev" ? process.env.PRISMIC_ENDPOINT : process.env.PRISMIC_ENDPOINT_PROD}`, {
    params: {
      access_token: enviroment === "dev" ?  process.env.PRISMIC_ACCESS_TOKEN : process.env.PRISMIC_ACCESS_TOKEN_PROD,
    },
  });

  let ref = null
  
  if(Array.isArray(response.data.refs)){
    const refResult = response.data.refs.find(ref => ref.id === refId)

    if(refResult){
      ref = refResult.ref
    }
  }

  return ref
}

/**
 * Paginate documents by prismic document type, this return a prismic standart response 
 * @param {string} type Prismic document type
 * @param {string} ref Prismic ref token
 * @param {number} page Page number, default 1
 * @param {number} pageSize Paginator size, default 100
 * @returns Prismic paginator response
 */
export const getPageByDocumentType = async (type, ref, page=1, pageSize=100, params={}, enviroment = "dev") => {
  const response = await axios.get(`${enviroment === "dev" ? process.env.PRISMIC_ENDPOINT : process.env.PRISMIC_ENDPOINT_PROD}/documents/search`, {
    params: {
      access_token: enviroment === "dev" ?  process.env.PRISMIC_ACCESS_TOKEN : process.env.PRISMIC_ACCESS_TOKEN_PROD,
      ref,
      q: `[[any(document.type, ["${type}"])]]`,
      pageSize,
      page,
      ...params
    },
  });

  return response.data
}

/**
 * Get a document type and return all slices with this type
 * @param {string} type Type of document in prismic
 * @param {object} params Prismic configuration params
 * @param {number} limit max number of results by query, by default get all data
 * @returns Array of prismic results
 */
export const getItemsByDocumentType = async (type, params={}, limit=null, enviroment = "dev") => {
  const ref = await getPrismicRef("master", enviroment)
  let page = 1
  let result = []

  if(ref){
    if(!limit){
      while (page) {
        const response = await getPageByDocumentType(type, ref, page, 100, params, enviroment)
  
        result = result.concat(response.results)
  
        if(page < response.total_pages){
          page += 1
        }else{
          page = null
        }
      }
    }else{
      const response = await getPageByDocumentType(type, ref, page, limit, params, enviroment)

      result = response.results
    }
  }

  return result
}

/**
 * Paginate documents by list prismic document id, this return a prismic standart response 
 * @param {string[]} idList List of Prismic document id
 * @param {string} ref Prismic ref token
 * @returns Prismic paginator response
 */
 export const getPageByDocumentIdList = async (idList, enviroment = "dev", params={}) => {
  const ref = await getPrismicRef("master", enviroment)

  let result = {}

  if(ref){
    let ids = ""

    idList.forEach((id, index) => {
      ids += `"${id}"${index < idList.length -1 ? "," : ""}`
    })

    const response = await axios.get(`${enviroment === "dev" ? process.env.PRISMIC_ENDPOINT : process.env.PRISMIC_ENDPOINT_PROD}/documents/search`, {
      params: {
        access_token: enviroment === "dev" ?  process.env.PRISMIC_ACCESS_TOKEN : process.env.PRISMIC_ACCESS_TOKEN_PROD,
        ref,
        q: `[[any(document.id, [${ids}])]]`,
        pageSize: 100,
        ...params
      }
    });

    result = response.data.results
  }
  

  return result
}