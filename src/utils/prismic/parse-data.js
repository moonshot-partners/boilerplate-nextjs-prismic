import _isFunction from "lodash/isFunction";

const { prismicParseData } = require("../../constants/prismic-parse-data.constant");
const { availableSlices } = require("../../constants/prismic.constant");

export const parseInData = (data) => {
  data?.forEach((section, index) => {
    if (section?.slice_type) {
      if(availableSlices.includes(section.slice_type)){
        data[index] = { ...section?.primary, ...section };
        return Object.keys(data[index]).forEach((key_section) => {
          if (!_isFunction(prismicParseData[section?.slice_type][key_section])) {
            section[key_section] = section[key_section];
            return;
          }
          prismicParseData[section?.slice_type][key_section](data[index]);
        });
      }
    }
  });
};
