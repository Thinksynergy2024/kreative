import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import { useSelector } from "react-redux";
import AddMeasurementDialog from "./measurement-dialog";

const Varities = () => {
  const [open, setOpen] = React.useState(false);
  const { measurements } = useSelector((store) => store.test);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="md:w-6/12 md:mx-auto mx-4 mt-4">
      <section className="">
        {measurements.map((item, index) => (
          <div key={index} className="bg-white shadow rounded p-4 text-sm">
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
              <p>Date on vase</p>
              <p>{item.dateonvase}</p>
            </div>
            <hr className="bg-gray my-2" />
            <div className="flex items-center justify-between">
              <p>Phase</p>
              <p>{item.phase}</p>
            </div>
            <hr className="bg-gray my-2" />

            {/* Button to open the dialog */}
            <button
              onClick={handleClickOpen}
              className="text-center text-white bg-primary py-2 px-4 rounded w-full"
            >
              Add Measurement
            </button>

            {/* AddMeasurementDialog */}
            <AddMeasurementDialog
              open={open}
              setOpen={setOpen}
              item={item}
              handleClose={handleClose}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

Varities.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default Varities;
