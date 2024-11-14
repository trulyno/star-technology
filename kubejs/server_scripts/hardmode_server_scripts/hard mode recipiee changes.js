ServerEvents.recipes(event => {
    
        event.recipes.create.mixing('2x gtceu:galvanized_steel_ingot', ['2x gtceu:steel_ingot', Fluid.of('gtceu:zinc', 144)]).heatRequirement('lowheated');
        event.recipes.create.mixing(Fluid.of('gtceu:copper', 144), ['1x minecraft:copper_ingot', Fluid.of('minecraft:lava', 100)]).heatRequirement('lowheated');
        event.recipes.create.mixing(Fluid.of('gtceu:zinc', 144), ['1x gtceu:zinc_ingot', Fluid.of('minecraft:lava', 100)]).heatRequirement('lowheated');
        event.recipes.create.mixing(Fluid.of('gtceu:tin', 144), ['1x gtceu:tin_ingot', Fluid.of('minecraft:lava', 100)]).heatRequirement('lowheated');
        
        event.recipes.gtceu.mixer('galvanized_steel_mixer')
        .itemInputs('3x gtceu:steel_dust')
        .inputFluids('gtceu:zinc 144')
        .itemOutputs('4x gtceu:galvanized_Steel_dust')
        .duration(1)
        .EUt(8);
        
        event.remove({id: 'exdeorum:barrel_fluid_mixing/stone'});
        event.custom({
                "type": "exdeorum:barrel_fluid_mixing",
                "additive_fluid": "minecraft:lava",
                "base_fluid": "minecraft:water",
                "base_fluid_amount": 1000,
                "consumes_additive": false,
                "result": "minecraft:cobblestone"
    });




})
