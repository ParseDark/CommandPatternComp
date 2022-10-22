import { useMemo, useState } from "react";
import { fetcher } from "../utils/utils";

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
      fetcher(config.dataSource).then((res) => {
        setConfigs((pre) => {
          return {
            ...pre,
            [k]: {
              ...config,
              data: res,
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
