Measurement_Area = (function()
{
    function Measurement_Area (options)
    {
        this.viewer = options.viewer;
    }

    Measurement_Area.prototype.dispose = function ()
    {
        CmWorld.drawInit();

        this.initLabel( false );
    }

    Measurement_Area.prototype.drawArea = function ()
    {
        CmWorld.setMouseMode("draw_polygon", { callback: this.callback_draw, scope: this, color: Cesium.Color.WHITE, width: 3 });

        this.initLabel( false );
    }

    Measurement_Area.prototype.cancel = function ()
    {
        CmWorld.drawCancel();

        this.initLabel( false );
    }

    Measurement_Area.prototype.initLabel = function (value)
    {
        if (Cesium.defined( this.label_area ))
            this.label_area.show = value;
    }

    Measurement_Area.prototype.callback_draw = function (event)
    {
        console.log( event );

        let n_area = CmWorld.Util.getArea( event.positions );
        let center_point = CmWorld.Util.getPolygonCenter( event.positions );

        if (n_area > 0) {
            
            let area_value = n_area.toFixed(2) + " ㎡";

            if (!Cesium.defined(event.this.label_area)) {
                event.this.label_area = event.this.addLabel(center_point, area_value);
            }
            else {
                event.this.label_area.position = center_point;
                event.this.label_area.label.text = area_value;
                event.this.label_area.show = true;
            }

            event.this.viewer.scene.render();
        }
    }

    Measurement_Area.prototype.addLabel = function (pos, value)
    {
        let entity = this.viewer.entities.add({
            position: pos,
            label: {
                text: value,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                font: "600 14px Pretendard",
                style: Cesium.LabelStyle.FILL,
                fillColor: Cesium.Color.YELLOW,
                showBackground: true,
                backgroundPadding: new Cesium.Cartesian2(7, 5),
                backgroundColor: Cesium.Color.BLACK.withAlpha(0.3),
                show: true,
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            },
        });

        return entity;
    }

    return Measurement_Area;
})();