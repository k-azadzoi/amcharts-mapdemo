import React, { useLayoutEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_region_usa_caLow from "@amcharts/amcharts4-geodata/region/usa/caLow";

const California = () => {

    useLayoutEffect(() => {
      
    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_region_usa_caLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
  
      }, [])
  
    return (
      <>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </>
    );
  }
  
  export default California;