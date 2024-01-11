
ServerEvents.recipes(event => {

    event.remove({mod: "pipez"});

    event.shaped(Item.of('8x pipez:energy_pipe'), [
        'PWP',
        'PWP',
        'PWP'
    ], {
        P: 'gtceu:lead_plate',
        W: 'gtceu:tin_single_cable'
    });

    event.shaped(Item.of('8x pipez:fluid_pipe'), [
        'PWP',
        'PWP',
        'PWP'
    ], {
        P: 'gtceu:bronze_plate',
        W: 'gtceu:copper_tiny_fluid_pipe'
    });

    event.shaped(Item.of('8x pipez:item_pipe'), [
        'PWP',
        'PWP',
        'PWP'
    ], {
        P: 'gtceu:brass_plate',
        W: 'gtceu:tin_small_item_pipe'
    });

    event.shaped(Item.of('8x pipez:universal_pipe'), [
        'LWL',
        'ZCZ',
        'STS'
    ], {
        L: 'gtceu:lead_plate',
        Z: 'gtceu:bronze_plate',
        S: 'gtceu:brass_plate',
        W: 'gtceu:tin_single_cable',
        C: 'gtceu:copper_tiny_fluid_pipe',
        T: 'gtceu:tin_small_item_pipe'
    });

    event.shaped(Item.of('pipez:wrench'), [
        ' P ',
        ' BP',
        'B  '
    ], {
        P: 'gtceu:wrought_iron_plate',
        B: 'gtceu:brass_rod'
    });

    event.shaped(Item.of('pipez:basic_upgrade'), [
        'PPP',
        'UCU',
        'PPP'
    ], {
        P: 'gtceu:invar_plate',
        U: 'gtceu:tin_small_item_pipe',
        C: 'gtceu:lv_conveyor_module'
    });

    event.shaped(Item.of('pipez:improved_upgrade'), [
        'PPP',
        'UCU',
        'PPP'
    ], {
        P: 'gtceu:aluminium_plate',
        U: 'pipez:basic_upgrade',
        C: 'gtceu:mv_conveyor_module'
    });

    event.shaped(Item.of('pipez:advanced_upgrade'), [
        'PPP',
        'UCU',
        'PPP'
    ], {
        P: 'gtceu:stainless_steel_plate',
        U: 'pipez:improved_upgrade',
        C: 'gtceu:hv_conveyor_module'
    });

    event.shaped(Item.of('pipez:ultimate_upgrade'), [
        'PPP',
        'UCU',
        'PPP'
    ], {
        P: 'gtceu:titanium_plate',
        U: 'pipez:improved_upgrade',
        C: 'gtceu:ev_conveyor_module'
    });

    event.shaped(Item.of('pipez:filter_destination_tool'), [
        'PPP',
        'RGR',
        'PBP'
    ], {
        P: 'gtceu:iron_plate',
        R: 'minecraft:redstone',
        G: '#forge:glass_panes',
        B: '#minecraft:buttons'
    });

});