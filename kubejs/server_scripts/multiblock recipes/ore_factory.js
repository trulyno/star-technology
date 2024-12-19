/**
 * @typedef {{material: string, secondary: string, tertiary: string, quaternary?: string }} EKOFProcessableItemDetails
 */

/** @type {Record<number, EKOFProcessableItem[]>} */
var ekofProcessableTiers = {
    32: [
      { material: "iron", secondary: "nickel", tertiary: "tin" },
      { material: "magnetite", secondary: "gold", tertiary: "gold" },
      { material: "copper", secondary: "gold", tertiary: "nickel" },
      { material: "tin", secondary: "iron", tertiary: "zinc" },
      { material: "sphalerite", secondary: "gallium", tertiary: "sulfur" },
      { material: "galena", secondary: "silver", tertiary: "sulfur" },
      { material: "stibnite", secondary: "antimony", tertiary: "sulfur" },
      { material: "chalcopyrite", secondary: "gold", tertiary: "pyrite", quaternary: "cobalt" },
      { material: "cassiterite", secondary: "tin", tertiary: "tin", quaternary: "bismuth" },
      { material: "silver", secondary: "gold", tertiary: "lead", quaternary: "sulfur" },
      { material: "gold", secondary: "silver", tertiary: "copper", quaternary: "nickel" },
      { material: "bornite", secondary: "gold", tertiary: "pyrite", quaternary: "cobalt" },
      { material: "pentlandite", secondary: "cobalt", tertiary: "iron", quaternary: "sulfur" },
      { material: "rock_salt", secondary: "salt", tertiary: "salt", quaternary: "borax" },
      { material: "salt", secondary: "rock_salt", tertiary: "rock_salt", quaternary: "borax" },
    ],
  
    128: [
      { material: "monazite", secondary: "thorium", tertiary: "thorium", quaternary: "neodymium" },
      { material: "lepidolite", secondary: "lithium", tertiary: "lithium", quaternary: "caesium" },
      { material: "pyrochlore", secondary: "apatite", tertiary: "apatite", quaternary: "calcium" },
      { material: "pyrolusite", secondary: "manganese", tertiary: "manganese", quaternary: "tantalite" },
      { material: "cobaltite", secondary: "cobalt", tertiary: "sulfur", quaternary: "cobalt" },
      {
        material: "apatite",
        secondary: "tricalcium_phosphate",
        tertiary: "tricalcium_phosphate",
        quaternary: "phosphate",
      },
    ],
  
    512: [
      { material: "bauxite", secondary: "gallium", tertiary: "grossular", quaternary: "rutile" },
      { material: "pitchblende", secondary: "thorium", tertiary: "thorium", quaternary: "uraninite" },
      { material: "ilmenite", secondary: "iron", tertiary: "iron", quaternary: "rutile" },
    ],
  
    2048: [
      { material: "cooperite", secondary: "palladium", tertiary: "nickel", quaternary: "nickel" },
      { material: "bastnasite", secondary: "neodymium", tertiary: "neodymium", quaternary: "rare_earth" },
    ],
  };
  
  ServerEvents.recipes((event) => {
    event.shaped(Item.of("gtceu:electrico_kinetic_ore_factory"), ["GCG", "PLP", "WPW"], {
      G: "gtceu:bronze_gear",
      C: "#gtceu:circuits/lv",
      P: "gtceu:steel_plate",
      L: "gtceu:lv_machine_hull",
      W: "gtceu:tin_single_cable",
    });
  
    function ekof_basic(rpm, material, secondary, tertiary) {
      const itemName = `gtceu:crushed_${material}_ore`;
      event.recipes.gtceu
        .electrico_kinetic_ore_factory(`${material}_e_ore_factory`)
        .itemInputs(itemName)
        .inputFluids("minecraft:water 100")
        .itemOutputs(`gtceu:${material}_dust`)
        .chancedOutput(`gtceu:${material}_dust`, 7500, 150)
        .chancedOutput(`gtceu:${secondary}_dust`, 4500, 100)
        .chancedOutput(`gtceu:${tertiary}_dust`, 3250, 50)
        .duration(160)
        .inputStress(256)
        .rpm(rpm == 2048 ? 256 : rpm == 512 ? 192 : rpm)
        .EUt(28);
    }
  
    function ekof(rpm, material, secondary, tertiary, quaternary) {
      const itemName = `gtceu:crushed_${material}_ore`;
      event.recipes.gtceu
        .electrico_kinetic_ore_factory(`${material}_e_ore_factory`)
        .itemInputs(itemName)
        .inputFluids(`${rpm >= 512 ? "gtceu:sodium_persulfate" : "gtceu:distilled_water"} 100`)
        .itemOutputs(`gtceu:${material}_dust`)
        .chancedOutput(`gtceu:${material}_dust`, 5000, 150)
        .chancedOutput(`gtceu:${secondary}_dust`, 2500, 100)
        .chancedOutput(`gtceu:${tertiary}_dust`, 1250, 50)
        .chancedOutput(`gtceu:${quaternary}_dust`, 750, 100)
        .duration(320)
        .inputStress(rpm * 4)
        .rpm(rpm == 2048 ? 256 : rpm == 512 ? 192 : rpm)
        .EUt(rpm * 0.75);
    }
  
    // Iterate over each tier and processable item and register the recipes
    Object.keys(ekofProcessableTiers).forEach((tier) => {
      ekofProcessableTiers[tier].forEach((item) => {
        if (item.quaternary) {
          ekof(tier, item.material, item.secondary, item.tertiary, item.quaternary);
        } else {
          ekof_basic(tier, item.material, item.secondary, item.tertiary);
        }
      });
    });
  });
  
  ServerEvents.tags("item", (event) => {
    Object.keys(ekofProcessableTiers).forEach((tier) => {
      ekofProcessableTiers[tier].forEach((item) => {
        event.add(`kubejs:ekof_processable_${tier}`, `gtceu:crushed_${item.material}_ore`);
      });
    });
  });