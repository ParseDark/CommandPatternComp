import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { DoughnutDemo } from "../../components/Chart/DoughnutDemo";
import NumberCard from "../../components/NumberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from "../../components/Card";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useConfigDataFetch from "../../store/useConfigDataFetch";
import { sum } from "lodash";

const timeRange = {
  since: "2022-08-01T00:00:00.000Z",
  until: "2022-10-22T23:59:59.999Z",
};

const incrementalData = [
  {
    title: "Activate User",
    value: 20,
    payload: {
      filters: [
        { predicate: "equal", value: "insightshubnodeweb", key: "component" },
        {
          predicate: "equal",
          key: "page_group",
          value: "intelligenceHub:aiPlatform",
          selected: true,
        },
        {
          predicate: "contains",
          value: "intelligenceHub_aiPlatform_endpoint",
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
    title: "New Endpoint",
    value: 20,
    payload: {
      filters: [
        {
          predicate: "contains",
          selected: true,
          key: "event_name",
          value: "createSeldonEndpointSDK",
        },
        {
          predicate: "does not contain",
          selected: true,
          key: "event_name",
          value: "Err",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return sum(res?.records);
    },
  },
  {
    title: "Single Endpoint Request",
    value: 100,
    payload: {
      filters: [
        {
          predicate: "contains",
          selected: true,
          value: "submitSeldonSingleDeploySDK",
          key: "event_name",
        },
        {
          predicate: "does not contain",
          selected: true,
          key: "event_name",
          value: "Err",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return sum(res?.records);
    },
  },
  {
    title: "Advance Endpoint Request",
    value: 100,
    payload: {
      filters: [
        {
          predicate: "contains",
          selected: true,
          key: "event_name",
          value: "submitSeldonCanaryDeploySDK",
        },
        {
          predicate: "contains",
          selected: true,
          key: "event_name",
          value: "submitSeldonShadowDeploySDK",
        },
        {
          predicate: "contains",
          selected: true,
          key: "event_name",
          value: "submitSeldonABDeploySDK",
        },
        {
          predicate: "contains",
          selected: true,
          key: "event_name",
          value: "submitSeldonMABDeploySDK",
        },
        {
          predicate: "does not contain",
          selected: true,
          key: "event_name",
          value: "Err",
        },
      ],
      ...timeRange,
    },
    formatValueFunc: (res) => {
      return 20;
    },
  },
];

const PageViews = [
  {
    title: "Endpoint List",
    activateUser: 300,
    accessCount: 300,
    payload: {
      filters: [
        { predicate: "equal", value: "insightshubnodeweb", key: "component" },
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
  },
  {
    title: "Endpoint Detail",
    activateUser: 300,
    accessCount: 300,
    payload: {
      filters: [
        { predicate: "equal", value: "insightshubnodeweb", key: "component" },
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
  },
  {
    title: "Endpoint Create",
    activateUser: 300,
    accessCount: 300,
    payload: {
      filters: [
        { predicate: "equal", value: "insightshubnodeweb", key: "component" },
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

        <ShadowCard title={" Request Deploy Distribution Rate"} colWidth={4}>
          <DoughnutDemo />
        </ShadowCard>

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
