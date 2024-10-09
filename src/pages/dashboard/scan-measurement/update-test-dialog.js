import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateTest } from "@/redux/service";
import { setMeasurement } from "@/redux/features";

const UpdateTestDialog = ({ open, item, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    dateofshipment: item?.dateofshipment || "",
    dateonvasegermany: item?.dateonvasegermany || "",
    damagedonarrival: item?.damagedonarrival || "",
    cutstageonarrival: item?.cutstageonarrival || "",
    cutstageatendoftest: item?.cutstageatendoftest || "",
    daysevenpresentation: item?.daysevenpresentation || "",
    budheight: item?.budheight || "",
    reasonforenteringtest: item?.reasonforenteringtest || "",
  };

  const handleUpdateTest = async (formValue, helpers) => {
    try {
      const formData = {
        ...formValue,
        testid: item?.testid,
      };
      setLoading(true);
      await updateTest(formData).then(() => {
        helpers.resetForm();
        setLoading(false);
        handleClose();
        toast.success("Vase life test details updated successfully");
        dispatch(setMeasurement([]));
      });
    } catch (err) {
      console.log("USER_ERROR ", err);
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <section className="flex items-center justify-center gap-8 overflow-hidden">
          <div className="w-full">
            <Formik initialValues={initialValues} onSubmit={handleUpdateTest}>
              <Form className="w-full">
                <section className="flex items-center justify-between gap-2">
                  <div className="w-full space-y-2">
                    <div className="">
                      <label className="text-xs font-bold" htmlFor="">Date of shipment</label>
                      <Field
                        className="block border border-gray py-2 text-xs rounded px-4 focus:outline-none w-full"
                        type="date"
                        placeholder="Date of shipment"
                        name="dateofshipment"
                      />
                    </div>
                    <div className="w-full">
                    <label className="text-xs font-bold" htmlFor="">Date on vase germany</label>
                      <Field
                        className="block border rounded text-xs border-gray py-2 px-4 focus:outline-none w-full"
                        type="date"
                        placeholder="Date on vase germany"
                        name="dateonvasegermany"
                      />
                    </div>
                    <div className="w-full">
                    <label className="text-xs font-bold" htmlFor="">Damaged on arrival</label>
                      <Field
                       as="select"
                        className="block border rounded text-xs border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Damaged on arrival"
                        name="damagedonarrival"
                      >
                        <option>No</option>
                        <option>Slightly</option>
                        <option>Yes</option>
                      </Field>
                    </div>
                    <div className="w-full">
                    <label className="text-xs font-bold" htmlFor="">Cut stage on arrival</label>
                      <Field
                        className="block border rounded text-xs border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Cut stage on arrival"
                        name="cutstageonarrival"
                      />
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <div className="">
                    <label className="text-xs font-bold" htmlFor="">Cut stage end of test</label>
                      <Field
                        className="block border border-gray py-2 text-xs rounded px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Cut stage end of test"
                        name="cutstageatendoftest"
                      />
                    </div>
                    <div className="w-full">
                    <label className="text-xs font-bold" htmlFor="">Day seven of presentation</label>
                      <Field
                       as="select"
                        className="block border rounded text-xs border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Day seven of presentation"
                        name="daysevenpresentation"
                      >
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                      </Field>
                    </div>
                    <div className="w-full">
                    <label className="text-xs font-bold" htmlFor="">Bud height</label>
                      <Field
                        className="block border rounded text-xs border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Bud height"
                        name="budheight"
                      />
                    </div>
                    <div className="w-full">
                    <label className="text-xs font-bold" htmlFor="">Reason for entering test</label>
                      <Field
                       as="select"
                        className="block border rounded text-xs border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Reason for entering test"
                        name="reasonforenteringtest"
                      >
                        <option>Age</option>
                        <option>Glooming</option>
                        <option>Botrytis</option>
                        <option>Wilted</option>
                        <option>Mummified</option>
                      </Field>
                    </div>
                  </div>
                </section>
                <section className="flex gap-2 items-center justify-end mt-2">
                  <p
                    onClick={handleClose}
                    className="border border-primary px-4 text-xs py-2 rounded cursor-pointer"
                  >
                    Cancel
                  </p>
                  <button
                    type="submit"
                    className="bg-primary px-4 py-2 rounded text-xs text-white"
                  >
                    {loading && (
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        />
                      </svg>
                    )}
                    Update Test
                  </button>
                </section>
              </Form>
            </Formik>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTestDialog;
