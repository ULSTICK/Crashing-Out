declare module "packages/me/ramidzkh/mekae2/item/$ChemicalPortableCellItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PortableCellItem, $PortableCellItem$Type} from "packages/appeng/items/tools/powered/$PortableCellItem"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$StorageTier, $StorageTier$Type} from "packages/appeng/items/storage/$StorageTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChemicalPortableCellItem extends $PortableCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: $MenuType$Type<(any)>, arg2: $StorageTier$Type, arg3: $Item$Properties$Type, arg4: integer)

public "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalPortableCellItem$Type = ($ChemicalPortableCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalPortableCellItem_ = $ChemicalPortableCellItem$Type;
}}
declare module "packages/me/ramidzkh/mekae2/item/$ChemicalStorageCell" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BasicStorageCell, $BasicStorageCell$Type} from "packages/appeng/items/storage/$BasicStorageCell"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StorageTier, $StorageTier$Type} from "packages/appeng/items/storage/$StorageTier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChemicalStorageCell extends $BasicStorageCell {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $StorageTier$Type, arg2: $ItemLike$Type)

public "isBlackListed"(arg0: $ItemStack$Type, arg1: $AEKey$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStorageCell$Type = ($ChemicalStorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStorageCell_ = $ChemicalStorageCell$Type;
}}
