import React, { useState, useEffect, useRef } from "react";
import CustomizedLayout from "@/components/layout/customized-layout";
import { scanMeasurement } from "@/redux/service";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setMeasurement } from "@/redux/features";
import Varities from "./varities";

const ScanMeasurement = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const initialValues = {
    evaluationnumber: "",
  };

  const validationSchema = Yup.object().shape({
    evaluationnumber: Yup.string().required("Bar Code is required!"),
  });

  const handleScanMeasurement = async (formValue, helpers) => {
    console.log("FORM_VALUE ",formValue);
    try {
      setLoading(true);
      const res = await scanMeasurement(formValue.evaluationnumber);
      if (res.length === 0) {
        toast.error("No vaselife tests for the scanned code");
        helpers.resetForm();
        setLoading(false);
      } else {
        dispatch(setMeasurement(res));
        toast.success("Bar code sent successfully");
        helpers.resetForm();
        setLoading(false);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <section className="p-4 bg-white shadow rounded md:w-1/2 md:mx-auto mx-4 mb-4 mt-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleScanMeasurement}
        >
          {({ innerRef }) => (
            <Form className="space-y-3">
              <div>
                <Field
                  className="border border-primary rounded px-4 py-2 text-sm focus:outline-none w-full"
                  type="text"
                  placeholder="Focus your cursor here"
                  name="evaluationnumber"
                  innerRef={inputRef}
                />
                <ErrorMessage
                  name="evaluationnumber"
                  component="div"
                  className="text-warning text-xs"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary rounded px-4 py-2 text-white w-full text-sm flex items-center justify-center gap-2"
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
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      ></path>
                    </svg>
                  )}
                  Scan Bar Code
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <hr className="bg-gray" />
      <Varities />
    </>
  );
};

ScanMeasurement.getLayout = (page) => (
  <CustomizedLayout>{page}</CustomizedLayout>
);

export default ScanMeasurement;
