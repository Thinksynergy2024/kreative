import CustomizedLayout from "@/components/layout/customized-layout";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Column,
  Paging,
  Pager,
  HeaderFilter,
} from "devextreme-react/data-grid";
import { useSelector } from "react-redux";
import Tabs from "../active-tests/tabs";
import PhaseOne from "../active-tests/tabs/phase-one";
import PhaseTwo from "../active-tests/tabs/phase-two";
import PhaseThree from "../active-tests/tabs/phase-three";
import PhaseFour from "../active-tests/tabs/phase-four";
import PhaseFive from "../active-tests/tabs/phase-five";
import PhaseSix from "../active-tests/tabs/phase-six";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const CompleteTests = () => {
  const { tests } = useSelector((store) => store.test);
  const [currentTab, setCurrentTab] = useState(0);

  const newArray = tests.filter((test) => test.fromapp === "0" && test.stemsvased !== '0');

  return (
    <section className="p-4">
      <Tabs {...{ currentTab,setCurrentTab}} />
      {currentTab === 0 && (
        <DataGrid
          dataSource={newArray}
          allowColumnReordering={true}
          rowAlternationEnabled={true}
          showBorders={true}
          remoteOperations={true}
          showColumnLines={true}
          showRowLines={true}
          wordWrapEnabled={true}
          allowPaging={true}
          className="shadow-xl w-full"
          height={"70vh"}
        >
          <HeaderFilter visible={false} />
          <Pager
            visible={true}
            // allowedPageSizes={allowedPageSizes}
            showPageSizeSelector={true}
            showNavigationButtons={true}
          />
          <Paging defaultPageSize={50} />
          <Column
            dataField="testid"
            caption="Organisation"
            width={180}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.testid}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Test Id
              </div>
            )}
          />
          <Column
            dataField="varietycode"
            caption="Night Check Done"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.varietycode}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Variety Code
              </div>
            )}
          />
          <Column
            dataField="dateonvase"
            caption="Night Check Done"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.dateonvase}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Date On Vase
              </div>
            )}
          />
          <Column
            dataField="stemsvased"
            caption="Night Check Missed"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.stemsvased}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Stems Vased
              </div>
            )}
          />
          <Column
            dataField="phase"
            caption="Night Check Missed"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.phase}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Phase
              </div>
            )}
          />
          <Column
            dataField="dateofbunching"
            caption="Night Check Missed"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {rowData.data.dateofbunching}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Date Of Bunching
              </div>
            )}
          />
          <Column
            dataField="month"
            caption="Night Check Missed"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.month}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Month
              </div>
            )}
          />
          <Column
            dataField="year"
            caption="Night Check Missed"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.year}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Year
              </div>
            )}
          />
          <Column
            dataField="createdtime"
            caption="Night Check Missed"
            width={180}
            sorting={true}
            alignment="right"
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{rowData.data.createdtime}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Created Time
              </div>
            )}
          />
        </DataGrid>
      )}
      {currentTab === 1 && <PhaseOne />}
      {currentTab === 2 && <PhaseTwo />}
      {currentTab === 3 && <PhaseThree />}
      {currentTab === 4 && <PhaseFour />}
      {currentTab === 5 && <PhaseFive />}
      {currentTab === 6 && <PhaseSix />}
    </section>
  );
};

CompleteTests.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default CompleteTests;
