
ServerEvents.recipes(event => {

    event.custom({
        type: 'thermal:centrifuge',
        ingredient: [
            { tag: 'forge:fruits'}
        ],
        result:  [
        {
            item: 'mekanism:bio_fuel',
            chance: 0.75,
            locked: true
        },
        {
            fluid: "survive:purified_water",
            amount: 100
        },
    ],
        energy: (400)
    });

})