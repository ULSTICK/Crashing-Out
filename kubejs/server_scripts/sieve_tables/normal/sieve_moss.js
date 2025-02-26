ServerEvents.recipes(event => {

    const add_sieve = function(input, output, chance, mesh_tier, multip){
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": input
            },
            "mesh": mesh_tier,
            "result": output,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": chance * multip
            }
        });
    };

    // ========= dust =========

    const dirt_results = {
		'minecraft:mangrove_propagule':0.01,
		'minecraft:dandelion':0.01,
		'minecraft:poppy':0.01,
		'minecraft:blue_orchid':0.01,
		'minecraft:allium':0.01,
		'minecraft:azure_bluet':0.01,
		'minecraft:red_tulip':0.01,
		'minecraft:orange_tulip':0.01,
		'minecraft:white_tulip':0.01,
		'minecraft:pink_tulip':0.01,
		'minecraft:oxeye_daisy':0.01,
		'minecraft:cornflower':0.01,
		'minecraft:lily_of_the_valley':0.01,
		'minecraft:sunflower':0.01,
		'pamhc2trees:coconutitem':0.01,
		'minecraft:lilac':0.01,
		'minecraft:rose_bush':0.01,
		'minecraft:peony':0.01,
		'minecraft:flowering_azalea':0.01,
		'minecraft:azalea':0.01,
		'farmersdelight:wild_cabbages':0.01,
		'farmersdelight:wild_onions':0.01,
		'farmersdelight:wild_tomatoes':0.01,
		'farmersdelight:wild_carrots':0.01,
		'farmersdelight:wild_potatoes':0.01,
		'pamhc2crops:cauliflowerseeditem':0.01,
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(dirt_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
        add_sieve('minecraft:moss_block', output, chance, mesh_tier, multip);
        }
    }
    
});
