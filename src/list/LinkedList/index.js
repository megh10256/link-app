import React, { useState } from "react";
import Axios from "axios";
import apiUrl from "./../Root/constants";

// Directory Structure
function LinkedList({ linkedData }) {
  // Checking the window closing tag
  const [open, setOpen] = useState(false); 
  // Selected Item Data
  const [itemsData, setItemData] = useState(""); 
  // Current Object
  const [current, setCurrent] = useState([]); 
  // Nested data of sub directory
  const [nestedData, setNestedData] = useState([]);
  // Nested inner child data of sub directory
  const [nestedChildData, setNestedChildData] = useState([]);

  // Checking if data is present or not
  if (linkedData) {
    // Get distinct data and set values
    function getDistinctBy(array, key) {
      return [
        ...new Map(
          array?.map((value) => [
            value[key] !== undefined ? value[key] : "",
            value !== undefined ? value : "",
          ])
        ).values(),
      ];
    }

    // Trigger when item is selected
    const showLinkedData = (e, val) => {
      e.preventDefault();
      setItemData(val); // Set selected item data

      //Dynamic API call to fetch selected item data 
      Axios.get(`${apiUrl}=${val}`).then(
        (response) => {
          // Set current data of selected item if it has nested entries
          setCurrent((prevState) => [
            ...(prevState !== undefined
              ? getDistinctBy(prevState, "name")
              : null),
            response.data.entries !== undefined
              ? response.data.entries
              : [
                  {
                    name: "Inside DIR!!!!!!!!!!",
                  },
                ],
          ]);
        },
        // Handle error
        (error) => {
          console.log(error);
        }
      );
    };

    // Showing nested data after fetching them
    const showNestedChild = (e) => {
      // Set data if there is data in current item
      if (current) {
        return (
          current !== undefined &&
          current?.map((item) =>
            item?.map((child, i) => {
              return (
                // Setting button click for inner items
                <div onClick={(e) => showDataChild(e, child.name)}> 
                  {child.name !== undefined ? child.name : ""}
                </div>
              );
            })
          )
        );
      } else {
        return null;
      }
    };

    // Show data child
    const showDataChild = (e, item) => {
      e.preventDefault();
      // API call if inner child item is clicked
      Axios.get(`${apiUrl}=${itemsData}%2F${item}`).then(
        (response) => {
          // Set nested data if nested inner child entries data available
          setNestedData(
            response.data.entries !== undefined
              ? response.data.entries
              : [
                  {
                    name: "Inside DIR!!!!!!!!!!",
                  },
                ]
          );
        },
        (error) => {
          console.log(error);
        }
      );
    };

    // Show and set nested inner child
    const showNestedInnerChild = (e) => {
      // If nested inner child data availabe then iterate over them and set them on display
      if (nestedData) {
        return (
          nestedData !== undefined &&
          nestedData?.map((child, i) => {
            return <div onClick={innerChildShowData}>{child.name}</div>; // Click event for nested inner child data
          })
        );
      } else {
        return null;
      }
    };

    // Set false flag on clicking cross Icon
    const ModalClose = () => {
      setOpen(false);
    };

    // Set Inner child displau
    const innerChildShowData = () => {
      setNestedChildData([
        { name: "Inside DIR!!!!!!!!!!" },
      ]);
    };

    // Child Name display when clicked on nested inner child data
    const nestedChildShowData = () => {
      if (nestedChildData) {
        return (
          nestedChildData !== undefined &&
          nestedChildData?.map((value, i) => {
            return <div>{value.name}</div>;
          })
        );
      } else {
        return null;
      }
    };
    return (
      <div>
        <>
          {/* Togel display directory data  */}
          {open !== true ? (
            <div className="rootModel" style= {{ fontWeight: 700}} onClick={() => setOpen((prevState) => !prevState)}>
              {linkedData.id}
            </div>
          ) : (
            ""
          )}

          {/* Set and display directory data if in open mode */}
          {open ? (
            <div id="myModal" className="rootModel">
              <div className="rootModelContainer">
                <span className="close" onClick={ModalClose}>
                  &times;
                </span>
                <div style= {{ fontWeight: 700}}>{linkedData.id}</div>
                <div className="rootContainerDisplay">
                  <div>
                    {/* Loop over Root data */}
                    {linkedData.entries.map((value, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            className="linkedGap"
                            onClick={(e) => showLinkedData(e, value.name)} // Set click even on every child
                          >
                            {value.name}
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {/* Show nested child data */}
                  <div>{showNestedChild()}</div>
                  {/* Set and show inner child of nested data */}
                  <div className="nestedInnerChild">
                    {showNestedInnerChild()}
                  </div>
                  <div className="nestedInnerChild">
                    {nestedChildShowData()}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      </div>
    );
  } else {
    // Display root
    return 
      <div className="linkedList">
        {linkedData.id}
      </div>;
  }
}

export default LinkedList;