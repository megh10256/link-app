import React, { useState, useEffect } from "react";
import Axios from "axios";
import apiUrl, { DIR_DATA } from "./constants";
import LinkedList from "../LinkedList";

// Root base
export default function Root() {
  const [listData, setListData] = useState([]); // Root directorylist data

  // Initial API Call
  useEffect(() => {
    Axios.get(`${apiUrl}=root`).then(
      (response) => {
        // Set response data
        setListData(response.listData);
      },
      (error) => {
        // Handle error
        console.log(error);
      }
    );
  }, []);
  
  return (
    <div className="Root">
      <h1 className="header">File Structure</h1>
      <LinkedList linkedData={listData} />
      {/* <LinkedList linkedData={DIR_DATA.paths[0]} /> */}
    </div>
  );
}
