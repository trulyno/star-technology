GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('leptonic_manifold_quantiser')
        .category('leptonic_manifold_quantiser')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 3)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('leptonic_manifold_quantiser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('leptonic_manifold_quantiser')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("  BBB  ", "  XXX  ", "  BBB  ", "  B B  ", "       ", "       ", "  B B  ", "  BBB  ", "  B B  ", "       ", "       ", "       ", "       ", "       ") 
            .aisle(" BBBBB ", " XDDDX ", " B   B ", " B E B ", " BEEEB ", " FEEEF ", " FEEEF ", " B D B ", " BECEB ", "  E E  ", "       ", "       ", "       ", "       ") 
            .aisle("BBBBBBB", "XD   DX", "B     B", "B     B", " E   E ", " E   E ", "BE   EB", "B  D  B", "BEECEEB", " EECEE ", "   C   ", "   C   ", "   C   ", "   E   ") 
            .aisle("BBBDBBB", "XD G DX", "B  G  B", " E G E ", " E G E ", " E G E ", " E G E ", "BDDGDDB", " CCGCC ", "  CGC  ", "  CGC  ", "  CGC  ", "  CGC  ", "  EGE  ") 
            .aisle("BBBBBBB", "XD   DX", "B     B", "B     B", " E   E ", " E   E ", "BE   EB", "B  D  B", "BEECEEB", " EECEE ", "   C   ", "   C   ", "   C   ", "   E   ") 
            .aisle(" BBBBB ", " XDDDX ", " B   B ", " B E B ", " BEEEB ", " FEEEF ", " FEEEF ", " B D B ", " BECEB ", "  E E  ", "       ", "       ", "       ", "       ") 
            .aisle("  BBB  ", "  X@X  ", "  BBB  ", "  B B  ", "       ", "       ", "  B B  ", "  BBB  ", "  B B  ", "       ", "       ", "       ", "       ", "       ") 
            .where(" ", Predicates.any())
            .where("B", Predicates.blocks("gtceu:robust_machine_casing"))
            .where("C", Predicates.blocks("gtceu:fusion_glass"))
            .where('X', Predicates.blocks('gtceu:fusion_glass')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("D", Predicates.blocks("gtceu:high_power_casing"))
            .where("E", Predicates.blocks("gtceu:computer_casing"))
            .where("F", Predicates.blocks("gtceu:hastelloy_x_frame"))
            .where("G", Predicates.blocks("gtceu:advanced_computer_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/data_bank", false);
});
