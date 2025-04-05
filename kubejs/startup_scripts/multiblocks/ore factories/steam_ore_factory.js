const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steam_ore_processing')
    .category('ore_processing')
    .setMaxIOSize(1, 4, 1, 0)
    .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_ore_factory', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('steam_ore_processing')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        // .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS) //Line Commented Out bcz no custom appearance block
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#FFF#', '#FFF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('FFFFF', 'F###F', 'F###F', 'F###F', '#F#F#', '#F#F#', '#B#B#')
            .aisle('FFFFF', 'FG#GF', 'F###F', '#F#F#', '#FFF#', '##F##', '##B##')
            .aisle('#FFF#', '#FCF#', '#FFF#', '##F##', '#####', '#####', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
        .where('F', Predicates.blocks('kubejs:high_steam_machine_casing').setMinGlobalLimited(50) //switched from gtceu:steam_machine_casing to kubejs:high_steam_machine_casing
            .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2))
            .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(2)))
        .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
        .where('B', Predicates.blocks('gtceu:steel_machine_casing')) //Swapped out to match high pressure
        .where('#', Predicates.any())
        .build())
    .workableCasingRenderer('kubejs:block/hm/high_steam_machine_casing', //swapout to match new brick
        'kubejs:block/multiblock/primitive_blast_furnace', false);
}); 
