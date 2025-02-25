
StartupEvents.registry('block', event => {

    const casing = (material, emmits_light) => {

        event.create(`${material}_casing`)
            .hardness(10)
            .resistance(1)
            .lightLevel((emmits_light) ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing-' + material.replace('_', '-')}`);

    }

    const named_casing = (material, emmits_light, display_name) => {

        event.create(`${material}_casing`)
            .displayName(display_name)
            .hardness(10)
            .resistance(1)
            .lightLevel((emmits_light) ? 2 : 0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/superconductors/${'casing-' + material.replace('_', '-')}`);

    }

    casing('soul_infused', false);
    named_casing('signalum', true, 'Ultra High Pressure and Temperature Resistant Signalum Casing');
    casing('lumium', true);
    named_casing('enderium', false, 'Thermal Fluctuation Proof Enderium Casing');
    named_casing('shellite', false, 'Ultra-Resistant Shellite Casing');
    named_casing('twinite', false, 'Bend-Resistant Twinite Casing');
    named_casing('dragonsteel', false, 'Unbendable Dragonsteel Casing');
    named_casing('prismalium', true, 'Transportation Prismalium Casing');
    named_casing('melodium', true, 'Reinforced Melodium Casing');
    named_casing('stellarium', true, 'Structurally Integral Stellarium Casing');
    named_casing('ancient_runicalium', true, 'Infusion Enhanced Ancient Runicalium Casing');


});