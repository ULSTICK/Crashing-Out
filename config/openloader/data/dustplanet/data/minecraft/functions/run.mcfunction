scoreboard objectives add testFirst dummy
execute unless score isFirst testFirst matches 1 run scoreboard players set isFirst testFirst 0
execute if score isFirst testFirst matches 0 run function minecraft:generate
scoreboard players set isFirst testFirst 1