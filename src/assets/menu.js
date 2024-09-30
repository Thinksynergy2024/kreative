// components/defaultNavItems.tsx
import React from "react";
import { RxDashboard } from "react-icons/rx";

export const menus = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard className="" />,
  },
  {
    label: "Add Vaselife Measurement",
    path: "/dashboard/scan-measurement",
    icon: <RxDashboard className="" />,
  },
  {
    label: "View Vaselife Test",
    path: "/dashboard/vaselife",
    icon: <RxDashboard className="" />,
    children: [
      {
        label: "Active Test",
        path: "/dashboard/active-tests",
        icon: "trips",
      },
      {
        label: "Complete Test",
        path: "/dashboard/complete-tests",
        icon: "vehicles",
      },
    ],
  },
  {
    label: "User Guide",
    path: "/dashboard/user-guide",
    icon: <RxDashboard className="" />,
  },
];
