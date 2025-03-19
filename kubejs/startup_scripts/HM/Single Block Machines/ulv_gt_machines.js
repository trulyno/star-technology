
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mixer', 'simple')
        .tiers(GTValues.ULV)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('assembler', 'simple')
        .tiers(GTValues.ULV)
});

};//if end