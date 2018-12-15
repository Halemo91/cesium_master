console.log('ssssssssss');



// A simple demo of 3D Tiles feature picking with hover and select behavior
// Building data courtesy of NYC OpenData portal: http://www1.nyc.gov/site/doitt/initiatives/3d-building.page
var viewer = new Cesium.Viewer('cesiumContainer', {
   terrainProvider: Cesium.createWorldTerrain()
});
//
// viewer.scene.globe.depthTestAgainstTerrain = true;
//
 var scene = viewer.scene;
//
// // Set the initial camera view to look at Manhattan
var initialPosition = Cesium.Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821, 753);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(21.27879878293835, -21.34390550872461, 0.0716951918898415);
var camerView = viewer.scene.camera.setView({
   destination: initialPosition,
   orientation: initialOrientation,
   endTransform: Cesium.Matrix4.IDENTITY
});
//
// var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
//     Cesium.Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821, 753));
// var model = scene.primitives.add(Cesium.Model.fromGltf({
//     url : 'GroundVehicle.glb',
//     modelMatrix : modelMatrix,
//     scale : 20000.0
// }));

// viewer.dataSources.add(Cesium.GeoJsonDataSource.load('ne_10m_us_states.geojson', {
//   stroke: Cesium.Color.HOTPINK,
//   fill: Cesium.Color.PINK,
//   strokeWidth: 3,
//   markerSymbol: '?'
// }));
// var kmlDataSource = new Cesium.KmlDataSource();
// console.log(kmlDataSource)
// // kmlDataSource.loadUrl('sattawat-nyc_buildings.kml');
// // viewer.dataSources.add(kmlDataSource);
 //viewer.dataSources.add(Cesium.KmlDataSource.load('test.kml'));
 // viewer.dataSources.add(Cesium.KmlDataSource.load('FIRSTBUILDING.kml'));
 viewer.dataSources.add(Cesium.KmlDataSource.load('odda.kml',
      {
           camera: camerView,
           canvas: viewer.scene.canvas
      })
 );
