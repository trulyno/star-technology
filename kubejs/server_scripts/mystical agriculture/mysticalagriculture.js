
ServerEvents.recipes(event => {

    const dust1 = 'mysticalagriculture:inferium_essence';
    const dust2 = 'mysticalagriculture:prudentium_essence';
    const dust3 = 'mysticalagriculture:tertium_essence';
    const dust4 = 'mysticalagriculture:imperium_essence';
    const dust5 = 'mysticalagriculture:supremium_essence';
    const dust6 = 'mysticalagriculture:awakened_supremium_essence';
    const dust7 = 'mysticalagradditions:insanium_essence';

    // essence recipes (SUBJECT OF CHANGE)
    event.recipes.gtceu.mixer('inferium_essence')
        .itemInputs('gtceu:phosphorus_dust', 'gtceu:beryllium_dust')
        .inputFluids('gtceu:glowstone 144')
        .itemOutputs(dust1)
        .duration(200)
        .EUt(80);

    // Mixer and extractor recipes
    event.recipes.gtceu.mixer('wood_essence_mix')
        .itemInputs('4x mysticalagriculture:air_essence', '3x mysticalagriculture:water_essence', '8x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:wood_essence')
        .duration(200)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu.mixer('stone_essence_mix')
        .itemInputs('2x mysticalagriculture:air_essence', '4x mysticalagriculture:fire_essence', '4x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:stone_essence')
        .duration(200)
        .EUt(400)
        .circuit(1);

    event.recipes.gtceu.mixer('dirt_essence_mix')
        .itemInputs('2x mysticalagriculture:water_essence', '3x mysticalagriculture:fire_essence', '6x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:dirt_essence')
        .duration(200)
        .EUt(400)
        .circuit(2);

    event.recipes.gtceu.mixer('ice_essence_mix')
        .itemInputs('mysticalagriculture:air_essence', '7x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:ice_essence')
        .duration(200)
        .EUt(400)
        .circuit(3);

    event.recipes.gtceu.mixer('nature_essence_mix')
        .itemInputs('3x mysticalagriculture:wood_essence', '4x mysticalagriculture:earth_essence', '2x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:nature_essence')
        .duration(200)
        .EUt(1024);

    event.recipes.gtceu.mixer('dye_essence_mix')
        .itemInputs('2x mysticalagriculture:dirt_essence', '4x mysticalagriculture:fire_essence', '2x mysticalagriculture:air_essence')
        .itemOutputs('mysticalagriculture:dye_essence')
        .duration(200)
        .EUt(1024);

    event.recipes.gtceu.mixer('coal_essence_mix')
        .itemInputs('8x mysticalagriculture:wood_essence', '4x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:coal_essence')
        .duration(200)
        .EUt(1024);

    event.recipes.gtceu.extractor('life_essence_extraction')
        .itemInputs('mysticalagriculture:nature_essence')
        .chancedOutput('mysticalagriculture:life_essence', 100, 0)
        .duration(200)
        .EUt(400);

    event.recipes.gtceu.mixer('iron_essence_mix')
        .itemInputs('12x mysticalagriculture:stone_essence', '7x mysticalagriculture:fire_essence', '3x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:iron_essence')
        .duration(200)
        .EUt(400)
        .circuit(10);

    event.recipes.gtceu.mixer('copper_essence_mix')
        .itemInputs('8x mysticalagriculture:stone_essence', '12x mysticalagriculture:fire_essence', '6x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:copper_essence')
        .duration(200)
        .EUt(400)
        .circuit(11);

    event.recipes.gtceu.mixer('tin_essence_mix')
        .itemInputs('10x mysticalagriculture:stone_essence', '5x mysticalagriculture:fire_essence', '4x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:tin_essence')
        .duration(200)
        .EUt(400)
        .circuit(12);

    event.recipes.gtceu.mixer('nickel_essence_mix')
        .itemInputs('15x mysticalagriculture:stone_essence', '7x mysticalagriculture:fire_essence', '7x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:nickel_essence')
        .duration(200)
        .EUt(400)
        .circuit(13);

    event.recipes.gtceu.mixer('lead_essence_mix')
        .itemInputs('17x mysticalagriculture:stone_essence', '10x mysticalagriculture:fire_essence', '5x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:lead_essence')
        .duration(200)
        .EUt(400)
        .circuit(14);

    event.recipes.gtceu.mixer('zinc_essence_mix')
        .itemInputs('5x mysticalagriculture:stone_essence', '3x mysticalagriculture:fire_essence', '2x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:zinc_essence')
        .duration(200)
        .EUt(400)
        .circuit(15);

    event.recipes.gtceu.mixer('gold_essence_mix')
        .itemInputs('21x mysticalagriculture:stone_essence', '17x mysticalagriculture:fire_essence', '12x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:gold_essence')
        .duration(200)
        .EUt(400)
        .circuit(16);

    event.recipes.gtceu.mixer('silver_essence_mix')
        .itemInputs('19x mysticalagriculture:stone_essence', '15x mysticalagriculture:fire_essence', '10x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:silver_essence')
        .duration(200)
        .EUt(400)
        .circuit(17);

    event.recipes.gtceu.mixer('diamond_essence_mix')
        .itemInputs('64x mysticalagriculture:coal_essence', '64x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:diamond_essence')
        .duration(200)
        .EUt(400)
        .circuit(10);

    event.recipes.gtceu.mixer('redstone_essence_mix')
        .itemInputs('11x mysticalagriculture:earth_essence', '5x mysticalagriculture:fire_essence', '4x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:redstone_essence')
        .duration(200)
        .EUt(400)
        .circuit(10);

    event.recipes.gtceu.mixer('glowstone_essence_mix')
        .itemInputs('9x mysticalagriculture:earth_essence', '8x mysticalagriculture:fire_essence', '5x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:glowstone_essence')
        .duration(200)
        .EUt(400)
        .circuit(11);

    event.recipes.gtceu.mixer('nether_quartz_essence_mix')
        .itemInputs('13x mysticalagriculture:earth_essence', '16x mysticalagriculture:fire_essence', '1x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:nether_quartz_essence')
        .duration(200)
        .EUt(400)
        .circuit(12);

    event.recipes.gtceu.mixer('lapis_lazuli_essence_mix')
        .itemInputs('7x mysticalagriculture:earth_essence', '4x mysticalagriculture:fire_essence', '6x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:lapis_lazuli_essence')
        .duration(200)
        .EUt(400)
        .circuit(13);

    event.recipes.gtceu.mixer('sulfur_essence_mix')
        .itemInputs('23x mysticalagriculture:earth_essence', '15x mysticalagriculture:fire_essence', '6x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:sulfur_essence')
        .duration(200)
        .EUt(400)
        .circuit(14);

    event.recipes.gtceu.mixer('amethyst_essence_mix')
        .itemInputs('11x mysticalagriculture:earth_essence', '3x mysticalagriculture:fire_essence', '8x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:amethyst_essence')
        .duration(200)
        .EUt(400)
        .circuit(15);

    event.recipes.gtceu.mixer('aluminium_essence_mix')
        .itemInputs('32x mysticalagriculture:earth_essence', '17x mysticalagriculture:fire_essence', '20x mysticalagriculture:water_essence')
        .itemOutputs('mysticalagriculture:aluminum_essence')
        .duration(200)
        .EUt(1024)
        .circuit(18);

    event.recipes.gtceu.mixer('antimony_essence_mix')
        .itemInputs('29x mysticalagriculture:earth_essence', '12x mysticalagriculture:sulfur_essence', '10x mysticalagriculture:stone_essence')
        .itemOutputs('mysticalagriculture:antimony_essence')
        .duration(200)
        .EUt(1024)
        .circuit(17);

    event.recipes.gtceu.mixer('cobaltite_essence_mix')
        .itemInputs('40x mysticalagriculture:earth_essence', '21x mysticalagriculture:dye_essence', '15x mysticalagriculture:stone_essence')
        .itemOutputs('mysticalagriculture:cobaltite_essence')
        .duration(200)
        .EUt(1024)
        .circuit(18);

    event.recipes.gtceu.mixer('emerald_essence_mix')
        .itemInputs('5x mysticalagriculture:aluminum_essence', '41x mysticalagriculture:dye_essence', '43x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:emerald_essence')
        .duration(200)
        .EUt(1024)
        .circuit(16);

    event.recipes.gtceu.mixer('certus_quartz_essence_mix')
        .itemInputs('12x mysticalagriculture:nether_quartz_essence', '1x mysticalagriculture:amethyst_essence', '1x mysticalagriculture:diamond_essence')
        .itemOutputs('mysticalagriculture:certus_quartz_essence')
        .duration(200)
        .EUt(1024)
        .circuit(17);

    event.recipes.gtceu.mixer('ruby_essence_mix')
        .itemInputs('15x mysticalagriculture:nether_quartz_essence', '5x mysticalagriculture:aluminum_essence', '45x mysticalagriculture:dye_essence')
        .itemOutputs('mysticalagriculture:ruby_essence')
        .duration(200)
        .EUt(1024)
        .circuit(18);

    event.recipes.gtceu.mixer('salts_essence_mix')
        .itemInputs('32x mysticalagriculture:stone_essence', '32x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:salts_essence')
        .duration(200)
        .EUt(1024)
        .circuit(19);

    event.recipes.gtceu.mixer('saltpeter_essence_mix')
        .itemInputs('32x mysticalagriculture:stone_essence', '32x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:saltpeter_essence')
        .duration(200)
        .EUt(1024)
        .circuit(20);

    event.recipes.gtceu.mixer('lepidolite_essence_mix')
        .itemInputs('2x mysticalagriculture:aluminum_essence', '4x mysticalagriculture:salts_essence')
        .itemOutputs('mysticalagriculture:lepidolite_essence')
        .duration(200)
        .EUt(1024)
        .circuit(21);

    event.recipes.gtceu.mixer('realgar_essence_mix')
        .itemInputs('13x mysticalagriculture:nether_quartz_essence', '14x mysticalagriculture:sulfur_essence')
        .itemOutputs('mysticalagriculture:realgar_essence')
        .duration(200)
        .EUt(1024)
        .circuit(22);

    event.recipes.gtceu.mixer('garnet_essence_mix')
        .itemInputs('15x mysticalagriculture:iron_essence', '5x mysticalagriculture:aluminum_essence', '15x mysticalagriculture:nether_quartz_essence')
        .itemOutputs('mysticalagriculture:garnet_essence')
        .duration(200)
        .EUt(1024)
        .circuit(23);

    event.recipes.gtceu.mixer('apatite_essence_mix')
        .itemInputs('53x mysticalagriculture:stone_essence', '10x mysticalagriculture:nether_quartz_essence', '24x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:apatite_essence')
        .duration(200)
        .EUt(1024)
        .circuit(23);

    event.recipes.gtceu.extractor('sapphire_essence_extraction')
        .itemInputs('mysticalagriculture:aluminum_essence')
        .chancedOutput('mysticalagriculture:sapphire_essence', 1000, 0)
        .duration(200)
        .EUt(1024);

    event.recipes.gtceu.mixer('topaz_essence_mix')
        .itemInputs('61x mysticalagriculture:stone_essence', '2x mysticalagriculture:aluminum_essence', '53x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:topaz_essence')
        .duration(200)
        .EUt(1024)
        .circuit(24);

    event.recipes.gtceu.extractor('monazite_essence_extraction')
        .itemInputs('mysticalagriculture:apatite_essence')
        .chancedOutput('mysticalagriculture:monazite_essence', 1000, 0)
        .duration(200)
        .EUt(6400);

    event.recipes.gtceu.mixer('uranium_essence_mix')
        .itemInputs('64x mysticalagriculture:stone_essence', '54x mysticalagriculture:lead_essence', '63x mysticalagriculture:nether_quartz_essence')
        .itemOutputs('mysticalagriculture:uranium_essence')
        .duration(200)
        .EUt(6400)
        .circuit(25);

    event.recipes.gtceu.extractor('chrome_essence_extraction')
        .itemInputs('mysticalagriculture:ruby_essence')
        .chancedOutput('mysticalagriculture:chrome_essence', 2000, 0)
        .duration(200)
        .EUt(6400);

    event.recipes.gtceu.mixer('molybdenum_essence_mix')
        .itemInputs('59x mysticalagriculture:stone_essence', '31x mysticalagriculture:lead_essence', '61x mysticalagriculture:certus_quartz_essence')
        .itemOutputs('mysticalagriculture:molybdenum_essence')
        .duration(200)
        .EUt(6400)
        .circuit(26);

    event.recipes.gtceu.mixer('manganese_essence_mix')
        .itemInputs('12x mysticalagriculture:garnet_essence', '45x mysticalagriculture:fire_essence', '60x mysticalagriculture:nether_quartz_essence')
        .itemOutputs('mysticalagriculture:manganese_essence')
        .duration(200)
        .EUt(6400)
        .circuit(27);

    event.recipes.gtceu.extractor('tantalum_essence_extraction')
        .itemInputs('mysticalagriculture:manganese_essence')
        .chancedOutput('mysticalagriculture:tantalum_essence', 1000, 0)
        .duration(200)
        .EUt(6400);

    event.recipes.gtceu.mixer('titanium_essence_mix')
        .itemInputs('60x mysticalagriculture:iron_essence', '49x mysticalagriculture:aluminum_essence', '64x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:titanium_essence')
        .duration(200)
        .EUt(6400)
        .circuit(28);

    event.recipes.gtceu.mixer('niobium_essence_mix')
        .itemInputs('64x mysticalagriculture:stone_essence', '23x mysticalagriculture:antimony_essence', '64x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:niobium_essence')
        .duration(200)
        .EUt(6400)
        .circuit(29);

    event.recipes.gtceu.mixer('platinum_essence_mix')
        .itemInputs('48x mysticalagriculture:nickel_essence', '32x mysticalagriculture:sulfur_essence', '64x mysticalagriculture:fire_essence')
        .itemOutputs('mysticalagriculture:platinum_essence')
        .duration(200)
        .EUt(6400)
        .circuit(29);

    event.recipes.gtceu.mixer('caesium_essence_mix')
        .itemInputs('24x mysticalagriculture:aluminum_essence', '48x mysticalagriculture:nether_quartz_essence', '55x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:caesium_essence')
        .duration(200)
        .EUt(6400)
        .circuit(30);

    event.recipes.gtceu.mixer('cerium_essence_mix')
        .itemInputs('33x mysticalagriculture:topaz_essence', '48x mysticalagriculture:coal_essence', '59x mysticalagriculture:earth_essence')
        .itemOutputs('mysticalagriculture:cerium_essence')
        .duration(200)
        .EUt(6400)
        .circuit(31);

    event.recipes.gtceu.extractor('chalcopyrite_essence_extraction')
        .itemInputs('mysticalagriculture:copper_essence')
        .chancedOutput('mysticalagriculture:chalcopyrite_essence', 3500, 0)
        .duration(200)
        .EUt(6400);

    event.recipes.gtceu.extractor('tungtsen_essence_extraction')
        .itemInputs('mysticalagriculture:barium_essence')
        .chancedOutput('mysticalagriculture:tungsten_essence', 4000, 0)
        .duration(200)
        .EUt(16000);

    event.recipes.gtceu.mixer('barium_essence_mix')
        .itemInputs('59x mysticalagriculture:stone_essence', '64x mysticalagriculture:sulfur_essence', '59x mysticalagriculture:nether_quartz_essence')
        .itemOutputs('mysticalagriculture:barium_essence')
        .duration(200)
        .EUt(16000)
        .circuit(32);

    event.recipes.gtceu.extractor('naquadah_essence_extraction')
        .itemInputs('mysticalagriculture:tungsten_essence')
        .chancedOutput('mysticalagriculture:naquadah_essence', 950, 0)
        .duration(200)
        .EUt(100000);


    // Seed recipes
    function toSeeds(element) {
        event.recipes.gtceu.compressor(`${element}_seeds_recipe`)
            .itemInputs(`16x mysticalagriculture:${element}_essence`)
            .itemOutputs(`mysticalagriculture:${element}_seeds`)
            .duration(800)
            .EUt(20);
    }

    const seeds = ['air', 'earth', 'fire', 'water', 'wood', 'stone', 'dirt', 'ice', 'nature', 'dye', 'coal',
        'iron', 'copper', 'tin', 'nickel', 'lead', 'zinc', 'gold', 'diamond', 'redstone', 'glowstone', 'life',
        'nether_quartz', 'lapis_lazuli', 'sulfur', 'amethyst', 'silver', 'emerald', 'certus_quartz', 'ruby',
        'saltpeter', 'salts', 'garnet', 'apatite', 'sapphire', 'topaz', 'enderman', 'slime', 'prismarine',
        'realgar', 'lepidolite', 'cobaltite', 'antimony', 'aluminum', 'monazite', 'uranium', 'chrome',
        'molybdenum', 'tantalum', 'manganese', 'platinum', 'titanium', 'caesium', 'blaze', 'blizz', 'blitz',
        'basalz', 'cerium', 'chalcopyrite', 'niobium', 'tungsten', 'barium', 'naquadah'];

    seeds.forEach(element => {
        toSeeds(element);
    });

    // Centrifuging recipes
    event.recipes.gtceu.centrifuge('elements_from_essence')
        .itemInputs(dust1)
        .chancedOutput('mysticalagriculture:air_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:earth_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:water_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:fire_essence', 2500, 0)
        .duration(600)
        .EUt(80);

    event.recipes.gtceu.centrifuge('life_essence_centrifuging_0')
        .itemInputs('6x mysticalagriculture:life_essence')
        .chancedOutput('mysticalagriculture:enderman_essence', 1500, 500)
        .chancedOutput('mysticalagriculture:slime_essence', 4500, 500)
        .chancedOutput('mysticalagriculture:prismarine_essence', 1500, 500)
        .duration(600)
        .EUt(400)
        .circuit(0);

    event.recipes.gtceu.centrifuge('life_essence_centrifuging_1')
        .itemInputs('32x mysticalagriculture:life_essence')
        .chancedOutput('mysticalagriculture:blaze_essence', 6500, 500)
        .chancedOutput('mysticalagriculture:blitz_essence', 1500, 500)
        .chancedOutput('mysticalagriculture:basalz_essence', 4500, 500)
        .chancedOutput('mysticalagriculture:blizz_essence', 1500, 500)
        .duration(600)
        .EUt(6400)
        .circuit(1);

    // Machine recipes
    event.shaped(Item.of('gtceu:lv_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/lv',
        G: '#forge:glass',
        E: 'gtceu:lv_emitter',
        P: 'gtceu:steel_plate',
        H: 'gtceu:lv_machine_hull',
        M: 'gtceu:lv_electric_pump',
        C: 'gtceu:tin_single_cable'
    });

    event.shaped(Item.of('gtceu:mv_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/mv',
        G: '#forge:glass',
        E: 'gtceu:mv_emitter',
        P: 'gtceu:aluminium_plate',
        H: 'gtceu:mv_machine_hull',
        M: 'gtceu:mv_electric_pump',
        C: 'gtceu:copper_single_cable'
    });

    event.shaped(Item.of('gtceu:hv_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/hv',
        G: 'gtceu:tempered_glass',
        E: 'gtceu:hv_emitter',
        P: 'gtceu:stainless_steel_plate',
        H: 'gtceu:hv_machine_hull',
        M: 'gtceu:hv_electric_pump',
        C: 'gtceu:gold_single_cable'
    });

    event.shaped(Item.of('gtceu:ev_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/ev',
        G: 'gtceu:tempered_glass',
        E: 'gtceu:ev_emitter',
        P: 'gtceu:titanium_plate',
        H: 'gtceu:ev_machine_hull',
        M: 'gtceu:ev_electric_pump',
        C: 'gtceu:aluminium_single_cable'
    });

    event.shaped(Item.of('gtceu:iv_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/iv',
        G: 'gtceu:laminated_glass',
        E: 'gtceu:iv_emitter',
        P: 'gtceu:tungsten_steel_plate',
        H: 'gtceu:iv_machine_hull',
        M: 'gtceu:iv_electric_pump',
        C: 'gtceu:platinum_single_cable'
    });

    event.shaped(Item.of('gtceu:luv_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/luv',
        G: 'gtceu:laminated_glass',
        E: 'gtceu:luv_emitter',
        P: 'gtceu:rhodium_plated_palladium_plate',
        H: 'gtceu:luv_machine_hull',
        M: 'gtceu:luv_electric_pump',
        C: 'gtceu:niobium_titanium_single_cable'
    });

    event.shaped(Item.of('gtceu:zpm_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/zpm',
        G: 'gtceu:fusion_glass',
        E: 'gtceu:zpm_emitter',
        P: 'gtceu:naquadah_alloy_plate',
        H: 'gtceu:zpm_machine_hull',
        M: 'gtceu:zpm_electric_pump',
        C: 'gtceu:vanadium_gallium_single_cable'
    });

    event.shaped(Item.of('gtceu:uv_mystical_greenhouse'), [
        'CGE',
        'PHP',
        'CMC'
    ], {
        C: '#gtceu:circuits/uv',
        G: 'gtceu:fusion_glass',
        E: 'gtceu:uv_emitter',
        P: 'gtceu:darmstadtium_plate',
        H: 'gtceu:uv_machine_hull',
        M: 'gtceu:uv_electric_pump',
        C: 'gtceu:yttrium_barium_cuprate_single_cable'
    });

    event.shaped(Item.of('gtceu:lv_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/lv',
        R: 'gtceu:tin_rotor',
        G: '#forge:glass',
        E: 'gtceu:lv_emitter',
        H: 'gtceu:lv_machine_hull',
        P: 'gtceu:lv_electric_pump',
        C: 'gtceu:tin_single_cable'
    });

    event.shaped(Item.of('gtceu:mv_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/mv',
        R: 'gtceu:bronze_rotor',
        G: '#forge:glass',
        E: 'gtceu:mv_emitter',
        H: 'gtceu:mv_machine_hull',
        P: 'gtceu:mv_electric_pump',
        C: 'gtceu:copper_single_cable'
    });

    event.shaped(Item.of('gtceu:hv_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/hv',
        R: 'gtceu:steel_rotor',
        G: 'gtceu:tempered_glass',
        E: 'gtceu:hv_emitter',
        H: 'gtceu:hv_machine_hull',
        P: 'gtceu:hv_electric_pump',
        C: 'gtceu:gold_single_cable'
    });

    event.shaped(Item.of('gtceu:ev_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/ev',
        R: 'gtceu:stainless_steel_rotor',
        G: 'gtceu:tempered_glass',
        E: 'gtceu:ev_emitter',
        H: 'gtceu:ev_machine_hull',
        P: 'gtceu:ev_electric_pump',
        C: 'gtceu:aluminium_single_cable'
    });

    event.shaped(Item.of('gtceu:iv_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/iv',
        R: 'gtceu:tungsten_steel_rotor',
        G: 'gtceu:laminated_glass',
        E: 'gtceu:iv_emitter',
        H: 'gtceu:iv_machine_hull',
        P: 'gtceu:iv_electric_pump',
        C: 'gtceu:platinum_single_cable'
    });

    event.shaped(Item.of('gtceu:luv_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/luv',
        R: 'gtceu:rhodium_plated_palladium_rotor',
        G: 'gtceu:laminated_glass',
        E: 'gtceu:luv_emitter',
        H: 'gtceu:luv_machine_hull',
        P: 'gtceu:luv_electric_pump',
        C: 'gtceu:niobium_titanium_single_cable'
    });

    event.shaped(Item.of('gtceu:zpm_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/zpm',
        R: 'gtceu:naquadah_alloy_rotor',
        G: 'gtceu:fusion_glass',
        E: 'gtceu:zpm_emitter',
        H: 'gtceu:zpm_machine_hull',
        P: 'gtceu:zpm_electric_pump',
        C: 'gtceu:vanadium_gallium_single_cable'
    });

    event.shaped(Item.of('gtceu:uv_essence_burner'), [
        'CRE',
        'GHG',
        'CPC'
    ], {
        C: '#gtceu:circuits/uv',
        R: 'gtceu:darmstadtium_rotor',
        G: 'gtceu:fusion_glass',
        E: 'gtceu:uv_emitter',
        H: 'gtceu:uv_machine_hull',
        P: 'gtceu:uv_electric_pump',
        C: 'gtceu:yttrium_barium_cuprate_single_cable'
    });

    event.shaped(Item.of('gtceu:essence_replicator'), [
        'PSP',
        'EHE',
        'CSC'
    ], {
        P: 'gtceu:double_invar_plate',
        S: '#gtceu:circuits/hv',
        E: 'gtceu:mv_emitter',
        H: 'gtceu:heatproof_machine_casing',
        C: 'gtceu:gold_single_cable'
    });

    event.shaped(Item.of('gtceu:essence_enchancer'), [
        'SAP',
        'EHE',
        'CAC'
    ], {
        P: 'gtceu:double_stainless_steel_plate',
        A: '#gtceu:circuits/ev',
        S: 'gtceu:hv_sensor',
        E: 'gtceu:hv_emitter',
        H: 'gtceu:clean_machine_casing',
        C: 'gtceu:aluminium_single_cable'
    });

    event.recipes.gtceu.chemical_reactor('inferium_coal')
        .itemInputs('minecraft:coal', 'mysticalagriculture:inferium_essence')
        .itemOutputs('mysticalagradditions:inferium_coal')
        .duration(200)
        .EUt(20);

    event.recipes.gtceu.chemical_reactor('prudentium_coal')
        .itemInputs('mysticalagradditions:inferium_coal', 'mysticalagriculture:prudentium_essence')
        .itemOutputs('mysticalagradditions:prudentium_coal')
        .duration(200)
        .EUt(20);

    event.recipes.gtceu.chemical_reactor('tertium_coal')
        .itemInputs('mysticalagradditions:prudentium_coal', 'mysticalagriculture:tertium_essence')
        .itemOutputs('mysticalagradditions:tertium_coal')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.chemical_reactor('imperium_coal')
        .itemInputs('mysticalagradditions:tertium_coal', 'mysticalagriculture:imperium_essence')
        .itemOutputs('mysticalagradditions:imperium_coal')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.chemical_reactor('supremium_coal')
        .itemInputs('mysticalagradditions:imperium_coal', 'mysticalagriculture:supremium_essence')
        .itemOutputs('mysticalagradditions:supremium_coal')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.chemical_reactor('insanium_coal')
        .itemInputs('mysticalagradditions:supremium_coal', 'mysticalagradditions:insanium_essence')
        .itemOutputs('mysticalagradditions:insanium_coal')
        .duration(200)
        .EUt(400);

    event.recipes.gtceu.large_chemical_reactor('inferium_coal')
        .itemInputs('minecraft:coal', 'mysticalagriculture:inferium_essence')
        .itemOutputs('mysticalagradditions:inferium_coal')
        .duration(200)
        .EUt(20);

    event.recipes.gtceu.large_chemical_reactor('prudentium_coal')
        .itemInputs('mysticalagradditions:inferium_coal', 'mysticalagriculture:prudentium_essence')
        .itemOutputs('mysticalagradditions:prudentium_coal')
        .duration(200)
        .EUt(20);

    event.recipes.gtceu.large_chemical_reactor('tertium_coal')
        .itemInputs('mysticalagradditions:prudentium_coal', 'mysticalagriculture:tertium_essence')
        .itemOutputs('mysticalagradditions:tertium_coal')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.large_chemical_reactor('imperium_coal')
        .itemInputs('mysticalagradditions:tertium_coal', 'mysticalagriculture:imperium_essence')
        .itemOutputs('mysticalagradditions:imperium_coal')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.large_chemical_reactor('supremium_coal')
        .itemInputs('mysticalagradditions:imperium_coal', 'mysticalagriculture:supremium_essence')
        .itemOutputs('mysticalagradditions:supremium_coal')
        .duration(200)
        .EUt(80);

    event.recipes.gtceu.large_chemical_reactor('insanium_coal')
        .itemInputs('mysticalagradditions:supremium_coal', 'mysticalagradditions:insanium_essence')
        .itemOutputs('mysticalagradditions:insanium_coal')
        .duration(200)
        .EUt(400);
});