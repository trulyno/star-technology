// packmode: hard

ServerEvents.recipes(event => {

    let inter = 'gtceu:industrial_steam_casing'
    event.recipes.create.sequenced_assembly([
        Item.of(`gtceu:ulv_fluid_input`),
    ], inter, [
        event.recipes.createDeploying(inter, [inter, `minecraft:bucket`]),
		event.recipes.createFilling(inter, [inter, Fluid.of('gtceu:glass', 36)]),
        event.recipes.createDeploying(inter, [inter, `gtceu:rubber_ring`]),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1);

});