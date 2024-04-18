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
    CmWorld.initEvent({
        mouse_left_click: EVT_MOUSE_LEFT_CLICK,
        mouse_left_down: EVT_MOUSE_LEFT_DOWN,
        mouse_left_up: EVT_MOUSE_LEFT_UP,
        mouse_right_click: EVT_MOUSE_RIGHT_CLICK,
        mouse_right_down: EVT_MOUSE_RIGHT_DOWN,
        mouse_right_up: EVT_MOUSE_RIGHT_UP,
        mouse_move: EVT_MOUSE_MOVE,
        mouse_wheel: EVT_MOUSE_WHEEL,
        camera_move_start: EVT_CAMERA_MOVE_START,
        camera_move_end: EVT_CAMERA_MOVE_END
    });

    // Cesium Control
    $(viewer.fullscreenButton.container).hide();
}

//=============================================================================
//
// Mouse Event
//
//=============================================================================

//-----------------------------------------------------------------------------
// Mouse Event: Left Click
//-----------------------------------------------------------------------------

function EVT_MOUSE_LEFT_CLICK( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Left Down
//-----------------------------------------------------------------------------

function EVT_MOUSE_LEFT_DOWN( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Left up
//-----------------------------------------------------------------------------

function EVT_MOUSE_LEFT_UP( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Right Click
//-----------------------------------------------------------------------------

function EVT_MOUSE_RIGHT_CLICK( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Right Down
//-----------------------------------------------------------------------------

function EVT_MOUSE_RIGHT_DOWN( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Right up
//-----------------------------------------------------------------------------

function EVT_MOUSE_RIGHT_UP( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Move
//-----------------------------------------------------------------------------

function EVT_MOUSE_MOVE( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Mouse Event: Scroll Wheel
//-----------------------------------------------------------------------------

function EVT_MOUSE_WHEEL( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Camera: Move Start
//-----------------------------------------------------------------------------

function EVT_CAMERA_MOVE_START( e )
{
    console.log( e );
}

//-----------------------------------------------------------------------------
// Camera: Move End
//-----------------------------------------------------------------------------

function EVT_CAMERA_MOVE_END( e )
{
    console.log( e );
}