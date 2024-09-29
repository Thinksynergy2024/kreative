import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";

const UserGuide = () => {
  return (
    <section className="py-4 sm:px-12 px-4 bg-white">
      <h1 className="text-center text-2xl font-bold mb-4">
        Kreative System User Guide Documentation
      </h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold">1. Authentication</h2>
        <p className="text-sm px-4">
          The authentication user flow provides a step-by-step guide for users
          to log in to the application securely.
        </p>
      </div>
      <div className="px-6 my-4">
        <h1 className="font-bold">Entering credentials</h1>
        <ul className="list-disc px-8 text-sm">
          <li>
            On the login page, users are prompted to input their login
            credentials, including username and password, into the designated
            fields.
          </li>
          <li>
            After entering their credentials, users click the "Login" button to
            submit the login form.
          </li>
          <li>
            The system validates the provided credentials to authenticate the
            user's identity.
          </li>
        </ul>
      </div>
      <div className="px-6 my-4">
        <h1 className="font-bold">Authentication Success</h1>
        <ul className="list-disc px-8 text-sm">
          <li>
            If the credentials are valid, the user is granted access to the
            platform.
          </li>
          <li>
            The dashboard interface is displayed, presenting various modules and
            data visualizations relevant to the user's role.
          </li>
        </ul>
      </div>
      <div className="px-6 my-4">
        <h1 className="font-bold">Authentication Failure</h1>
        <ul className="list-disc px-8 text-sm">
          <li>
            In case of invalid credentials, an error message is displayed,
            indicating that the login attempt has failed.
          </li>
          <li>
            Users are prompted to verify their entered credentials and try
            logging in again.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <div className="my-4">
          <h1 className="text-xl font-bold">2. Dashboard</h1>
          <p className="text-sm px-4">
            The dashboard page displays two summary bar graphs providing key
            insights into various aspects of operations. These summary cards
            are:
          </p>
        </div>
        <h1 className="font-bold px-6">Graphs</h1>
        <p className="px-8">
          There are two graphs presenting visual representations of different
          data sets:
        </p>
        <ul className="list-disc px-14 text-sm">
          <li>Active Tests by Phase</li>
          <p>
            This graph illustrates active tests arranged in descending order.
          </p>
          <li>Complete Tests by Phase</li>
          <p>
            Represents data related to night checks conducted during the
            specified period per lodge.
          </p>
        </ul>
      </div>
      <div className="my-4">
        <h1 className="text-xl font-bold">3. Vaselife Menu</h1>
        <p className="text-sm px-4">
          This menu allows users to scan a barcode to identify a specific item
          (or variety). After scanning, users can add a measurement (e.g.,
          quantity) and provide a reason for the measurement change. The "Add
          Measurement" button facilitates this process by opening two fields:
          one for entering the quantity and another for specifying the reason.
        </p>
      </div>
      <div className="px-4">
        <h1 className="font-bold">Main Features</h1>
        <ul className="list-disc px-8 text-sm">
          <li>Barcode Scanning: Identify an item by scanning its barcode.</li>
          <li>
            Add Measurement: Enter the quantity and reason for the measurement
            addition.
          </li>
          <li>
            User-Friendly Interface: Easy-to-use buttons and fields for a
            seamless experience.
          </li>
        </ul>
      </div>
      <div className="px-4 my-4">
        <h1 className="font-bold">How to Use</h1>
        <h2 className="px-4 text-sm font-bold mt-4">Scan Barcode</h2>
        <ul className="list-disc px-10 text-sm">
          <li>Use the scanner to scan the item's barcode.</li>
          <li>The system will display the identified item variety.</li>
        </ul>
        <h2 className="px-4 text-sm font-bold mt-4">Add Measurement</h2>
        <p className="px-6 text-sm">
          Click Add Measurement to open fields for:
        </p>
        <ul className="list-disc px-10 text-sm">
          <li>Quantity: Enter the amount to add.</li>
          <li>
            Reason: Specify why you're adding the measurement (e.g., inventory
            update).
          </li>
          <h2 className="mt-4 font-bold">Submit</h2>
          <ul className="px-4">
            <li>
              After filling in both fields, click Submit to save the
              measurement.
            </li>
          </ul>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold">4. View Test Menu</h1>
        <h2 className="font-bold px-6">Navigating to "View Test" Menu</h2>
        <ul className="list-disc px-12 text-sm">
          <li>
            Trigger: User clicks on the "View Test" option in the main menu.
          </li>
          <li>
            UI Response: The "View Test" page opens, showing two dropdowns:
            Active Test and Complete Test.
          </li>
        </ul>
        <div className="my-4">
          <h2 className="px-4 font-bold">Active Test Menu</h2>
          <h3 className="text-sm font-bold px-4 mt-2">Selecting "Active Test"</h3>
          <ul className="list-disc px-10 text-sm">
            <li>Trigger: User clicks on the Active Test Menu</li>
            <li>
              UI Response: A table appears showing the list of active tests.
            </li>
          </ul>
          <h2 className="text-sm font-bold px-4 mt-4">
            Phase-Based Tabs for Active Test
          </h2>
          <ul className="list-disc px-10 text-sm">
            <li>
              The table has tabs representing different phases (e.g., "Phase 1,"
              "Phase 2," "Phase 3").
            </li>
            <li>User can switch tabs to view tests in different phases.</li>
            <li>
              Each tab dynamically loads the table of active tests belonging to
              the selected phase.
            </li>
          </ul>
        </div>

        <div className="my-4">
          <h2 className="px-4 font-bold">Complete Test Menu</h2>
          <h3 className="text-sm font-bold px-4 mt-2">Selecting "Complete Test"</h3>
          <ul className="list-disc px-10 text-sm">
            <li>Trigger: User clicks on the Complete Test Menu</li>
            <li>
              UI Response: A table appears showing the list of complete tests.
            </li>
          </ul>
          <h2 className="text-sm font-bold mt-4 px-4">
            Phase-Based Tabs for Complete Test
          </h2>
          <ul className="list-disc px-10 text-sm">
            <li>
              The table has tabs representing different phases (e.g., "Phase 1,"
              "Phase 2," "Phase 3").
            </li>
            <li>User can switch tabs to view tests in different phases.</li>
            <li>
              Each tab dynamically loads the table of complete tests belonging
              to the selected phase.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

UserGuide.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default UserGuide;
