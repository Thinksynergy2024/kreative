import AuthGuard from "@/assets/hoc/authguard";
import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";

const Dashboard = () => {
  return <section className="p-4">Dashboard</section>;
};

Dashboard.getLayout = (page) => (
  <AuthGuard>
    <CustomizedLayout>{page}</CustomizedLayout>
  </AuthGuard>
);
export default Dashboard;
