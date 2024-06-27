declare module "packages/mcjty/lib/multipart/$IPartBlock" {
import {$PartSlot, $PartSlot$Type} from "packages/mcjty/lib/multipart/$PartSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPartBlock {

 "getSlotFromState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $PartSlot

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $PartSlot
}

export namespace $IPartBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartBlock$Type = ($IPartBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartBlock_ = $IPartBlock$Type;
}}
declare module "packages/mcjty/lib/api/smartwrench/$SmartWrenchMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SmartWrenchMode extends $Enum<($SmartWrenchMode)> {
static readonly "MODE_WRENCH": $SmartWrenchMode
static readonly "MODE_SELECT": $SmartWrenchMode


public "getName"(): string
public static "values"(): ($SmartWrenchMode)[]
public static "valueOf"(arg0: string): $SmartWrenchMode
public static "getMode"(arg0: string): $SmartWrenchMode
public "getCode"(): string
get "name"(): string
get "code"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrenchMode$Type = (("mode_select") | ("mode_wrench")) | ($SmartWrenchMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartWrenchMode_ = $SmartWrenchMode$Type;
}}
declare module "packages/mcjty/lib/crafting/$CopyNBTRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$AbstractRecipeAdaptor, $AbstractRecipeAdaptor$Type} from "packages/mcjty/lib/crafting/$AbstractRecipeAdaptor"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CopyNBTRecipe extends $AbstractRecipeAdaptor {

constructor(arg0: $ShapedRecipe$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "category"(): $CraftingBookCategory
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyNBTRecipe$Type = ($CopyNBTRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyNBTRecipe_ = $CopyNBTRecipe$Type;
}}
declare module "packages/mcjty/lib/blocks/$BaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$TOPDriver, $TOPDriver$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPDriver"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$IPartBlock, $IPartBlock$Type} from "packages/mcjty/lib/multipart/$IPartBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/mcjty/lib/builder/$BlockBuilder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ITabExpander, $ITabExpander$Type} from "packages/mcjty/lib/api/$ITabExpander"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PartSlot, $PartSlot$Type} from "packages/mcjty/lib/multipart/$PartSlot"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TOPInfoProvider, $TOPInfoProvider$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPInfoProvider"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$WailaInfoProvider, $WailaInfoProvider$Type} from "packages/mcjty/lib/compat/waila/$WailaInfoProvider"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$ITooltipSettings, $ITooltipSettings$Type} from "packages/mcjty/lib/tooltips/$ITooltipSettings"

export class $BaseBlock extends $Block implements $WailaInfoProvider, $TOPInfoProvider, $IPartBlock, $ITooltipSettings, $EntityBlock, $ITabExpander {
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBuilder$Type)

public static "getProperties"(arg0: $RotationType$Type): ($Property<(any)>)[]
public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getManualEntry"(): $ManualEntry
public "getItemsForTab"(): $List<($ItemStack)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRotationType"(): $RotationType
public "isInfusable"(): boolean
public static "getInfused"(arg0: $ItemStack$Type): integer
public static "setInfused"(arg0: $ItemStack$Type, arg1: integer): void
public "handleModule"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type, arg6: $BlockHitResult$Type): boolean
public "getRightDirection"(arg0: $BlockState$Type): $Direction
public "getSlotFromState"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $PartSlot
public static "runTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type): void
public "getFrontDirection"(arg0: $BlockState$Type): $Direction
public static "getFrontDirection"(arg0: $RotationType$Type, arg1: $BlockState$Type): $Direction
public "getLeftDirection"(arg0: $BlockState$Type): $Direction
public "getProbeDriver"(): $TOPDriver
public "getMaxWidth"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "manualEntry"(): $ManualEntry
get "itemsForTab"(): $List<($ItemStack)>
get "rotationType"(): $RotationType
get "infusable"(): boolean
get "probeDriver"(): $TOPDriver
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/mcjty/lib/crafting/$CopyNBTRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CopyNBTRecipe, $CopyNBTRecipe$Type} from "packages/mcjty/lib/crafting/$CopyNBTRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CopyNBTRecipeSerializer implements $RecipeSerializer<($CopyNBTRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CopyNBTRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CopyNBTRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CopyNBTRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CopyNBTRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyNBTRecipeSerializer$Type = ($CopyNBTRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyNBTRecipeSerializer_ = $CopyNBTRecipeSerializer$Type;
}}
declare module "packages/mcjty/lib/api/$ITabExpander" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITabExpander {

 "getItemsForTab"(): $List<($ItemStack)>

(): $List<($ItemStack)>
}

