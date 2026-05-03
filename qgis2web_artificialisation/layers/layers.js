var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zan_evol_2018_2021_38_1 = new ol.format.GeoJSON();
var features_zan_evol_2018_2021_38_1 = format_zan_evol_2018_2021_38_1.readFeatures(json_zan_evol_2018_2021_38_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zan_evol_2018_2021_38_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zan_evol_2018_2021_38_1.addFeatures(features_zan_evol_2018_2021_38_1);
var lyr_zan_evol_2018_2021_38_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zan_evol_2018_2021_38_1, 
                style: style_zan_evol_2018_2021_38_1,
                popuplayertitle: 'zan_evol_2018_2021_38',
                interactive: true,
                title: '<img src="styles/legend/zan_evol_2018_2021_38_1.png" /> zan_evol_2018_2021_38'
            });
var group_volution_artificialisation = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_zan_evol_2018_2021_38_1,],
                                fold: 'open',
                                title: 'évolution_artificialisation'});

lyr_OpenStreetMap_0.setVisible(true);lyr_zan_evol_2018_2021_38_1.setVisible(true);
var layersList = [group_volution_artificialisation];
lyr_zan_evol_2018_2021_38_1.set('fieldAliases', {'fid': 'fid', 'id_2021': 'id_2021', 'cs_2021': 'cs_2021', 'us_2021': 'us_2021', 'artif_2021': 'artif_2021', 'id_2018': 'id_2018', 'cs_2018': 'cs_2018', 'us_2018': 'us_2018', 'artif_2018': 'artif_2018', 'artificialisation': 'artificialisation', 'surface': 'surface', });
lyr_zan_evol_2018_2021_38_1.set('fieldImages', {'fid': 'TextEdit', 'id_2021': 'TextEdit', 'cs_2021': 'TextEdit', 'us_2021': 'TextEdit', 'artif_2021': 'TextEdit', 'id_2018': 'TextEdit', 'cs_2018': 'TextEdit', 'us_2018': 'TextEdit', 'artif_2018': 'TextEdit', 'artificialisation': 'TextEdit', 'surface': 'TextEdit', });
lyr_zan_evol_2018_2021_38_1.set('fieldLabels', {'fid': 'no label', 'id_2021': 'no label', 'cs_2021': 'no label', 'us_2021': 'no label', 'artif_2021': 'no label', 'id_2018': 'no label', 'cs_2018': 'no label', 'us_2018': 'no label', 'artif_2018': 'no label', 'artificialisation': 'no label', 'surface': 'no label', });
lyr_zan_evol_2018_2021_38_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});