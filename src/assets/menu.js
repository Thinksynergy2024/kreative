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
    label: "Vaselife",
    path: "/dashboard/add-measurement",
    icon: <RxDashboard className="" />,
  },
  {
    label: "View Test",
    path: "/dashboard/vaselife",
    icon: <RxDashboard className="" />,
    children: [
      {
        label: "Active Test",
        path: "/dashboard/test/active-test",
        icon: "trips",
      },
      {
        label: "Complete Test",
        path: "/dashboard/test/complete-test",
        icon: "vehicles",
      },
    ],
  },
];
