ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([641674.868357, 9169393.848387, 644393.851905, 9170847.891281]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DissolvePolygonDSSenden_1 = new ol.format.GeoJSON();
var features_DissolvePolygonDSSenden_1 = format_DissolvePolygonDSSenden_1.readFeatures(json_DissolvePolygonDSSenden_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DissolvePolygonDSSenden_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvePolygonDSSenden_1.addFeatures(features_DissolvePolygonDSSenden_1);
var lyr_DissolvePolygonDSSenden_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvePolygonDSSenden_1, 
                style: style_DissolvePolygonDSSenden_1,
                interactive: true,
    title: 'Dissolve Polygon DS Senden<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_0.png" /> 1<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_1.png" /> 2<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_2.png" /> 3<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_3.png" /> 4<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_4.png" /> 5<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_5.png" /> 6<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_6.png" /> 7<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_7.png" /> 8<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_8.png" /> 9<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_9.png" /> 10<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_10.png" /> 11<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_11.png" /> 12<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_12.png" /> 13<br />\
    <img src="styles/legend/DissolvePolygonDSSenden_1_13.png" /> <br />'
        });
var format_DissolveJALANDSJBGFIXUTM_2 = new ol.format.GeoJSON();
var features_DissolveJALANDSJBGFIXUTM_2 = format_DissolveJALANDSJBGFIXUTM_2.readFeatures(json_DissolveJALANDSJBGFIXUTM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DissolveJALANDSJBGFIXUTM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolveJALANDSJBGFIXUTM_2.addFeatures(features_DissolveJALANDSJBGFIXUTM_2);
var lyr_DissolveJALANDSJBGFIXUTM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolveJALANDSJBGFIXUTM_2, 
                style: style_DissolveJALANDSJBGFIXUTM_2,
                interactive: true,
    title: 'Dissolve JALAN DS JBG FIX UTM<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_0.png" /> Irigasi<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_1.png" /> Jalan Desa<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_2.png" /> Jalan Kecamatan<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_4.png" /> Jembatan<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_5.png" /> Kanal Sungai<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_6.png" /> Sungai<br />\
    <img src="styles/legend/DissolveJALANDSJBGFIXUTM_2_7.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_DissolvePolygonDSSenden_1.setVisible(true);lyr_DissolveJALANDSJBGFIXUTM_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DissolvePolygonDSSenden_1,lyr_DissolveJALANDSJBGFIXUTM_2];
lyr_DissolvePolygonDSSenden_1.set('fieldAliases', {'id': 'id', 'PL': 'PL', 'Luas_PL': 'Luas_PL', });
lyr_DissolveJALANDSJBGFIXUTM_2.set('fieldAliases', {'id': 'id', 'Garis': 'Garis', 'Panjang_Ga': 'Panjang_Ga', });
lyr_DissolvePolygonDSSenden_1.set('fieldImages', {'id': 'TextEdit', 'PL': '', 'Luas_PL': '', });
lyr_DissolveJALANDSJBGFIXUTM_2.set('fieldImages', {'id': 'TextEdit', 'Garis': 'TextEdit', 'Panjang_Ga': '', });
lyr_DissolvePolygonDSSenden_1.set('fieldLabels', {'id': 'no label', 'PL': 'no label', 'Luas_PL': 'no label', });
lyr_DissolveJALANDSJBGFIXUTM_2.set('fieldLabels', {'id': 'no label', 'Garis': 'no label', 'Panjang_Ga': 'no label', });
lyr_DissolveJALANDSJBGFIXUTM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});