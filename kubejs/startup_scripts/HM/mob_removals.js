
if (CommonProperties.get().packMode == 'hard' || CommonProperties.get().packMode == 'Hard') {

WorldgenEvents.remove(event =>{
    event.removeSpawns(entity =>{
        entity.mobs = ['monster','creature','ambient','axolotls','underground_water_creatures','water_creatures','water_ambient']
    })
});

};//if end