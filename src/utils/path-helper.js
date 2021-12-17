import {
  CLOUDINARY_HOST,
  CLOUDINARY_QUERY_HEIGHT,
  CLOUDINARY_QUERY_SCALE,
  CLOUDINARY_QUERY_WIDTH,
  CLOUDINARY_UPLOAD_PATH,
  PRISMIC_IO_HOST,
  SLASH
} from "../constants/common.constant";

export class PathHelper {
  imageExtension = "png";

  constructor() {
    const browser = this.getBrowser();
    if (browser.name === "Edge") {
      if (browser.version >= 20)
        this.imageExtension = "webp";
    } else if (browser.name === "Firefox") {
      if (browser.version >= 70)
        this.imageExtension = "webp";
    } else if (browser.name === "Chrome") {
      if (browser.version >= 30)
        this.imageExtension = "webp";
    } else if (browser.name === "Safari") {
      if (browser.version >= 15)
        this.imageExtension = "webp";
    } else if (browser.name === "Opera") {
      if (browser.version >= 20)
        this.imageExtension = "webp";
    }
  }

  getResponsiveImagePath(url, w, h) {
    if (!url || !url.includes("http"))
      return url;

    let domain = (new URL(url));
    let width = this.getSize(w);
    let height = this.getSize(h);

    switch (domain.host) {
      case CLOUDINARY_HOST:
        domain.pathname = this.getResponsiveCloudinaryPath(domain.pathname, width, height);
        break;
      case PRISMIC_IO_HOST:
        domain.searchParams.set("fm", this.imageExtension);

        if (width)
          domain.searchParams.set("w", width);
        else
          domain.searchParams.delete("w");
        if (height)
          domain.searchParams.set("h", height);
        else
          domain.searchParams.delete("h");
        break;
    }
    return domain.href;
  }


  getResponsiveCloudinaryPath(path, width, height) {
    let pathTypeWebp = path.replace(".jpg", `.${ this.imageExtension }`).replace(".png", `.${ this.imageExtension }`);
    let pathSplits = pathTypeWebp.split(CLOUDINARY_UPLOAD_PATH);
    let basePath = pathSplits[0];
    let resourcePath = this.excludePathParams(pathSplits[1]);
    return [basePath, resourcePath].join(this.getCloudinaryQueryPathSplit(width, height));
  }

  getCloudinaryQueryPathSplit(width, height) {
    let widthQuery = "";
    let heightQuery = "";
    if (width)
      widthQuery = `${ CLOUDINARY_QUERY_WIDTH }${ width }`;
    if (height)
      heightQuery = `${ CLOUDINARY_QUERY_HEIGHT }${ height }`;

    return `${ CLOUDINARY_UPLOAD_PATH }${ CLOUDINARY_QUERY_SCALE }${ heightQuery }${ widthQuery }${ SLASH }`;
  }

  excludePathParams(resourcePath) {
    const pathSplits = resourcePath.split(SLASH);
    return pathSplits.slice(pathSplits.length - 2, pathSplits.length).join(SLASH);
  };

  getSize(n) {
    const defaultValue = 99999999999999;
    let size = n;
    if (n === undefined || n === null) {
      return null;
    }
    if (typeof n === "string" && n.includes("px")) {
      size = n.match(/\d/g).join("");
    }


    if (Array.isArray(n)) {
      size = n.reduce((min, current) => {
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

    if (isNaN(size) || (!isNaN(size) && size <= 1 && size > 0)) {
      return null;
    }

    return size;
  }

  getBrowser() {
    const isServer = () => typeof window === `undefined`;
    if (!isServer()) {
      let ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: "IE", version: (tem[1] || "") };
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
          return { name: "Opera", version: tem[1] };
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }
      return {
        name: M[0],
        version: M[1]
      };
    }
    return {};
  }

  static getImageName(src) {
    let path;
    if (!src || !src.includes("http")) {
      path = src.split("/");
    } else {
      let domain = (new URL(src));
      path = domain.pathname.split("/");
    }

    return path[path.length - 1];
  }
}
