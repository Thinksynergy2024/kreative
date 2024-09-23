import React from "react";
import CustomizedLayout from "@/components/layout/customized-layout";
import AuthGuard from "@/assets/hoc/authguard";
import Link from "next/link";

const Vaselife = () => {
  return (
    <section className="p-4 md:flex items-center justify-between gap-4 md:space-y-0 space-y-4">
      {/* <Link className="md:w-3/12" href="/dashboard/create-test"> */}
        <div className="md:w-3/12 bg-white shadow-xl  p-4 rounded flex items-center justify-center h-32">
          Create Test
        </div>
      {/* </Link> */}
      <Link className="md:w-3/12" href="/dashboard/add-measurement">
        <div className="bg-white shadow-xl p-4 rounded flex items-center justify-center h-32">
          Add Measurement
        </div>
      </Link>
      <div className="bg-white shadow-xl md:w-3/12 p-4 rounded flex items-center justify-center h-32">
        Item Three
      </div>
      <div className="bg-white shadow-xl md:w-3/12 p-4 rounded flex items-center justify-center h-32">
        Item Three
      </div>
    </section>
  );
};

Vaselife.getLayout = (page) => (
  <AuthGuard>
    <CustomizedLayout>{page}</CustomizedLayout>
  </AuthGuard>
);
export default Vaselife;
