import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import dynamic from "next/dynamic";
import {
  Column,
  Paging,
  Pager,
  HeaderFilter,
} from "devextreme-react/data-grid";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const CompleteTests = () => {
  return (
    <section className="p-4">
      <DataGrid
        // dataSource={nightChecks}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        remoteOperations={true}
        showColumnLines={true}
        showRowLines={true}
        wordWrapEnabled={true}
        allowPaging={true}
        className="shadow-xl w-full"
        // height={"70vh"}
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
          dataField="organisation"
          caption="Organisation"
          width={180}
          //   cellRender={nameFunc}
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
              Column 1
            </div>
          )}
        />
        <Column
          dataField="nightcheckdonewithverification"
          caption="Night Check Done"
          width={180}
          sorting={true}
          alignment="right"
          sortingMethod={(a, b) => {
            // Convert values to integers before comparison
            const valueA = parseInt(a);
            const valueB = parseInt(b);

            // Implement custom sorting logic
            if (valueA > valueB) return 1;
            if (valueA < valueB) return -1;
            return 0;
          }}
          cellRender={(rowData) => (
            <div style={{ fontSize: "12px" }}>
              {rowData.data.nightcheckdonewithverification}
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
              Column 2
            </div>
          )}
        />
        <Column
          dataField="nightcheckdonewithoutverification"
          caption="Night Check Done"
          width={180}
          sorting={true}
          alignment="right"
          sortingMethod={(a, b) => {
            // Convert values to integers before comparison
            const valueA = parseInt(a);
            const valueB = parseInt(b);

            // Implement custom sorting logic
            if (valueA > valueB) return 1;
            if (valueA < valueB) return -1;
            return 0;
          }}
          cellRender={(rowData) => (
            <div style={{ fontSize: "12px" }}>
              {rowData.data.nightcheckdonewithoutverification}
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
              Column 3
            </div>
          )}
        />
        <Column
          dataField="nightcheckmissed"
          caption="Night Check Missed"
          width={180}
          sorting={true}
          alignment="right"
          sortingMethod={(a, b) => {
            // Convert values to integers before comparison
            const valueA = parseInt(a);
            const valueB = parseInt(b);

            // Implement custom sorting logic
            if (valueA > valueB) return 1;
            if (valueA < valueB) return -1;
            return 0;
          }}
          cellRender={(rowData) => (
            <div style={{ fontSize: "12px" }}>
              {rowData.data.nightcheckmissed}
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
              Column 4
            </div>
          )}
        />
      </DataGrid>
    </section>
  );
};

CompleteTests.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default CompleteTests;
