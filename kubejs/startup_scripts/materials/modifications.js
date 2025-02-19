// priority: 100

const flags = global.flags;
const va = global.va;
const blastProperty = global.blastProperty;

GTCEuStartupEvents.materialModification(event => {

    GTMaterials.Netherite.setMaterialARGB(0x1a0d00);
    GTMaterials.Netherite.setComponents('4x debris', '4x gold');
    GTMaterials.Netherite.setMaterialIconSet(global.iconSets.dull);
    GTMaterials.Netherite.addFlags(flags.rod);

});

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Lead.addFlags(flags.gear);
    GTMaterials.Silver.addFlags(flags.gear);
    GTMaterials.Naquadah.addFlags(flags.dense_plate);
    GTMaterials.NaquadahEnriched.addFlags(flags.dense_plate, flags.rotor, flags.gear, flags.frame);
    GTMaterials.Naquadria.addFlags(flags.dense_plate);
    GTMaterials.Neutronium.addFlags(flags.foil, flags.small_gear, flags.rotor);
    GTMaterials.Europium.addFlags(flags.small_spring);
    GTMaterials.Zirconium.addFlags(flags.fine_wire); 
    GTMaterials.RedSteel.addFlags(flags.rod, flags.frame);
    GTMaterials.SterlingSilver.addFlags(flags.rod, flags.frame);
    GTMaterials.NetherStar.addFlags(flags.foil);
    GTMaterials.Netherite.addFlags(flags.no_decomp);


    // Blast Properties of periodic table metals
    blastProperty('zirconium', 8000, 'higher', va.zpm, 800);
    blastProperty('tellurium', 10000, 'higher', va.zpm, 700);
    blastProperty('polonium', 10000, 'higher', va.zpm, 600);
    blastProperty('astatine', 10000, 'higher', va.zpm, 800);
    blastProperty('hafnium', 10000, 'higher', va.zpm, 900);
    blastProperty('rhenium', 10000, 'higher', va.zpm, 900);
    blastProperty('seaborgium', 10000, 'higher', va.zpm, 1000);
    blastProperty('flerovium', 10000, 'higher', va.luv, 900);

});