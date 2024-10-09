import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import { useSelector } from "react-redux";
import AddMeasurementDialog from "./measurement-dialog";
import UpdateTestDialog from "./update-test-dialog";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

const Varities = () => {
  const [open, setOpen] = React.useState(false);
  const [openTestDialog, setOpenTestDialog] = React.useState(false);
  const { measurements } = useSelector((store) => store.test);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenTestDialog = () => {
    setOpenTestDialog(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseTestDialog = () => {
    setOpenTestDialog(false);
  };

  return (
    <section className="md:w-6/12 md:mx-auto mx-4 mt-4">
      <section className="">
        {Array.isArray(measurements) &&
          measurements?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded p-4 text-sm my-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold">Test Id:</p>
                <p className="text-xs">{item?.testid}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Variety Code:</p>
                <p className="text-xs">{item?.varietycode}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Date on vase:</p>
                <p className="text-xs">{item?.dateonvasegermany}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Phase:</p>
                <p className="text-xs">{item?.phase}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Date of shipment:</p>
                <p className="text-xs">{item?.dateofshipment}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Damaged on arrival:</p>
                <p className="text-xs">{item?.damagedonarrival}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Cut stage on arrival:</p>
                <p className="text-xs">{item?.cutstageonarrival}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Cut stage on end of test:</p>
                <p className="text-xs">{item?.cutstageatendoftest}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Day seven presentation:</p>
                <p className="text-xs">{item?.daysevenpresentation}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Bud height:</p>
                <p className="text-xs">{item?.budheight}</p>
              </div>
              <hr className="bg-gray my-2" />
              <div className="flex items-center justify-between">
                <p className="font-bold">Reason for entering test:</p>
                <p className="text-xs">{item?.reasonforenteringtest}</p>
              </div>
              <hr className="bg-gray my-2" />

              <div className="flex items-center gap-2 justify-between">
                <button
                  onClick={handleClickOpenTestDialog}
                  className="text-center text-white bg-primary py-2 px-4 rounded w-full flex text-xs items-center justify-center gap-2"
                >
                  <BiSolidEditAlt />
                  Edit Test
                </button>
                <button
                  onClick={handleClickOpen}
                  className="text-center text-white bg-primary text-xs py-2 px-4 rounded w-full flex items-center justify-center gap-2"
                >
                  <IoMdAdd />
                  Add Measurement
                </button>
              </div>

              {/* AddMeasurementDialog */}
              <AddMeasurementDialog
                open={open}
                setOpen={setOpen}
                item={item}
                handleClose={handleClose}
              />

              <UpdateTestDialog
                open={openTestDialog}
                setOpen={setOpenTestDialog}
                item={item}
                handleClose={handleCloseTestDialog}
              />
            </div>
          ))}
      </section>
    </section>
  );
};

Varities.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default Varities;
