// priority: 1000

const GTSlotWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.SlotWidget')
const GTTankWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.TankWidget')

global.primitiveSlotFunction = (template, machine) => {
    return (io, slot, x, y) => {
    const ioChoice = (io === 'in') ? machine.importItems.storage : machine.exportItems.storage;
    template.addWidget(new GTSlotWidget(ioChoice, slot, x, y, true, true).setBackground(GuiTextures.PRIMITIVE_SLOT));
    }
  }
  
global.finalizePrimitiveMulti = (template, machine) => {
    return (x, y, w, h) => {
      template.addWidget(new ProgressWidget(() => machine.getRecipeLogic().getProgressPercent(), x, y, w, h, GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR));
    }
}

global.primitiveTankFunction = (template, machine) => {
    return (io, tank, x, y) => {
    const ioChoice = (io === 'in') ? machine.importFluids.getStorages()[tank] : machine.exportFluids.getStorages()[tank];
    template.addWidget(new GTTankWidget(ioChoice, x, y, true, true).setBackground(new GuiTextureGroup(GuiTextures.PRIMITIVE_LARGE_FLUID_TANK,GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY)).setCapacity(16));
    }
}
