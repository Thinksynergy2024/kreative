import AuthGuard from "@/assets/hoc/authguard";
import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import ActiveTestGraph from "./graphs/active-test-graph";
import CompleteTestGraph from "./graphs/complete-test-graph";

const Dashboard = () => {
  return (
    <section className="p-4 space-y-4">
      <ActiveTestGraph />
      <CompleteTestGraph />
    </section>
  );
};

Dashboard.getLayout = (page) => (
  <AuthGuard>
    <CustomizedLayout>{page}</CustomizedLayout>
  </AuthGuard>
);
export default Dashboard;
