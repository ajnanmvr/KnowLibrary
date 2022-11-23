import React from "react";
import Card from "./Card";
import SideBar from "./SideBar";
function Content() {
  return (
    <div className="content">
      <SideBar />
      <div className="content-main">
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Content;