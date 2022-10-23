import { useEffect, useMemo, useState } from "react";
import queryLighthouseAPI from "../sdk";
import createTemplate from "../utils/queryTemplate";

const formatDefaultConfig = (v) => Object.fromEntries(v.map((config) => [config.title, { ...config, loading: true }]))

const useConfigDataFetch = (defaultConfigs) => {
  const [configs, setConfigs] = useState(
    formatDefaultConfig(defaultConfigs)
  );
  const configList = useMemo(
    () => Object.entries(configs).map(([, v]) => v),
    [configs]
  );

  const initConfigJob = (configs) => {
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
              loading: false,
            },
          };
        });
      });
    });
  };

  useEffect(() => {
    debugger;
    initConfigJob(formatDefaultConfig(defaultConfigs));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultConfigs]);

  return [
    {
      configs: configList,
    },
    { initConfigJob },
  ];
};

export default useConfigDataFetch;
