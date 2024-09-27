import React from "react";
import { BiExport } from "react-icons/bi";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ActionButtons = ({
}) => {
  const { tests } = useSelector((store) => store.test);
  const router = useRouter();
  const currentPath = router.route;

  const activeTests = tests.filter((test) => test.fromapp === "1" && test.stemsvased !== '0');
  const completeTests = tests.filter((test) => test.fromapp === "0" && test.stemsvased !== '0');




  // export to excel
  const exportToExcel = () => {
    let dataToExport;
    let fileName;

    if(currentPath === '/dashboard/active-tests'){
      dataToExport = activeTests;
      fileName = "active_tests.xlsx";
    }else if(currentPath === '/dashboard/complete-tests'){
      dataToExport = completeTests;
      fileName = "complete_tests.xlsx";
    }
  
    if (dataToExport) {
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelData = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const blob = new Blob([excelData], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, fileName);
    }
  };

  

  return (
    <>
      <button
      onClick={exportToExcel}
        className="border border-primary px-4 py-1 rounded text-xs flex items-center gap-2"
      >
        <BiExport className="text-xl" />
        Export Data
      </button>
      
    </>
  );
};

export default ActionButtons;
