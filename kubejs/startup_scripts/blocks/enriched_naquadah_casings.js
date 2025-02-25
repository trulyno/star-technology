
StartupEvents.registry('block', event => {

    function naq_casing(id, name, texture){
        event.create(id)
            .displayName(name)
            .hardness(5)
            .resistance(10)
            .lightLevel(0)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
            .textureAll(`kubejs:block/casings/naquadah/${texture}`);
        };

    naq_casing('enriched_naquadah_machine_casing', 'Enriched Naquadah Casing', 'casing');
    naq_casing('enriched_naquadah_pipe_casing', 'Enriched Naquadah Pipe Casing', 'pipe_casing');
    naq_casing('enriched_naquadah_gearbox', 'Enriched Naquadah Gearbox Casing', 'gearbox');

});