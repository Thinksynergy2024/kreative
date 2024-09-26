import AuthGuard from "@/assets/hoc/authguard";
import CustomizedLayout from "@/components/layout/customized-layout";
import React, { useEffect, useState } from "react";
import ActiveTestGraph from "./graphs/active-test-graph";
import CompleteTestGraph from "./graphs/complete-test-graph";
import { fetchTests } from "@/redux/service";
import { setTests } from "@/redux/features";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/assets/hoc/loading";

const Dashboard = () => {
  const recordtype = "Vase life analysis";
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { tests } = useSelector((store) => store.test);

  const getAllTests = async () => {
    const res = await fetchTests(recordtype);
    dispatch(setTests(res));
    setLoading(false);
  };

  useEffect(() => {
    if (tests.length === 0) {
      getAllTests();
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <section className="p-4 space-y-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ActiveTestGraph />
          <CompleteTestGraph />
        </>
      )}
    </section>
  );
};

Dashboard.getLayout = (page) => (
  <AuthGuard>
    <CustomizedLayout>{page}</CustomizedLayout>
  </AuthGuard>
);
export default Dashboard;
