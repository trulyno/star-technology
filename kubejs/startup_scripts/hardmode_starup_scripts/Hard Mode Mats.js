
materialRegistry(event => {
    
        // Hard Mode Mats
        event.create('galvanized_steel')
         .ingot()
         .components('3x steel', '1x zinc')
         .color(0xbababa)
         .flags(plates, rod, gear, small_gear,long_rod, rotor, bolt_and_screw)
         .flags(no_decomp)
         .iconSet(DULL);
});

