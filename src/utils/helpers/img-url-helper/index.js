import {
  CLOUDINARY_HOST,
  CLOUDINARY_QUERY_HEIGHT,
  CLOUDINARY_QUERY_SCALE,
  CLOUDINARY_QUERY_WIDTH,
  CLOUDINARY_UPLOAD_PATH,
  GO_STATIC_HOST,
  PRISMIC_IO_HOST,
  SLASH
} from "../../../constants/common.constant";

export class ImageUrlHelper {

  static getResponsiveImagePath(url, w, h, format = "webp") {
    if (!url || !url.includes("http"))
      return url

    let domain = (new URL(url));
    let width = this.getSize(w);
    let height = this.getSize(h);

    switch (domain.host) {
      case CLOUDINARY_HOST:
        domain.pathname = this.getResponsiveCloudinaryPath(domain.pathname, width, height, format);
        break;
      case PRISMIC_IO_HOST:
        this.getResponsivePrismicIoPath(domain, width, height, format);
        break;
      case GO_STATIC_HOST:
        this.getGoStaticHostPath(domain, format);
        break;
    }
    // if (!(domain.pathname.indexOf("upload/q_60") !== -1)) {
    //   domain.pathname = domain.pathname.replace(/upload/i, "upload/q_60")
    // }
    return domain.href;
  }

  static getGoStaticHostPath(domain, format) {
    const extension = domain.pathname.split(".");
    if (extension[1] !== "webp") {
      domain.searchParams.set("webp", format);
      domain.pathname = domain.pathname.replace(extension[1], "webp");
    }
  }

  static getResponsivePrismicIoPath(domain, width, height, format) {
    domain.searchParams.set("fm", format);

    if (width)
      domain.searchParams.set("w", width);
    else
      domain.searchParams.delete("w");
    if (height)
      domain.searchParams.set("h", height);
    else
      domain.searchParams.delete("h");
  }

  static getResponsiveCloudinaryPath(path, width, height, format) {
    let pathTypeWebp = path.replace(".jpg", `.${ format }`).replace(".png", `.${ format }`)
    let pathSplits = pathTypeWebp.split(CLOUDINARY_UPLOAD_PATH);
    let basePath = pathSplits[0];
    let resourcePath = this.excludePathParams(pathSplits[1]);
    return [basePath, resourcePath].join(this.getCloudinaryQueryPathSplit(width, height));
  }

  static getCloudinaryQueryPathSplit(width, height) {
    let widthQuery = "";
    let heightQuery = "";
    if (width)
      widthQuery = `${ CLOUDINARY_QUERY_WIDTH }${ width }`;
    if (height)
      heightQuery = `${ CLOUDINARY_QUERY_HEIGHT }${ height }`;

    return `${ CLOUDINARY_UPLOAD_PATH }${ CLOUDINARY_QUERY_SCALE }${ heightQuery }${ widthQuery }${ SLASH }`;
  }

  static excludePathParams(resourcePath) {
    const pathSplits = resourcePath.split(SLASH);
    return pathSplits.slice(pathSplits.length - 2, pathSplits.length).join(SLASH);
  };


  static getSize(n) {
    const defaultValue = 99999999999999;
    if (n === undefined || n === null) {
      return null;
    }

    if (Array.isArray(n)) {
      let size = n.reduce((min, current) => {
        if (current && (!isNaN(current) && current <= 1 && current > 0)) {
          return Math.min(min, current);
        } else {
          return min;
        }
      }, defaultValue);
      if (size === defaultValue) {
        return null;
      }
      return size;
    }

    if (isNaN(n) || (!isNaN(n) && n <= 1 && n > 0)) {
      return null;
    }

    return n;
  }

}