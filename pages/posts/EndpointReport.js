import React, { useEffect, useMemo } from "react";
import { sum } from "lodash";

import NumberCard from "../../components/NumberCard";
import ShadowCard from "../../components/Card";
import useConfigDataFetch from "../../store/useConfigDataFetch";
import endpointList from "../../screenshots/endpoint/EndpointList.jpg";
import endpointDetail from "../../screenshots/endpoint/endpointDetail.jpg";
import createEndpoint from "../../screenshots/endpoint/createEndpoint.jpg";
import PageViewComponent from "../../components/PageViewComponent";
import withDatepicker from "../../components/withDatepicker";

function EndpointReport({ timeRanger }) {
  const incrementalData = useMemo(
    () => [
      {
        title: "Activate User",
        value: 20,
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
              value: "intelligenceHub_aiPlatform_endpoint",
              key: "event_name",
              selected: true,
            },
          ],
          ...timeRanger,
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
          ...timeRanger,
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
          ...timeRanger,
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
          ...timeRanger,
        },
        formatValueFunc: (res) => {
          return sum(res?.records);
        },
      },
    ],
    [timeRanger]
  );

  const PageViews = useMemo(
    () => [
      {
        title: "Endpoint List",
        activateUser: 300,
        accessCount: 300,
        imageLink: endpointList,
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
              key: "event_name",
              value: "intelligenceHub_aiPlatform_endpointList_screen_shown",
              predicate: "equal",
            },
          ],
          ...timeRanger,
        },
        formatValueFunc: (res) => {
          return {
            activateUser: res?.internal_user?.length || 0,
            accessCount: sum(res?.page_views),
          };
        },
      },
      {
        title: "Endpoint Detail",
        activateUser: 300,
        accessCount: 300,
        imageLink: endpointDetail,
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
              key: "event_name",
              value: "intelligenceHub_aiPlatform_endpointDetails_screen_shown",
              predicate: "equal",
            },
          ],
          ...timeRanger,
        },
        formatValueFunc: (res) => {
          return {
            activateUser: res?.internal_user?.length || 0,
            accessCount: sum(res?.page_views),
          };
        },
      },
      {
        title: "Endpoint Create",
        activateUser: 300,
        accessCount: 300,
        imageLink: createEndpoint,
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
              key: "event_name",
              value: "intelligenceHub_aiPlatform_endpointRegister_screen_shown",
              predicate: "equal",
            },
          ],
          ...timeRanger,
        },
        formatValueFunc: (res) => {
          return {
            activateUser: res?.internal_user?.length || 0,
            accessCount: sum(res?.page_views),
          };
        },
      },
      {
        title: "Endpoint Perf Testing",
        activateUser: 300,
        accessCount: 300,
        imageLink: createEndpoint,
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
              key: "event_name",
              value:
                "intelligenceHub_aiPlatform_endpointPerformanceTestingReport_screen_shown",
              predicate: "equal",
            },
          ],
          ...timeRanger,
        },
        formatValueFunc: (res) => {
          return {
            activateUser: res?.internal_user?.length || 0,
            accessCount: sum(res?.page_views),
          };
        },
      },
    ],
    [timeRanger]
  );

  const [{ configs }] = useConfigDataFetch(incrementalData);
  const [{ configs: pageViewsConfig }] = useConfigDataFetch(PageViews);

  return (
    <section className="grid grid-cols-12 gap-3">
      {(configs || []).map((i) => (
        <ShadowCard
          title={i.title}
          colWidth={2}
          key={i.title}
          loading={i.loading}
        >
          <NumberCard value={i.data} prefix={i.prefix} />
        </ShadowCard>
      ))}
      {pageViewsConfig.map((page) => (
        <PageViewComponent key={page.title} page={page} />
      ))}
    </section>
  );
}

export default withDatepicker(EndpointReport);
