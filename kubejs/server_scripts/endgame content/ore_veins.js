
GTCEuServerEvents.oreVeins(event => {
    event.add('start:zapolite_vein', vein => {
        vein.weight(600)
        vein.clusterSize(60)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)

        vein.layer('abydos')
        

        vein.heightRangeUniform(10, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zapolite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('titanite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('lautarite')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('iodargyrite')).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Tungstate).size(1, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zapolite'))
            .placement('above')
            .density(0.4)
            .radius(5)
        )
    });

    event.add('start:lautarite_vein', vein => {
        vein.weight(500)
        vein.clusterSize(60)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)

        vein.layer('abydos')
        

        vein.heightRangeUniform(10, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('lautarite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('crookesite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('clausthalite')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('calaverite')).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('sylvanite')).size(1, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('lautarite'))
            .placement('above')
            .density(0.4)
            .radius(5)
        )
    });

    event.add('start:clausthalite_vein', vein => {
        vein.weight(500)
        vein.clusterSize(60)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)

        vein.layer('abydos')
        vein.dimensions('sgjourney:abydos')
        vein.biomes('#sgjourney:abydos_desert')

        vein.heightRangeUniform(10, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('clausthalite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('tiemannite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('klockmannite')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('berzelianite')).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('stibiopalladinite')).size(1, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('clausthalite'))
            .placement('above')
            .density(0.4)
            .radius(5)
        )
    });

    event.add('start:berzelianite_vein', vein => {
        vein.weight(500)
        vein.clusterSize(60)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)

        vein.layer('abydos')

        vein.heightRangeUniform(10, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('berzelianite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('umangite')).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get('strontianite')).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get('celestine')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('aguilarite')).size(1, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('berzelianite'))
            .placement('above')
            .density(0.4)
            .radius(5)
        )
    });
});