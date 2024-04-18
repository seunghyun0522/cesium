document.write("<script src='../../cmworld/CmWorld.js'></script>");

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
    viewer.camera.setView({ destination: Cesium.Cartesian3.fromDegrees(127.700, 35.832, 20000000) });
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

function Draw_Point()
{
    CmWorld.setMouseMode("draw_point", { callback: _callback_draw });
}

function Draw_Polyline()
{
    CmWorld.setMouseMode("draw_polyline", { callback: _callback_draw });
}

function Draw_Polygon()
{
    CmWorld.setMouseMode("draw_polygon", { callback: _callback_draw });
}

function Draw_Rect()
{
    CmWorld.setMouseMode("draw_rect", { callback: _callback_draw });
}

function Cancel()
{
    CmWorld.drawCancel();
}

function Refresh()
{
    CmWorld.drawInit();
}

function _callback_draw( e )
{
    console.log( e );

    if (e.status == "draw_complete") {

        // add draw entity
        let addEntity = this.viewer.entities.add( e.entity );
        console.log( "entity id: "  + addEntity.id );

        // set mouse mode
        CmWorld.setMouseMode( "normal" );
    }
}