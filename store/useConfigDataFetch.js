import { useMemo, useState } from "react";
import queryLighthouseAPI from "../sdk";
import createTemplate from "../utils/queryTemplate";

const useConfigDataFetch = (defaultConfigs) => {
  const [configs, setConfigs] = useState(
    Object.fromEntries(defaultConfigs.map((config) => [config.title, config]))
  );
  const configList = useMemo(
    () => Object.entries(configs).map(([, v]) => v),
    [configs]
  );

  const initConfigJob = () => {
    Object.entries(configs).map(([k, config]) => {
      const queryParams = createTemplate({
        ...config.payload,
      });
      queryLighthouseAPI(queryParams).then((res) => {
        setConfigs((pre) => {
          return {
            ...pre,
            [k]: {
              ...config,
              data: config.formatValueFunc ? config.formatValueFunc(res) : res,
            },
          };
        });
      });
    });
  };

  return [
    {
      configs: configList,
    },
    { initConfigJob },
  ];
};

export default useConfigDataFetch;
