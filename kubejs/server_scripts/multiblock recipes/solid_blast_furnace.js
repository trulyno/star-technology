
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:solid_blast_furnace'), [
        'HRS',
        'PBR',
        'FRS'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:steel_rod',
        S: 'gtceu:steel_screw',
        P: 'gtceu:steel_plate',
        B: 'gtceu:solid_machine_casing',
        F: '#forge:tools/screwdrivers'
    });
});