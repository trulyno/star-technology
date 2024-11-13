
materialRegistry(event => {
    
        // Hard Mode Mats
        event.create('galvanized_steel')
         .ingot()
         .components('1x steel', '1x zinc')
         .color(0xbababa)
         .flags(plates, rod, gear, small_gear)
         .iconSet(DULL)
         .blastTemp(800, '', VA('lv'), 3750);
});

