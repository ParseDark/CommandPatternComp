import React, { useEffect } from "react";
import Layout from "../../components/layout";
import NumberCard from "../../components/NumberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from "../../components/Card";
import useConfigDataFetch from "../../store/useConfigDataFetch";
import { sum } from "lodash";

const timeRange = {
  since: "2022-08-01T00:00:00.000Z",
  until: "2022-10-22T23:59:59.999Z",
};

const incrementalData = [
  {
    title: "Activate User",
    payload: {
      filters: [
        {
          predicate: "equal",
          value: "insightshubnodeweb",
          key: "component",
        },
        {
          predicate: "equal",
          key: "page_group",
          value: "intelligenceHub:aiPlatform",
          selected: true,
        },
        {
          predicate: "contains",
          value: "intelligenceHub_aiPlatform_pipeline",
          key: "event_name",
          selected: true,
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return res?.internal_user?.length || 0;
    },
  },
  {
    title: "Add New Pipeline",
    payload: {
      filters: [
        {
          predicate: "contains",
          key: "event_name",
          value: "createPipelineSDK",
          selected: true,
        },
        {
          predicate: "does not contain",
          selected: true,
          value: "Err",
          key: "event_name",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return sum(res?.records);
    },
  },
  {
    title: "Pipeline Edit",
    payload: {
      filters: [
        {
          predicate: "contains",
          key: "event_name",
          value: "updatePipelineDetailSDK",
          selected: true,
        },
        {
          predicate: "contains",
          key: "event_name",
          value: "updatePipelineGlobalConfigSDK",
          selected: true,
        },
        {
          predicate: "does not contain",
          selected: true,
          value: "Err",
          key: "event_name",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return sum(res?.records);
    },
  },
  {
    title: "Pipeline Schedule",
    payload: {
      filters: [
        {
          predicate: "contains",
          key: "event_name",
          value: "schedulePipelineSDK",
          selected: true,
        },
        {
          predicate: "does not contain",
          selected: true,
          value: "Err",
          key: "event_name",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return sum(res?.records);
    },
  },
  {
    title: "Pipeline Run Debug",
    payload: {
      filters: [
        {
          predicate: "contains",
          key: "event_name",
          value: "triggerPipelineTaskDebugSDK",
          selected: true,
        },
        {
          predicate: "does not contain",
          selected: true,
          value: "Err",
          key: "event_name",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return sum(res?.records);
    },
  },
];

const PageViews = [
  {
    title: "Pipeline List",
    activateUser: 300,
    accessCount: 300,
    dataSource: "/api/pageViews",
  },
  {
    title: "Pipeline Detail",
    activateUser: 300,
    accessCount: 300,
    dataSource: "/api/pageViews",
  },
  {
    title: "Pipeline Design",
    activateUser: 300,
    accessCount: 300,
    dataSource: "/api/pageViews",
  },
  {
    title: "Pipeline Debug",
    activateUser: 300,
    accessCount: 300,
    dataSource: "/api/pageViews",
  },
  {
    title: "Pipeline Monitor",
    activateUser: 300,
    accessCount: 300,
    dataSource: "/api/pageViews",
  },
];
export default function EndpointReport({}) {
  const [{ configs }, { initConfigJob }] = useConfigDataFetch(incrementalData);
  useEffect(() => {
    initConfigJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <section className="grid grid-cols-12 gap-3">
        {(configs || []).map((i) => (
          <ShadowCard title={i.title} colWidth={2} key={i.title}>
            <NumberCard value={i.data} prefix={i.prefix} />
          </ShadowCard>
        ))}

        {PageViews.map((page) => (
          <ShadowCard
            key={page.title}
            title={
              <>
                {page.title}
                <FontAwesomeIcon icon={faUser} className="ml-3" />(
                {page.activateUser})
                <FontAwesomeIcon icon={faEye} className="ml-3" />(
                {page.accessCount})
              </>
            }
            colWidth={4}
          >
            <section className="h-10">Screen + Link</section>
          </ShadowCard>
        ))}
      </section>
    </Layout>
  );
}
