ServerEvents.recipes(event => {

    //controller
    event.recipes.gtceu.assembler('nuclear_reactor')
        .itemInputs('3x #gtceu:circuits/ev', 'gtceu:high_temperature_smelting_casing','gtceu:hv_emitter',
            '2x gtceu:hv_electric_pump','gtceu:hv_robot_arm')
        .itemOutputs('gtceu:nuclear_reactor')
        .inputFluids('gtceu:soldering_alloy 576')
        .duration(1800)
        .EUt(400);

});

ItemEvents.rightClicked('kubejs:highly_enriched_uranium_fuel_rod', event => {
    if (event.player.isCrouching()) {
        event.item.count--
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:entity.generic.eat player ${event.player.username} ~ ~ ~`);
        event.server.scheduleInTicks(6, ctx => {
            event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:entity.player.burp player ${event.player.username} ~ ~ ~`);
            event.player.potionEffects.add('minecraft:instant_damage', 1, 99);
        })
    }
});