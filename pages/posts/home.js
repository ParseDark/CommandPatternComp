import React from "react";
import Layout from "../../components/layout";
import { DoughnutDemo } from "../../components/Chart/DoughnutDemo";
import { LineDemo } from "../../components/Chart/LineDemo";
import { BarDemo } from "../../components/Chart/BarDemo";
import LastTimeRecord from "../../components/LastTimeRecord";
import Calendar from "../../components/Calendar";
import NumberCard from "../../components/NumberCard";

export default function Home() {
  return (
    <Layout>
      <section className="grid grid-cols-12 gap-3">
        <section className="m-1 rounded-lg col-span-3 shadow-lg">
          <div className="rounded-lg h-full">
            <div className="py-3 px-5 bg-gray-100 font-bold">
              Maintain testenv(s)
            </div>
            <NumberCard value={20} />
          </div>
        </section>
        <section className="m-1 rounded-lg col-span-5 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">Success Rate</div>
            <DoughnutDemo />
          </div>
        </section>
        <section className="m-1 rounded-lg col-span-4 shadow-lg min-h-max">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">
              Trigger Calendar
            </div>
            <Calendar />
          </div>
        </section>
        <section className="m-1 rounded-lg col-span-6 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">User Growth</div>
            <LineDemo />
          </div>
        </section>
        <section className="m-1 rounded-lg col-span-6 shadow-lg">
          <div className="rounded-lg">
            <div className="py-3 px-5 bg-gray-100 font-bold">Last Time</div>
            <BarDemo />
          </div>
        </section>
      </section>
    </Layout>
  );
}
