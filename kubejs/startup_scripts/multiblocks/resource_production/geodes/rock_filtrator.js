GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('rock_filtrator')
        .category('rock_filtrator')
        .setMaxIOSize(2, 9, 1, 0)
        .setSound(GTSoundEntries.MACERATOR);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('rock_filtrator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rock_filtrator')
        .tooltips('§7A multiblock that can sieve through gravel and sand more precisely than a basic sieve could ever achieve, uncovering the gems hidden inside.')
        .tooltips('Can only have §bone§r Energy Hatch')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('SFS', 'SGS', 'SGS', 'SFS')
            .aisle('FBF', 'GMG', 'GMG', 'FIF')
            .aisle('SCS', 'SGS', 'SGS', 'SFS')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(3))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1)))
            .where('F', Predicates.blocks('gtceu:steel_firebox_casing'))
            .where('B', Predicates.blocks('gtceu:cupronickel_coil_block'))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('M', Predicates.blocks('kubejs:mesh_block'))
            .where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
        'gtceu:block/multiblock/implosion_compressor', false);

});