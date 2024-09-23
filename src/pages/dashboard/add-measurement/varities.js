import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import { useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import AddMeasurementDialog from "./measurement-dialog";

const Varities = () => {
  const [open, setOpen] = React.useState(false);
  const { tests } = useSelector((store) => store.test);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <section className="w-5/12 mx-auto mt-4">
      <section className="">
        {tests.map((item, index) => (
          <div
            key={index}
            onClick={handleClickOpen}
            className="relative overflow-hidden bg-white shadow rounded h-60 cursor-pointer p-4 text-sm"
          >
            <div className="flex items-center justify-between">
              <p>Test Id</p>
              <p>{item.testid}</p>
            </div>
            <hr className="bg-gray my-2" />
            <div className="flex items-center justify-between">
              <p>Variety Code</p>
              <p>{item.varietycode}</p>
            </div>
            <hr className="bg-gray my-2" />
            <div className="flex items-center justify-between">
              <p>Date on verse</p>
              <p>{item.dateonvase}</p>
            </div>
            <hr className="bg-gray my-2" />
            <div className="flex items-center justify-between">
              <p>Phase</p>
              <p>{item.phase}</p>
            </div>
            <hr className="bg-gray my-2" />
            <AddMeasurementDialog {...{ open, setOpen, handleClickOpen,item }} />
          </div>
        ))}
      </section>
    </section>
  );
};

Varities.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default Varities;
