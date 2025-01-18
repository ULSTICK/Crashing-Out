  ServerEvents.recipes(event => {
    function slabed(output, input) {
      event.shapeless(output, [           
        input,
      ])
    }
  
    slabed('minecraft:oak_planks', '2x minecraft:oak_slab'),
    slabed('minecraft:spruce_planks', '2x minecraft:spruce_slab'),
    slabed('minecraft:birch_planks', '2x minecraft:birch_slab'),
    slabed('minecraft:jungle_planks', '2x minecraft:jungle_slab'),
    slabed('minecraft:acacia_planks', '2x minecraft:acacia_slab'),
    slabed('minecraft:dark_oak_planks', '2x minecraft:dark_oak_slab'),
    slabed('minecraft:mangrove_planks', '2x minecraft:mangrove_slab'),
    slabed('minecraft:cherry_planks', '2x minecraft:cherry_slab'),
    slabed('minecraft:bamboo_planks', '2x minecraft:bamboo_slab'),
    slabed('minecraft:crimson_planks', '2x minecraft:crimson_slab'),
    slabed('minecraft:warped_planks', '2x minecraft:warped_slab'),
    slabed('thermal:rubberwood_planks', '2x thermal:rubberwood_slab'),
    slabed('tconstruct:greenheart_planks', '2x tconstruct:greenheart_planks_slab'),
    slabed('tconstruct:skyroot_planks', '2x tconstruct:skyroot_planks_slab'),
    slabed('tconstruct:bloodshroom_planks', '2x tconstruct:bloodshroom_planks_slab'),
    slabed('tconstruct:enderbark_planks', '2x tconstruct:enderbark_planks_slab')

  
    })