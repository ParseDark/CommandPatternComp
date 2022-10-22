import React from "react";
import Layout from "../../components/layout";
import { DoughnutDemo } from "../../components/Chart/DoughnutDemo";
import { LineDemo } from "../../components/Chart/LineDemo";
import { BarDemo } from "../../components/Chart/BarDemo";
import NumberCard from "../../components/NumberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSwr(`/api/hello`, fetcher);
  const incrementalData = [
    {
      title: "Activate User",
      value: 20,
    },
    {
      title: "New Endpoint",
      value: 20,
    },
    {
      title: "Single Endpoint Request Deploy",
      value: 100,
    },
    {
      title: "Advance Endpoint Request Deploy",
      value: 100,
    },
  ];
  console.log(data, error);
  return (
    <Layout>
      <section className="grid grid-cols-12 gap-3">
        {incrementalData.map((i) => (
          <section
            className="m-1 rounded-lg col-span-2 shadow-lg"
            key={i.title}
          >
            <div className="rounded-lg h-full">
              <div className="py-3 px-5 bg-gray-100 font-bold">{i.title}</div>
              <NumberCard value={i.value} />
            </div>
          </section>
        ))}
        <section className="m-1 rounded-lg col-span-4 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">
              Request Deploy Distribution Rate
            </div>
            <div className="p-4">
              <DoughnutDemo />
            </div>
          </div>
        </section>

        <section className="m-1 rounded-lg col-span-4 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold items-center">
              User Growth
              <FontAwesomeIcon icon={faEye} className="ml-3" />
              (300)
            </div>
            <div className="p-4">Screen + Link</div>
          </div>
        </section>

        <section className="m-1 rounded-lg col-span-4 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">Last Time</div>
            <div className="p-4">
              <BarDemo />
            </div>
          </div>
        </section>

        <section className="m-1 rounded-lg col-span-4 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">Last Time</div>
            <div className="p-4">
              <BarDemo />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}
