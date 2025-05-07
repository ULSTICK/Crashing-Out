ServerEvents.recipes(event => {
// This section now handled in config/almostunified/unify.json
/*
  event.replaceInput({ input: 'industrialforegoing:machine_frame_pity' }, 'industrialforegoing:machine_frame_pity', 'crash_landing:machine_frames');
  event.replaceInput({ input: '#industrialforegoing:machine_frame/pity' }, '#industrialforegoing:machine_frame/pity', 'crash_landing:machine_frames');
  event.replaceInput({ input: 'industrialforegoing:machine_frame_simple' }, 'industrialforegoing:machine_frame_simple', 'crash_landing:machine_frames');
  event.replaceInput({ input: '#industrialforegoing:machine_frame/simple' }, '#industrialforegoing:machine_frame/simple', 'crash_landing:machine_frames');
  event.replaceInput({ input: 'mekanism:steel_casing' }, 'mekanism:steel_casing', 'crash_landing:machine_frames');
  event.replaceInput({ input: 'enderio:void_chassis' }, 'enderio:void_chassis', 'crash_landing:machine_frames');
  event.replaceInput({ input: 'enderio:ensouled_chassis' }, 'enderio:ensouled_chassis', '#crash_landing:machine_frames');
  event.replaceInput({ input: 'rftoolsbase:machine_frame' }, 'rftoolsbase:machine_frame', '#crash_landing:machine_frames');
*/
  event.remove({ output: 'thermal:machine_frame' });
  event.remove({ output: 'industrialforegoing:machine_frame_pity' });
  event.remove({ output: 'industrialforegoing:machine_frame_simple' });
  event.remove({ output: 'mekanism:steel_casing' });
  event.remove({ output: 'enderio:void_chassis' });
  event.remove({ output: 'enderio:ensouled_chassis' });
  event.remove({ output: 'rftoolsbase:machine_frame' });

  event.shaped(
    Item.of('thermal:machine_frame', 1),
    [
      'SGS',
      'GPG',
      'SGS'
    ],
    {
      G: '#forge:glass',
      P: 'pneumaticcraft:printed_circuit_board',
      S: '#forge:ingots/steel'
    }
  )
})