import React from "react";
import Layout from "../../components/layout";
import { DoughnutDemo } from "../../components/Chart/DoughnutDemo";
import NumberCard from "../../components/NumberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from "../../components/Card";

const incrementalData = [
  {
    title: "Activate User",
    value: 20,
    dataSource: "/api/activateUser?timeRange=[x,y]&events=ActivateUser",
  },
  {
    title: "Pipeline Edit",
    value: 20,
    dataSource: "/api/newEndpoint",
  },
  {
    title: "Pipeline Schedule",
    value: 100,
    dataSource: "/api/single",
  },
  {
    title: "Pipeline Run Debug",
    value: 100,
    dataSource: "/api/advance",
  },
  {
    title: "Add New Pipeline",
    value: 100,
    dataSource: "/api/advance",
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
  return (
    <Layout>
      <section className="grid grid-cols-12 gap-3">
        {incrementalData.map((i) => (
          <ShadowCard title={i.title} colWidth={2} key={i.title}>
            <NumberCard value={i.value} prefix={i.prefix} />
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
