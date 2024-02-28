import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import useSettings from "hooks/useSettings";
import LoadingScreen from "components/LoadingScreen";
import LayoutV1 from "layouts/layout-v1/DashboardLayout";
import LayoutV2 from "layouts/layout-v2/LayoutV2";
import LayoutV3 from "layouts/layout-v3/DashboardLayout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
}; // dashboards
const AccountV2 = Loadable(lazy(() => import("./pages/accounts/account-v2"))); // user and contact

const Error = Loadable(lazy(() => import("./pages/404")));

const ActiveLayout = () => {
  const { settings } = useSettings(); // console.log(settings);

  switch (settings.activeLayout) {
    case "layout1":
      return <LayoutV1 />;

    case "layout2":
      return <LayoutV2 />;

    case "layout3":
      return <LayoutV3 />;

    default:
      return <LayoutV1 />;
  }
};

const routes = () => {
  return [
    ...authRoutes,
    {
      path: "dashboard",
      element: <ActiveLayout />,
      children: dashboardRoutes,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};

const authRoutes = [
  {
    path: "/",
    element: <Navigate to="/dashboard/account-v2" />,
  },
];
const dashboardRoutes = [
  {
    path: "account-v2",
    element: <AccountV2 />,
  },
];
export default routes;
