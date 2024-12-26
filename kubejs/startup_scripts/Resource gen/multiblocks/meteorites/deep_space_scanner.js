GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('deep_space_scanner')
        .category('deep_space_scanner')
        .setMaxIOSize(3, 1, 3, 0)
        .setSound(GTSoundEntries.COMPUTATION);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('deep_space_scanner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('deep_space_scanner')
        .recipeModifier(GTRecipeModifiers.OC_PERFECT)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("###BBBCBBB###", "###DD###DD###", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
            .aisle("##BBBBCBBBB##", "##D#######D##", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
            .aisle("#BBBBBCBBBBB#", "#D#########D#", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############") 
            .aisle("BBBEBBCBBEBBB", "D###########D", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "######F######", "#####FFF#####", "#####GGG#####", "#####HHH#####") 
            .aisle("BBBBBBCBBBBBB", "D####NNN####D", "######N######", "######N######", "#############", "#############", "#############", "#####FFF#####", "####FFFFF####", "###FFFFFFF###", "##FFFF#FFFF##", "##GFF###FFG##", "##HGG###GGH##", "###HH###HH###") 
            .aisle("BBBBBIIIBBBBB", "####NJNJN####", "#####JNJ#####", "#####JNJ#####", "#####JNJ#####", "#####JNJ#####", "#####FFF#####", "###FF###FF###", "##FF#####FF##", "#FF#######FF#", "#G#########G#", "#H#########H#", "#############", "#############") 
            .aisle("CCCCCIKICCCCC", "####NNKNN####", "####NNKNN####", "####NNKNN####", "#####NKN#####", "#####NKN#####", "###FFLLLFF###", "##F#######F##", "#F#########F#", "G###########G", "H###########H", "#############", "#############", "#############") 
            .aisle("BBBBBIIIBBBBB", "####NDNDN####", "#####DND#####", "#####DND#####", "#####DND#####", "###FFLLLFF###", "##F##LLL##F##", "#F####L####F#", "G###########G", "H###########H", "#############", "#############", "#############", "#############") 
            .aisle("BBBBBBCBBBBBB", "D####NAN####D", "######N######", "######N######", "####FFFFF####", "##FF#####FF##", "#F####L####F#", "F####LLL####F", "G#####L#####G", "H###########H", "#############", "#############", "#############", "#############") 
            .aisle("BBBEBBCBBEBBB", "D###########D", "#############", "######F######", "###FFF#FFF###", "##F#######F##", "GF#########FG", "G#####L#####G", "H####LLL####H", "######L######", "#############", "#############", "#############", "#############") 
            .aisle("#BBBBBCBBBBB#", "#D#########D#", "#############", "#####FFF#####", "#GFFF###FFFG#", "#G#########G#", "#G#########G#", "#H#########H#", "######L######", "#####LLL#####", "######L######", "#############", "#############", "#############") 
            .aisle("##BBBBCBBBB##", "##D#######D##", "#############", "#####FFF#####", "##GFF###FFG##", "##H#######H##", "#############", "#############", "#############", "######L######", "#####LLL#####", "######L######", "#############", "#############") 
            .aisle("###BBBCBBB###", "###DD###DD###", "#############", "#####GGG#####", "###GGHHHGG###", "###HH###HH###", "#############", "#############", "#############", "#############", "######L######", "#####LML#####", "#############", "#############")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where("B", Predicates.blocks("chisel_chipped_integration:factory_wireframe"))
            .where("C", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("D", Predicates.blocks("gtceu:steel_frame"))
            .where("E", Predicates.blocks("gtceu:orange_lamp"))
            .where("F", Predicates.blocks("gtceu:clean_machine_casing"))
            .where("G", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("H", Predicates.blocks("ae2:fluix_slab"))
            .where("I", Predicates.blocks("gtceu:steel_gearbox"))
            .where("J", Predicates.blocks("gtceu:stainless_steel_frame"))
            .where("K", Predicates.blocks("gtceu:lv_hermetic_casing"))
            .where("L", Predicates.blocks("gtceu:heatproof_machine_casing"))
            .where("M", Predicates.blocks("gtceu:tempered_glass"))
            .where("N", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))
            .where("#", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/large_miner", false);
});