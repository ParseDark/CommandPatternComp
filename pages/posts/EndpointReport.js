import React from "react";
import Layout from "../../components/layout";
import { DoughnutDemo } from "../../components/Chart/DoughnutDemo";
import NumberCard from "../../components/NumberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from "../../components/Card";

const incrementalData = [
  {
    title: "Activate User",
    value: 20,
    dataSource: "/api/activateUser?timeRange=[x,y]&events=ActivateUser",
  },
  {
    title: "New Endpoint",
    value: 20,
    dataSource: "/api/newEndpoint",
  },
  {
    title: "Single Endpoint Request Deploy",
    value: 100,
    dataSource: "/api/single",
  },
  {
    title: "Advance Endpoint Request Deploy",
    value: 100,
    dataSource: "/api/advance",
  },
];

const PageViews = [
  {
    title: "Endpoint List",
    value: 300,
    dataSource: "/api/pageViews",
  },
  {
    title: "Endpoint Detail",
    value: 300,
    dataSource: "/api/pageViews",
  },
  {
    title: "Endpoint Create",
    value: 300,
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

        <ShadowCard title={" Request Deploy Distribution Rate"} colWidth={4}>
          <DoughnutDemo />
        </ShadowCard>

        {PageViews.map((page) => (
          <ShadowCard
            key={page.title}
            title={
              <>
                {page.title}
                <FontAwesomeIcon icon={faEye} className="ml-3" />({page.value})
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
