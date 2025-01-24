ServerEvents.recipes(event => {

    [1, 4, 16, 64].forEach(storage_component => {
        event.shapeless(`megacells:cell_component_${storage_component}m`, `ae2additions:cell_component_${1024*storage_component}`)
    });

    [1, 4, 16, 64, 256].forEach(super_storage_component => {
        event.shapeless(`ae2:cell_component_${super_storage_component}k`, `ae2additions:super_cell_component_${super_storage_component}k`)
    });

    function megacells(mega, addi){
        event.shapeless(`megacells:cell_component_${mega}m`, `ae2additions:super_cell_component_${addi}`)
    };

    megacells(1, '1024k');
    megacells(4, '4096k');
    megacells(16, '16m');
    megacells(64, '65m');

    //unpacking
    //item storage
    [1, 4, 16, 64].forEach(ae2a => {
        event.recipes.gtceu.packer(`item_storage_cell_${1024*ae2a}_uncrafting`)
            .itemInputs(`ae2additions:item_storage_cell_${1024*ae2a}`)
            .itemOutputs(`ae2additions:cell_component_${1024*ae2a}`)
            .itemOutputs('megacells:mega_item_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);
    });

    //crafting storage
    [1, 4, 16, 64].forEach(ae2a => {
        event.recipes.gtceu.packer(`crafting_storage_${1024*ae2a}_uncrafting`)
            .itemInputs(`ae2additions:${1024*ae2a}k_crafting_storage`)
            .itemOutputs(`ae2additions:cell_component_${1024*ae2a}`)
            .itemOutputs('megacells:mega_crafting_unit')
            .circuit(2)
            .duration(100)
            .EUt(7);
    });

    //fluid storage
    [1, 4, 16].forEach(ae2a => {
        event.recipes.gtceu.packer(`fluid_storage_cell_${1024*ae2a}_uncrafting`)
            .itemInputs(`ae2additions:fluid_storage_cell_${1024*ae2a}`)
            .itemOutputs(`ae2additions:cell_component_${1024*ae2a}`)
            .itemOutputs('megacells:mega_fluid_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);
    });

    //super storage
    ['1k', '4k', '16k', '64k', '256k', '1024k', '4096k', '16m', '65m'].forEach(ae2a => {
        event.recipes.gtceu.packer(`super_storage_cell_${ae2a}_uncrafting`)
            .itemInputs(`ae2additions:super_cell_${ae2a}`)
            .itemOutputs(`ae2additions:super_cell_component_${ae2a}`)
            .itemOutputs('ae2:item_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);
    });

});