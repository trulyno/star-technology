// priority: 20000
const options = {};
const option = (option, value, desc) => {
    options[option] = value;
}
global.option = (option) => options[option];


// Options
option('enable_particle_accelerator', true, 
    "Particle Accelerator - A cluster of multiblocks(for an automation challenge) that accelerates and collides particles to obtain other particles(like muons, antiparticles, quarks, neutrinos, bosons, etc)."
);