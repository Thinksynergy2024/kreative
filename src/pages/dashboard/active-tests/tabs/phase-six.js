import React from "react";
import dynamic from "next/dynamic";
import {
  Column,
  Paging,
  Pager,
  HeaderFilter,
} from "devextreme-react/data-grid";
import { useSelector } from "react-redux";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const PhaseSix = () => {
  const { tests } = useSelector((store) => store.test);

//   filter phase-one tests
const newArray = tests.filter((test) => test.phase === 'Phase 6');

  return (
    <div>
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
    </div>
  );
};

export default PhaseSix;
