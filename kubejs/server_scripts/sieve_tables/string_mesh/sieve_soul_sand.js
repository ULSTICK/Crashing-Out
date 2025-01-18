ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance){
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": input
            },
            "mesh": "exdeorum:string_mesh",
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": chance
            }
        });
    };

    // ========= dust =========

    const soul_sand_results = {
        'minecraft:quartz': 1,
        'minecraft:nether_wart': 0.05,
        'minecraft:ghast_tear': 0.02,
        'exdeorum:cobalt_ore_chunk': 0.01,
        'mekanism:dirty_netherite_scrap': 0.02
    };

    for (const [output, chance] of Object.entries(soul_sand_results)) {
        add_sieve('minecraft:soul_sand', output, chance);
    }
    
});
