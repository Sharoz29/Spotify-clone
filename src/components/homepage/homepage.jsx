import "./homepage.css";
import Sidebar from "../sidebar/sidebar";
// import { Fragment } from "react";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Sidebar />
      <h1>I am home page</h1>
    </div>
  );
};
export default HomePage;
