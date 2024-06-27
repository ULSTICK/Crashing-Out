declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICalculationResult" {
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$ICraftingTask, $ICraftingTask$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICraftingTask"
import {$CalculationResultType, $CalculationResultType$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$CalculationResultType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICraftingPreviewElement, $ICraftingPreviewElement$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/preview/$ICraftingPreviewElement"

export interface $ICalculationResult {

 "getType"(): $CalculationResultType
 "getTask"(): $ICraftingTask
 "getRecursedPattern"(): $ICraftingPattern
 "getPreviewElements"(): $List<($ICraftingPreviewElement)>
 "isOk"(): boolean
}

export namespace $ICalculationResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICalculationResult$Type = ($ICalculationResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICalculationResult_ = $ICalculationResult$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$INetwork, $INetwork$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetwork"

export interface $INetworkItem {

 "getPlayer"(): $Player
 "onOpen"(arg0: $INetwork$Type): boolean
 "drainEnergy"(arg0: integer): void
}

export namespace $INetworkItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkItem$Type = ($INetworkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkItem_ = $INetworkItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/config/$RedstoneMode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRedstoneConfigurable, $IRedstoneConfigurable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IRedstoneConfigurable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RedstoneMode extends $Enum<($RedstoneMode)> {
static readonly "IGNORE": $RedstoneMode
static readonly "HIGH": $RedstoneMode
static readonly "LOW": $RedstoneMode


public static "values"(): ($RedstoneMode)[]
public static "valueOf"(arg0: string): $RedstoneMode
public "write"(arg0: $CompoundTag$Type): void
public static "read"(arg0: $CompoundTag$Type): $RedstoneMode
public "isEnabled"(arg0: boolean): boolean
public static "createParameter"<T extends ($BlockEntity) & ($IRedstoneConfigurable)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "getById"(arg0: integer): $RedstoneMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneMode$Type = (("high") | ("low") | ("ignore")) | ($RedstoneMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneMode_ = $RedstoneMode$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$DiskManipulatorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DiskManipulatorBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskManipulatorBlock$Type = ($DiskManipulatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskManipulatorBlock_ = $DiskManipulatorBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$UpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UpgradeItem$Type, $UpgradeItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/$UpgradeItem$Type"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $UpgradeItem$Type$Type)

public "getType"(): $UpgradeItem$Type
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
get "type"(): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$ProcessorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ProcessorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessorItem$Type = ($ProcessorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessorItem_ = $ProcessorItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$QuartzEnrichedIronBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $QuartzEnrichedIronBlock extends $BaseBlock {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzEnrichedIronBlock$Type = ($QuartzEnrichedIronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzEnrichedIronBlock_ = $QuartzEnrichedIronBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICraftingRequestInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingRequestInfo {

 "getItem"(): $ItemStack
 "getFluid"(): $FluidStack
 "writeToNbt"(): $CompoundTag
}

export namespace $ICraftingRequestInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingRequestInfo$Type = ($ICraftingRequestInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingRequestInfo_ = $ICraftingRequestInfo$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InventoryListener, $InventoryListener$Type} from "packages/com/refinedmods/refinedstorage/inventory/listener/$InventoryListener"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"

export class $FluidInventory {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "isEmpty"(): boolean
public "addListener"(arg0: $InventoryListener$Type<($FluidInventory$Type)>): $FluidInventory
public "getFluid"(arg0: integer): $FluidStack
public "getSlots"(): integer
public "getMaxAmount"(): integer
public "getFluids"(): ($FluidStack)[]
public "writeToNbt"(): $CompoundTag
public "onChanged"(arg0: integer): void
public "readFromNbt"(arg0: $CompoundTag$Type): void
public "setFluid"(arg0: integer, arg1: $FluidStack$Type): void
get "empty"(): boolean
get "slots"(): integer
get "maxAmount"(): integer
get "fluids"(): ($FluidStack)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInventory$Type = ($FluidInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInventory_ = $FluidInventory$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ExternalStorageBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$CableBlock, $CableBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$CableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExternalStorageBlock extends $CableBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExternalStorageBlock$Type = ($ExternalStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExternalStorageBlock_ = $ExternalStorageBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$CraftingMonitorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CraftingMonitorBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMonitorBlock$Type = ($CraftingMonitorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMonitorBlock_ = $CraftingMonitorBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$BaseBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BaseBlock$Type, arg1: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
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
declare module "packages/com/refinedmods/refinedstorage/item/$StorageDiskItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStorageType, $ItemStorageType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/storage/$ItemStorageType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IStorageDiskProvider, $IStorageDiskProvider$Type} from "packages/com/refinedmods/refinedstorage/api/storage/disk/$IStorageDiskProvider"
import {$StorageType, $StorageType$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$StorageType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StorageDiskItem extends $Item implements $IStorageDiskProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ItemStorageType$Type)

public "getId"(arg0: $ItemStack$Type): $UUID
public "getType"(): $StorageType
public "getCapacity"(arg0: $ItemStack$Type): integer
public "isValid"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setId"(arg0: $ItemStack$Type, arg1: $UUID$Type): void
public "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
get "type"(): $StorageType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageDiskItem$Type = ($StorageDiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageDiskItem_ = $StorageDiskItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$EnergyBlockItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$BaseBlockItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyBlockItem extends $BaseBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyBlockItem$Type = ($EnergyBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyBlockItem_ = $EnergyBlockItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/craftingmonitor/$ICraftingMonitorElement" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IElementDrawers, $IElementDrawers$Type} from "packages/com/refinedmods/refinedstorage/api/render/$IElementDrawers"

export interface $ICraftingMonitorElement {

 "merge"(arg0: $ICraftingMonitorElement$Type): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "getId"(): $ResourceLocation
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IElementDrawers$Type): void
 "elementHashCode"(): integer
 "getBaseId"(): $ResourceLocation
 "getTooltip"(): $List<($Component)>
 "baseElementHashCode"(): integer
}

export namespace $ICraftingMonitorElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingMonitorElement$Type = ($ICraftingMonitorElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingMonitorElement_ = $ICraftingMonitorElement$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WirelessCraftingMonitorItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WirelessCraftingMonitorItem$Type extends $Enum<($WirelessCraftingMonitorItem$Type)> {
static readonly "NORMAL": $WirelessCraftingMonitorItem$Type
static readonly "CREATIVE": $WirelessCraftingMonitorItem$Type


public static "values"(): ($WirelessCraftingMonitorItem$Type)[]
public static "valueOf"(arg0: string): $WirelessCraftingMonitorItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingMonitorItem$Type$Type = (("normal") | ("creative")) | ($WirelessCraftingMonitorItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessCraftingMonitorItem$Type_ = $WirelessCraftingMonitorItem$Type$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/util/$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Action extends $Enum<($Action)> {
static readonly "PERFORM": $Action
static readonly "SIMULATE": $Action


public static "values"(): ($Action)[]
public static "valueOf"(arg0: string): $Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Action$Type = (("perform") | ("simulate")) | ($Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Action_ = $Action$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec$Builder" {
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"

export class $BlockEntitySynchronizationSpec$Builder {

constructor()

public "build"(): $BlockEntitySynchronizationSpec
public "addParameter"(arg0: $BlockEntitySynchronizationParameter$Type<(any), (any)>): $BlockEntitySynchronizationSpec$Builder
public "addWatchedParameter"(arg0: $BlockEntitySynchronizationParameter$Type<(any), (any)>): $BlockEntitySynchronizationSpec$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySynchronizationSpec$Builder$Type = ($BlockEntitySynchronizationSpec$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySynchronizationSpec$Builder_ = $BlockEntitySynchronizationSpec$Builder$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ColoredNetworkBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredNetworkBlock$Type = ($ColoredNetworkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredNetworkBlock_ = $ColoredNetworkBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$MachineCasingBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $MachineCasingBlock extends $BaseBlock {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineCasingBlock$Type = ($MachineCasingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineCasingBlock_ = $MachineCasingBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WirelessFluidGridItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NetworkItem, $NetworkItem$Type} from "packages/com/refinedmods/refinedstorage/item/$NetworkItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$WirelessFluidGridItem$Type, $WirelessFluidGridItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/$WirelessFluidGridItem$Type"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export class $WirelessFluidGridItem extends $NetworkItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WirelessFluidGridItem$Type$Type)

public "getType"(): $WirelessFluidGridItem$Type
public static "getSize"(arg0: $ItemStack$Type): integer
public static "getTabPage"(arg0: $ItemStack$Type): integer
public static "getTabSelected"(arg0: $ItemStack$Type): integer
public "provide"(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem
public static "getSortingDirection"(arg0: $ItemStack$Type): integer
public static "getSearchBoxMode"(arg0: $ItemStack$Type): integer
public static "getSortingType"(arg0: $ItemStack$Type): integer
get "type"(): $WirelessFluidGridItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessFluidGridItem$Type = ($WirelessFluidGridItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessFluidGridItem_ = $WirelessFluidGridItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/$BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockEntitySynchronizationManager, $BlockEntitySynchronizationManager$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationManager"

export class $BaseBlockEntity extends $BlockEntity {


public "getUpdateTag"(): $CompoundTag
public "onChunkUnloaded"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "setRemoved"(): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "setChanged"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "writeUpdate"(arg0: $CompoundTag$Type): $CompoundTag
public "readUpdate"(arg0: $CompoundTag$Type): void
public "getDataManager"(): $BlockEntitySynchronizationManager
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "dataManager"(): $BlockEntitySynchronizationManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WirelessGridItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WirelessGridItem$Type extends $Enum<($WirelessGridItem$Type)> {
static readonly "NORMAL": $WirelessGridItem$Type
static readonly "CREATIVE": $WirelessGridItem$Type


public static "values"(): ($WirelessGridItem$Type)[]
public static "valueOf"(arg0: string): $WirelessGridItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessGridItem$Type$Type = (("normal") | ("creative")) | ($WirelessGridItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessGridItem$Type_ = $WirelessGridItem$Type$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/recipe/$UpgradeWithEnchantedBookRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$UpgradeWithEnchantedBookRecipe, $UpgradeWithEnchantedBookRecipe$Type} from "packages/com/refinedmods/refinedstorage/recipe/$UpgradeWithEnchantedBookRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $UpgradeWithEnchantedBookRecipeSerializer implements $RecipeSerializer<($UpgradeWithEnchantedBookRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $UpgradeWithEnchantedBookRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $UpgradeWithEnchantedBookRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $UpgradeWithEnchantedBookRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $UpgradeWithEnchantedBookRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWithEnchantedBookRecipeSerializer$Type = ($UpgradeWithEnchantedBookRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeWithEnchantedBookRecipeSerializer_ = $UpgradeWithEnchantedBookRecipeSerializer$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/util/$StackListEntry" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export class $StackListEntry<T> {

constructor(arg0: T)
constructor(arg0: $UUID$Type, arg1: T)

public "getId"(): $UUID
public "getStack"(): T
get "id"(): $UUID
get "stack"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackListEntry$Type<T> = ($StackListEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackListEntry_<T> = $StackListEntry$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ImporterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$CableBlock, $CableBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$CableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ImporterBlock extends $CableBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImporterBlock$Type = ($ImporterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImporterBlock_ = $ImporterBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/disk/$IStorageDiskContainerContext" {
import {$AccessType, $AccessType$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$AccessType"

export interface $IStorageDiskContainerContext {

 "getAccessType"(): $AccessType

(): $AccessType
}

export namespace $IStorageDiskContainerContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageDiskContainerContext$Type = ($IStorageDiskContainerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageDiskContainerContext_ = $IStorageDiskContainerContext$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/storage/$ItemStorageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemStorageType extends $Enum<($ItemStorageType)> {
static readonly "ONE_K": $ItemStorageType
static readonly "FOUR_K": $ItemStorageType
static readonly "SIXTEEN_K": $ItemStorageType
static readonly "SIXTY_FOUR_K": $ItemStorageType
static readonly "CREATIVE": $ItemStorageType


public "getName"(): string
public static "values"(): ($ItemStorageType)[]
public static "valueOf"(arg0: string): $ItemStorageType
public "getCapacity"(): integer
get "name"(): string
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStorageType$Type = (("four_k") | ("sixty_four_k") | ("one_k") | ("sixteen_k") | ("creative")) | ($ItemStorageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStorageType_ = $ItemStorageType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeVisitor" {
import {$INetworkNodeVisitor$Operator, $INetworkNodeVisitor$Operator$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeVisitor$Operator"

export interface $INetworkNodeVisitor {

 "visit"(arg0: $INetworkNodeVisitor$Operator$Type): void

(arg0: $INetworkNodeVisitor$Operator$Type): void
}

export namespace $INetworkNodeVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNodeVisitor$Type = ($INetworkNodeVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNodeVisitor_ = $INetworkNodeVisitor$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$Cover" {
import {$CoverType, $CoverType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Cover {

constructor(arg0: $ItemStack$Type, arg1: $CoverType$Type)

public "getType"(): $CoverType
public "getStack"(): $ItemStack
get "type"(): $CoverType
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cover$Type = ($Cover);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cover_ = $Cover$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/config/$IRedstoneConfigurable" {
import {$RedstoneMode, $RedstoneMode$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$RedstoneMode"

export interface $IRedstoneConfigurable {

 "getRedstoneMode"(): $RedstoneMode
 "setRedstoneMode"(arg0: $RedstoneMode$Type): void
}

export namespace $IRedstoneConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneConfigurable$Type = ($IRedstoneConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRedstoneConfigurable_ = $IRedstoneConfigurable$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$CoreItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoreItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreItem$Type = ($CoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreItem_ = $CoreItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/craftingmonitor/$ICraftingMonitorListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICraftingMonitorListener {

 "onAttached"(): void
 "onChanged"(): void
}

export namespace $ICraftingMonitorListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingMonitorListener$Type = ($ICraftingMonitorListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingMonitorListener_ = $ICraftingMonitorListener$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemProvider" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export interface $INetworkItemProvider {

 "provide"(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem

(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem
}

export namespace $INetworkItemProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkItemProvider$Type = ($INetworkItemProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkItemProvider_ = $INetworkItemProvider$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$DestructorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$CableBlock, $CableBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$CableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DestructorBlock extends $CableBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestructorBlock$Type = ($DestructorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestructorBlock_ = $DestructorBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$StoragePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStorageType, $ItemStorageType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/storage/$ItemStorageType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StoragePartItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getByType"(arg0: $ItemStorageType$Type): $StoragePartItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoragePartItem$Type = ($StoragePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoragePartItem_ = $StoragePartItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$WirelessTransmitterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WirelessTransmitterBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTransmitterBlock$Type = ($WirelessTransmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessTransmitterBlock_ = $WirelessTransmitterBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPatternContext" {
import {$ICraftingPatternContainer, $ICraftingPatternContainer$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CraftingPatternContext {

constructor(arg0: $ICraftingPatternContainer$Type, arg1: $ItemStack$Type)

public "getStack"(): $ItemStack
public "getContainer"(): $ICraftingPatternContainer
get "stack"(): $ItemStack
get "container"(): $ICraftingPatternContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingPatternContext$Type = ($CraftingPatternContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingPatternContext_ = $CraftingPatternContext$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$BaseBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlock extends $Block {
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


public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
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
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$CalculationResultType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CalculationResultType extends $Enum<($CalculationResultType)> {
static readonly "OK": $CalculationResultType
static readonly "MISSING": $CalculationResultType
static readonly "NO_PATTERN": $CalculationResultType
static readonly "TOO_COMPLEX": $CalculationResultType
static readonly "RECURSIVE": $CalculationResultType


public static "values"(): ($CalculationResultType)[]
public static "valueOf"(arg0: string): $CalculationResultType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalculationResultType$Type = (("no_pattern") | ("missing") | ("too_complex") | ("ok") | ("recursive")) | ($CalculationResultType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CalculationResultType_ = $CalculationResultType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$CrafterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CrafterBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterBlock$Type = ($CrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrafterBlock_ = $CrafterBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Action, $Action$Type} from "packages/com/refinedmods/refinedstorage/api/util/$Action"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICraftingPatternContainer {

 "isLocked"(): boolean
 "unlock"(): void
 "getName"(): $Component
 "getPosition"(): $BlockPos
 "getMaximumSuccessfulCraftingUpdates"(): integer
 "getPatternInventory"(): $IItemHandlerModifiable
 "getUuid"(): $UUID
 "getUpdateInterval"(): integer
 "getRootContainer"(): $ICraftingPatternContainer
 "getCustomName"(): $Component
 "getDirection"(): $Direction
 "getFacingBlockEntity"(): $BlockEntity
 "insertFluidsIntoInventory"(arg0: $Collection$Type<($FluidStack$Type)>, arg1: $Action$Type): boolean
 "getConnectedFluidInventory"(): $IFluidHandler
 "insertItemsIntoInventory"(arg0: $Collection$Type<($ItemStack$Type)>, arg1: $Action$Type): boolean
 "getConnectedBlockEntity"(): $BlockEntity
 "hasConnectedFluidInventory"(): boolean
 "hasConnectedInventory"(): boolean
 "onUsedForProcessing"(): void
 "getConnectedInventory"(): $IItemHandler
 "getPatterns"(): $List<($ICraftingPattern)>
}

export namespace $ICraftingPatternContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPatternContainer$Type = ($ICraftingPatternContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingPatternContainer_ = $ICraftingPatternContainer$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$NetworkCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetworkCardItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getDimension"(arg0: $ItemStack$Type): $ResourceKey<($Level)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getReceiver"(arg0: $ItemStack$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkCardItem$Type = ($NetworkCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkCardItem_ = $NetworkCardItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/node/$ICoverable" {
import {$CoverManager, $CoverManager$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverManager"

export interface $ICoverable {

 "getCoverManager"(): $CoverManager

(): $CoverManager
}

export namespace $ICoverable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICoverable$Type = ($ICoverable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICoverable_ = $ICoverable$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/cache/$IStorageCacheListener" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$StackListResult, $StackListResult$Type} from "packages/com/refinedmods/refinedstorage/api/util/$StackListResult"

export interface $IStorageCacheListener<T> {

 "onAttached"(): void
 "onInvalidated"(): void
 "onChangedBulk"(arg0: $List$Type<($StackListResult$Type<(T)>)>): void
 "onChanged"(arg0: $StackListResult$Type<(T)>): void
}

export namespace $IStorageCacheListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageCacheListener$Type<T> = ($IStorageCacheListener<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageCacheListener_<T> = $IStorageCacheListener$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$ControllerBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ControllerBlock, $ControllerBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ControllerBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$EnergyBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ControllerBlockItem extends $EnergyBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ControllerBlock$Type, arg1: $DyeColor$Type, arg2: $Component$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockItem$Type = ($ControllerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockItem_ = $ControllerBlockItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$CoverItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoverItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getItem"(arg0: $ItemStack$Type): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoverItem$Type = ($CoverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoverItem_ = $CoverItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$CrafterManagerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CrafterManagerBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterManagerBlock$Type = ($CrafterManagerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrafterManagerBlock_ = $CrafterManagerBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeGraphEntry" {
import {$INetworkNode, $INetworkNode$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNode"

export interface $INetworkNodeGraphEntry {

 "getNode"(): $INetworkNode

(): $INetworkNode
}

export namespace $INetworkNodeGraphEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNodeGraphEntry$Type = ($INetworkNodeGraphEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNodeGraphEntry_ = $INetworkNodeGraphEntry$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/$AccessType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessType extends $Enum<($AccessType)> {
static readonly "INSERT_EXTRACT": $AccessType
static readonly "INSERT": $AccessType
static readonly "EXTRACT": $AccessType


public static "values"(): ($AccessType)[]
public static "valueOf"(arg0: string): $AccessType
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessType$Type = (("extract") | ("insert") | ("insert_extract")) | ($AccessType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessType_ = $AccessType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/tracker/$StorageTrackerEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StorageTrackerEntry {

constructor(arg0: long, arg1: string)

public "getName"(): string
public "getTime"(): long
get "name"(): string
get "time"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTrackerEntry$Type = ($StorageTrackerEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTrackerEntry_ = $StorageTrackerEntry$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/$StorageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StorageType extends $Enum<($StorageType)> {
static readonly "ITEM": $StorageType
static readonly "FLUID": $StorageType


public static "values"(): ($StorageType)[]
public static "valueOf"(arg0: string): $StorageType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageType$Type = (("item") | ("fluid")) | ($StorageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageType_ = $StorageType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$ColoredBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$BaseBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColoredBlockItem extends $BaseBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BaseBlock$Type, arg1: $Item$Properties$Type, arg2: $DyeColor$Type, arg3: $Component$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredBlockItem$Type = ($ColoredBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredBlockItem_ = $ColoredBlockItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$DetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DetectorBlock extends $ColoredNetworkBlock {
static readonly "POWERED": $BooleanProperty
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$Type = ($DetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock_ = $DetectorBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$NetworkType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $NetworkType extends $Enum<($NetworkType)> {
static readonly "NORMAL": $NetworkType
static readonly "CREATIVE": $NetworkType


public static "values"(): ($NetworkType)[]
public static "valueOf"(arg0: string): $NetworkType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkType$Type = (("normal") | ("creative")) | ($NetworkType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkType_ = $NetworkType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$PortableGridBlockItem" {
import {$PortableGridBlockItem$Type, $PortableGridBlockItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$PortableGridBlockItem$Type"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$EnergyBlockItem, $EnergyBlockItem$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$EnergyBlockItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PortableGridBlockItem extends $EnergyBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $PortableGridBlockItem$Type$Type)

public "getType"(): $PortableGridBlockItem$Type
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "type"(): $PortableGridBlockItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableGridBlockItem$Type = ($PortableGridBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableGridBlockItem_ = $PortableGridBlockItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$FluidStorageBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidStorageType, $FluidStorageType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/storage/$FluidStorageType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidStorageBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor(arg0: $FluidStorageType$Type)

public "getType"(): $FluidStorageType
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
get "type"(): $FluidStorageType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorageBlock$Type = ($FluidStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorageBlock_ = $FluidStorageBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$ProcessorBindingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ProcessorBindingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessorBindingItem$Type = ($ProcessorBindingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessorBindingItem_ = $ProcessorBindingItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy" {
import {$INetworkNode, $INetworkNode$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNode"

export interface $INetworkNodeProxy<T extends $INetworkNode> {

 "getNode"(): T

(): T
}

export namespace $INetworkNodeProxy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNodeProxy$Type<T> = ($INetworkNodeProxy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNodeProxy_<T> = $INetworkNodeProxy$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$HollowCoverItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CoverItem, $CoverItem$Type} from "packages/com/refinedmods/refinedstorage/item/$CoverItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HollowCoverItem extends $CoverItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HollowCoverItem$Type = ($HollowCoverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HollowCoverItem_ = $HollowCoverItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/grid/handler/$IItemGridHandler" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemGridHandler {

 "onCraftingRequested"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: integer): void
 "onCraftingPreviewRequested"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: integer, arg3: boolean): void
 "onExtract"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: integer, arg3: integer): void
 "onExtract"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: integer, arg3: integer): void
 "onInsert"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "onInventoryScroll"(arg0: $ServerPlayer$Type, arg1: integer, arg2: boolean, arg3: boolean): void
 "onGridScroll"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: boolean, arg3: boolean): void
 "onInsertHeldItem"(arg0: $ServerPlayer$Type, arg1: boolean): void
 "onCraftingCancelRequested"(arg0: $ServerPlayer$Type, arg1: $UUID$Type): void
}

export namespace $IItemGridHandler {
const EXTRACT_HALF: integer
const EXTRACT_SINGLE: integer
const EXTRACT_SHIFT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemGridHandler$Type = ($IItemGridHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemGridHandler_ = $IItemGridHandler$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export interface $INetworkItemManager {

 "close"(arg0: $Player$Type): void
 "open"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $PlayerSlot$Type): void
 "getItem"(arg0: $Player$Type): $INetworkItem
 "drainEnergy"(arg0: $Player$Type, arg1: integer): void
}

export namespace $INetworkItemManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkItemManager$Type = ($INetworkItemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkItemManager_ = $INetworkItemManager$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICraftingTask" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICraftingRequestInfo, $ICraftingRequestInfo$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICraftingRequestInfo"
import {$ICraftingMonitorElement, $ICraftingMonitorElement$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/craftingmonitor/$ICraftingMonitorElement"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingTask {

 "update"(): boolean
 "start"(): void
 "getId"(): $UUID
 "getPattern"(): $ICraftingPattern
 "getStartTime"(): long
 "getQuantity"(): integer
 "onTrackedInsert"(arg0: $FluidStack$Type, arg1: integer): integer
 "onTrackedInsert"(arg0: $ItemStack$Type, arg1: integer): integer
 "onCancelled"(): void
 "writeToNbt"(arg0: $CompoundTag$Type): $CompoundTag
 "getCompletionPercentage"(): integer
 "getRequested"(): $ICraftingRequestInfo
 "getCraftingMonitorElements"(): $List<($ICraftingMonitorElement)>
}

export namespace $ICraftingTask {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingTask$Type = ($ICraftingTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingTask_ = $ICraftingTask$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/container/slot/$BaseSlot" {
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$SlotItemHandler, $SlotItemHandler$Type} from "packages/net/minecraftforge/items/$SlotItemHandler"

export class $BaseSlot extends $SlotItemHandler {
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: integer)

public "isActive"(): boolean
public "setEnableHandler"(arg0: $BooleanSupplier$Type): $BaseSlot
get "active"(): boolean
set "enableHandler"(value: $BooleanSupplier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSlot$Type = ($BaseSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSlot_ = $BaseSlot$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/inventory/listener/$InventoryListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InventoryListener<T> {

 "onChanged"(arg0: T, arg1: integer, arg2: boolean): void

(arg0: T, arg1: integer, arg2: boolean): void
}

export namespace $InventoryListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryListener$Type<T> = ($InventoryListener<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryListener_<T> = $InventoryListener$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$PortableGridBlockItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PortableGridBlockItem$Type extends $Enum<($PortableGridBlockItem$Type)> {
static readonly "NORMAL": $PortableGridBlockItem$Type
static readonly "CREATIVE": $PortableGridBlockItem$Type


public static "values"(): ($PortableGridBlockItem$Type)[]
public static "valueOf"(arg0: string): $PortableGridBlockItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableGridBlockItem$Type$Type = (("normal") | ("creative")) | ($PortableGridBlockItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableGridBlockItem$Type_ = $PortableGridBlockItem$Type$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WirelessCraftingMonitorItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WirelessCraftingMonitorItem$Type, $WirelessCraftingMonitorItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/$WirelessCraftingMonitorItem$Type"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NetworkItem, $NetworkItem$Type} from "packages/com/refinedmods/refinedstorage/item/$NetworkItem"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export class $WirelessCraftingMonitorItem extends $NetworkItem {
static readonly "NBT_TAB_SELECTED": string
static readonly "NBT_TAB_PAGE": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WirelessCraftingMonitorItem$Type$Type)

public "getType"(): $WirelessCraftingMonitorItem$Type
public static "setTabPage"(arg0: $ItemStack$Type, arg1: integer): void
public static "getTabPage"(arg0: $ItemStack$Type): integer
public static "setTabSelected"(arg0: $ItemStack$Type, arg1: $Optional$Type<($UUID$Type)>): void
public static "getTabSelected"(arg0: $ItemStack$Type): $Optional<($UUID)>
public "provide"(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem
get "type"(): $WirelessCraftingMonitorItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingMonitorItem$Type = ($WirelessCraftingMonitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessCraftingMonitorItem_ = $WirelessCraftingMonitorItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$CableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $CableBlock extends $NetworkNodeBlock implements $SimpleWaterloggedBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor()

public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "hasVisualConnectionOnSide"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlock$Type = ($CableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlock_ = $CableBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/grid/$GridType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GridType extends $Enum<($GridType)> implements $StringRepresentable {
static readonly "NORMAL": $GridType
static readonly "CRAFTING": $GridType
static readonly "PATTERN": $GridType
static readonly "FLUID": $GridType


public "toString"(): string
public static "values"(): ($GridType)[]
public static "valueOf"(arg0: string): $GridType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridType$Type = (("normal") | ("crafting") | ("pattern") | ("fluid")) | ($GridType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridType_ = $GridType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$NetworkReceiverBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NetworkReceiverBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkReceiverBlock$Type = ($NetworkReceiverBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkReceiverBlock_ = $NetworkReceiverBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$SiliconItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SiliconItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SiliconItem$Type = ($SiliconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SiliconItem_ = $SiliconItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/security/$ISecurityManager" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Permission, $Permission$Type} from "packages/com/refinedmods/refinedstorage/api/network/security/$Permission"

export interface $ISecurityManager {

 "invalidate"(): void
 "hasPermission"(arg0: $Permission$Type, arg1: $Player$Type): boolean
}

export namespace $ISecurityManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityManager$Type = ($ISecurityManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityManager_ = $ISecurityManager$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec" {
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntitySynchronizationSpec$Builder, $BlockEntitySynchronizationSpec$Builder$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec$Builder"
import {$List, $List$Type} from "packages/java/util/$List"

export class $BlockEntitySynchronizationSpec {

constructor(arg0: $List$Type<($BlockEntitySynchronizationParameter$Type)>, arg1: $List$Type<($BlockEntitySynchronizationParameter$Type)>)

public static "builder"(): $BlockEntitySynchronizationSpec$Builder
public "getParameters"(): $List<($BlockEntitySynchronizationParameter)>
public "getWatchedParameters"(): $List<($BlockEntitySynchronizationParameter)>
get "parameters"(): $List<($BlockEntitySynchronizationParameter)>
get "watchedParameters"(): $List<($BlockEntitySynchronizationParameter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySynchronizationSpec$Type = ($BlockEntitySynchronizationSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySynchronizationSpec_ = $BlockEntitySynchronizationSpec$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/container/$BaseContainerMenu" {
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$BaseBlockEntity"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidFilterSlot, $FluidFilterSlot$Type} from "packages/com/refinedmods/refinedstorage/container/slot/filter/$FluidFilterSlot"

export class $BaseContainerMenu extends $AbstractContainerMenu {
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "stateId": integer
 "containerId": integer
readonly "containerListeners": $List<($ContainerListener)>


public "canTakeItemForPickAll"(arg0: $ItemStack$Type, arg1: $Slot$Type): boolean
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$Type, arg3: $Player$Type): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "getPlayer"(): $Player
public "broadcastChanges"(): void
public "stillValid"(arg0: $Player$Type): boolean
public "removed"(arg0: $Player$Type): void
public "getBlockEntity"(): $BaseBlockEntity
public "getFluidSlots"(): $List<($FluidFilterSlot)>
get "player"(): $Player
get "blockEntity"(): $BaseBlockEntity
get "fluidSlots"(): $List<($FluidFilterSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerMenu$Type = ($BaseContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainerMenu_ = $BaseContainerMenu$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$FluidStorageBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FluidStorageBlock, $FluidStorageBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$FluidStorageBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$BaseBlockItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidStorageBlockItem extends $BaseBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $FluidStorageBlock$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorageBlockItem$Type = ($FluidStorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorageBlockItem_ = $FluidStorageBlockItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationManager" {
import {$BlockEntitySynchronizationWatcher, $BlockEntitySynchronizationWatcher$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationWatcher"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"

export class $BlockEntitySynchronizationManager {

constructor(arg0: $BlockEntity$Type, arg1: $BlockEntitySynchronizationSpec$Type)

public "getParameters"(): $List<($BlockEntitySynchronizationParameter)>
public static "setParameter"(arg0: $BlockEntitySynchronizationParameter$Type<(any), (any)>, arg1: any): void
public static "getParameter"(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(any), (any)>
public "getWatchedParameters"(): $List<($BlockEntitySynchronizationParameter)>
public "addWatcher"(arg0: $BlockEntitySynchronizationWatcher$Type): void
public "removeWatcher"(arg0: $BlockEntitySynchronizationWatcher$Type): void
public "sendParameterToWatchers"(arg0: $BlockEntitySynchronizationParameter$Type<(any), (any)>): void
public "getBlockEntity"(): $BlockEntity
public static "registerParameter"(arg0: $BlockEntitySynchronizationParameter$Type<(any), (any)>): void
get "parameters"(): $List<($BlockEntitySynchronizationParameter)>
get "watchedParameters"(): $List<($BlockEntitySynchronizationParameter)>
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySynchronizationManager$Type = ($BlockEntitySynchronizationManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySynchronizationManager_ = $BlockEntitySynchronizationManager$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WirelessGridItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WirelessGridItem$Type, $WirelessGridItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/$WirelessGridItem$Type"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NetworkItem, $NetworkItem$Type} from "packages/com/refinedmods/refinedstorage/item/$NetworkItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export class $WirelessGridItem extends $NetworkItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WirelessGridItem$Type$Type)

public "getType"(): $WirelessGridItem$Type
public static "getSize"(arg0: $ItemStack$Type): integer
public static "getTabPage"(arg0: $ItemStack$Type): integer
public static "getTabSelected"(arg0: $ItemStack$Type): integer
public "provide"(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem
public static "getSortingDirection"(arg0: $ItemStack$Type): integer
public static "getSearchBoxMode"(arg0: $ItemStack$Type): integer
public static "getSortingType"(arg0: $ItemStack$Type): integer
public static "getViewType"(arg0: $ItemStack$Type): integer
get "type"(): $WirelessGridItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessGridItem$Type = ($WirelessGridItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessGridItem_ = $WirelessGridItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/inventory/item/$BaseItemHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$InventoryListener, $InventoryListener$Type} from "packages/com/refinedmods/refinedstorage/inventory/listener/$InventoryListener"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseItemHandler extends $ItemStackHandler {

constructor(arg0: integer)

public "isEmpty"(): boolean
public "addListener"(arg0: $InventoryListener$Type<($BaseItemHandler$Type)>): $BaseItemHandler
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "setReading"(arg0: boolean): void
public "addValidator"(arg0: $Predicate$Type<($ItemStack$Type)>): $BaseItemHandler
public "onChanged"(arg0: integer): void
get "empty"(): boolean
set "reading"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItemHandler$Type = ($BaseItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItemHandler_ = $BaseItemHandler$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$NetworkTransmitterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NetworkTransmitterBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkTransmitterBlock$Type = ($NetworkTransmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkTransmitterBlock_ = $NetworkTransmitterBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$StorageBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStorageType, $ItemStorageType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/storage/$ItemStorageType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StorageBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor(arg0: $ItemStorageType$Type)

public "getType"(): $ItemStorageType
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
get "type"(): $ItemStorageType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlock$Type = ($StorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlock_ = $StorageBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/$IStorage" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$AccessType, $AccessType$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$AccessType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Action, $Action$Type} from "packages/com/refinedmods/refinedstorage/api/util/$Action"

export interface $IStorage<T> {

 "extract"(arg0: T, arg1: integer, arg2: integer, arg3: $Action$Type): T
 "insert"(arg0: T, arg1: integer, arg2: $Action$Type): T
 "getPriority"(): integer
 "getAccessType"(): $AccessType
 "getStored"(): integer
 "getStacks"(): $Collection<(T)>
 "getCacheDelta"(arg0: integer, arg1: integer, arg2: T): integer
}

export namespace $IStorage {
const COMPARATOR: $Comparator<($IStorage<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorage$Type<T> = ($IStorage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorage_<T> = $IStorage$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeVisitor$Operator" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Action, $Action$Type} from "packages/com/refinedmods/refinedstorage/api/util/$Action"

export interface $INetworkNodeVisitor$Operator {

 "apply"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
 "getAction"(): $Action
}

export namespace $INetworkNodeVisitor$Operator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNodeVisitor$Operator$Type = ($INetworkNodeVisitor$Operator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNodeVisitor$Operator_ = $INetworkNodeVisitor$Operator$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$INetwork, $INetwork$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetwork"

export interface $INetworkNode {

 "getOwner"(): $UUID
 "update"(): void
 "write"(arg0: $CompoundTag$Type): $CompoundTag
 "getId"(): $ResourceLocation
 "isActive"(): boolean
 "setOwner"(arg0: $UUID$Type): void
 "getPos"(): $BlockPos
 "getLevel"(): $Level
 "canReceive"(arg0: $Direction$Type): boolean
 "markDirty"(): void
 "getItemStack"(): $ItemStack
 "getNetwork"(): $INetwork
 "onDisconnected"(arg0: $INetwork$Type): void
 "onConnected"(arg0: $INetwork$Type): void
 "canConduct"(arg0: $Direction$Type): boolean
 "getEnergyUsage"(): integer
}

export namespace $INetworkNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNode$Type = ($INetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNode_ = $INetworkNode$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/render/$IElementDrawer" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IElementDrawer<T> {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: T): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: T): void
}

export namespace $IElementDrawer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElementDrawer$Type<T> = ($IElementDrawer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElementDrawer_<T> = $IElementDrawer$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorageaddons/item/$WirelessCraftingGridItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WirelessCraftingGridItem$Type, $WirelessCraftingGridItem$Type$Type} from "packages/com/refinedmods/refinedstorageaddons/item/$WirelessCraftingGridItem$Type"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NetworkItem, $NetworkItem$Type} from "packages/com/refinedmods/refinedstorage/item/$NetworkItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export class $WirelessCraftingGridItem extends $NetworkItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WirelessCraftingGridItem$Type$Type)

public "getType"(): $WirelessCraftingGridItem$Type
public "provide"(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem
get "type"(): $WirelessCraftingGridItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingGridItem$Type = ($WirelessCraftingGridItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessCraftingGridItem_ = $WirelessCraftingGridItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $NetworkNodeBlock extends $BaseBlock implements $EntityBlock {
static readonly "CONNECTED": $BooleanProperty
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


public "hasConnectedState"(): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkNodeBlock$Type = ($NetworkNodeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkNodeBlock_ = $NetworkNodeBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$UpgradeItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeItem$Type extends $Enum<($UpgradeItem$Type)> {
static readonly "NORMAL": $UpgradeItem$Type
static readonly "SPEED": $UpgradeItem$Type
static readonly "RANGE": $UpgradeItem$Type
static readonly "CRAFTING": $UpgradeItem$Type
static readonly "STACK": $UpgradeItem$Type
static readonly "SILK_TOUCH": $UpgradeItem$Type
static readonly "FORTUNE_1": $UpgradeItem$Type
static readonly "FORTUNE_2": $UpgradeItem$Type
static readonly "FORTUNE_3": $UpgradeItem$Type
static readonly "REGULATOR": $UpgradeItem$Type


public "getName"(): string
public static "values"(): ($UpgradeItem$Type)[]
public static "valueOf"(arg0: string): $UpgradeItem$Type
public "getFortuneLevel"(): integer
public "getEnergyUsage"(): integer
get "name"(): string
get "fortuneLevel"(): integer
get "energyUsage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type$Type = (("fortune_1") | ("normal") | ("stack") | ("crafting") | ("fortune_3") | ("fortune_2") | ("range") | ("silk_touch") | ("regulator") | ("speed")) | ($UpgradeItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Type_ = $UpgradeItem$Type$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$AllowedTagList" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $AllowedTagList {

constructor(arg0: $Runnable$Type, arg1: integer)

public "getAllowedFluidTags"(): $List<($Set<($ResourceLocation)>)>
public "setAllowedFluidTags"(arg0: integer, arg1: $Set$Type<($ResourceLocation$Type)>): void
public "setAllowedFluidTags"(arg0: $List$Type<($Set$Type<($ResourceLocation$Type)>)>): void
public "getAllowedItemTags"(): $List<($Set<($ResourceLocation)>)>
public "writeToNbt"(): $CompoundTag
public "readFromNbt"(arg0: $CompoundTag$Type): void
public "clearFluidTags"(arg0: integer): void
public "clearItemTags"(arg0: integer): void
public "setAllowedItemTags"(arg0: $List$Type<($Set$Type<($ResourceLocation$Type)>)>): void
public "setAllowedItemTags"(arg0: integer, arg1: $Set$Type<($ResourceLocation$Type)>): void
get "allowedFluidTags"(): $List<($Set<($ResourceLocation)>)>
set "allowedFluidTags"(value: $List$Type<($Set$Type<($ResourceLocation$Type)>)>)
get "allowedItemTags"(): $List<($Set<($ResourceLocation)>)>
set "allowedItemTags"(value: $List$Type<($Set$Type<($ResourceLocation$Type)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllowedTagList$Type = ($AllowedTagList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllowedTagList_ = $AllowedTagList$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/render/$IElementDrawers" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IElementDrawer, $IElementDrawer$Type} from "packages/com/refinedmods/refinedstorage/api/render/$IElementDrawer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IElementDrawers {

 "getItemDrawer"(): $IElementDrawer<($ItemStack)>
 "getOverlayDrawer"(): $IElementDrawer<(integer)>
 "getStringDrawer"(): $IElementDrawer<(string)>
 "getFluidDrawer"(): $IElementDrawer<($FluidStack)>
 "getErrorDrawer"(): $IElementDrawer<(void)>
 "getNullDrawer"<T>(): $IElementDrawer<(T)>
}

export namespace $IElementDrawers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElementDrawers$Type = ($IElementDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElementDrawers_ = $IElementDrawers$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$InterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InterfaceBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceBlock$Type = ($InterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceBlock_ = $InterfaceBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$EnergyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyItem$Type = ($EnergyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyItem_ = $EnergyItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ControllerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ControllerBlock$EnergyType, $ControllerBlock$EnergyType$Type} from "packages/com/refinedmods/refinedstorage/block/$ControllerBlock$EnergyType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$NetworkType, $NetworkType$Type} from "packages/com/refinedmods/refinedstorage/api/network/$NetworkType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ControllerBlock extends $BaseBlock implements $EntityBlock {
static readonly "ENERGY_TYPE": $EnumProperty<($ControllerBlock$EnergyType)>
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

constructor(arg0: $NetworkType$Type)

public "getType"(): $NetworkType
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "type"(): $NetworkType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlock$Type = ($ControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlock_ = $ControllerBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/blockitem/$StorageBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StorageBlock, $StorageBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$StorageBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$BaseBlockItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageBlockItem extends $BaseBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $StorageBlock$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockItem$Type = ($StorageBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageBlockItem_ = $StorageBlockItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/security/$Permission" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Permission extends $Enum<($Permission)> {
static readonly "INSERT": $Permission
static readonly "EXTRACT": $Permission
static readonly "AUTOCRAFTING": $Permission
static readonly "MODIFY": $Permission
static readonly "BUILD": $Permission
static readonly "SECURITY": $Permission


public static "values"(): ($Permission)[]
public static "valueOf"(arg0: string): $Permission
public "getId"(): integer
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Permission$Type = (("modify") | ("security") | ("extract") | ("build") | ("insert") | ("autocrafting")) | ($Permission);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Permission_ = $Permission$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ControllerBlock$EnergyType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ControllerBlock$EnergyType extends $Enum<($ControllerBlock$EnergyType)> implements $StringRepresentable {
static readonly "OFF": $ControllerBlock$EnergyType
static readonly "NEARLY_OFF": $ControllerBlock$EnergyType
static readonly "NEARLY_ON": $ControllerBlock$EnergyType
static readonly "ON": $ControllerBlock$EnergyType


public "toString"(): string
public static "values"(): ($ControllerBlock$EnergyType)[]
public static "valueOf"(arg0: string): $ControllerBlock$EnergyType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlock$EnergyType$Type = (("nearly_on") | ("nearly_off") | ("off") | ("on")) | ($ControllerBlock$EnergyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlock$EnergyType_ = $ControllerBlock$EnergyType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/cache/$InvalidateCause" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $InvalidateCause extends $Enum<($InvalidateCause)> {
static readonly "UNKNOWN": $InvalidateCause
static readonly "DISK_INVENTORY_CHANGED": $InvalidateCause
static readonly "CONNECTED_STATE_CHANGED": $InvalidateCause
static readonly "DEVICE_CONFIGURATION_CHANGED": $InvalidateCause
static readonly "INITIAL_TICK_INVALIDATION": $InvalidateCause
static readonly "NEIGHBOR_CHANGED": $InvalidateCause


public static "values"(): ($InvalidateCause)[]
public static "valueOf"(arg0: string): $InvalidateCause
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvalidateCause$Type = (("device_configuration_changed") | ("initial_tick_invalidation") | ("neighbor_changed") | ("connected_state_changed") | ("unknown") | ("disk_inventory_changed")) | ($InvalidateCause);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvalidateCause_ = $InvalidateCause$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/tracker/$IStorageTracker" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$StorageTrackerEntry, $StorageTrackerEntry$Type} from "packages/com/refinedmods/refinedstorage/api/storage/tracker/$StorageTrackerEntry"

export interface $IStorageTracker<T> {

 "get"(arg0: T): $StorageTrackerEntry
 "changed"(arg0: $Player$Type, arg1: T): void
 "readFromNbt"(arg0: $ListTag$Type): void
 "serializeNbt"(): $ListTag
}

export namespace $IStorageTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageTracker$Type<T> = ($IStorageTracker<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageTracker_<T> = $IStorageTracker$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$StorageHousingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageHousingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageHousingItem$Type = ($StorageHousingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageHousingItem_ = $StorageHousingItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverManager" {
import {$Cover, $Cover$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$Cover"
import {$NetworkNode, $NetworkNode$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$NetworkNode"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $CoverManager {
static readonly "PROPERTY": $ModelProperty<($CoverManager)>
static "NBT_COVER_MANAGER": string

constructor(arg0: $NetworkNode$Type)

public "getAsInventory"(): $IItemHandlerModifiable
public static "getBlock"(arg0: $ItemStack$Type): $Block
public static "getBlockState"(arg0: $ItemStack$Type): $BlockState
public "hasCover"(arg0: $Direction$Type): boolean
public "removeCover"(arg0: $Direction$Type): $Cover
public "setCover"(arg0: $Direction$Type, arg1: $Cover$Type): boolean
public "getCover"(arg0: $Direction$Type): $Cover
public "writeToNbt"(): $CompoundTag
public "readFromNbt"(arg0: $CompoundTag$Type): void
public static "isValidCover"(arg0: $ItemStack$Type): boolean
get "asInventory"(): $IItemHandlerModifiable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoverManager$Type = ($CoverManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoverManager_ = $CoverManager$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/inventory/item/$ProxyItemHandler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ProxyItemHandler implements $IItemHandler {

constructor(arg0: $IItemHandler$Type, arg1: $IItemHandler$Type)

public "getSlots"(): integer
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "getSlotLimit"(i: integer): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "getWidth"(): integer
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "setChanged"(): void
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "asContainer"(): $Container
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProxyItemHandler$Type = ($ProxyItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProxyItemHandler_ = $ProxyItemHandler$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$FluidInterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidInterfaceBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInterfaceBlock$Type = ($FluidInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInterfaceBlock_ = $FluidInterfaceBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/cache/$IStorageCache" {
import {$IStackList, $IStackList$Type} from "packages/com/refinedmods/refinedstorage/api/util/$IStackList"
import {$IStorageCacheListener, $IStorageCacheListener$Type} from "packages/com/refinedmods/refinedstorage/api/storage/cache/$IStorageCacheListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InvalidateCause, $InvalidateCause$Type} from "packages/com/refinedmods/refinedstorage/api/storage/cache/$InvalidateCause"
import {$IStorage, $IStorage$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$IStorage"

export interface $IStorageCache<T> {

 "add"(arg0: T, arg1: integer, arg2: boolean, arg3: boolean): void
 "remove"(arg0: T, arg1: integer, arg2: boolean): void
 "flush"(): void
 "sort"(): void
 "invalidate"(arg0: $InvalidateCause$Type): void
 "addListener"(arg0: $IStorageCacheListener$Type<(T)>): void
 "removeListener"(arg0: $IStorageCacheListener$Type<(T)>): void
 "getStorages"(): $List<($IStorage<(T)>)>
 "reAttachListeners"(): void
 "getCraftablesList"(): $IStackList<(T)>
 "getList"(): $IStackList<(T)>
}

export namespace $IStorageCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageCache$Type<T> = ($IStorageCache<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageCache_<T> = $IStorageCache$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable" {
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IComparable {

 "setCompare"(arg0: integer): void
 "getCompare"(): integer
}

export namespace $IComparable {
function createParameter<T>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComparable$Type = ($IComparable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComparable_ = $IComparable$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$RelayBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RelayBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayBlock$Type = ($RelayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelayBlock_ = $RelayBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$NetworkItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EnergyItem, $EnergyItem$Type} from "packages/com/refinedmods/refinedstorage/item/$EnergyItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$INetworkItem, $INetworkItem$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$INetwork, $INetwork$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetwork"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INetworkItemProvider, $INetworkItemProvider$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemProvider"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot"

export class $NetworkItem extends $EnergyItem implements $INetworkItemProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public static "getY"(arg0: $ItemStack$Type): integer
public static "isValid"(arg0: $ItemStack$Type): boolean
public static "getDimension"(arg0: $ItemStack$Type): $ResourceKey<($Level)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getZ"(arg0: $ItemStack$Type): integer
public static "getX"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "applyNetwork"(arg0: $MinecraftServer$Type, arg1: $ItemStack$Type, arg2: $Consumer$Type<($INetwork$Type)>, arg3: $Consumer$Type<($Component$Type)>): void
public "provide"(arg0: $INetworkItemManager$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: $PlayerSlot$Type): $INetworkItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkItem$Type = ($NetworkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkItem_ = $NetworkItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$PortableGridBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$PortableGridBlockItem$Type, $PortableGridBlockItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/blockitem/$PortableGridBlockItem$Type"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PortableGridDiskState, $PortableGridDiskState$Type} from "packages/com/refinedmods/refinedstorage/blockentity/grid/portable/$PortableGridDiskState"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PortableGridBlock extends $BaseBlock implements $EntityBlock {
static readonly "DISK_STATE": $EnumProperty<($PortableGridDiskState)>
static readonly "ACTIVE": $BooleanProperty
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

constructor(arg0: $PortableGridBlockItem$Type$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getDirection"(): $BlockDirection
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableGridBlock$Type = ($PortableGridBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableGridBlock_ = $PortableGridBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ICraftingPatternContainer, $ICraftingPatternContainer$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICraftingPattern {

 "getStack"(): $ItemStack
 "isValid"(): boolean
 "getErrorMessage"(): $Component
 "getCraftingTaskFactoryId"(): $ResourceLocation
 "getContainer"(): $ICraftingPatternContainer
 "getInputs"(): $List<($NonNullList<($ItemStack)>)>
 "getOutput"(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: $RegistryAccess$Type): $ItemStack
 "getOutputs"(): $NonNullList<($ItemStack)>
 "getFluidOutputs"(): $NonNullList<($FluidStack)>
 "isProcessing"(): boolean
 "getFluidInputs"(): $List<($NonNullList<($FluidStack)>)>
 "getByproducts"(arg0: $NonNullList$Type<($ItemStack$Type)>): $NonNullList<($ItemStack)>
 "getByproducts"(): $NonNullList<($ItemStack)>
}

export namespace $ICraftingPattern {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPattern$Type = ($ICraftingPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingPattern_ = $ICraftingPattern$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$GridBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GridType, $GridType$Type} from "packages/com/refinedmods/refinedstorage/api/network/grid/$GridType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GridBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor(arg0: $GridType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridBlock$Type = ($GridBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridBlock_ = $GridBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$PatternItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CraftingPattern, $CraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPattern"
import {$ICraftingPatternProvider, $ICraftingPatternProvider$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternProvider"
import {$ICraftingPatternContainer, $ICraftingPatternContainer$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AllowedTagList, $AllowedTagList$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$AllowedTagList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PatternItem extends $Item implements $ICraftingPatternProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "create"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ICraftingPatternContainer$Type): $ICraftingPattern
public static "isExact"(arg0: $ItemStack$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "fromCache"(arg0: $Level$Type, arg1: $ItemStack$Type): $ICraftingPattern
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getOutputSlot"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public static "setToCurrentVersion"(arg0: $ItemStack$Type): void
public static "setAllowedTags"(arg0: $ItemStack$Type, arg1: $AllowedTagList$Type): void
public static "setInputSlot"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type): void
public static "getInputSlot"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public static "setProcessing"(arg0: $ItemStack$Type, arg1: boolean): void
public static "setExact"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getFluidOutputSlot"(arg0: $ItemStack$Type, arg1: integer): $FluidStack
public static "isProcessing"(arg0: $ItemStack$Type): boolean
public static "setFluidOutputSlot"(arg0: $ItemStack$Type, arg1: integer, arg2: $FluidStack$Type): void
public static "getAllowedTags"(arg0: $ItemStack$Type): $AllowedTagList
public static "setFluidInputSlot"(arg0: $ItemStack$Type, arg1: integer, arg2: $FluidStack$Type): void
public static "getFluidInputSlot"(arg0: $ItemStack$Type, arg1: integer): $FluidStack
public static "setOutputSlot"(arg0: $ItemStack$Type, arg1: integer, arg2: $ItemStack$Type): void
public "addAllowedTags"(arg0: $List$Type<($Component$Type)>, arg1: $CraftingPattern$Type): void
set "toCurrentVersion"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternItem$Type = ($PatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternItem_ = $PatternItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/storage/$FluidStorageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FluidStorageType extends $Enum<($FluidStorageType)> {
static readonly "SIXTY_FOUR_K": $FluidStorageType
static readonly "TWO_HUNDRED_FIFTY_SIX_K": $FluidStorageType
static readonly "THOUSAND_TWENTY_FOUR_K": $FluidStorageType
static readonly "FOUR_THOUSAND_NINETY_SIX_K": $FluidStorageType
static readonly "CREATIVE": $FluidStorageType


public "getName"(): string
public static "values"(): ($FluidStorageType)[]
public static "valueOf"(arg0: string): $FluidStorageType
public "getCapacity"(): integer
get "name"(): string
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorageType$Type = (("sixty_four_k") | ("two_hundred_fifty_six_k") | ("thousand_twenty_four_k") | ("four_thousand_ninety_six_k") | ("creative")) | ($FluidStorageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorageType_ = $FluidStorageType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WirelessFluidGridItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WirelessFluidGridItem$Type extends $Enum<($WirelessFluidGridItem$Type)> {
static readonly "NORMAL": $WirelessFluidGridItem$Type
static readonly "CREATIVE": $WirelessFluidGridItem$Type


public static "values"(): ($WirelessFluidGridItem$Type)[]
public static "valueOf"(arg0: string): $WirelessFluidGridItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessFluidGridItem$Type$Type = (("normal") | ("creative")) | ($WirelessFluidGridItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessFluidGridItem$Type_ = $WirelessFluidGridItem$Type$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPatternOutputs" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CraftingPatternOutputs {

constructor(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $NonNullList$Type<($FluidStack$Type)>)

public "getOutputs"(): $NonNullList<($ItemStack)>
public "getFluidOutputs"(): $NonNullList<($FluidStack)>
public "getByproducts"(): $NonNullList<($ItemStack)>
get "outputs"(): $NonNullList<($ItemStack)>
get "fluidOutputs"(): $NonNullList<($FluidStack)>
get "byproducts"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingPatternOutputs$Type = ($CraftingPatternOutputs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingPatternOutputs_ = $CraftingPatternOutputs$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$DiskDriveBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DiskDriveBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskDriveBlock$Type = ($DiskDriveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskDriveBlock_ = $DiskDriveBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/util/$IStackList" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StackListEntry, $StackListEntry$Type} from "packages/com/refinedmods/refinedstorage/api/util/$StackListEntry"
import {$StackListResult, $StackListResult$Type} from "packages/com/refinedmods/refinedstorage/api/util/$StackListResult"

export interface $IStackList<T> {

 "add"(arg0: T, arg1: integer): $StackListResult<(T)>
 "add"(arg0: T): $StackListResult<(T)>
 "remove"(arg0: T): $StackListResult<(T)>
 "remove"(arg0: T, arg1: integer): $StackListResult<(T)>
 "get"(arg0: $UUID$Type): T
 "get"(arg0: T, arg1: integer): T
 "get"(arg0: T): T
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "copy"(): $IStackList<(T)>
 "getEntry"(arg0: T, arg1: integer): $StackListEntry<(T)>
 "getCount"(arg0: T): integer
 "getCount"(arg0: T, arg1: integer): integer
 "getStacks"(arg0: T): $Collection<($StackListEntry<(T)>)>
 "getStacks"(): $Collection<($StackListEntry<(T)>)>
}

export namespace $IStackList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackList$Type<T> = ($IStackList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackList_<T> = $IStackList$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ExporterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$CableBlock, $CableBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$CableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExporterBlock extends $CableBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExporterBlock$Type = ($ExporterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExporterBlock_ = $ExporterBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorageaddons/item/$WirelessCraftingGridItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WirelessCraftingGridItem$Type extends $Enum<($WirelessCraftingGridItem$Type)> {
static readonly "NORMAL": $WirelessCraftingGridItem$Type
static readonly "CREATIVE": $WirelessCraftingGridItem$Type


public static "values"(): ($WirelessCraftingGridItem$Type)[]
public static "valueOf"(arg0: string): $WirelessCraftingGridItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingGridItem$Type$Type = (("normal") | ("creative")) | ($WirelessCraftingGridItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessCraftingGridItem$Type_ = $WirelessCraftingGridItem$Type$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$SecurityManagerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColoredNetworkBlock, $ColoredNetworkBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$ColoredNetworkBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SecurityManagerBlock extends $ColoredNetworkBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecurityManagerBlock$Type = ($SecurityManagerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecurityManagerBlock_ = $SecurityManagerBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$QuartzEnrichedIronItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuartzEnrichedIronItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzEnrichedIronItem$Type = ($QuartzEnrichedIronItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzEnrichedIronItem_ = $QuartzEnrichedIronItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeGraph" {
import {$INetworkNodeGraphListener, $INetworkNodeGraphListener$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeGraphListener"
import {$INetworkNodeGraphEntry, $INetworkNodeGraphEntry$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeGraphEntry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Action, $Action$Type} from "packages/com/refinedmods/refinedstorage/api/util/$Action"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$INetwork, $INetwork$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetwork"

export interface $INetworkNodeGraph {

 "all"(): $Collection<($INetworkNodeGraphEntry)>
 "invalidate"(arg0: $Action$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
 "addListener"(arg0: $INetworkNodeGraphListener$Type): void
 "runActionWhenPossible"(arg0: $Consumer$Type<($INetwork$Type)>): void
 "disconnectAll"(): void
}

export namespace $INetworkNodeGraph {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNodeGraph$Type = ($INetworkNodeGraph);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNodeGraph_ = $INetworkNodeGraph$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$ConstructorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$CableBlock, $CableBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$CableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConstructorBlock extends $CableBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorBlock$Type = ($ConstructorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstructorBlock_ = $ConstructorBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$StorageMonitorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StorageMonitorBlock extends $NetworkNodeBlock {
static readonly "CONNECTED": $BooleanProperty
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getDirection"(): $BlockDirection
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageMonitorBlock$Type = ($StorageMonitorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageMonitorBlock_ = $StorageMonitorBlock$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/util/$StackListResult" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export class $StackListResult<T> {

constructor(arg0: T, arg1: $UUID$Type, arg2: integer)

public "getId"(): $UUID
public "getStack"(): T
public "getChange"(): integer
get "id"(): $UUID
get "stack"(): T
get "change"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackListResult$Type<T> = ($StackListResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackListResult_<T> = $StackListResult$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$SecurityCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Permission, $Permission$Type} from "packages/com/refinedmods/refinedstorage/api/network/security/$Permission"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SecurityCardItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getOwner"(arg0: $ItemStack$Type): $UUID
public static "setPermission"(arg0: $ItemStack$Type, arg1: $Permission$Type, arg2: boolean): void
public static "isValid"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "hasPermission"(arg0: $ItemStack$Type, arg1: $Permission$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecurityCardItem$Type = ($SecurityCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecurityCardItem_ = $SecurityCardItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/config/$IType" {
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"

export interface $IType {

 "getType"(): integer
 "setType"(arg0: integer): void
 "getItemFilters"(): $IItemHandlerModifiable
 "getFluidFilters"(): $FluidInventory
}

export namespace $IType {
const ITEMS: integer
const FLUIDS: integer
function createParameter<T>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
function createParameter<T>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IType$Type = ($IType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IType_ = $IType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$WrenchItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WrenchItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$Type = ($WrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchItem_ = $WrenchItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CoverType extends $Enum<($CoverType)> {
static readonly "NORMAL": $CoverType
static readonly "HOLLOW": $CoverType


public static "values"(): ($CoverType)[]
public static "valueOf"(arg0: string): $CoverType
public "createStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoverType$Type = (("normal") | ("hollow")) | ($CoverType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoverType_ = $CoverType$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPattern" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ICraftingPatternContainer, $ICraftingPatternContainer$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer"
import {$AllowedTagList, $AllowedTagList$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$AllowedTagList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingPatternContext, $CraftingPatternContext$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPatternContext"
import {$CraftingPatternOutputs, $CraftingPatternOutputs$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPatternOutputs"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CraftingPatternInputs, $CraftingPatternInputs$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPatternInputs"

export class $CraftingPattern implements $ICraftingPattern {

constructor(arg0: $CraftingPatternContext$Type, arg1: boolean, arg2: boolean, arg3: $CraftingRecipe$Type, arg4: $CraftingPatternInputs$Type, arg5: $CraftingPatternOutputs$Type, arg6: $AllowedTagList$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getStack"(): $ItemStack
public "isValid"(): boolean
public "getErrorMessage"(): $Component
public "getCraftingTaskFactoryId"(): $ResourceLocation
public "getContainer"(): $ICraftingPatternContainer
public "getInputs"(): $List<($NonNullList<($ItemStack)>)>
public "getOutput"(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: $RegistryAccess$Type): $ItemStack
public "getOutputs"(): $NonNullList<($ItemStack)>
public "getFluidOutputs"(): $NonNullList<($FluidStack)>
public "getAllowedTagList"(): $AllowedTagList
public "isProcessing"(): boolean
public "getFluidInputs"(): $List<($NonNullList<($FluidStack)>)>
public "getByproducts"(): $NonNullList<($ItemStack)>
public "getByproducts"(arg0: $NonNullList$Type<($ItemStack$Type)>): $NonNullList<($ItemStack)>
get "stack"(): $ItemStack
get "valid"(): boolean
get "errorMessage"(): $Component
get "craftingTaskFactoryId"(): $ResourceLocation
get "container"(): $ICraftingPatternContainer
get "inputs"(): $List<($NonNullList<($ItemStack)>)>
get "outputs"(): $NonNullList<($ItemStack)>
get "fluidOutputs"(): $NonNullList<($FluidStack)>
get "allowedTagList"(): $AllowedTagList
get "processing"(): boolean
get "fluidInputs"(): $List<($NonNullList<($FluidStack)>)>
get "byproducts"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingPattern$Type = ($CraftingPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingPattern_ = $CraftingPattern$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/inventory/item/$UpgradeItemHandler" {
import {$UpgradeItem$Type, $UpgradeItem$Type$Type} from "packages/com/refinedmods/refinedstorage/item/$UpgradeItem$Type"
import {$BaseItemHandler, $BaseItemHandler$Type} from "packages/com/refinedmods/refinedstorage/inventory/item/$BaseItemHandler"

export class $UpgradeItemHandler extends $BaseItemHandler {

constructor(arg0: integer, ...arg1: ($UpgradeItem$Type$Type)[])

public "getSpeed"(arg0: integer, arg1: integer): integer
public "getSpeed"(): integer
public "getSlotLimit"(arg0: integer): integer
public "getUpgradeCount"(arg0: $UpgradeItem$Type$Type): integer
public "getEnergyUsage"(): integer
public "hasUpgrade"(arg0: $UpgradeItem$Type$Type): boolean
public "getStackInteractCount"(): integer
get "speed"(): integer
get "energyUsage"(): integer
get "stackInteractCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItemHandler$Type = ($UpgradeItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItemHandler_ = $UpgradeItemHandler$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationWatcher" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntitySynchronizationManager, $BlockEntitySynchronizationManager$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationManager"

export class $BlockEntitySynchronizationWatcher {

constructor(arg0: $ServerPlayer$Type, arg1: $BlockEntitySynchronizationManager$Type)

public "sendParameter"(arg0: boolean, arg1: $BlockEntitySynchronizationParameter$Type<(any), (any)>): void
public "getPlayer"(): $ServerPlayer
public "detectAndSendChanges"(): void
public "onClosed"(): void
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySynchronizationWatcher$Type = ($BlockEntitySynchronizationWatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySynchronizationWatcher_ = $BlockEntitySynchronizationWatcher$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$FluidStorageDiskItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FluidStorageType, $FluidStorageType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/storage/$FluidStorageType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IStorageDiskProvider, $IStorageDiskProvider$Type} from "packages/com/refinedmods/refinedstorage/api/storage/disk/$IStorageDiskProvider"
import {$StorageType, $StorageType$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$StorageType"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FluidStorageDiskItem extends $Item implements $IStorageDiskProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $FluidStorageType$Type)

public "getId"(arg0: $ItemStack$Type): $UUID
public "getType"(): $StorageType
public "getCapacity"(arg0: $ItemStack$Type): integer
public "isValid"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setId"(arg0: $ItemStack$Type, arg1: $UUID$Type): void
public "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
get "type"(): $StorageType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorageDiskItem$Type = ($FluidStorageDiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorageDiskItem_ = $FluidStorageDiskItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/grid/handler/$IFluidGridHandler" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFluidGridHandler {

 "onCraftingRequested"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: integer): void
 "onInsertHeldContainer"(arg0: $ServerPlayer$Type): void
 "onCraftingPreviewRequested"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: integer, arg3: boolean): void
 "onExtract"(arg0: $ServerPlayer$Type, arg1: $UUID$Type, arg2: boolean): void
 "onInsert"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): $ItemStack
}

export namespace $IFluidGridHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidGridHandler$Type = ($IFluidGridHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidGridHandler_ = $IFluidGridHandler$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/config/$IWhitelistBlacklist" {
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"

export interface $IWhitelistBlacklist {

 "setWhitelistBlacklistMode"(arg0: integer): void
 "getWhitelistBlacklistMode"(): integer
}

export namespace $IWhitelistBlacklist {
const WHITELIST: integer
const BLACKLIST: integer
function createParameter<T>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
function acceptsItem(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: $ItemStack$Type): boolean
function acceptsFluid(arg0: $FluidInventory$Type, arg1: integer, arg2: integer, arg3: $FluidStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWhitelistBlacklist$Type = ($IWhitelistBlacklist);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWhitelistBlacklist_ = $IWhitelistBlacklist$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$INetwork" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeGraph, $INetworkNodeGraph$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeGraph"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Action, $Action$Type} from "packages/com/refinedmods/refinedstorage/api/util/$Action"
import {$IStorage, $IStorage$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$IStorage"
import {$IItemGridHandler, $IItemGridHandler$Type} from "packages/com/refinedmods/refinedstorage/api/network/grid/handler/$IItemGridHandler"
import {$IFluidGridHandler, $IFluidGridHandler$Type} from "packages/com/refinedmods/refinedstorage/api/network/grid/handler/$IFluidGridHandler"
import {$IStorageCache, $IStorageCache$Type} from "packages/com/refinedmods/refinedstorage/api/storage/cache/$IStorageCache"
import {$ISecurityManager, $ISecurityManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/security/$ISecurityManager"
import {$NetworkType, $NetworkType$Type} from "packages/com/refinedmods/refinedstorage/api/network/$NetworkType"
import {$ICraftingManager, $ICraftingManager$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingManager"
import {$IStorageTracker, $IStorageTracker$Type} from "packages/com/refinedmods/refinedstorage/api/storage/tracker/$IStorageTracker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$INetworkItemManager, $INetworkItemManager$Type} from "packages/com/refinedmods/refinedstorage/api/network/item/$INetworkItemManager"

export interface $INetwork {

 "update"(): void
 "getSecurityManager"(): $ISecurityManager
 "getType"(): $NetworkType
 "getPosition"(): $BlockPos
 "getLevel"(): $Level
 "getTickTimes"(): (long)[]
 "getEnergyStorage"(): $IEnergyStorage
 "extractFluid"(arg0: $FluidStack$Type, arg1: integer, arg2: integer, arg3: $Action$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$Type, arg1: integer, arg2: $Action$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$Type, arg1: integer, arg2: integer, arg3: $Action$Type, arg4: $Predicate$Type<($IStorage$Type<($FluidStack$Type)>)>): $FluidStack
 "markDirty"(): void
 "onRemoved"(): void
 "getNetworkItemManager"(): $INetworkItemManager
 "getItemStorageTracker"(): $IStorageTracker<($ItemStack)>
 "getFluidGridHandler"(): $IFluidGridHandler
 "getNodeGraph"(): $INetworkNodeGraph
 "canRun"(): boolean
 "getFluidStorageTracker"(): $IStorageTracker<($FluidStack)>
 "insertItem"(arg0: $ItemStack$Type, arg1: integer, arg2: $Action$Type): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $Action$Type, arg4: $Predicate$Type<($IStorage$Type<($ItemStack$Type)>)>): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: $Action$Type): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $Action$Type): $ItemStack
 "insertItemTracked"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
 "insertFluid"(arg0: $FluidStack$Type, arg1: integer, arg2: $Action$Type): $FluidStack
 "insertFluidTracked"(arg0: $FluidStack$Type, arg1: integer): $FluidStack
 "getCraftingManager"(): $ICraftingManager
 "getEnergyUsage"(): integer
 "writeToNbt"(arg0: $CompoundTag$Type): $CompoundTag
 "readFromNbt"(arg0: $CompoundTag$Type): $INetwork
 "getFluidStorageCache"(): $IStorageCache<($FluidStack)>
 "getItemGridHandler"(): $IItemGridHandler
 "getItemStorageCache"(): $IStorageCache<($ItemStack)>
}

export namespace $INetwork {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetwork$Type = ($INetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetwork_ = $INetwork$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/preview/$ICraftingPreviewElement" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IElementDrawers, $IElementDrawers$Type} from "packages/com/refinedmods/refinedstorage/api/render/$IElementDrawers"

export interface $ICraftingPreviewElement {

 "write"(arg0: $FriendlyByteBuf$Type): void
 "getId"(): $ResourceLocation
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IElementDrawers$Type): void
 "doesDisableTaskStarting"(): boolean
}

export namespace $ICraftingPreviewElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPreviewElement$Type = ($ICraftingPreviewElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingPreviewElement_ = $ICraftingPreviewElement$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/autocrafting/$CraftingPatternInputs" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CraftingPatternInputs {

constructor(arg0: $List$Type<($NonNullList$Type<($ItemStack$Type)>)>, arg1: $List$Type<($NonNullList$Type<($FluidStack$Type)>)>)

public "getInputs"(): $List<($NonNullList<($ItemStack)>)>
public "getFluidInputs"(): $List<($NonNullList<($FluidStack)>)>
get "inputs"(): $List<($NonNullList<($ItemStack)>)>
get "fluidInputs"(): $List<($NonNullList<($FluidStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingPatternInputs$Type = ($CraftingPatternInputs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingPatternInputs_ = $CraftingPatternInputs$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/block/$BlockDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $BlockDirection extends $Enum<($BlockDirection)> {
static readonly "NONE": $BlockDirection
static readonly "ANY": $BlockDirection
static readonly "ANY_FACE_PLAYER": $BlockDirection
static readonly "HORIZONTAL": $BlockDirection


public "getProperty"(): $DirectionProperty
public static "values"(): ($BlockDirection)[]
public static "valueOf"(arg0: string): $BlockDirection
public "getFrom"(arg0: $Direction$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): $Direction
public "cycle"(arg0: $Direction$Type): $Direction
get "property"(): $DirectionProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDirection$Type = (("horizontal") | ("any_face_player") | ("none") | ("any")) | ($BlockDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDirection_ = $BlockDirection$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/inventory/player/$PlayerSlot" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerSlot {

constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: integer)
constructor(arg0: integer, arg1: string)

public "getStackFromSlot"(arg0: $Player$Type): $ItemStack
public static "getSlotForHand"(arg0: $Player$Type, arg1: $InteractionHand$Type): $PlayerSlot
public "writePlayerSlot"(arg0: $FriendlyByteBuf$Type): void
public "getSlotIdInPlayerInventory"(): integer
get "slotIdInPlayerInventory"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSlot$Type = ($PlayerSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSlot_ = $PlayerSlot$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternProvider" {
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$ICraftingPatternContainer, $ICraftingPatternContainer$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingPatternProvider {

 "create"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ICraftingPatternContainer$Type): $ICraftingPattern

(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ICraftingPatternContainer$Type): $ICraftingPattern
}

export namespace $ICraftingPatternProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPatternProvider$Type = ($ICraftingPatternProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingPatternProvider_ = $ICraftingPatternProvider$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICraftingPattern, $ICraftingPattern$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPattern"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICalculationResult, $ICalculationResult$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICalculationResult"
import {$ICraftingPatternContainer, $ICraftingPatternContainer$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/$ICraftingPatternContainer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ICraftingTask, $ICraftingTask$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/task/$ICraftingTask"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ICraftingMonitorListener, $ICraftingMonitorListener$Type} from "packages/com/refinedmods/refinedstorage/api/autocrafting/craftingmonitor/$ICraftingMonitorListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICraftingManager {

 "update"(): void
 "start"(arg0: $ICraftingTask$Type): void
 "create"(arg0: $ItemStack$Type, arg1: integer): $ICalculationResult
 "create"(arg0: $FluidStack$Type, arg1: integer): $ICalculationResult
 "getPattern"(arg0: $FluidStack$Type): $ICraftingPattern
 "getPattern"(arg0: $ItemStack$Type): $ICraftingPattern
 "invalidate"(): void
 "request"(arg0: any, arg1: $ItemStack$Type, arg2: integer): $ICraftingTask
 "request"(arg0: any, arg1: $FluidStack$Type, arg2: integer): $ICraftingTask
 "getNamedContainers"(): $Map<($Component), ($List<($IItemHandlerModifiable)>)>
 "addListener"(arg0: $ICraftingMonitorListener$Type): void
 "cancel"(arg0: $UUID$Type): void
 "getTask"(arg0: $UUID$Type): $ICraftingTask
 "track"(arg0: $ItemStack$Type, arg1: integer): integer
 "track"(arg0: $FluidStack$Type, arg1: integer): integer
 "removeListener"(arg0: $ICraftingMonitorListener$Type): void
 "getTasks"(): $Collection<($ICraftingTask)>
 "writeToNbt"(arg0: $CompoundTag$Type): $CompoundTag
 "readFromNbt"(arg0: $CompoundTag$Type): void
 "getPatterns"(): $List<($ICraftingPattern)>
 "onTaskChanged"(): void
 "getAllContainers"(arg0: $ICraftingPattern$Type): $Set<($ICraftingPatternContainer)>
}

export namespace $ICraftingManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingManager$Type = ($ICraftingManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingManager_ = $ICraftingManager$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity" {
import {$NetworkNode, $NetworkNode$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$NetworkNode"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$RedstoneMode, $RedstoneMode$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$RedstoneMode"
import {$IRedstoneConfigurable, $IRedstoneConfigurable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IRedstoneConfigurable"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$BaseBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $NetworkNodeBlockEntity<N extends $NetworkNode> extends $BaseBlockEntity implements $INetworkNodeProxy<(N)>, $IRedstoneConfigurable {
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>


public "getNode"(): N
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createNode"(arg0: $Level$Type, arg1: $BlockPos$Type): N
public "onRemovedNotDueToChunkUnload"(): void
public "clearRemoved"(): void
public "getRedstoneMode"(): $RedstoneMode
public "setRedstoneMode"(arg0: $RedstoneMode$Type): void
public "getRemovedNode"(): N
get "node"(): N
get "redstoneMode"(): $RedstoneMode
set "redstoneMode"(value: $RedstoneMode$Type)
get "removedNode"(): N
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkNodeBlockEntity$Type<N> = ($NetworkNodeBlockEntity<(N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkNodeBlockEntity_<N> = $NetworkNodeBlockEntity$Type<(N)>;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BlockEntitySynchronizationParameter<T, E extends $BlockEntity> {

constructor(arg0: $ResourceLocation$Type, arg1: $EntityDataSerializer$Type<(T)>, arg2: T, arg3: $Function$Type<(E), (T)>, arg4: $BiConsumer$Type<(E), (T)>, arg5: $BlockEntitySynchronizationClientListener$Type<(T)>)
constructor(arg0: $ResourceLocation$Type, arg1: $EntityDataSerializer$Type<(T)>, arg2: T, arg3: $Function$Type<(E), (T)>, arg4: $BiConsumer$Type<(E), (T)>)
constructor(arg0: $ResourceLocation$Type, arg1: $EntityDataSerializer$Type<(T)>, arg2: T, arg3: $Function$Type<(E), (T)>)

public "getValue"(): T
public "getId"(): $ResourceLocation
public "setValue"(arg0: boolean, arg1: T): void
public "getSerializer"(): $EntityDataSerializer<(T)>
public "getValueProducer"(): $Function<(E), (T)>
public "getValueConsumer"(): $BiConsumer<(E), (T)>
get "value"(): T
get "id"(): $ResourceLocation
get "serializer"(): $EntityDataSerializer<(T)>
get "valueProducer"(): $Function<(E), (T)>
get "valueConsumer"(): $BiConsumer<(E), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySynchronizationParameter$Type<T, E> = ($BlockEntitySynchronizationParameter<(T), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySynchronizationParameter_<T, E> = $BlockEntitySynchronizationParameter$Type<(T), (E)>;
}}
declare module "packages/com/refinedmods/refinedstorage/container/slot/filter/$FluidFilterSlot" {
import {$BaseSlot, $BaseSlot$Type} from "packages/com/refinedmods/refinedstorage/container/slot/$BaseSlot"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"

export class $FluidFilterSlot extends $BaseSlot {
static readonly "FILTER_ALLOW_SIZE": integer
static readonly "FILTER_ALLOW_ALTERNATIVES": integer
readonly "slot": integer
readonly "container": $Container
 "index": integer
 "x": integer
 "y": integer

constructor(arg0: $FluidInventory$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(arg0: $FluidInventory$Type, arg1: integer, arg2: integer, arg3: integer)

public "mayPlace"(arg0: $ItemStack$Type): boolean
public "mayPickup"(arg0: $Player$Type): boolean
public "isAlternativesAllowed"(): boolean
public "onContainerClicked"(arg0: $ItemStack$Type): void
public "getFluidInventory"(): $FluidInventory
public "isSizeAllowed"(): boolean
public "hasStack"(): boolean
get "alternativesAllowed"(): boolean
get "fluidInventory"(): $FluidInventory
get "sizeAllowed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilterSlot$Type = ($FluidFilterSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilterSlot_ = $FluidFilterSlot$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockEntitySynchronizationClientListener<T> {

 "onChanged"(arg0: boolean, arg1: T): void

(arg0: boolean, arg1: T): void
}

export namespace $BlockEntitySynchronizationClientListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySynchronizationClientListener$Type<T> = ($BlockEntitySynchronizationClientListener<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySynchronizationClientListener_<T> = $BlockEntitySynchronizationClientListener$Type<(T)>;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$NetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INetworkNode, $INetworkNode$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$INetworkNodeVisitor, $INetworkNodeVisitor$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeVisitor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$INetwork, $INetwork$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetwork"
import {$INetworkNodeVisitor$Operator, $INetworkNodeVisitor$Operator$Type} from "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeVisitor$Operator"
import {$RedstoneMode, $RedstoneMode$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$RedstoneMode"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NetworkNode implements $INetworkNode, $INetworkNodeVisitor {


public "getOwner"(): $UUID
public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "isActive"(): boolean
public "visit"(arg0: $INetworkNodeVisitor$Operator$Type): void
public "setOwner"(arg0: $UUID$Type): void
public "setRedstonePowered"(arg0: boolean): void
public "getPos"(): $BlockPos
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getLevel"(): $Level
public "getDrops"(): $IItemHandler
public "markDirty"(): void
public "getItemStack"(): $ItemStack
public "getRedstoneMode"(): $RedstoneMode
public "setRedstoneMode"(arg0: $RedstoneMode$Type): void
public "getNetwork"(): $INetwork
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "onDisconnected"(arg0: $INetwork$Type): void
public "onConnected"(arg0: $INetwork$Type): void
public "canConduct"(arg0: $Direction$Type): boolean
public "getDirection"(): $Direction
public "shouldRebuildGraphOnChange"(): boolean
public "getFacingBlockEntity"(): $BlockEntity
public "onDirectionChanged"(arg0: $Direction$Type): void
public "getId"(): $ResourceLocation
public "canReceive"(arg0: $Direction$Type): boolean
public "getEnergyUsage"(): integer
get "owner"(): $UUID
get "active"(): boolean
set "owner"(value: $UUID$Type)
set "redstonePowered"(value: boolean)
get "pos"(): $BlockPos
get "level"(): $Level
get "drops"(): $IItemHandler
get "itemStack"(): $ItemStack
get "redstoneMode"(): $RedstoneMode
set "redstoneMode"(value: $RedstoneMode$Type)
get "network"(): $INetwork
get "direction"(): $Direction
get "facingBlockEntity"(): $BlockEntity
get "id"(): $ResourceLocation
get "energyUsage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkNode$Type = ($NetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkNode_ = $NetworkNode$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$FilterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterItem extends $Item {
static readonly "NBT_FLUID_FILTERS": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "setName"(arg0: $ItemStack$Type, arg1: string): void
public static "getType"(arg0: $ItemStack$Type): integer
public static "setType"(arg0: $ItemStack$Type, arg1: integer): void
public static "setMode"(arg0: $ItemStack$Type, arg1: integer): void
public static "getMode"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getIcon"(arg0: $ItemStack$Type): $ItemStack
public static "setIcon"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "setCompare"(arg0: $ItemStack$Type, arg1: integer): void
public static "getCompare"(arg0: $ItemStack$Type): integer
public static "setModFilter"(arg0: $ItemStack$Type, arg1: boolean): void
public static "getFilterName"(arg0: $ItemStack$Type): string
public static "setFluidIcon"(arg0: $ItemStack$Type, arg1: $FluidStack$Type): void
public static "isModFilter"(arg0: $ItemStack$Type): boolean
public static "getFluidIcon"(arg0: $ItemStack$Type): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItem$Type = ($FilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItem_ = $FilterItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/blockentity/grid/portable/$PortableGridDiskState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PortableGridDiskState extends $Enum<($PortableGridDiskState)> implements $StringRepresentable {
static readonly "NORMAL": $PortableGridDiskState
static readonly "NEAR_CAPACITY": $PortableGridDiskState
static readonly "FULL": $PortableGridDiskState
static readonly "DISCONNECTED": $PortableGridDiskState
static readonly "NONE": $PortableGridDiskState


public "toString"(): string
public static "values"(): ($PortableGridDiskState)[]
public static "valueOf"(arg0: string): $PortableGridDiskState
public "getId"(): integer
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "id"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableGridDiskState$Type = (("normal") | ("disconnected") | ("near_capacity") | ("none") | ("full")) | ($PortableGridDiskState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableGridDiskState_ = $PortableGridDiskState$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/item/$FluidStoragePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FluidStorageType, $FluidStorageType$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/storage/$FluidStorageType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidStoragePartItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getByType"(arg0: $FluidStorageType$Type): $FluidStoragePartItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStoragePartItem$Type = ($FluidStoragePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStoragePartItem_ = $FluidStoragePartItem$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$DiskState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DiskState extends $Enum<($DiskState)> {
static readonly "NONE": $DiskState
static readonly "NORMAL": $DiskState
static readonly "DISCONNECTED": $DiskState
static readonly "NEAR_CAPACITY": $DiskState
static readonly "FULL": $DiskState
static readonly "DISK_NEAR_CAPACITY_THRESHOLD": integer


public static "get"(arg0: integer, arg1: integer): $DiskState
public static "values"(): ($DiskState)[]
public static "valueOf"(arg0: string): $DiskState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskState$Type = (("normal") | ("disconnected") | ("near_capacity") | ("none") | ("full")) | ($DiskState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskState_ = $DiskState$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/recipe/$UpgradeWithEnchantedBookRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $UpgradeWithEnchantedBookRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: $ResourceLocation$Type, arg1: $Enchantment$Type, arg2: integer, arg3: $ItemStack$Type)

public "getResult"(): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getEnchant"(): $EnchantmentInstance
get "result"(): $ItemStack
get "enchant"(): $EnchantmentInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWithEnchantedBookRecipe$Type = ($UpgradeWithEnchantedBookRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeWithEnchantedBookRecipe_ = $UpgradeWithEnchantedBookRecipe$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/storage/disk/$IStorageDiskProvider" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StorageType, $StorageType$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$StorageType"

export interface $IStorageDiskProvider {

 "getId"(arg0: $ItemStack$Type): $UUID
 "getType"(): $StorageType
 "getCapacity"(arg0: $ItemStack$Type): integer
 "isValid"(arg0: $ItemStack$Type): boolean
 "setId"(arg0: $ItemStack$Type, arg1: $UUID$Type): void
}

export namespace $IStorageDiskProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageDiskProvider$Type = ($IStorageDiskProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageDiskProvider_ = $IStorageDiskProvider$Type;
}}
declare module "packages/com/refinedmods/refinedstorage/api/network/$INetworkNodeGraphListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INetworkNodeGraphListener {

 "onChanged"(): void

(): void
}

export namespace $INetworkNodeGraphListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNodeGraphListener$Type = ($INetworkNodeGraphListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkNodeGraphListener_ = $INetworkNodeGraphListener$Type;
}}
