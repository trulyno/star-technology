const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steam_ore_processing')
    .category('ore_processing')
    .setMaxIOSize(1, 4, 1, 0)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH);
});

if (global.packmode !== 'hard'){
(() => {        
GTCEuStartupEvents.registry('gtceu:machine', event => {   
    event.create('steam_ore_factory', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_ore_processing')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#FFF#', '#FFF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('FFFFF', 'F###F', 'F###F', 'F###F', '#F#F#', '#F#F#', '#B#B#')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('#FFF#', '#FCF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
        .where('F', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get()).setMinGlobalLimited(50)
            .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
        .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
        .where('B', Predicates.blocks('gtceu:bronze_machine_casing'))
        .where('#', Predicates.any())
        .build())
    .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_bronze_plated_bricks',
        'kubejs:block/multiblock/primitive_blast_furnace', false);
}); 
})()
}
else {
GTCEuStartupEvents.registry('gtceu:machine', event => {     
    event.create('steam_ore_factory', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_ore_processing')
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#FFF#', '#FFF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('FFFFF', 'F###F', 'F###F', 'F###F', '#F#F#', '#F#F#', '#B#B#')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('#FFF#', '#FCF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
        .where('F', Predicates.blocks('kubejs:high_steam_machine_casing').setMinGlobalLimited(40)
            .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
        .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
        .where('B', Predicates.blocks('gtceu:steel_machine_casing'))
        .where('#', Predicates.any())
        .build())
    .workableCasingRenderer('kubejs:block/hm/high_steam_machine_casing',
        'kubejs:block/multiblock/primitive_blast_furnace', false);
}); }