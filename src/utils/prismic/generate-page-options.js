import _isFunction from 'lodash/isFunction';

export const setApiEndpoint= (pageOptions, page) => {
    pageOptions.apiEndpoint = typeof pageOptions.apiEndpoint === 'undefined' ? '/api/page' : pageOptions.apiEndpoint;
}

export const setPageQuery = (pageOptions, page = 'new-homepage') => {
    pageOptions.pageQuery = pageOptions.pageQuery
    ? _isFunction(pageOptions.pageQuery) ? pageOptions.pageQuery({ req, query }) : pageOptions.pageQuery : page;
}

export const setPageType = (pageOptions) => {
    pageOptions.pageType = pageOptions.pageType
    ? _isFunction(pageOptions.pageType) ? pageOptions.pageType({ req, query }) : pageOptions.pageType : 'landing_pages_v2';
}