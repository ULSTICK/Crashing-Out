ServerEvents.recipes(event => {
    // Removal by ID
    event.remove({
        id:
        [
            "tconstruct:molten_pewter",
            "tconstruct:smeltery/casting/scorched/brick_composite",
            "tconstruct:smeltery/casting/scorched/stone_from_magma",
            "tconstruct:smeltery/casting/seared/brick_composite",
            "tconstruct:smeltery/casting/seared/stone/block_from_seared",
            "tconstruct:smeltery/melting/metal/iron/ore_sparse"
        ]
    });

    // Removal by mod
    event.remove({
        mod:
        [
            "cgm",
            "mob_grinding_utils",
            "simplyjetpacks"
        ]
    });

    // Removal by output
    event.remove({
        output:
        [
            "cookingforblockheads:sink",
            "create:netherite_diving_boots",
            "exdeorum:acacia_crucible",
            "exdeorum:bamboo_crucible",
            "exdeorum:birch_crucible",
            "exdeorum:crimson_crucible",
            "exdeorum:dark_oak_crucible",
            "exdeorum:end_cake",
            "exdeorum:jungle_crucible",
            "exdeorum:oak_crucible",
            "exdeorum:porcelain_bucket",
            "exdeorum:spruce_crucible",
            "exdeorum:warped_crucible",
            "industrialforegoing:mycelial_magma",
            "mekanismgenerators:heat_generator",
            "minecraft:composter",
            "minecraft:diamond_boots",
            "minecraft:diamond_chestplate",
            "minecraft:diamond_helmet",
            "minecraft:diamond_leggings",
            "minecraft:netherite_chestplate",
            "minecraft:netherite_helmet",
            "minecraft:netherite_leggings",
            "survive:charcoal_filter",
            "survive:charcoal_filter",
            "tconstruct:grout",
            "tconstruct:nether_grout",
            "torchmaster:megatorch"
        ]
    });

    // Removal by type
    event.remove({
        type:
        [
            "create:potions",
            "exdeorum:compressed_sieve",
            "exdeorum:water_crucible",
            "tconstruct:casting_table_potion"
        ]
    });

    // Removal of haunting recipes
    event.remove({
        type: "create:haunting",
        output:
        [
            "minecraft:soul_sand",
            "minecraft:soul_soil"
        ]
    });

    // Removal of fire charge recipes for Thermal alloys
    event.remove({
        mod: "thermal",
        type: "minecraft:crafting_shapeless",
        input: "minecraft:fire_charge",
        output:
        [
            "thermal:bronze_ingot",
            "thermal:constantan_ingot",
            "thermal:electrum_ingot",
            "thermal:enderium_ingot",
            "thermal:invar_ingot",
            "thermal:lumium_ingot",
            "thermal:signalum_ingot"
        ]
    });

    // Misc removals
    event.remove({ type: "minecraft:crafting_shaped", output: "minecraft:coarse_dirt" });
    event.remove({ type: "tconstruct:casting_table", output: "mekanism:ingot_refined_obsidian" });
    event.remove({ type: "tconstruct:casting_table", output: "minecraft:potion" });
    
    exdeorum.removeDefaultSieveRecipes(event);
});