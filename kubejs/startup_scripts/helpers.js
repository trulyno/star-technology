// priority: 1000

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