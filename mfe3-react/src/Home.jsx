import { Outlet } from "react-router-dom";
import NavigateLinkToAngular from "./navigateLinkToAngular";

export const Home = () => (
  <div>
    <p>Home</p>
    <Outlet />
    <NavigateLinkToAngular href={""}></NavigateLinkToAngular>
  </div>
);
