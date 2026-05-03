var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dents_creuses_ok_1 = new ol.format.GeoJSON();
var features_Dents_creuses_ok_1 = format_Dents_creuses_ok_1.readFeatures(json_Dents_creuses_ok_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dents_creuses_ok_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dents_creuses_ok_1.addFeatures(features_Dents_creuses_ok_1);
var lyr_Dents_creuses_ok_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dents_creuses_ok_1, 
                style: style_Dents_creuses_ok_1,
                popuplayertitle: 'Dents_creuses_ok',
                interactive: true,
                title: '<img src="styles/legend/Dents_creuses_ok_1.png" /> Dents_creuses_ok'
            });
var group_Dents_creuses_Arcgis = new ol.layer.Group({
                                layers: [lyr_Dents_creuses_ok_1,],
                                fold: 'open',
                                title: 'Dents_creuses_Arcgis'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Dents_creuses_ok_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Dents_creuses_Arcgis];
lyr_Dents_creuses_ok_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Shape_Area': 'Shape_Area', 'width': 'width', 'height': 'height', 'angle': 'angle', 'area': 'area', 'perimeter': 'perimeter', 'coef_elongation': 'coef_elongation', });
lyr_Dents_creuses_ok_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Shape_Area': 'TextEdit', 'width': 'TextEdit', 'height': 'TextEdit', 'angle': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'coef_elongation': 'TextEdit', });
lyr_Dents_creuses_ok_1.set('fieldLabels', {'fid': 'header label - visible with data', 'id': 'no label', 'Shape_Area': 'no label', 'width': 'no label', 'height': 'no label', 'angle': 'no label', 'area': 'no label', 'perimeter': 'no label', 'coef_elongation': 'no label', });
lyr_Dents_creuses_ok_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});