export namespace $ITabExpander {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabExpander$Type = ($ITabExpander);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITabExpander_ = $ITabExpander$Type;
}}
declare module "packages/mcjty/lib/builder/$InfoLine" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $InfoLine extends $Record {

constructor(translationKey: string, suffix: string, condition: $Predicate$Type<($ItemStack$Type)>, informationGetter: $Function$Type<($ItemStack$Type), (string)>, styles: ($ChatFormatting$Type)[], repeatingParameter: $Function$Type<($ItemStack$Type), ($Stream$Type<(string)>)>)

public "condition"(): $Predicate<($ItemStack)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "suffix"(): string
public "styles"(): ($ChatFormatting)[]
public "translationKey"(): string
public "repeatingParameter"(): $Function<($ItemStack), ($Stream<(string)>)>
public "informationGetter"(): $Function<($ItemStack), (string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoLine$Type = ($InfoLine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoLine_ = $InfoLine$Type;
}}
declare module "packages/mcjty/lib/compat/theoneprobe/$TOPDriver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TOPDriver {

}

export namespace $TOPDriver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TOPDriver$Type = ($TOPDriver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TOPDriver_ = $TOPDriver$Type;
}}
declare module "packages/mcjty/lib/builder/$BlockBuilder" {
import {$TOPDriver, $TOPDriver$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPDriver"
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TooltipBuilder, $TooltipBuilder$Type} from "packages/mcjty/lib/builder/$TooltipBuilder"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InfoLine, $InfoLine$Type} from "packages/mcjty/lib/builder/$InfoLine"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"

export class $BlockBuilder {
static readonly "STANDARD_IRON": $BlockBehaviour$Properties

constructor()

public "info"(...arg0: ($InfoLine$Type)[]): $BlockBuilder
public "getProperties"(): $BlockBehaviour$Properties
public "properties"(arg0: $BlockBehaviour$Properties$Type): $BlockBuilder
public "getManualEntry"(): $ManualEntry
public "infoAdvanced"(...arg0: ($InfoLine$Type)[]): $BlockBuilder
public "infoShift"(...arg0: ($InfoLine$Type)[]): $BlockBuilder
public "getTileEntitySupplier"(): $BlockEntityType$BlockEntitySupplier<($BlockEntity)>
public "isInfusable"(): boolean
public "manualEntry"(arg0: $ManualEntry$Type): $BlockBuilder
public "getTooltipBuilder"(): $TooltipBuilder
public "getTopDriver"(): $TOPDriver
public "tileEntitySupplier"(arg0: $BlockEntityType$BlockEntitySupplier$Type<($BlockEntity$Type)>): $BlockBuilder
public "infusable"(): $BlockBuilder
public "topDriver"(arg0: $TOPDriver$Type): $BlockBuilder
get "tooltipBuilder"(): $TooltipBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilder$Type = ($BlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBuilder_ = $BlockBuilder$Type;
}}
declare module "packages/mcjty/lib/builder/$TooltipBuilder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InfoLine, $InfoLine$Type} from "packages/mcjty/lib/builder/$InfoLine"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TooltipBuilder {

constructor()

public "info"(...arg0: ($InfoLine$Type)[]): $TooltipBuilder
public static "key"(arg0: string): $InfoLine
public static "parameter"(arg0: string, arg1: $Predicate$Type<($ItemStack$Type)>, arg2: $Function$Type<($ItemStack$Type), (string)>): $InfoLine
public static "parameter"(arg0: string, arg1: $Function$Type<($ItemStack$Type), (string)>): $InfoLine
public "isActive"(): boolean
public static "header"(): $InfoLine
public static "warning"(): $InfoLine
public static "warning"(arg0: $Predicate$Type<($ItemStack$Type)>): $InfoLine
public static "general"(arg0: string, arg1: $Predicate$Type<($ItemStack$Type)>, ...arg2: ($ChatFormatting$Type)[]): $InfoLine
public static "general"(arg0: string, ...arg1: ($ChatFormatting$Type)[]): $InfoLine
public "makeTooltip"(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "infoAdvanced"(...arg0: ($InfoLine$Type)[]): $TooltipBuilder
public "infoShift"(...arg0: ($InfoLine$Type)[]): $TooltipBuilder
public static "gold"(): $InfoLine
public static "gold"(arg0: $Predicate$Type<($ItemStack$Type)>): $InfoLine
public static "repeatingParameter"(arg0: string, arg1: $Function$Type<($ItemStack$Type), ($Stream$Type<(string)>)>): $InfoLine
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipBuilder$Type = ($TooltipBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipBuilder_ = $TooltipBuilder$Type;
}}
declare module "packages/mcjty/lib/tooltips/$ITooltipSettings" {
import {$ManualEntry, $ManualEntry$Type} from "packages/mcjty/lib/gui/$ManualEntry"

export interface $ITooltipSettings {

