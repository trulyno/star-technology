ServerEvents.recipes(event => {
   
    //hammer 
    function hammer(input, output, chance){
        event.custom({
            "type": "exnihilosequentia:crushing",
            "input": {
              "item": input},
            "results": [{
                "chance": chance,
                "count": 1,
                "item":output}]
    })}

    hammer('kubejs:coagulated_iron_mixture', 'gtceu:crushed_iron_ore', 1.0)
    hammer('kubejs:coagulated_iron_mixture', 'gtceu:crushed_tin_ore', 0.3)
    hammer('kubejs:coagulated_copper_mixture', 'gtceu:crushed_copper_ore', 1.0)
    hammer('kubejs:coagulated_quartz_mixture', 'minecraft:quartz', 1.0)
    hammer('kubejs:coagulated_quartz_mixture', 'minecraft:diamond', 0.075)
    hammer('kubejs:coagulated_lava', 'gtceu:sulfur_dust', 1.0)
    hammer('kubejs:coagulated_lava', 'gtceu:crushed_sphalerite_ore', 0.3)

    //macerator
    function macerator(id, input, output){
        event.recipes.gtceu.macerator(id)
        .itemInputs(input)
        .itemOutputs(output)
        .duration(100)
        .EUt(6)
    }

    macerator('coagulated_copper_mixture', 'kubejs:coagulated_copper_mixture', 'gtceu:crushed_copper_ore')

    function maceratorby(id, input, output1, output2, chance, increase){
        event.recipes.gtceu.macerator(id)
        .itemInputs(input)
        .itemOutputs(output1)
        .chancedOutput(output2, chance, increase)
        .duration(100)
        .EUt(6)
    }

    maceratorby('coagulated_iron_mixture', 'kubejs:coagulated_iron_mixture', 'gtceu:crushed_iron_ore', 'gtceu:crushed_tin_ore', 3000, 500)
    maceratorby('coagulated_quartz_mixture', 'kubejs:coagulated_quartz_mixture', 'minecraft:quartz', 'minecraft:diamond', 750, 100)
    maceratorby('coagulated_lava', 'kubejs:coagulated_lava', 'gtceu:sulfur_dust', 'gtceu:crushed_sphalerite_ore', 3000, 500)

})