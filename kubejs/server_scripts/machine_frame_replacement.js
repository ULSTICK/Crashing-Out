ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_frame' });
  event.remove({ output: 'industrialforegoing:machine_frame_pity' });
  event.remove({ output: 'industrialforegoing:machine_frame_simple' });
  event.remove({ output: 'mekanism:steel_casing' });
  event.remove({ output: 'enderio:void_chassis' });
  event.remove({ output: 'enderio:ensouled_chassis' });
  event.remove({ output: 'rftoolsbase:machine_frame' });

  event.replaceInput({ input: 'industrialforegoing:machine_frame_pity' }, 'industrialforegoing:machine_frame_pity', 'thermal:machine_frame');
  event.replaceInput({ input: '#industrialforegoing:machine_frame/pity' }, '#industrialforegoing:machine_frame/pity', 'thermal:machine_frame');
  event.replaceInput({ input: 'industrialforegoing:machine_frame_simple' }, 'industrialforegoing:machine_frame_simple', 'thermal:machine_frame');
  event.replaceInput({ input: '#industrialforegoing:machine_frame/simple' }, '#industrialforegoing:machine_frame/simple', 'thermal:machine_frame');
  event.replaceInput({ input: 'mekanism:steel_casing' }, 'mekanism:steel_casing', 'thermal:machine_frame');
  event.replaceInput({ input: 'enderio:void_chassis' }, 'enderio:void_chassis', 'thermal:machine_frame');
  event.replaceInput({ input: 'enderio:ensouled_chassis' }, 'enderio:ensouled_chassis', 'thermal:ensouled_chassis');
  event.replaceInput({ input: 'rftoolsbase:machine_frame' }, 'rftoolsbase:machine_frame', 'thermal:machine_frame');

  event.shaped(
    Item.of('thermal:machine_frame', 1),
    [
      'SGS',
      'GPG',
      'SGS'
    ],
    {
      E: '#forge:ingots/steel',
      G: '#forge:glass',
      P: 'pneumaticcraft:printed_circuit_board'
    }
  )
})