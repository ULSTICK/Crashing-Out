declare module "packages/toughasnails/enchantment/$ThermalTuningEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $ThermalTuningEnchantment extends $Enchantment {
 "category": $EnchantmentCategory

constructor()

public "isTreasureOnly"(): boolean
get "treasureOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermalTuningEnchantment$Type = ($ThermalTuningEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermalTuningEnchantment_ = $ThermalTuningEnchantment$Type;
}}
