var viewer;

//=============================================================================
//
// Init Viewer
//
//=============================================================================

function Init()
{
    // Init CmWorld Viewer
    viewer = CmWorld.Viewer("mapContainer");
    viewer.camera.setView({ destination: Cesium.Cartesian3.fromDegrees(126.92940, 37.50809, 5000) });
    viewer.scene.render();

    // Init Mouse Event
    CmWorld.initEvent();

    // Cesium Control
    $(viewer.fullscreenButton.container).hide();
}

//=============================================================================
//
// User Function
//
//=============================================================================

var _toosMeasuremantArea = null;

function SetMeasureArea()
{
    if (_toosMeasuremantArea == null)
        _toosMeasuremantArea = new Measurement_Area({ viewer: this.viewer });

    _toosMeasuremantArea.drawArea();
}

function Cancel()
{
    if (_toosMeasuremantArea != null)
        _toosMeasuremantArea.cancel();
}



