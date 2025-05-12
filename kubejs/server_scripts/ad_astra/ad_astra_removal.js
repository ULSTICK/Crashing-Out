ServerEvents.recipes(event => {
    // Removes all Ad Astra recipes. When this line is removed, remove the "ad_astra:*+" line from AlmostUnified's duplicates.json
    event.remove({ mod: 'ad_astra' });

    event.remove({ output: 'ad_astra:wheel' });
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

    event.remove({ output: 'ad_astra:radio' });
    event.shaped(
        Item.of('ad_astra:radio', 1),
        [
            'W  ',
            'SPS',
            'SSS'
        ],
        {
            P: 'pneumaticcraft:printed_circuit_board',
            S: '#forge:plates/steel',
            W: '#forge:wires/all_metal'
        }
    )

    event.remove({ output: 'ad_astra:tier_1_rover' });
    event.shaped(
        Item.of('ad_astra:tier_1_rover', 1),
        [
            'B P',
            'GRE',
            'WSW'
        ],
        {
            B: ['#forge:storage_blocks/desh', '#forge:storage_blocks/bronze'],
            E: ['ad_astra:desh_engine', 'thermal:dynamo_compression'],
            G: ['ad_astra:large_gas_tank', 'mekanism:basic_fluid_tank'],
            P: 'pneumaticcraft:printed_circuit_board',
            R: 'ad_astra:radio',
            S: ['#forge:plates/desh', '#forge:plates/bronze'],
            W: 'ad_astra:wheel'
        }
    )
});