import React from "react";
import AllApplications from "./AllApplications";
import AppilcationFilter from "./AppilcationFilter";

const DashboardHome = () => {
  return (
    <div>
      <AppilcationFilter></AppilcationFilter>
      <AllApplications></AllApplications>
    </div>
  );
};

export default DashboardHome;
