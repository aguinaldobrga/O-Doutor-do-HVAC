

import { LayoutDefull } from "@/layout/LayoutDefull";
import { HomePage } from "@/module/HomePage";
import { useRoutes } from "react-router-dom";

export function AppRoutes() {

  const routes = [
    {
      path: "/",
      element: <LayoutDefull />,
      children: [
        { index: true, element: <HomePage /> },
      ],
    },
  ];

  const routing = useRoutes(routes);
  return routing;

}
