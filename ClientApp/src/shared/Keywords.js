import { fetchServices } from "./Services";

const keywordReducer = (keywordObj, service) => {
  const { keywords } = service;

  keywords.forEach(keyword => {
    let target = keywordObj[keyword];

    if (target) {
      target = {
        instances: (target.instances += 1)
      };
    } else {
      keywordObj[keyword] = {
        instances: 1,
        description: keyword
      };
    }
  });

  return keywordObj;
};

const mapKeywordObjToArray = keywordData =>
  Object.keys(keywordData).map(key => {
    return keywordData[key];
  });

const fetchKeywords = async callback => {
  fetchServices(services => {
    if (services) {
      const keywordData = services.reduce(keywordReducer, {});

      if (callback && typeof callback === "function") {
        const keywordArray = mapKeywordObjToArray(keywordData).sort(
          (a, b) => b.instances - a.instances
        );
        callback(keywordArray);
      }
    }
  }).catch(console.error);
};

export { fetchKeywords };