 "getManualEntry"(): $ManualEntry
 "getMaxWidth"(): integer
}

export namespace $ITooltipSettings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipSettings$Type = ($ITooltipSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipSettings_ = $ITooltipSettings$Type;
}}
declare module "packages/mcjty/lib/multipart/$PartSlot" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PartSlot extends $Enum<($PartSlot)> {
static readonly "NONE": $PartSlot
static readonly "DOWN": $PartSlot
static readonly "UP": $PartSlot
static readonly "NORTH": $PartSlot
static readonly "SOUTH": $PartSlot
static readonly "WEST": $PartSlot
static readonly "EAST": $PartSlot
static readonly "DOWN_NW": $PartSlot
static readonly "DOWN_NE": $PartSlot
static readonly "DOWN_SW": $PartSlot
static readonly "DOWN_SE": $PartSlot
static readonly "UP_NW": $PartSlot
static readonly "UP_NE": $PartSlot
static readonly "UP_SW": $PartSlot
static readonly "UP_SE": $PartSlot
static readonly "NORTH_UW": $PartSlot
static readonly "NORTH_UE": $PartSlot
static readonly "NORTH_DW": $PartSlot
static readonly "NORTH_DE": $PartSlot
static readonly "SOUTH_UW": $PartSlot
static readonly "SOUTH_UE": $PartSlot
static readonly "SOUTH_DW": $PartSlot
static readonly "SOUTH_DE": $PartSlot
static readonly "WEST_US": $PartSlot
static readonly "WEST_UN": $PartSlot
static readonly "WEST_DS": $PartSlot
static readonly "WEST_DN": $PartSlot
static readonly "EAST_US": $PartSlot
static readonly "EAST_UN": $PartSlot
static readonly "EAST_DS": $PartSlot
static readonly "EAST_DN": $PartSlot
static readonly "DOWN_NW_BACK": $PartSlot
static readonly "DOWN_NE_BACK": $PartSlot
static readonly "DOWN_SW_BACK": $PartSlot
static readonly "DOWN_SE_BACK": $PartSlot
static readonly "UP_NW_BACK": $PartSlot
static readonly "UP_NE_BACK": $PartSlot
static readonly "UP_SW_BACK": $PartSlot
static readonly "UP_SE_BACK": $PartSlot
static readonly "NORTH_UW_BACK": $PartSlot
static readonly "NORTH_UE_BACK": $PartSlot
static readonly "NORTH_DW_BACK": $PartSlot
static readonly "NORTH_DE_BACK": $PartSlot
static readonly "SOUTH_UW_BACK": $PartSlot
static readonly "SOUTH_UE_BACK": $PartSlot
static readonly "SOUTH_DW_BACK": $PartSlot
static readonly "SOUTH_DE_BACK": $PartSlot
static readonly "WEST_US_BACK": $PartSlot
static readonly "WEST_UN_BACK": $PartSlot
static readonly "WEST_DS_BACK": $PartSlot
static readonly "WEST_DN_BACK": $PartSlot
static readonly "EAST_US_BACK": $PartSlot
static readonly "EAST_UN_BACK": $PartSlot
static readonly "EAST_DS_BACK": $PartSlot
static readonly "EAST_DN_BACK": $PartSlot
static readonly "VALUES": ($PartSlot)[]


public static "values"(): ($PartSlot)[]
public static "valueOf"(arg0: string): $PartSlot
public static "byName"(arg0: string): $PartSlot
public "getBackSlot"(): $PartSlot
get "backSlot"(): $PartSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartSlot$Type = (("south_de") | ("west_dn_back") | ("west_un_back") | ("down_ne_back") | ("east_us_back") | ("none") | ("up_ne_back") | ("down") | ("up_nw_back") | ("down_nw_back") | ("down_se") | ("west") | ("up") | ("down_nw") | ("north_uw_back") | ("north_de_back") | ("north_uw") | ("up_sw") | ("up_se_back") | ("east_un_back") | ("north_ue_back") | ("east_ds_back") | ("down_sw") | ("north_ue") | ("north_dw") | ("west_un") | ("down_se_back") | ("south_ue_back") | ("south") | ("east_us") | ("north") | ("west_us") | ("up_nw") | ("up_sw_back") | ("down_sw_back") | ("north_de") | ("south_uw_back") | ("south_de_back") | ("east") | ("up_se") | ("south_dw_back") | ("east_dn_back") | ("south_uw") | ("west_us_back") | ("east_dn") | ("down_ne") | ("north_dw_back") | ("south_dw") | ("west_dn") | ("west_ds_back") | ("west_ds") | ("south_ue") | ("east_ds") | ("east_un") | ("up_ne")) | ($PartSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartSlot_ = $PartSlot$Type;
}}
declare module "packages/mcjty/lib/items/$BaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITabExpander, $ITabExpander$Type} from "packages/mcjty/lib/api/$ITabExpander"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item implements $ITabExpander {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getItemsForTab"(): $List<($ItemStack)>
get "itemsForTab"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$Type;
}}
declare module "packages/mcjty/lib/api/smartwrench/$SmartWrench" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SmartWrenchMode, $SmartWrenchMode$Type} from "packages/mcjty/lib/api/smartwrench/$SmartWrenchMode"

