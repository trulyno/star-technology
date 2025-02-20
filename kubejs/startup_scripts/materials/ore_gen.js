// priority: -100

GTCEuStartupEvents.registry('gtceu:material', event => {

    const no_decomp = global.flags.no_decomp;

    const liquid = (name, color, composition) => {
        event.create(name)
            .fluid()
            .components(composition)
            .color(color)
            .flags(no_decomp);
    };

    const dust = (name, color, composition) => {
        event.create(name)
            .dust()
            .color(color)
            .components(composition) 
            .flags(no_decomp);
    };

    liquid('iron_mixture', 0xC42626, '1x mystery');
    liquid('copper_mixture', 0xC86524, '1x mystery');
    liquid('quartz_mixture', 0xABC5E0, '1x mystery');

    /*/reflective metal
    event.create('reflective_metal')
        .ingot()
        .components('5x aluminium', '3x steel', '2x glowstone')
        .color(0xA1ABBC)
        .flags(plates, rod, frame)
        .iconSet(dull
        .blastTemp(2000, 'low', VA('mv'), 600);*/

    liquid('rare_ore_residue', 0x556278, '1x mystery');

    dust('chromite_sludge', 0x4C3C4C, ['2x chromite', '1x mystery'])
    dust('rare_sludge', 0xCCEC94, ['1x mystery'])
    dust('vanadium_magnetite_sludge', 0x1C1C2C, ['2x vanadium_magnetite', '1x mystery'])

    dust('rare_metallic_residue', 0x515755, ['1x silver', '2x calcite'])

    liquid('raw_ore_slurry', 0x7B8087, '1x mystery');
    liquid('mixed_mineral_residue', 0x566E6E, '1x mystery');
    liquid('sulfuric_mineral_mixture', 0xE34f1E, '1x mystery');
    liquid('oxygenous_mineral_mixture', 0x359696, '1x mystery');
    liquid('molten_ore_mixture', 0x575050, '1x mystery');

    //molten ores
    const moltenOre = (name, color) => {
        liquid(`molten_${name}_ore`, color, name)
    };
    
    moltenOre('bauxite', 0xB5B69A);
    moltenOre('pitchblende', 0xAFC585);
    moltenOre('molybdenite', 0xC1D0A4);
    moltenOre('ilmenite', 0xCBA88F);
    moltenOre('tungstate', 0x9CACB1);
    moltenOre('bastnasite',0x988E84);
    liquid('molten_cooperite_ore', 0xA4A38B, '1x cooperite');

    event.create('purified_naquadah')
        .gem()
        .color(0x000807)
        .element(GTElements.get('purified_naquadah')) 
        .flags(no_decomp);

});