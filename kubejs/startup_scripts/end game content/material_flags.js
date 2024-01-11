priority: 0

GTCEuStartupEvents.registry('gtceu:material', event => {

    GTMaterials.Naquadah.addFlags(GTMaterialFlags.GENERATE_DENSE);
    GTMaterials.NaquadahEnriched.addFlags(GTMaterialFlags.GENERATE_DENSE);
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FOIL);
});