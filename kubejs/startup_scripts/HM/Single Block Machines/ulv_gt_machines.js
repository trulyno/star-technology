
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mixer', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .recipeType('mixer')
          )
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('assembler', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) =>
            builder
                .recipeType('assembler')
          )
});

};//if end