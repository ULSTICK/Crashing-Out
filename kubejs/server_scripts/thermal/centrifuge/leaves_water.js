
ServerEvents.recipes(event => {
    const add_leave = function(input, output){

    event.custom({
        type: 'thermal:centrifuge',
        ingredient: [
            { item: input}
        ],
        result:  [
        {
            item: output,
            chance: 0.75,
            locked: true
        },        {
            item: 'mekanism:bio_fuel',
            chance: 0.25,
            locked: true
        },
        {
            fluid: "survive:purified_water",
            amount: 100
        },
    ],
        energy: (400)
    });
}

const leaves = {
    'minecraft:oak_leaves': 'minecraft:oak_sapling',
    'minecraft:spruce_leaves': 'minecraft:spruce_sapling',
    'minecraft:birch_leaves': 'minecraft:birch_sapling',
    'minecraft:jungle_leaves': 'minecraft:jungle_sapling',
    'minecraft:acacia_leaves': 'minecraft:acacia_sapling',
    'minecraft:dark_oak_leaves': 'minecraft:dark_oak_sapling',
    'minecraft:mangrove_leaves': 'minecraft:mangrove_propagule',
    'minecraft:cherry_leaves': 'minecraft:cherry_sapling'
};

for (const [input, output] of Object.entries(leaves)) {
    add_leave(input, output);
}

})