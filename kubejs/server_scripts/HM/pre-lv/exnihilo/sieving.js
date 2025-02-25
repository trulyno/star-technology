ServerEvents.recipes(event => {

    const dirt = 'minecraft:dirt';
    const gravel = 'minecraft:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = 'minecraft:sand';
    const dust = 'exnihilosequentia:dust';
    const cDrip = 'exnihilosequentia:crushed_dripstone';
    const cCalc = 'exnihilosequentia:crushed_calcite';

    function sieve(mesh, chance, input, result, wlog) {
        event.custom({
            'type': `exnihilosequentia:sifting`,
            'input': input,
            'result': result,
            'rolls': [{
                chance: chance,
                mesh: mesh
            }],
            'waterlogged': wlog
        });
    };	

    [{ Crushed: 'exnihilosequentia:crushed_andesite', OreType: 'sphalerite' }, { Crushed: 'exnihilosequentia:crushed_basalt', OreType: 'pyrite' },
    { Crushed: 'exnihilosequentia:crushed_blackstone', OreType: 'magnetite' }, { Crushed: 'exnihilosequentia:crushed_deepslate', OreType: 'galena' },
    { Crushed: 'exnihilosequentia:crushed_tuff', OreType: 'hematite' }, { Crushed: 'exnihilosequentia:crushed_granite', OreType: 'cassiterite' },
    { Crushed: 'exnihilosequentia:crushed_diorite', OreType: 'chalcopyrite' }].forEach(c => {
        sieve('string', .4, c.Crushed, `kubejs:${c.OreType}_crushed_ore_chunk`, false);
        sieve('string', .05, c.Crushed, `gtceu:stone_dust`, false);
        sieve('flint', .5, c.Crushed, `gtceu:crushed_${c.OreType}_ore`, false);
        sieve('flint', .1, c.Crushed, `minecraft:gravel`, false);
    });

    sieve('string', 1, cdirt, dirt, false);
    sieve('string', .1, cdirt, dirt, false);
    sieve('string', .7, cdirt, 'exnihilosequentia:stone_pebble', false);
    sieve('string', .6, cdirt, 'exnihilosequentia:stone_pebble', false);
    sieve('string', .25, cdirt, 'minecraft:flint', false);

    ['andesite', 'basalt', 'blackstone', 'deepslate', 'diorite', 'granite', 'tuff'].forEach(pebble => {
        sieve('string', .3, gravel, `exnihilosequentia:${pebble}_pebble`, false);
    });
    sieve('string', .5, gravel, sand, false);

    sieve('string', .4, sand, 'exnihilosequentia:calcite_pebble', false);
    sieve('string', .4, sand, 'exnihilosequentia:dripstone_pebble', false);
    sieve('string', .5, sand, dust, false);

    sieve('string', .4, cCalc, 'gtceu:calcite_dust', false);
    sieve('string', .2, cCalc, 'gtceu:tiny_sulfur_dust', false);

    sieve('string', .4, cDrip, 'gtceu:gypsum_dust', false);
    sieve('string', .15, cDrip, 'minecraft:clay_ball', false);

    sieve('string', .25, dust, 'gtceu:small_redstone_dust', false);
    sieve('string', .15, dust, 'gtceu:quartzite_gem', false);
    sieve('string', .1, dust, 'kubejs:raw_electrum_crushed_ore_chunk', false);

});