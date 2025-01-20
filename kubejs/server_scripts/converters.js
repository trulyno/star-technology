
ServerEvents.recipes(event => {

    event.remove({ output: /gtceu:.*_energy_converter/ });
    
    const converterMaterials = {
        lv: 'soul_infused',
        mv: 'signalum',
        hv: 'lumium',
        ev: 'enderium',
        iv: 'shellite',
        luv: 'twinite',
        zpm: 'dragonsteel',
        uv: 'prismalium',
        uhv: 'stellarium',
        uev: 'ancient_runicalium'
    }
    
    converterCraftingRecipe('1a','single');
    converterCraftingRecipe('4a','quadruple');
    converterCraftingRecipe('8a','octal');
    converterCraftingRecipe('16a','hex');
    
    function converterCraftingRecipe(amps,thickness){
        for (const [tier, superconductor] of Object.entries(converterMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
                '   ',
                'WCW',
                'WSW'
            ], {
                W: `gtceu:${superconductor}_${thickness}_wire`,
                C: `#gtceu:circuits/${tier}`,
                S: `gtceu:${tier}_machine_hull`
            });
        }
    }  

    // 64A Converter Recipe
    for (const [tier, superconductor] of Object.entries(converterMaterials)) {
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