var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MINAS_1 = new ol.format.GeoJSON();
var features_MINAS_1 = format_MINAS_1.readFeatures(json_MINAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINAS_1.addFeatures(features_MINAS_1);
var lyr_MINAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINAS_1, 
                style: style_MINAS_1,
                interactive: true,
                title: '<img src="styles/legend/MINAS_1.png" /> MINAS'
            });
var format_CATEOS_2 = new ol.format.GeoJSON();
var features_CATEOS_2 = format_CATEOS_2.readFeatures(json_CATEOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CATEOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CATEOS_2.addFeatures(features_CATEOS_2);
var lyr_CATEOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CATEOS_2, 
                style: style_CATEOS_2,
                interactive: true,
                title: '<img src="styles/legend/CATEOS_2.png" /> CATEOS'
            });
var format_GRAFICACIONPROVISORIA_3 = new ol.format.GeoJSON();
var features_GRAFICACIONPROVISORIA_3 = format_GRAFICACIONPROVISORIA_3.readFeatures(json_GRAFICACIONPROVISORIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRAFICACIONPROVISORIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRAFICACIONPROVISORIA_3.addFeatures(features_GRAFICACIONPROVISORIA_3);
var lyr_GRAFICACIONPROVISORIA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRAFICACIONPROVISORIA_3, 
                style: style_GRAFICACIONPROVISORIA_3,
                interactive: true,
                title: '<img src="styles/legend/GRAFICACIONPROVISORIA_3.png" /> GRAFICACION PROVISORIA'
            });
var format_CANTERAS_4 = new ol.format.GeoJSON();
var features_CANTERAS_4 = format_CANTERAS_4.readFeatures(json_CANTERAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTERAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTERAS_4.addFeatures(features_CANTERAS_4);
var lyr_CANTERAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANTERAS_4, 
                style: style_CANTERAS_4,
                interactive: true,
                title: '<img src="styles/legend/CANTERAS_4.png" /> CANTERAS'
            });

lyr_Googlestreet_0.setVisible(true);lyr_MINAS_1.setVisible(true);lyr_CATEOS_2.setVisible(true);lyr_GRAFICACIONPROVISORIA_3.setVisible(true);lyr_CANTERAS_4.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_MINAS_1,lyr_CATEOS_2,lyr_GRAFICACIONPROVISORIA_3,lyr_CANTERAS_4];
lyr_MINAS_1.set('fieldAliases', {'MINA': 'MINA', 'EXPEDIENTE': 'EXPEDIENTE', 'CONCSRIO': 'CONCSRIO', 'MINERAL': 'MINERAL', });
lyr_CATEOS_2.set('fieldAliases', {'expediente': 'expediente', 'titular': 'titular', 'Fecha Conc': 'Fecha Conc', 'Fecha de F': 'Fecha de F', });
lyr_GRAFICACIONPROVISORIA_3.set('fieldAliases', {'expediente': 'expediente', 'departamen': 'departamen', 'Mina': 'Mina', 'tirular': 'tirular', 'Mineral': 'Mineral', });
lyr_CANTERAS_4.set('fieldAliases', {'nombre': 'nombre', 'expediente': 'expediente', 'titular': 'titular', 'mineral': 'mineral', });
lyr_MINAS_1.set('fieldImages', {'MINA': 'TextEdit', 'EXPEDIENTE': 'TextEdit', 'CONCSRIO': 'TextEdit', 'MINERAL': 'TextEdit', });
lyr_CATEOS_2.set('fieldImages', {'expediente': 'TextEdit', 'titular': 'TextEdit', 'Fecha Conc': 'TextEdit', 'Fecha de F': 'TextEdit', });
lyr_GRAFICACIONPROVISORIA_3.set('fieldImages', {'expediente': 'TextEdit', 'departamen': 'TextEdit', 'Mina': 'TextEdit', 'tirular': 'TextEdit', 'Mineral': 'TextEdit', });
lyr_CANTERAS_4.set('fieldImages', {'nombre': 'TextEdit', 'expediente': 'TextEdit', 'titular': 'TextEdit', 'mineral': 'TextEdit', });
lyr_MINAS_1.set('fieldLabels', {'MINA': 'inline label', 'EXPEDIENTE': 'header label', 'CONCSRIO': 'inline label', 'MINERAL': 'inline label', });
lyr_CATEOS_2.set('fieldLabels', {'expediente': 'header label', 'titular': 'inline label', 'Fecha Conc': 'no label', 'Fecha de F': 'no label', });
lyr_GRAFICACIONPROVISORIA_3.set('fieldLabels', {'expediente': 'header label', 'departamen': 'inline label', 'Mina': 'inline label', 'tirular': 'inline label', 'Mineral': 'inline label', });
lyr_CANTERAS_4.set('fieldLabels', {'nombre': 'inline label', 'expediente': 'header label', 'titular': 'inline label', 'mineral': 'inline label', });
lyr_CANTERAS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});