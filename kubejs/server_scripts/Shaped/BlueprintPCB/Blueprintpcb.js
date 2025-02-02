ServerEvents.recipes(event => {
    event.shaped('pneumaticcraft:pcb_blueprint', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:emerald',
        B: 'pneumaticcraft:ingot_iron_compressed'
    })
});
