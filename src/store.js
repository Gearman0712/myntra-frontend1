import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducerAction";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
