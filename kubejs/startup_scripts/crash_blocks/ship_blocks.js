StartupEvents.registry("block", (event) => {
  event.create("light_plasteel_block")
    .displayName("Light Plasteel Block")
    .mapColor("snow")
    .soundType("metal")
    .hardness(1.8)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tag("crash_landing:plasteel_block")
    .tag("forge:storage_blocks/plasteel")
    .textureAll('kubejs:block/light_plasteel_block')

  event.create("dark_plasteel_block")
    .displayName("Dark Plasteel Block")
    .mapColor("color_black")
    .soundType("metal")
    .hardness(1.8)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tag("crash_landing:plasteel_block")
    .tag("forge:storage_blocks/plasteel")
    .textureAll('kubejs:block/dark_plasteel_block')

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