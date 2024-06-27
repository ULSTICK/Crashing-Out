declare module "packages/com/stereowalker/unionlib/world/entity/player/$CustomInventoryGetter" {
import {$UnionInventory, $UnionInventory$Type} from "packages/com/stereowalker/unionlib/world/entity/player/$UnionInventory"

export interface $CustomInventoryGetter {

 "getUnionInventory"(): $UnionInventory
 "setUnionInventory"(arg0: $UnionInventory$Type): void
}

export namespace $CustomInventoryGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInventoryGetter$Type = ($CustomInventoryGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInventoryGetter_ = $CustomInventoryGetter$Type;
}}
declare module "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot$Group" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessorySlot$Group extends $Enum<($AccessorySlot$Group)> {
static readonly "NECK": $AccessorySlot$Group
static readonly "BACK": $AccessorySlot$Group
static readonly "FINGER": $AccessorySlot$Group


public "getName"(): string
public static "values"(): ($AccessorySlot$Group)[]
public static "valueOf"(arg0: string): $AccessorySlot$Group
public static "byName"(arg0: string): $AccessorySlot$Group
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorySlot$Group$Type = (("finger") | ("back") | ("neck")) | ($AccessorySlot$Group);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorySlot$Group_ = $AccessorySlot$Group$Type;
}}
declare module "packages/com/stereowalker/unionlib/hook/$ICreativeTab" {
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$DisplayItemsGenerator"

export interface $ICreativeTab {

 "getGenerator"(): $CreativeModeTab$DisplayItemsGenerator

(): $CreativeModeTab$DisplayItemsGenerator
}

export namespace $ICreativeTab {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreativeTab$Type = ($ICreativeTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreativeTab_ = $ICreativeTab$Type;
}}
declare module "packages/com/stereowalker/unionlib/world/entity/player/$UnionInventory" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$AccessorySlot, $AccessorySlot$Type} from "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $UnionInventory extends $SimpleContainer {
readonly "player": $Player

constructor(arg0: $Player$Type)

public "load"(arg0: $ListTag$Type): void
public "save"(arg0: $ListTag$Type): $ListTag
public "replaceWith"(arg0: $UnionInventory$Type): void
public "tick"(): void
public "isUsableByPlayer"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
public "getFirstRing"(): $ItemStack
/**
 * 
 * @deprecated
 */
public "getSecondRing"(): $ItemStack
public "dropAll"(): void
public "getAccessory"(arg0: $AccessorySlot$Type): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "firstRing"(): $ItemStack
get "secondRing"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnionInventory$Type = ($UnionInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnionInventory_ = $UnionInventory$Type;
}}
declare module "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AccessorySlot$Group, $AccessorySlot$Group$Type} from "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot$Group"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AccessorySlot extends $Enum<($AccessorySlot)> {
static readonly "NECK_1": $AccessorySlot
static readonly "BACK_1": $AccessorySlot
static readonly "BACK_2": $AccessorySlot
static readonly "BACK_3": $AccessorySlot
static readonly "BACK_4": $AccessorySlot
static readonly "BACK_5": $AccessorySlot
static readonly "BACK_6": $AccessorySlot
static readonly "FINGER_1": $AccessorySlot
static readonly "FINGER_2": $AccessorySlot


public "getName"(): string
public static "values"(): ($AccessorySlot)[]
public static "valueOf"(arg0: string): $AccessorySlot
public "getIndex"(): integer
public static "byName"(arg0: string): $AccessorySlot
public "getGroup"(): $AccessorySlot$Group
public "getValidStack"(): $Predicate<($ItemStack)>
public static "byGroupAndIndex"(arg0: $AccessorySlot$Group$Type, arg1: integer): $AccessorySlot
public "getTextureIndex"(): integer
get "name"(): string
get "index"(): integer
get "group"(): $AccessorySlot$Group
get "validStack"(): $Predicate<($ItemStack)>
get "textureIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorySlot$Type = (("neck_1") | ("back_1") | ("back_2") | ("finger_2") | ("back_3") | ("back_4") | ("back_5") | ("finger_1") | ("back_6")) | ($AccessorySlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorySlot_ = $AccessorySlot$Type;
}}
declare module "packages/com/stereowalker/unionlib/hook/$AccessoryStack" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AccessorySlot, $AccessorySlot$Type} from "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/com/stereowalker/unionlib/world/item/$AccessoryItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AccessorySlot$Group, $AccessorySlot$Group$Type} from "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot$Group"

export interface $AccessoryStack {

 "self"(): $ItemStack
 "addTooltipLines"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
 "getAttributeModifiers"(arg0: $AccessorySlot$Group$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $AccessorySlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getAccessory"(): $AccessoryItem
}

export namespace $AccessoryStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryStack$Type = ($AccessoryStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryStack_ = $AccessoryStack$Type;
}}
declare module "packages/com/stereowalker/unionlib/world/item/$AccessoryItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AccessorySlot, $AccessorySlot$Type} from "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AccessorySlot$Group, $AccessorySlot$Group$Type} from "packages/com/stereowalker/unionlib/world/entity/$AccessorySlot$Group"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AccessoryItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $AccessorySlot$Type)
constructor(arg0: $Item$Properties$Type, arg1: $AccessorySlot$Group$Type)

public "getAttributeModifiers"(arg0: $AccessorySlot$Group$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $AccessorySlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "accessoryInformation"(): $Component
public "accessoryTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "getAccessorySlots"(): $List<($AccessorySlot)>
get "accessorySlots"(): $List<($AccessorySlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItem$Type = ($AccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItem_ = $AccessoryItem$Type;
}}
