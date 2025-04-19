ServerEvents.recipes(event => {
    const id = global.id;

    //controller
    event.recipes.gtceu.assembler(id('nuclear_reactor'))
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
        event.server.runCommandSilent(`execute at ${event.player.username} run playsound minecraft:entity.generic.eat player ${event.player.username} ~ ~ ~`);
        event.server.scheduleInTicks(10+Math.floor(Math.random()*300), ctx => {
            event.server.runCommandSilent(`execute at ${event.player.username} run playsound minecraft:entity.player.burp player ${event.player.username} ~ ~ ~`);
            event.server.scheduleInTicks(15, ctx => {
                event.server.runCommandSilent(`execute at ${event.player.username} run summon thermal:fire_tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`);
                event.server.runCommandSilent(`execute at ${event.player.username} run summon minecraft:tnt ${Math.floor(event.player.x)} ${Math.floor(event.player.y)} ${Math.floor(event.player.z)}`);
                event.player.potionEffects.add('minecraft:instant_damage', 1, 99);
            })
        })
    }
});