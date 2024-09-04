import { Outlet } from "react-router-dom";
import NavigateLinkToAngular from "./navigateLinkToAngular";

export const Home = () => (
  <div>
    <p>
      <b>Home</b>
    </p>
    <Outlet />
    <NavigateLinkToAngular href={""}></NavigateLinkToAngular>
  </div>
);
