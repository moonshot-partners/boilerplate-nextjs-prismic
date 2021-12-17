module.exports = (doc) => {
  switch (doc.type) {
    case 'post':
      return `/blog/post-${doc.uid}`;
    case 'resource':
      return `/resource/${doc.uid}`;
    case 'event':
      return `/event/${doc.uid}`;
    case 'customer_story':
      return `/customer-story/${doc.uid}`;
    case 'policies':
      return `/terms/${doc.uid}`;
    case 'term':
      return `/terms/${doc.uid}`;
    case 'content_partner':
      return `/content-partner/${doc.uid}`;
    case 'distribution_partner':
      return `/distribution-partner/${doc.uid}`;
    case 'developers_landing_page':
      let path = doc.uid === 'developers' ? '' : `/${doc.uid}`;
      if (doc.uid === 'developers_api_reference_v2') {
        path = '/api/reference/v2';
      } else if (doc.uid === 'developers_api_reference_auth') {
        path = '/api/reference/auth';
      }
      return `/developers${path}`;
    case 'developers_docs':
      return `/developers/partners/concepts/${doc.uid}`;
    case 'customer_developers_docs':
      return `/developers/customers/concepts/${doc.uid}`;
    case 'topic_landing_page':
      return `/training/${doc.uid}`;
    case 'developers_use_case':
      return `/developers/partners/use-cases/${doc.uid}`;
    case 'customer_developers_use_case':
      return `/developers/customers/use-cases/${doc.uid}`;
    case 'self-serve_landing_page':
      return `/discover/topics/${doc.uid}`;
    case 'homepage':
      return '/';
      case 'resources-hub':
        return '/resources-hub';
    default:
      return `/${doc.uid}`;
  }
};
