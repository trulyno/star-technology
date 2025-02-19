// BlockEvents.clientScreen("gtceu:kiln", (event) => {
//     let player = event.player;
//     let container = event.container;
//     let gui = event.gui;

//     gui.background = "gregtech:textures/gui/primitive_blast_furnace.png";
//     gui.addSlot(container, 56, 17, "input");
//     gui.addSlot(container, 56, 53, "fuel");
//     gui.addSlot(container, 116, 35, "output");

//     gui.addProgressBar("furnace", {
//         x: 79, y: 34,
//         width: 22, height: 16,
//         max: container.getData("totalTime"),
//         current: container.getData("burnTime")
//     });
// });