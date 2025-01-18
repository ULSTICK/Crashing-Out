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

    const sand_results = {
        'exdeorum:iron_ore_chunk': 0.20,
        'exdeorum:copper_ore_chunk': 0.14,
        'exdeorum:gold_ore_chunk': 0.09,
        'exdeorum:silver_ore_chunk': 0.09,
        'exdeorum:lead_ore_chunk': 0.11,
        'exdeorum:nickel_ore_chunk': 0.09,
        'exdeorum:uranium_ore_chunk': 0.01,
        'exdeorum:osmium_ore_chunk': 0.09,
        'exdeorum:tin_ore_chunk': 0.14,
        'exdeorum:zinc_ore_chunk': 0.09,
        'ae2:certus_quartz_crystal': 0.17,
        'minecraft:cactus': 0.03,
        'minecraft:cocoa_beans': 0.03,
        'minecraft:jungle_sapling': 0.02,
        'thermal:sulfur_dust': 0.01,
        'exdeorum:mycelium_spores': 0.01

    };

    for (const [output, chance] of Object.entries(sand_results)) {
        add_sieve('exdeorum:compressed_san', output, chance);
    }
    
});
