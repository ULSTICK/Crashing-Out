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

    const podzol_results = {
		'minecraft:oak_sapling': 0.03,
        'tconstruct:earth_slime_sapling': 0.01,
        'tconstruct:sky_slime_sapling': 0.01,
        'minecraft:slime_ball': 0.01,
        'tconstruct:sky_slime_ball': 0.01,
        'minecraft:cherry_sapling': 0.02,
		'minecraft:acacia_sapling': 0.02,
		'minecraft:dark_oak_sapling': 0.02,
		'pamhc2trees:apple_sapling': 0.01,
		'pamhc2trees:avocado_sapling': 0.01,
		'pamhc2trees:candlenut_sapling': 0.01,
		'pamhc2trees:cherry_sapling': 0.01,
		'pamhc2trees:chestnut_sapling': 0.01,
		'pamhc2trees:gooseberry_sapling': 0.01,
		'pamhc2trees:lemon_sapling': 0.01,
		'pamhc2trees:nutmeg_sapling': 0.01,
		'pamhc2trees:orange_sapling': 0.01,
		'pamhc2trees:peach_sapling': 0.01,
		'pamhc2trees:pear_sapling': 0.01,
		'pamhc2trees:plum_sapling': 0.01,
		'pamhc2trees:walnut_sapling': 0.01,
		'pamhc2trees:spiderweb_sapling': 0.01,
		'pamhc2trees:hazelnut_sapling': 0.01,
		'pamhc2trees:pawpaw_sapling': 0.01,
		'pamhc2trees:soursop_sapling': 0.01,
		'pamhc2trees:acorn_sapling': 0.01,
		'pamhc2trees:almond_sapling': 0.01,
		'pamhc2trees:apricot_sapling': 0.01,
		'pamhc2trees:banana_sapling': 0.01,
		'pamhc2trees:cashew_sapling': 0.01,
		'pamhc2trees:cinnamon_sapling': 0.01,
		'pamhc2trees:coconut_sapling': 0.01,
		'pamhc2trees:date_sapling': 0.01,
		'pamhc2trees:dragonfruit_sapling': 0.01,
		'pamhc2trees:durian_sapling': 0.01,
		'pamhc2trees:fig_sapling': 0.01,
		'pamhc2trees:grapefruit_sapling': 0.01,
		'pamhc2trees:lime_sapling': 0.01,
		'pamhc2trees:mango_sapling': 0.01,
		'pamhc2trees:olive_sapling': 0.01,
		'pamhc2trees:papaya_sapling': 0.01,
		'pamhc2trees:paperbark_sapling': 0.01,
		'pamhc2trees:pecan_sapling': 0.01,
		'pamhc2trees:peppercorn_sapling': 0.01,
		'pamhc2trees:persimmon_sapling': 0.01,
		'pamhc2trees:pistachio_sapling': 0.01,
		'pamhc2trees:pomegranate_sapling': 0.01,
		'pamhc2trees:starfruit_sapling': 0.01,
		'pamhc2trees:vanillabean_sapling': 0.01,
		'pamhc2trees:breadfruit_sapling': 0.01,
		'pamhc2trees:guava_sapling': 0.01,
		'pamhc2trees:jackfruit_sapling': 0.01,
		'pamhc2trees:lychee_sapling': 0.01,
		'pamhc2trees:passionfruit_sapling': 0.01,
		'pamhc2trees:rambutan_sapling': 0.01,
		'pamhc2trees:tamarind_sapling': 0.01,
		'pamhc2trees:maple_sapling': 0.01
    };

    const mesh = {
        'exdeorum:string_mesh': 1,
        'exdeorum:flint_mesh': 1.2,
        'exdeorum:iron_mesh': 1.4,
        'exdeorum:golden_mesh': 1.6,
        'exdeorum:diamond_mesh': 1.8,
        'exdeorum:netherite_mesh': 2.0
    };

    for (const [output, chance] of Object.entries(podzol_results)) {
        for (const [mesh_tier, multip] of Object.entries(mesh)) {
        add_sieve('minecraft:podzol', output, chance, mesh_tier, multip);
    }
    }
    
});
