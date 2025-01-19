ServerEvents.recipes(event => {

    function ore_smelting(input, output) { 
        event.custom({
            "type":"exdeorum:lava_crucible",
            "fluid":{"amount":90,"fluid":output},
            "ingredient":{"tag":input}})
    }
    
        ore_smelting('forge:ores/iron', 'tconstruct:molten_iron')
        ore_smelting('forge:ores/gold', 'tconstruct:molten_gold')
        ore_smelting('forge:ores/zinc', 'tconstruct:molten_zinc')
        ore_smelting('forge:ores/copper', 'tconstruct:molten_copper')
        ore_smelting('forge:ores/osmium', 'tconstruct:molten_osmium')
        ore_smelting('forge:ores/tin', 'tconstruct:molten_tin')
        ore_smelting('forge:ores/lead', 'tconstruct:molten_lead')
        ore_smelting('forge:ores/silver', 'tconstruct:molten_silver')
        ore_smelting('forge:ores/nickel', 'tconstruct:molten_nickel')
        ore_smelting('forge:raw_materials/iron', 'tconstruct:molten_iron')
        ore_smelting('forge:raw_materials/gold', 'tconstruct:molten_gold')
        ore_smelting('forge:raw_materials/zinc', 'tconstruct:molten_zinc')
        ore_smelting('forge:raw_materials/copper', 'tconstruct:molten_copper')
        ore_smelting('forge:raw_materials/osmium', 'tconstruct:molten_osmium')
        ore_smelting('forge:raw_materials/tin', 'tconstruct:molten_tin')
        ore_smelting('forge:raw_materials/lead', 'tconstruct:molten_lead')
        ore_smelting('forge:raw_materials/silver', 'tconstruct:molten_silver')
        ore_smelting('forge:raw_materials/nickel', 'tconstruct:molten_nickel')

    })