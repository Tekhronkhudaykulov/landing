import { APP_ROUTES } from ".";
import ReferencePageMain from "../views/Reference/views/ReferencePageMain";
import SchoolScreen from "../views/School/view";

export const _routes = [
  {
    path: APP_ROUTES.REFERENCE,
    element: ReferencePageMain,
    exact: true,
  },

  {
    path: APP_ROUTES.HOME,
    element: SchoolScreen,
  },
];
