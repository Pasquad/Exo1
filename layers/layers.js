var wms_layers = [];

var format_23Regions_0 = new ol.format.GeoJSON();
var features_23Regions_0 = format_23Regions_0.readFeatures(json_23Regions_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_23Regions_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_23Regions_0.addFeatures(features_23Regions_0);
var lyr_23Regions_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_23Regions_0, 
                style: style_23Regions_0,
                popuplayertitle: '23 Regions',
                interactive: true,
                title: '<img src="styles/legend/23Regions_0.png" /> 23 Regions'
            });
var format_Foretdense_1 = new ol.format.GeoJSON();
var features_Foretdense_1 = format_Foretdense_1.readFeatures(json_Foretdense_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foretdense_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foretdense_1.addFeatures(features_Foretdense_1);
var lyr_Foretdense_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foretdense_1, 
                style: style_Foretdense_1,
                popuplayertitle: 'Foret dense',
                interactive: true,
                title: '<img src="styles/legend/Foretdense_1.png" /> Foret dense'
            });

lyr_23Regions_0.setVisible(true);lyr_Foretdense_1.setVisible(true);
var layersList = [lyr_23Regions_0,lyr_Foretdense_1];
lyr_23Regions_0.set('fieldAliases', {'REGION_NAM': 'REGION_NAM', 'BNGRC_REG_': 'BNGRC_REG_', 'Batsirai': 'Batsirai', 'Freddy': 'Freddy', 'Chineso': 'Chineso', 'Gamane': 'Gamane', 'Emnati': 'Emnati', 'Alvaro': 'Alvaro', 'Nb Cyclone': 'Nb Cyclone', });
lyr_Foretdense_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'OS_': 'OS_', 'OS_ID': 'OS_ID', 'NATBD500': 'NATBD500', 'COMMENTAIR': 'COMMENTAIR', });
lyr_23Regions_0.set('fieldImages', {'REGION_NAM': 'TextEdit', 'BNGRC_REG_': 'TextEdit', 'Batsirai': 'TextEdit', 'Freddy': 'TextEdit', 'Chineso': 'TextEdit', 'Gamane': 'TextEdit', 'Emnati': 'TextEdit', 'Alvaro': 'TextEdit', 'Nb Cyclone': 'TextEdit', });
lyr_Foretdense_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'OS_': 'TextEdit', 'OS_ID': 'TextEdit', 'NATBD500': 'Range', 'COMMENTAIR': 'TextEdit', });
lyr_23Regions_0.set('fieldLabels', {'REGION_NAM': 'no label', 'BNGRC_REG_': 'hidden field', 'Batsirai': 'hidden field', 'Freddy': 'hidden field', 'Chineso': 'hidden field', 'Gamane': 'hidden field', 'Emnati': 'hidden field', 'Alvaro': 'hidden field', 'Nb Cyclone': 'hidden field', });
lyr_Foretdense_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'hidden field', 'OS_': 'hidden field', 'OS_ID': 'hidden field', 'NATBD500': 'hidden field', 'COMMENTAIR': 'hidden field', });
lyr_Foretdense_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});