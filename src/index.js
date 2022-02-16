import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buckets from "./Bucket/BucketList";
import EditNote from "./components/EditNote";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/buckets" element={<Buckets />} />
      <Route path="/" element={<App />} />
      <Route path="/editNote" element={<EditNote />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
