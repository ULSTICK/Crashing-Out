ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance){
        event.custom({
            "type": "exdeorum:compressed_sieve",
            "ingredient": {
                "item": input
            },
            "mesh": "exdeorum:string_mesh",
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 3.0,
                "p": chance
            }
        });
    };

    // ========= dust =========

    const crushed_end_stone_results = {
        'minecraft:ender_eye': 0.01,
        'minecraft:ender_pearl': 0.02,
        'minecraft:chorus_fruit': 0.02,
        'minecraft:chorus_flower': 0.02
    };

    for (const [output, chance] of Object.entries(crushed_end_stone_results)) {
        add_sieve('exdeorum:compressed_crushed_end_stone', output, chance);
    }
    
});
