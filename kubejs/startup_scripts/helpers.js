// priority: 1000

const GTSlotWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.SlotWidget')
const GTTankWidget = Java.loadClass('com.gregtechceu.gtceu.api.gui.widget.TankWidget')

global.primitiveSlotFunction = (template, machine) => {
    return (io, slot, x, y) => {
    const ioChoice = (io === 'in') ? machine.importItems.storage : machine.exportItems.storage;
    const canput = (io === 'in') ? true : false ;
    template.addWidget(new GTSlotWidget(ioChoice, slot, x, y, true, canput).setBackground(GuiTextures.PRIMITIVE_SLOT));
    }
}
  /*FOR PRIMITIVE ITEM WIDGET
    itemWidget = global.primitiveSlotFunction = (template, machine)
    itemWidget('in', 0, 52, 47);
    itemWidget('out', 0, 104, 38);
    itemWidget('in/out', <index>, posX, posY);
  */
  
global.finalizePrimitiveMulti = (template, machine) => {
    return (x, y, w, h) => {
      template.addWidget(new ProgressWidget(() => machine.getRecipeLogic().getProgressPercent(), x, y, w, h, GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR));
    }
}
  /*FOR PRIMITIVE PROGRESS WIDGET
    const progressbar = global.finalizePrimitiveMulti(template, machine);
    progressbar(77, 38, 20, 18);
    progressbar(posX, posY, Width, Height);
  */

global.primitiveTankFunction = (template, machine) => {
    return (io, tank, x, y) => {
    const ioChoice = (io === 'in') ? machine.importFluids.getStorages()[tank] : machine.exportFluids.getStorages()[tank];
    const canput = (io === 'in') ? true : false ;
    template.addWidget(new GTTankWidget(ioChoice, x, y, canput, true).setBackground(GuiTextures.PRIMITIVE_LARGE_FLUID_TANK));
    }
}
  /*FOR PRIMITIVE TANK WIDGET
    const tankWidget = global.primitiveTankFunction(template, machine);
    tankWidget('in', 0, 34, 47);
    tankWidget('in/out', <index>, posX, posY);
  */