export interface $SmartWrench {

 "getMode"(arg0: $ItemStack$Type): $SmartWrenchMode

(arg0: $ItemStack$Type): $SmartWrenchMode
}

export namespace $SmartWrench {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrench$Type = ($SmartWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartWrench_ = $SmartWrench$Type;
}}
declare module "packages/mcjty/lib/tooltips/$ITooltipExtras" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITooltipExtras {

 "getItems"(arg0: $ItemStack$Type): $List<($Pair<($ItemStack), (integer)>)>

(arg0: $ItemStack$Type): $List<($Pair<($ItemStack), (integer)>)>
}

export namespace $ITooltipExtras {
const NOERROR: integer
const NOAMOUNT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipExtras$Type = ($ITooltipExtras);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipExtras_ = $ITooltipExtras$Type;
}}
declare module "packages/mcjty/lib/compat/waila/$WailaInfoProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WailaInfoProvider {

}

export namespace $WailaInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WailaInfoProvider$Type = ($WailaInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WailaInfoProvider_ = $WailaInfoProvider$Type;
}}
declare module "packages/mcjty/lib/varia/$ItemStackList" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackList extends $NonNullList<($ItemStack)> {
static readonly "EMPTY": $ItemStackList

constructor(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type)

public static "create"(): $ItemStackList
public static "create"(arg0: integer): $ItemStackList
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackList$Type = ($ItemStackList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackList_ = $ItemStackList$Type;
}}
declare module "packages/mcjty/lib/gui/$ManualEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ManualEntry extends $Record {
static readonly "EMPTY": $ManualEntry

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type)
constructor(manual: $ResourceLocation$Type, entry: $ResourceLocation$Type, page: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entry"(): $ResourceLocation
public "manual"(): $ResourceLocation
public "page"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualEntry$Type = ($ManualEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualEntry_ = $ManualEntry$Type;
}}
declare module "packages/mcjty/lib/crafting/$AbstractRecipeAdaptor" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IShapedRecipe, $IShapedRecipe$Type} from "packages/net/minecraftforge/common/crafting/$IShapedRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AbstractRecipeAdaptor implements $CraftingRecipe, $IShapedRecipe<($CraftingContainer)> {

constructor(arg0: $ShapedRecipe$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getRecipeHeight"(): integer
public "getRecipeWidth"(): integer
public "getId"(): $ResourceLocation
public "getRecipe"(): $ShapedRecipe
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getMod"(): string
public "getType"(): $ResourceLocation
public "getOrCreateId"(): $ResourceLocation
public "getGroup"(): string
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "recipeHeight"(): integer
get "recipeWidth"(): integer
get "id"(): $ResourceLocation
get "recipe"(): $ShapedRecipe
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "mod"(): string
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "schema"(): $RecipeSchema
set "group"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRecipeAdaptor$Type = ($AbstractRecipeAdaptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRecipeAdaptor_ = $AbstractRecipeAdaptor$Type;
}}
declare module "packages/mcjty/lib/compat/theoneprobe/$TOPInfoProvider" {
import {$TOPDriver, $TOPDriver$Type} from "packages/mcjty/lib/compat/theoneprobe/$TOPDriver"

export interface $TOPInfoProvider {

 "getProbeDriver"(): $TOPDriver

(): $TOPDriver
}

export namespace $TOPInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TOPInfoProvider$Type = ($TOPInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TOPInfoProvider_ = $TOPInfoProvider$Type;
}}
declare module "packages/mcjty/lib/blocks/$RotationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RotationType extends $Enum<($RotationType)> {
static readonly "HORIZROTATION": $RotationType
static readonly "ROTATION": $RotationType
static readonly "NONE": $RotationType


public static "values"(): ($RotationType)[]
public static "valueOf"(arg0: string): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationType$Type = (("horizrotation") | ("rotation") | ("none")) | ($RotationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationType_ = $RotationType$Type;
}}
declare module "packages/mcjty/lib/items/$BaseBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITabExpander, $ITabExpander$Type} from "packages/mcjty/lib/api/$ITabExpander"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem implements $ITabExpander {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getItemsForTab"(): $List<($ItemStack)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "itemsForTab"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
