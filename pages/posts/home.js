import React from "react";
import Layout from "../../components/layout";
import { DoughnutDemo } from "../../components/Chart/DoughnutDemo";
import { LineDemo } from "../../components/Chart/LineDemo";
import { BarDemo } from "../../components/Chart/BarDemo";
import LastTimeRecord from "../../components/LastTimeRecord";

export default function home() {
  return (
    <Layout>
      <section className="grid grid-cols-2 gap-3">
        <section className="m-1 rounded-lg overflow-hidden">
          <div className="shadow-lg rounded-lg">
            <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
            <DoughnutDemo />
          </div>
        </section>
        <section className="m-1 rounded-lg overflow-hidden">
          <div className="shadow-lg rounded-lg">
            <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
            <LineDemo />
          </div>
        </section>
        <section className="m-1 rounded-lg overflow-hidden">
          <div className="shadow-lg rounded-lg">
            <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
            <BarDemo />
          </div>
        </section>
        <section className="m-1 rounded-lg overflow-hidden">
          <div className="shadow-lg rounded-lg">
            <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
            <LastTimeRecord />
          </div>
        </section>
      </section>
    </Layout>
  );
}
