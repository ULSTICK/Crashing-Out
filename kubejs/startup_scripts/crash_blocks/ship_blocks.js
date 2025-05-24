StartupEvents.registry("block", (event) => {
  event.create("plasteel") // Create a new block with ID "kubejs:example_block"
    .displayName("Plasteel") // Set a custom name
    .mapColor("snow") // Set a material (affects the sounds and some properties)
    .soundType("metal")
    .hardness(1.8) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    // .tagBlock('minecraft:needs_iron_tool')
    .textureAll('kubejs:block/plasteel')
})

StartupEvents.registry("block", (event) => {
  event.create("ostrum_door_block")
    .displayName("Ostrum Door Block")
    .mapColor("color_purple")
    .soundType("metal")
    .hardness(5.0)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .defaultCutout()
    .property(BlockProperties.FACING)
    .placementState(event => event.set(BlockProperties.FACING, event.clickedFace))
    .model("kubejs:block/ostrum_door_block")
    .blockstateJson = {
    "variants": {
      "facing=north": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90
      },
      "facing=east": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90,
        "y": 90
      },
      "facing=south": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90,
        "y": 180
      },
      "facing=west": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90,
        "y": 270
      },
      "facing=up": {
        "model": "kubejs:block/ostrum_door_block"
      },
      "facing=down": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 180
      }
    }
  }
})