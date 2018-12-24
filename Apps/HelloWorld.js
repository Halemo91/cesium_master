console.log('ssssssssss');



// A simple demo of 3D Tiles feature picking with hover and select behavior
// Building data courtesy of NYC OpenData portal: http://www1.nyc.gov/site/doitt/initiatives/3d-building.page
var viewer = new Cesium.Viewer('cesiumContainer', {
   terrainProvider: Cesium.createWorldTerrain()
});

 var scene = viewer.scene;
//
// // Set the initial camera view to look at somewhere in the sea becauseo of db lon and lat
// var initialPosition = Cesium.Cartesian3.fromDegrees(-25.89004021298895, -14.478025009733173, 1753);
// var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(21.27879878293835, -21.34390550872461, 0.0716951918898415);
// var camerView = viewer.scene.camera.setView({
//    destination: initialPosition,
//    orientation: initialOrientation,
//    endTransform: Cesium.Matrix4.IDENTITY
// });
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load('simplestyles.geojson', {
//   stroke: Cesium.Color.HOTPINK,
//   fill: Cesium.Color.PINK,
//   strokeWidth: 30000,
//   markerSymbol: '?'
// }
// ));

// viewer.dataSources.add(Cesium.KmlDataSource.load('aha.kml'));


var promise = Cesium.GeoJsonDataSource.load('aha.geojson');
     promise.then(function(dataSource) {
     viewer.dataSources.add(dataSource);
     var entities = dataSource.entities.values;
     for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        //Extrude the polygon based on any attribute you desire
        entity.polygon.extrudedHeight = 50000.0;
    }


    });


// ****************************
// second block
// *********************
var viewers = new Cesium.Viewer('cesiumContainers');

var orangePolygon = viewers.entities.add({
    name : 'Roof transparent',
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArrayHeights([

606932.664835 ,4502862.564945, 14.613559,
606935.218797 ,4502868.669581 ,14.613559,
606930.335554 ,4502870.712555, 10.484536,
606927.781592 ,4502864.607919 ,10.484536,
606932.664835 ,4502862.564945, 14.613559,
606930.335554 ,4502870.712555, 10.484536,
606935.218797 ,4502868.669581, 14.613559,
606940.082867 ,4502866.634628, 10.500748,
606940.082867 ,4502866.634628 ,0,
606930.335554, 4502870.712555, 0,
606930.335554 ,4502870.712555 ,10.484536,
606935.218797 ,4502868.669581, 14.613559,
606932.664835 ,4502862.564945 ,14.613559
,606937.528905 ,4502860.529992 ,10.500748,
606940.082867 ,4502866.634628, 10.500748,
606935.218797, 4502868.669581, 14.613559
,606932.664835 ,4502862.564945, 14.613559,
606927.781592 ,4502864.607919, 10.484536,
606927.781592, 4502864.607919, 0,
606937.528905 ,4502860.529992, 0,
606937.528905, 4502860.529992 ,10.500748,
606932.664835 ,4502862.564945 ,14.613559,
606927.781592 ,4502864.607919, 10.484536,
606930.335554, 4502870.712555, 10.484536,
606930.335554 ,4502870.712555, 0,
606927.781592, 4502864.607919 ,0,
606927.781592 ,4502864.607919 ,10.484536,
606927.781592 ,4502864.607919, 0,
606930.335554, 4502870.712555, 0,
606940.082867 ,4502866.634628 ,0,
606937.528905 ,4502860.529992 ,0,
606927.781592 ,4502864.607919, 0,
606940.082867 ,4502866.634628 ,10.500748,
606937.528905 ,4502860.529992, 10.500748,
606937.528905 ,4502860.529992 ,0,
606940.082867, 4502866.634628, 0,
606940.082867, 4502866.634628, 10.500748
        ]),
        extrudedHeight: 50000.0,
        material : Cesium.Color.ORANGE.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.BLACK
    }
});


viewers.zoomTo(viewers.entities);
