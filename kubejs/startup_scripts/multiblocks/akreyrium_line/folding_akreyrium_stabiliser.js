GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('folding_akreyrium_stabiliser')
        .category('folding_akreyrium_stabiliser')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 1)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('folding_akreyrium_stabiliser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('folding_akreyrium_stabiliser')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("                 ", "        B        ", "        B        ", "        B        ", "        B        ", "        B        ", "                 ") 
            .aisle("       BBB       ", "        B        ", "     B     B     ", "     BCCCCCB     ", "     B     B     ", "        B        ", "       BBB       ") 
            .aisle("      BXXXB      ", "     B     B     ", "    EEE   EEE    ", "FDDFFFE   EFFFDDF", "    EEE   EEE    ", "     B     B     ", "      BXXXB      ") 
            .aisle("      BXGXB      ", "     BC G CB     ", "FDDFFFE G EFFFDDF", "MGGGGGGGGGGGGGGGM", "FDDFFFE G EFFFDDF", "     BC G CB     ", "      BXGXB      ") 
            .aisle("      BXXXB      ", "     B     B     ", "    EEE   EEE    ", "FDDFFFE G EFFFDDF", "    EEE   EEE    ", "     B     B     ", "      BXXXB      ") 
            .aisle("       BBB       ", "        B        ", "     B     B     ", "     BCCGCCB     ", "     B     B     ", "        B        ", "       BBB       ") 
            .aisle("                 ", "        B        ", "        B        ", "        @        ", "        B        ", "        B        ", "                 ") 
            .where(" ", Predicates.any())
            .where("B", Predicates.blocks("gtceu:robust_machine_casing"))
            .where("C", Predicates.blocks("gtceu:hastelloy_x_frame"))
            .where("D", Predicates.blocks("gtceu:fusion_glass"))
            .where("M", Predicates.blocks("gtceu:ulv_input_bus"))
            .where("X", Predicates.blocks("gtceu:fusion_glass")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("E", Predicates.blocks("gtceu:high_power_casing"))
            .where("F", Predicates.blocks("gtceu:computer_casing"))
            .where("G", Predicates.blocks("gtceu:advanced_computer_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/hpca", false);
});
