import React, { useEffect, useMemo } from "react";
import Layout from "../../components/layout";
import NumberCard from "../../components/NumberCard";
import ShadowCard from "../../components/Card";
import useConfigDataFetch from "../../store/useConfigDataFetch";
import { sum } from "lodash";
import pipelineList from "../../screenshots/pipeline/pipelineList.jpg";
import pipelineDetail from "../../screenshots/pipeline/pipelineDetail.jpg";
import pipelineDesign from "../../screenshots/pipeline/pipelineDesign.jpg";
import pipelineDebug from "../../screenshots/pipeline/pipelineDebug.jpg";
import PageViewComponent from "../../components/PageViewComponent";
import withDatepicker from "../../components/withDatepicker";

function PipelineReport({ timeRanger }) {
  const incrementalData = useMemo(
    () => [
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
          ...timeRanger,
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
          ...timeRanger,
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
          ...timeRanger,
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
          ...timeRanger,
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
        title: "Pipeline List",
        activateUser: 300,
        accessCount: 300,
        dataSource: "/api/pageViews",
        imageLink: pipelineList,
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
              value: "intelligenceHub_aiPlatform_pipelineList_screen_shown",
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
        title: "Pipeline Detail",
        activateUser: 300,
        accessCount: 300,
        dataSource: "/api/pageViews",
        imageLink: pipelineDetail,
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
              value: "intelligenceHub_aiPlatform_pipelineDetail_screen_shown",
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
        title: "Pipeline Design",
        activateUser: 300,
        accessCount: 300,
        dataSource: "/api/pageViews",
        imageLink: pipelineDesign,
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
              value: "intelligenceHub_aiPlatform_pipelineDesign_screen_shown",
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
        title: "Pipeline Debug",
        activateUser: 300,
        accessCount: 300,
        dataSource: "/api/pageViews",
        imageLink: pipelineDebug,
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
              value: "intelligenceHub_aiPlatform_pipelineDebug_screen_shown",
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
        <ShadowCard title={i.title} colWidth={2} key={i.title}>
          <NumberCard value={i.data} prefix={i.prefix} />
        </ShadowCard>
      ))}

      {pageViewsConfig.map((page) => (
        <PageViewComponent key={page.title} page={page} />
      ))}
    </section>
  );
}

export default withDatepicker(PipelineReport);
