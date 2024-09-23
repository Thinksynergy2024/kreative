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
    <section className="p-4">
      <section className="grid md:grid-cols-4 gap-4">
        {tests.map((item, index) => (
          <div onClick={handleClickOpen} className="relative overflow-hidden bg-white shadow rounded h-60 cursor-pointer">
            {item.path && item.attachmentsid && item.name !== "" ? (
              <>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent overflow-hidden"
                  style={{ zIndex: 1 }}
                ></div>
                <img
                  src={`https://kordesroses.thinksynergyltd.com/${item?.path}${item?.attachmentsid}_${item?.name}`}
                  alt={item?.name}
                  className="h-60 object-cover w-full rounded"
                />
                <section className="absolute text-white bottom-2 z-10 px-4">
                  <div className="flex items-center gap-4 justify-between">
                    <p className="mb-4">{item?.productname}</p>
                    <p className="mb-4">{item?.location}</p>
                  </div>
                  <p className="text-sm">{item?.tradename}</p>
                  <p className="text-sm">{item?.denomination}</p>
                </section>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent overflow-hidden"
                  style={{ zIndex: 1 }}
                ></div>
                <img
                  src="/logo.jpeg"
                  alt=""
                //   className="h-60 object-cover w-full rounded"
                />
              </>
            )}
          </div>
        ))}
      </section>
      <AddMeasurementDialog {...{open,setOpen,handleClickOpen}} />
    </section>
  );
};

Varities.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default Varities;