console.log(Cesium)
//
// // Load the NYC buildings tileset
// var tileset = new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(5741) });
// viewer.scene.primitives.add(tileset);
//
// viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
// function createPoint(worldPosition) {
//     var point = viewer.entities.add({
//         position : worldPosition,
//         point : {
//             color : Cesium.Color.WHITE,
//             pixelSize : 5,
//             heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
//         }
//     });
//     return point;
// }
// var drawingMode = 'line';
// function drawShape(positionData) {
//     var shape;
//     if (drawingMode === 'line') {
//         shape = viewer.entities.add({
//             polyline : {
//                 positions : positionData,
//                 clampToGround : true,
//                 width : 3
//             }
//         });
//     }
//     else if (drawingMode === 'polygon') {
//         shape = viewer.entities.add({
//             polygon: {
//                 hierarchy: positionData,
//                 material: new Cesium.ColorMaterialProperty(Cesium.Color.WHITE.withAlpha(0.7))
//             }
//         });
//     }
//     return shape;
// }
// var activeShapePoints = [];
// var activeShape;
// var floatingPoint;
// var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
// handler.setInputAction(function(event) {
//     // We use `viewer.scene.pickPosition` here instead of `viewer.camera.pickEllipsoid` so that
//     // we get the correct point when mousing over terrain.
//     var earthPosition = viewer.scene.pickPosition(event.position);
//     // `earthPosition` will be undefined if our mouse is not over the globe.
//     if (Cesium.defined(earthPosition)) {
//         if (activeShapePoints.length === 0) {
//             floatingPoint = createPoint(earthPosition);
//             activeShapePoints.push(earthPosition);
//             var dynamicPositions = new Cesium.CallbackProperty(function () {
//                 return activeShapePoints;
//             }, false);
//             activeShape = drawShape(dynamicPositions);
//         }
//         activeShapePoints.push(earthPosition);
//         createPoint(earthPosition);
//     }
// }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
//
// handler.setInputAction(function(event) {
//     if (Cesium.defined(floatingPoint)) {
//         var newPosition = viewer.scene.pickPosition(event.endPosition);
//         if (Cesium.defined(newPosition)) {
//             floatingPoint.position.setValue(newPosition);
//             activeShapePoints.pop();
//             activeShapePoints.push(newPosition);
//         }
//     }
// }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
// // Redraw the shape so it's not dynamic and remove the dynamic shape.
// function terminateShape() {
//     activeShapePoints.pop();
//     drawShape(activeShapePoints);
//     viewer.entities.remove(floatingPoint);
//     viewer.entities.remove(activeShape);
//     floatingPoint = undefined;
//     activeShape = undefined;
//     activeShapePoints = [];
// }
// handler.setInputAction(function(event) {
//     terminateShape();
// }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
//
// var options = [{
//     text : 'Draw Lines',
//     onselect : function() {
//         terminateShape();
//         drawingMode = 'line';
//     }
// }, {
//     text : 'Draw Polygons',
//     onselect : function() {
//         terminateShape();
//         drawingMode = 'polygon';
//     }
// }];
// var aha = new Sandcastle();
// Sandcastle.addToolbarMenu(options);
// // HTML overlay for showing feature name on mouseover
// var nameOverlay = document.createElement('div');
// viewer.container.appendChild(nameOverlay);
// nameOverlay.className = 'backdrop';
// nameOverlay.style.display = 'none';
// nameOverlay.style.position = 'absolute';
// nameOverlay.style.bottom = '0';
// nameOverlay.style.left = '0';
// nameOverlay.style['pointer-events'] = 'none';
// nameOverlay.style.padding = '4px';
// nameOverlay.style.backgroundColor = 'black';
//
// // Information about the currently selected feature
// var selected = {
//    feature: undefined,
//    originalColor: new Cesium.Color()
// };
//
// // An entity object which will hold info about the currently selected feature for infobox display
// var selectedEntity = new Cesium.Entity();
//
// // Get default left click handler for when a feature is not picked on left click
// var clickHandler = viewer.screenSpaceEventHandler.getInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
//
// // If silhouettes are supported, silhouette features in blue on mouse over and silhouette green on mouse click.
// // If silhouettes are not supported, change the feature color to yellow on mouse over and green on mouse click.
// if (Cesium.PostProcessStageLibrary.isSilhouetteSupported(viewer.scene)) {
//    // Silhouettes are supported
//    var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
//    silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
//    silhouetteBlue.uniforms.length = 0.01;
//    silhouetteBlue.selected = [];
//
//    var silhouetteGreen = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
//    silhouetteGreen.uniforms.color = Cesium.Color.LIME;
//    silhouetteGreen.uniforms.length = 0.01;
//    silhouetteGreen.selected = [];
//
//    viewer.scene.postProcessStages.add(Cesium.PostProcessStageLibrary.createSilhouetteStage([silhouetteBlue, silhouetteGreen]));
//
//    // Silhouette a feature blue on hover.
//    viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(movement) {
//        // If a feature was previously highlighted, undo the highlight
//        silhouetteBlue.selected = [];
//
//        // Pick a new feature
//        var pickedFeature = viewer.scene.pick(movement.endPosition);
//        if (!Cesium.defined(pickedFeature)) {
//            nameOverlay.style.display = 'none';
//            return;
//        }
//
//        // A feature was picked, so show it's overlay content
//        nameOverlay.style.display = 'block';
//        nameOverlay.style.bottom = viewer.canvas.clientHeight - movement.endPosition.y + 'px';
//        nameOverlay.style.left = movement.endPosition.x + 'px';
//        var name = pickedFeature.getProperty('name');
//        if (!Cesium.defined(name)) {
//            name = pickedFeature.getProperty('id');
//        }
//        nameOverlay.textContent = name;
//
//        // Highlight the feature if it's not already selected.
//        if (pickedFeature !== selected.feature) {
//            silhouetteBlue.selected = [pickedFeature];
//        }
//    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
//
//    // Silhouette a feature on selection and show metadata in the InfoBox.
//    viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
//        // If a feature was previously selected, undo the highlight
//        silhouetteGreen.selected = [];
//
//        // Pick a new feature
//        var pickedFeature = viewer.scene.pick(movement.position);
//        if (!Cesium.defined(pickedFeature)) {
//            clickHandler(movement);
//            return;
//        }
//
//        // Select the feature if it's not already selected
//        if (silhouetteGreen.selected[0] === pickedFeature) {
//            return;
//        }
//
//        // Save the selected feature's original color
//        var highlightedFeature = silhouetteBlue.selected[0];
//        if (pickedFeature === highlightedFeature) {
//            silhouetteBlue.selected = [];
//        }
//
//        // Highlight newly selected feature
//        silhouetteGreen.selected = [pickedFeature];
//
//        // Set feature infobox description
//        var featureName = pickedFeature.getProperty('name');
//        selectedEntity.name = featureName;
//        selectedEntity.description = 'Loading <div class="cesium-infoBox-loading"></div>';
//        viewer.selectedEntity = selectedEntity;
//        selectedEntity.description = '<table class="cesium-infoBox-defaultTable"><tbody>' +
//                                     '<tr><th>BIN</th><td>' + pickedFeature.getProperty('BIN') + '</td></tr>' +
//                                     '<tr><th>DOITT ID</th><td>' + pickedFeature.getProperty('DOITT_ID') + '</td></tr>' +
//                                     '<tr><th>SOURCE ID</th><td>' + pickedFeature.getProperty('SOURCE_ID') + '</td></tr>' +
//                                     '</tbody></table>';
//    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
// } else {
//    // Silhouettes are not supported. Instead, change the feature color.
//
//    // Information about the currently highlighted feature
//    var highlighted = {
//        feature : undefined,
//        originalColor : new Cesium.Color()
//    };
//
//    // Color a feature yellow on hover.
//    viewer.screenSpaceEventHandler.setInputAction(function onMouseMove(movement) {
//        // If a feature was previously highlighted, undo the highlight
//        if (Cesium.defined(highlighted.feature)) {
//            highlighted.feature.color = highlighted.originalColor;
//            highlighted.feature = undefined;
//        }
//        // Pick a new feature
//        var pickedFeature = viewer.scene.pick(movement.endPosition);
//        if (!Cesium.defined(pickedFeature)) {
//            nameOverlay.style.display = 'none';
//            return;
//        }
//        // A feature was picked, so show it's overlay content
//        nameOverlay.style.display = 'block';
//        nameOverlay.style.bottom = viewer.canvas.clientHeight - movement.endPosition.y + 'px';
//        nameOverlay.style.left = movement.endPosition.x + 'px';
//        var name = pickedFeature.getProperty('name');
//        if (!Cesium.defined(name)) {
//            name = pickedFeature.getProperty('id');
//        }
//        nameOverlay.textContent = name;
//        // Highlight the feature if it's not already selected.
//        if (pickedFeature !== selected.feature) {
//            highlighted.feature = pickedFeature;
//            Cesium.Color.clone(pickedFeature.color, highlighted.originalColor);
//            pickedFeature.color = Cesium.Color.YELLOW;
//        }
//    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
//
//    // Color a feature on selection and show metadata in the InfoBox.
//    viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
//        // If a feature was previously selected, undo the highlight
//        if (Cesium.defined(selected.feature)) {
//            selected.feature.color = selected.originalColor;
//            selected.feature = undefined;
//        }
//        // Pick a new feature
//        var pickedFeature = viewer.scene.pick(movement.position);
//        if (!Cesium.defined(pickedFeature)) {
//            clickHandler(movement);
//            return;
//        }
//        // Select the feature if it's not already selected
//        if (selected.feature === pickedFeature) {
//            return;
//        }
//        selected.feature = pickedFeature;
//        // Save the selected feature's original color
//        if (pickedFeature === highlighted.feature) {
//            Cesium.Color.clone(highlighted.originalColor, selected.originalColor);
//            highlighted.feature = undefined;
//        } else {
//            Cesium.Color.clone(pickedFeature.color, selected.originalColor);
//        }
//        // Highlight newly selected feature
//        pickedFeature.color = Cesium.Color.LIME;
//        // Set feature infobox description
//        var featureName = pickedFeature.getProperty('name');
//        selectedEntity.name = featureName;
//        selectedEntity.description = 'Loading <div class="cesium-infoBox-loading"></div>';
//        viewer.selectedEntity = selectedEntity;
//        selectedEntity.description = '<table class="cesium-infoBox-defaultTable"><tbody>' +
//                                     '<tr><th>BIN</th><td>' + pickedFeature.getProperty('BIN') + '</td></tr>' +
//                                     '<tr><th>DOITT ID</th><td>' + pickedFeature.getProperty('DOITT_ID') + '</td></tr>' +
//                                     '<tr><th>SOURCE ID</th><td>' + pickedFeature.getProperty('SOURCE_ID') + '</td></tr>' +
//                                     '<tr><th>Longitude</th><td>' + pickedFeature.getProperty('longitude') + '</td></tr>' +
//                                     '<tr><th>Latitude</th><td>' + pickedFeature.getProperty('latitude') + '</td></tr>' +
//                                     '<tr><th>Height</th><td>' + pickedFeature.getProperty('height') + '</td></tr>' +
//                                     '<tr><th>Terrain Height (Ellipsoid)</th><td>' + pickedFeature.getProperty('TerrainHeight') + '</td></tr>' +
//                                     '</tbody></table>';
//    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
// }
