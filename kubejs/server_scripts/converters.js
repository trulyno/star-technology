ServerEvents.recipes(event => {
    const id = global.id;

    event.remove({ output: /gtceu:.*_energy_converter/ });
    
    const PRMconverterMaterials = {
        lv: 'soul_infused',
        mv: 'signalum',
        hv: 'lumium'
    }

    const ADVconverterMaterials = {
        ev: 'enderium',
        iv: 'shellite',
        luv: 'twinite',
        zpm: 'dragonsteel',
        uv: 'prismalium',
        uhv: 'stellarium',
        uev: 'ancient_runicalium'
    }
    
    function converterCraftingRecipe(amps,thickness){
        for (const [tier, superconductor] of Object.entries(ADVconverterMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
                '   ',
                'WCW',
                'WSW'
            ], {
                W: `gtceu:${superconductor}_${thickness}_wire`,
                C: `#gtceu:circuits/${tier}`,
                S: `gtceu:${tier}_machine_hull`
            }).id(`start:shaped/${tier}_${amps}_energy_converter`);
        };
        for (const [tier, superconductor] of Object.entries(PRMconverterMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
                '   ',
                'WCW',
                'WSW'
            ], {
                W: `gtceu:${superconductor}_${thickness}_wire`,
                C: `#gtceu:circuits/${tier}`,
                S: `gtceu:${tier}_machine_hull`
            }).id(`start:shaped/${tier}_${amps}_energy_converter`);
        };
    };
    
    converterCraftingRecipe('1a','single');
    converterCraftingRecipe('4a','quadruple');
    converterCraftingRecipe('8a','octal');
    converterCraftingRecipe('16a','hex');

    // 64A Converter Recipe
    for (const [tier, superconductor] of Object.entries(ADVconverterMaterials)) {
        event.recipes.gtceu.assembler(`start_core:${tier}_64a_energy_converter`)
            .itemInputs(`#gtceu:circuits/${tier}`, `16x gtceu:${superconductor}_hex_wire`, `gtceu:${tier}_machine_hull`)
            .itemOutputs(Item.of(`start_core:${tier}_64a_energy_converter`))
            .duration(600)
            .EUt(1625)
    }
});

BlockEvents.placed(event => {
	let block = event.getBlock();
	if (/^(?:gtceu|start_core):.*energy_converter$/.test(block.getId())) {
        block.mergeEntityData({ energyContainer: { feToEu: true } });
	};
});