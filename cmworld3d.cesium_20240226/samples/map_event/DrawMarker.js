DrawMarker = (function()
{
    function DrawMarker (options)
    {
        this.viewer = options.viewer;

        let event_info = {
            name: "draw_marker_event",
            listener: this.callback_MouseEvent,
            scope: this
        }
        
        CmWorld.addMouseEventListener( event_info );
    }

    DrawMarker.prototype.dispose = function ()
    {
        CmWorld.removeMouseEventListenerByName( "draw_marker_event" );
    }

    DrawMarker.prototype.callback_MouseEvent = function (e)
    {
        //---------------------------------------------------------------------
        // LEFT_CLICK:          "left_click",
        // LEFT_DBL_CLICK:      "left_dbl_click",
        // LEFT_DOWN:           "left_down",
        // LEFT_UP:             "left_up",
        // RIGHT_CLICK:         "right_click",
        // RIGHT_DBL_CLICK:     "right_dbl_click",
        // RIGHT_DOWN:          "right_down",
        // RIGHT_UP:            "right_up",
        // MOVE:                "move",
        // WHEEL:               "wheel",
        //---------------------------------------------------------------------

        switch (e.status) {
            case XMouseEvent.LEFT_CLICK:
                this.addMarker( e );
                break;
            case XMouseEvent.LEFT_DBL_CLICK:
                break;
            case XMouseEvent.LEFT_DOWN:
                break;
            case XMouseEvent.LEFT_UP:
                break;              
            case XMouseEvent.RIGHT_CLICK:
                break;             
            case XMouseEvent.RIGHT_DBL_CLICK:
                break;                
            case XMouseEvent.RIGHT_DOWN:
                break;            
            case XMouseEvent.RIGHT_UP:
                break;             
            case XMouseEvent.MOVE:
                break;             
            case XMouseEvent.WHEEL:
                break;
        }
    }

    DrawMarker.prototype.addMarker = function (event)
    {
        let earthPosition = this.viewer.scene.pickPosition( event.position );
        console.log( earthPosition );

        this.viewer.entities.add({
            position: earthPosition,
            billboard: {
                image: "../../resources/images/symbol/pin_01.png",
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
            }
        });

        this.viewer.scene.render();
    }

    return DrawMarker;
})();