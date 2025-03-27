import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_morocco from "@amcharts/amcharts4-geodata/moroccoHigh";

import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";


function MoroccoMap() {
  const chartRef = useRef(null); // Reference to the chart instance

  useLayoutEffect(() => {
    // Create the map
    let chart = am4core.create("mapdiv", am4maps.MapChart);
    chart.geodata = am4geodata_morocco;
    chart.projection = new am4maps.projections.Miller();
    chartRef.current = chart; // Save the chart instance to the reference

    // Create a series for the polygons (cities)
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}"; // Tooltip showing city name
    polygonTemplate.fill = am4core.color("#67b7dc");

    // Add click event listener to zoom in on the clicked polygon (city)
    polygonTemplate.events.on("hit", function (ev) {
      let cityName = ev.target.dataItem.dataContext.name;
      alert(`You clicked on: ${cityName}`);

      // Get the clicked polygon (city)
      let polygon = ev.target;
      let bounds = polygon.geometry.getBounds(); // Get the geographical bounds of the polygon

      // Calculate the center of the bounds (latitude and longitude)
      let centerLatitude = (bounds.top + bounds.bottom) / 2;
      let centerLongitude = (bounds.left + bounds.right) / 2;

      // Zoom into the clicked region (city)
      chart.zoomToGeoPoint({ latitude: centerLatitude, longitude: centerLongitude }, 5, true); // Adjust zoom level (5 for a closer zoom)
    });

    // Highlight the city on hover
    polygonTemplate.events.on("over", function (ev) {
      ev.target.fill = am4core.color("#c1121f"); // Change color on hover
    });

    polygonTemplate.events.on("out", function (ev) {
      ev.target.fill = am4core.color("#67b7dc"); // Revert color when mouse leaves
    });

    return () => {
      chart.dispose();
    };
  }, []);

  // Functions to zoom in and out
  const zoomIn = () => {
    if (chartRef.current) {
      chartRef.current.zoomIn();
    }
  };

  const zoomOut = () => {
    if (chartRef.current) {
      chartRef.current.zoomOut();
    }
  };

  return (
    <div className="relative">
      <div id="mapdiv" style={{ width: "100%", height: "540px" }} className="bg-gray-100 py-6 "></div>

      <div className=" bg-white overflow-hidden rounded-md p-1 absolute flex flex-col m-3 top-0 left-0 z-50">
        <button className="hover:bg-gray-200 cursor-pointer p-1 rounded-md opacity-60 hover:opacity-100" onClick={zoomIn}> <CiZoomIn size={30} /> </button>
        <button className="hover:bg-gray-200 cursor-pointer p-1 rounded-md opacity-60 hover:opacity-100" onClick={zoomOut}> <CiZoomOut size={30} /> </button>
      </div>
    </div>
  );
}


export default MoroccoMap;
