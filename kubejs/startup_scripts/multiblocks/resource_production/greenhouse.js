GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('tree_greenhouse')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 3, 1)
        .setSound(GTSoundEntries.BOILER);
    
    event.create('wild_garden')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(2, 12, 0, 0)
        .setSound(GTSoundEntries.BOILER);
    
    event.create('crop_greenhouse')
        .category('large_farm')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 1, 0)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['tree_greenhouse', 'wild_garden', 'crop_greenhouse'])
        .tooltips('§7An electrical machine that stimulates the growth of plants, flowers and saplings, allowing you to more easily farm them.')
        .tooltips('Has §6Perfect Overclock')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('HHHHHHH', ' FGGGF ', ' FGGGF ', ' FGGGF ', '  FFF  ')
            .aisle('HgggggH', 'FB###BF', 'FB###BF', 'FB###BF', ' F###F ')
            .aisle('HgggggH', 'G#####G', 'G#####G', 'G##L##G', 'F#####F')
            .aisle('HggDggH', 'G##O##G', 'G##O##G', 'G#LOL#G', 'F##L##F')
            .aisle('HgggggH', 'G#####G', 'G#####G', 'G##L##G', 'F#####F')
            .aisle('HgggggH', 'FB###BF', 'FB###BF', 'FB###BF', ' F###F ')
            .aisle('HHHCHHH', ' FGGGF ', ' FGGGF ', ' FGGGF ', '  FFF  ')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(14)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('B', Predicates.blocks('gtceu:soul_infused_block'))
            .where('O', Predicates.blocks('minecraft:oak_log'))
            .where('L', Predicates.blocks('minecraft:oak_leaves'))
            .where('D', Predicates.blocks('minecraft:dirt'))
            .where('F', Predicates.blocks('gtceu:steel_frame'))
            .where('G', Predicates.blocks('thermal:obsidian_glass'))
            .where('g', Predicates.blocks('minecraft:grass_block'))
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
        'gtceu:block/multiblock/implosion_compressor', false);
        
});