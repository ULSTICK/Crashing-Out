ServerEvents.recipes(event => {
    event.remove({ mod: 'ad_astra' });

    event.shaped(
        Item.of('ad_astra:wheel', 1),
        [
            'RRR',
            'RGR',
            'RRR'
        ],
        {
            G: '#forge:gears/steel',
            R: 'thermal:cured_rubber'
        }
    )

    event.shaped(
        Item.of('ad_astra:tier_1_rover', 1),
        [
            'P P',
            'CDF',
            'WPW'
        ],
        {
            C: '#forge:chests',
            D: 'thermal:dynamo_compression',
            F: 'mekanism:basic_fluid_tank',
            P: '#forge:plates/steel',
            W: 'ad_astra:wheel'
        }
    )
});