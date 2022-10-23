import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import Layout from "./layout";

const { RangePicker } = DatePicker;

const defaultTimeRange = [
  "2022-08-01T00:00:00.000Z",
  "2022-10-22T23:59:59.999Z",
];

// eslint-disable-next-line react/display-name
const withDatepicker = (Comp) => (props) => {
  const [timeRanger, setTimeRanger] = useState(
    defaultTimeRange.map((i) => moment(i))
  );
  console.log("timeRanger: ", timeRanger);
  console.log("timeRangerFormat: ", {
    since: timeRanger[0].format("YYYY-MM-DDTHH:mm:ss.SSSSZ"),
    until: timeRanger[1].format("YYYY-MM-DDTHH:mm:ss.SSSSZ"),
  });

  return (
    <Layout>
      <section className="py-8">
        <RangePicker
          value={timeRanger}
          onChange={(v) => {
            debugger;
            setTimeRanger(v);
          }}
        />
      </section>
      <Comp
        {...props}
        timeRanger={{
          since: timeRanger[0].format("YYYY-MM-DDTHH:mm:ss.SSSSZ"),
          until: timeRanger[1].format("YYYY-MM-DDTHH:mm:ss.SSSSZ"),
        }}
      />
    </Layout>
  );
};

export default withDatepicker;
