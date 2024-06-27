declare module "packages/com/ultramega/cabletiers/node/$TieredRequesterNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IType, $IType$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredRequesterNetworkNode extends $TieredNetworkNode<($TieredRequesterNetworkNode)> implements $IType {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getType"(): integer
public "setType"(arg0: integer): void
public "setAmount"(arg0: integer): void
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "isMissingItems"(): boolean
public "getAmount"(): integer
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "getEnergyUsage"(): integer
public "getItemFilters"(): $IItemHandlerModifiable
public "getFluidFilters"(): $FluidInventory
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
get "type"(): integer
set "type"(value: integer)
set "amount"(value: integer)
get "missingItems"(): boolean
get "amount"(): integer
get "energyUsage"(): integer
get "itemFilters"(): $IItemHandlerModifiable
get "fluidFilters"(): $FluidInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredRequesterNetworkNode$Type = ($TieredRequesterNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredRequesterNetworkNode_ = $TieredRequesterNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/$TieredImporterNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UpgradeItemHandler, $UpgradeItemHandler$Type} from "packages/com/refinedmods/refinedstorage/inventory/item/$UpgradeItemHandler"
import {$CoverManager, $CoverManager$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverManager"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ICoverable, $ICoverable$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$ICoverable"
import {$IType, $IType$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$IWhitelistBlacklist, $IWhitelistBlacklist$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IWhitelistBlacklist"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$IComparable, $IComparable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredImporterNetworkNode extends $TieredNetworkNode<($TieredImporterNetworkNode)> implements $IComparable, $IWhitelistBlacklist, $IType, $ICoverable {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getType"(): integer
public "setType"(arg0: integer): void
public "getUpgrades"(): $UpgradeItemHandler
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getDrops"(): $IItemHandler
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "setCompare"(arg0: integer): void
public "getCompare"(): integer
public "getEnergyUsage"(): integer
public "getCoverManager"(): $CoverManager
public "getItemFilters"(): $IItemHandlerModifiable
public "getFluidFilters"(): $FluidInventory
public "setWhitelistBlacklistMode"(arg0: integer): void
public "getWhitelistBlacklistMode"(): integer
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "acceptsItem"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: $ItemStack$Type): boolean
public static "acceptsFluid"(arg0: $FluidInventory$Type, arg1: integer, arg2: integer, arg3: $FluidStack$Type): boolean
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
get "type"(): integer
set "type"(value: integer)
get "upgrades"(): $UpgradeItemHandler
get "drops"(): $IItemHandler
set "compare"(value: integer)
get "compare"(): integer
get "energyUsage"(): integer
get "coverManager"(): $CoverManager
get "itemFilters"(): $IItemHandlerModifiable
get "fluidFilters"(): $FluidInventory
set "whitelistBlacklistMode"(value: integer)
get "whitelistBlacklistMode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredImporterNetworkNode$Type = ($TieredImporterNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredImporterNetworkNode_ = $TieredImporterNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredContainerMenu" {
import {$ContentType, $ContentType$Type} from "packages/com/ultramega/cabletiers/$ContentType"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BaseContainerMenu, $BaseContainerMenu$Type} from "packages/com/refinedmods/refinedstorage/container/$BaseContainerMenu"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredContainerMenu<T extends $TieredBlockEntity<(N)>, N extends $TieredNetworkNode<(N)>> extends $BaseContainerMenu implements $Container {
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


public "getNode"(): N
public "getContentType"(): $ContentType<(any), (T), (any), (N)>
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getTier"(): $CableTier
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "countItem"(arg0: $Item$Type): integer
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getSlotLimit"(slot: integer): integer
public "getWidth"(): integer
public "clear"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public static "tryClear"(arg0: any): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "clear"(ingredient: $Ingredient$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "node"(): N
get "contentType"(): $ContentType<(any), (T), (any), (N)>
get "empty"(): boolean
get "containerSize"(): integer
get "tier"(): $CableTier
get "maxStackSize"(): integer
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
export type $TieredContainerMenu$Type<T, N> = ($TieredContainerMenu<(T), (N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredContainerMenu_<T, N> = $TieredContainerMenu$Type<(T), (N)>;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredImporterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TieredImporterNetworkNode, $TieredImporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredImporterNetworkNode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredCableBlock, $TieredCableBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredCableBlock"
import {$TieredImporterBlockEntity, $TieredImporterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredImporterBlockEntity"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredImporterBlock extends $TieredCableBlock<($TieredImporterBlockEntity), ($TieredImporterNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

public "hasConnectedState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredImporterBlock$Type = ($TieredImporterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredImporterBlock_ = $TieredImporterBlock$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredRequesterContainerMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TieredRequesterNetworkNode, $TieredRequesterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredRequesterNetworkNode"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredRequesterBlockEntity, $TieredRequesterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredRequesterBlockEntity"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredRequesterContainerMenu extends $TieredContainerMenu<($TieredRequesterBlockEntity), ($TieredRequesterNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredRequesterBlockEntity$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredRequesterContainerMenu$Type = ($TieredRequesterContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredRequesterContainerMenu_ = $TieredRequesterContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredImporterContainerMenu" {
import {$TieredImporterNetworkNode, $TieredImporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredImporterNetworkNode"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TieredImporterBlockEntity, $TieredImporterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredImporterBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredImporterContainerMenu extends $TieredContainerMenu<($TieredImporterBlockEntity), ($TieredImporterNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredImporterBlockEntity$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredImporterContainerMenu$Type = ($TieredImporterContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredImporterContainerMenu_ = $TieredImporterContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredInterfaceBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$TieredInterfaceNetworkNode, $TieredInterfaceNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredInterfaceNetworkNode"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredInterfaceBlockEntity extends $TieredBlockEntity<($TieredInterfaceNetworkNode)> {
static readonly "COMPARE": $BlockEntitySynchronizationParameter<(integer), ($TieredInterfaceBlockEntity)>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredInterfaceBlockEntity$Type = ($TieredInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredInterfaceBlockEntity_ = $TieredInterfaceBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredDestructorBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$TieredDestructorNetworkNode, $TieredDestructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredDestructorNetworkNode"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredDestructorBlockEntity extends $TieredBlockEntity<($TieredDestructorNetworkNode)> {
static readonly "COMPARE": $BlockEntitySynchronizationParameter<(integer), ($TieredDestructorBlockEntity)>
static readonly "WHITELIST_BLACKLIST": $BlockEntitySynchronizationParameter<(integer), ($TieredDestructorBlockEntity)>
static readonly "TYPE": $BlockEntitySynchronizationParameter<(integer), ($TieredDestructorBlockEntity)>
static readonly "PICKUP": $BlockEntitySynchronizationParameter<(boolean), ($TieredDestructorBlockEntity)>
static readonly "COVER_MANAGER": $BlockEntitySynchronizationParameter<($CompoundTag), ($TieredDestructorBlockEntity)>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getModelData"(): $ModelData
public "writeUpdate"(arg0: $CompoundTag$Type): $CompoundTag
public "readUpdate"(arg0: $CompoundTag$Type): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDestructorBlockEntity$Type = ($TieredDestructorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDestructorBlockEntity_ = $TieredDestructorBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredInterfaceBlock" {
import {$TieredInterfaceNetworkNode, $TieredInterfaceNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredInterfaceNetworkNode"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TieredInterfaceBlockEntity, $TieredInterfaceBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredInterfaceBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredNetworkBlock, $TieredNetworkBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredNetworkBlock"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredInterfaceBlock extends $TieredNetworkBlock<($TieredInterfaceBlockEntity), ($TieredInterfaceNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredInterfaceBlock$Type = ($TieredInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredInterfaceBlock_ = $TieredInterfaceBlock$Type;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredExporterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredCableBlock, $TieredCableBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredCableBlock"
import {$TieredExporterBlockEntity, $TieredExporterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredExporterBlockEntity"
import {$TieredExporterNetworkNode, $TieredExporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredExporterNetworkNode"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredExporterBlock extends $TieredCableBlock<($TieredExporterBlockEntity), ($TieredExporterNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

public "hasConnectedState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredExporterBlock$Type = ($TieredExporterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredExporterBlock_ = $TieredExporterBlock$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredConstructorContainerMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredConstructorBlockEntity, $TieredConstructorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredConstructorBlockEntity"
import {$TieredConstructorNetworkNode, $TieredConstructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredConstructorNetworkNode"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredConstructorContainerMenu extends $TieredContainerMenu<($TieredConstructorBlockEntity), ($TieredConstructorNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredConstructorBlockEntity$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredConstructorContainerMenu$Type = ($TieredConstructorContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredConstructorContainerMenu_ = $TieredConstructorContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/$TieredDestructorNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CoverManager, $CoverManager$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverManager"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ICoverable, $ICoverable$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$ICoverable"
import {$IType, $IType$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$IWhitelistBlacklist, $IWhitelistBlacklist$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IWhitelistBlacklist"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$IComparable, $IComparable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredDestructorNetworkNode extends $TieredNetworkNode<($TieredDestructorNetworkNode)> implements $IComparable, $IWhitelistBlacklist, $IType, $ICoverable {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getType"(): integer
public "setType"(arg0: integer): void
public "getUpgrades"(): $IItemHandler
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getDrops"(): $IItemHandler
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "setCompare"(arg0: integer): void
public "getCompare"(): integer
public "getEnergyUsage"(): integer
public "getCoverManager"(): $CoverManager
public "getItemFilters"(): $IItemHandlerModifiable
public "getFluidFilters"(): $FluidInventory
public "setWhitelistBlacklistMode"(arg0: integer): void
public "getWhitelistBlacklistMode"(): integer
public "setPickupItem"(arg0: boolean): void
public "isPickupItem"(): boolean
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "acceptsItem"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: $ItemStack$Type): boolean
public static "acceptsFluid"(arg0: $FluidInventory$Type, arg1: integer, arg2: integer, arg3: $FluidStack$Type): boolean
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
get "type"(): integer
set "type"(value: integer)
get "upgrades"(): $IItemHandler
get "drops"(): $IItemHandler
set "compare"(value: integer)
get "compare"(): integer
get "energyUsage"(): integer
get "coverManager"(): $CoverManager
get "itemFilters"(): $IItemHandlerModifiable
get "fluidFilters"(): $FluidInventory
set "whitelistBlacklistMode"(value: integer)
get "whitelistBlacklistMode"(): integer
set "pickupItem"(value: boolean)
get "pickupItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDestructorNetworkNode$Type = ($TieredDestructorNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDestructorNetworkNode_ = $TieredDestructorNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/$TieredInterfaceNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IComparable, $IComparable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredInterfaceNetworkNode extends $TieredNetworkNode<($TieredInterfaceNetworkNode)> implements $IComparable {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getUpgrades"(): $IItemHandler
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getExportItems"(): $IItemHandler
public "getImportItems"(): $IItemHandler
public "getItems"(): $IItemHandler
public "getDrops"(): $IItemHandler
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "getExportFilterItems"(): $IItemHandler
public "setCompare"(arg0: integer): void
public "getCompare"(): integer
public "getEnergyUsage"(): integer
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
get "upgrades"(): $IItemHandler
get "exportItems"(): $IItemHandler
get "importItems"(): $IItemHandler
get "items"(): $IItemHandler
get "drops"(): $IItemHandler
get "exportFilterItems"(): $IItemHandler
set "compare"(value: integer)
get "compare"(): integer
get "energyUsage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredInterfaceNetworkNode$Type = ($TieredInterfaceNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredInterfaceNetworkNode_ = $TieredInterfaceNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredDiskManipulatorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TieredDiskManipulatorNetworkNode, $TieredDiskManipulatorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/diskmanipulator/$TieredDiskManipulatorNetworkNode"
import {$TieredDiskManipulatorBlockEntity, $TieredDiskManipulatorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredDiskManipulatorBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredNetworkBlock, $TieredNetworkBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredNetworkBlock"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredDiskManipulatorBlock extends $TieredNetworkBlock<($TieredDiskManipulatorBlockEntity), ($TieredDiskManipulatorNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDiskManipulatorBlock$Type = ($TieredDiskManipulatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDiskManipulatorBlock_ = $TieredDiskManipulatorBlock$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/$TieredConstructorNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CoverManager, $CoverManager$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverManager"
import {$ICoverable, $ICoverable$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$ICoverable"
import {$IType, $IType$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$IComparable, $IComparable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredConstructorNetworkNode extends $TieredNetworkNode<($TieredConstructorNetworkNode)> implements $IComparable, $IType, $ICoverable {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getType"(): integer
public "setType"(arg0: integer): void
public "getUpgrades"(): $IItemHandler
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getDrops"(): $IItemHandler
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "setCompare"(arg0: integer): void
public "getCompare"(): integer
public "getEnergyUsage"(): integer
public "getCoverManager"(): $CoverManager
public "getItemFilters"(): $IItemHandlerModifiable
public "getFluidFilters"(): $FluidInventory
public "setDrop"(arg0: boolean): void
public "isDrop"(): boolean
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
get "type"(): integer
set "type"(value: integer)
get "upgrades"(): $IItemHandler
get "drops"(): $IItemHandler
set "compare"(value: integer)
get "compare"(): integer
get "energyUsage"(): integer
get "coverManager"(): $CoverManager
get "itemFilters"(): $IItemHandlerModifiable
get "fluidFilters"(): $FluidInventory
set "drop"(value: boolean)
get "drop"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredConstructorNetworkNode$Type = ($TieredConstructorNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredConstructorNetworkNode_ = $TieredConstructorNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredCableBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$CableBlock, $CableBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$CableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ContentType, $ContentType$Type} from "packages/com/ultramega/cabletiers/$ContentType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockDirection, $BlockDirection$Type} from "packages/com/refinedmods/refinedstorage/block/$BlockDirection"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredCableBlock<T extends $TieredBlockEntity<(N)>, N extends $TieredNetworkNode<(N)>> extends $CableBlock {
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


public "getContentType"(): $ContentType<(any), (T), (any), (N)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTier"(): $CableTier
public "getDirection"(): $BlockDirection
get "contentType"(): $ContentType<(any), (T), (any), (N)>
get "tier"(): $CableTier
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredCableBlock$Type<T, N> = ($TieredCableBlock<(T), (N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredCableBlock_<T, N> = $TieredCableBlock$Type<(T), (N)>;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredImporterBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TieredImporterNetworkNode, $TieredImporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredImporterNetworkNode"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredImporterBlockEntity extends $TieredBlockEntity<($TieredImporterNetworkNode)> {
static readonly "COMPARE": $BlockEntitySynchronizationParameter<(integer), ($TieredImporterBlockEntity)>
static readonly "WHITELIST_BLACKLIST": $BlockEntitySynchronizationParameter<(integer), ($TieredImporterBlockEntity)>
static readonly "TYPE": $BlockEntitySynchronizationParameter<(integer), ($TieredImporterBlockEntity)>
static readonly "COVER_MANAGER": $BlockEntitySynchronizationParameter<($CompoundTag), ($TieredImporterBlockEntity)>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getModelData"(): $ModelData
public "writeUpdate"(arg0: $CompoundTag$Type): $CompoundTag
public "readUpdate"(arg0: $CompoundTag$Type): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredImporterBlockEntity$Type = ($TieredImporterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredImporterBlockEntity_ = $TieredImporterBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$ContentType, $ContentType$Type} from "packages/com/ultramega/cabletiers/$ContentType"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredBlockEntity<N extends $TieredNetworkNode<(N)>> extends $NetworkNodeBlockEntity<(N)> {
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>


public "getContentType"(): $ContentType<(any), (any), (any), (N)>
public "createNode"(arg0: $Level$Type, arg1: $BlockPos$Type): N
public "getTier"(): $CableTier
get "contentType"(): $ContentType<(any), (any), (any), (N)>
get "tier"(): $CableTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredBlockEntity$Type<N> = ($TieredBlockEntity<(N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredBlockEntity_<N> = $TieredBlockEntity$Type<(N)>;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredNetworkBlock" {
import {$ContentType, $ContentType$Type} from "packages/com/ultramega/cabletiers/$ContentType"
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
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredNetworkBlock<T extends $TieredBlockEntity<(N)>, N extends $TieredNetworkNode<(N)>> extends $NetworkNodeBlock {
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


public "getContentType"(): $ContentType<(any), (T), (any), (N)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "hasConnectedState"(): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTier"(): $CableTier
public "getDirection"(): $BlockDirection
get "contentType"(): $ContentType<(any), (T), (any), (N)>
get "tier"(): $CableTier
get "direction"(): $BlockDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredNetworkBlock$Type<T, N> = ($TieredNetworkBlock<(T), (N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredNetworkBlock_<T, N> = $TieredNetworkBlock$Type<(T), (N)>;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredInterfaceContainerMenu" {
import {$TieredInterfaceNetworkNode, $TieredInterfaceNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredInterfaceNetworkNode"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$TieredInterfaceBlockEntity, $TieredInterfaceBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredInterfaceBlockEntity"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredInterfaceContainerMenu extends $TieredContainerMenu<($TieredInterfaceBlockEntity), ($TieredInterfaceNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredInterfaceBlockEntity$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredInterfaceContainerMenu$Type = ($TieredInterfaceContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredInterfaceContainerMenu_ = $TieredInterfaceContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/$CableTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CableTier extends $Enum<($CableTier)> {
static readonly "ELITE": $CableTier
static readonly "ULTRA": $CableTier
static readonly "MEGA": $CableTier
static readonly "VALUES": ($CableTier)[]


public "getName"(): string
public static "values"(): ($CableTier)[]
public static "valueOf"(arg0: string): $CableTier
public "getDefaultSpeedMultiplier"(): double
public "getSlotsMultiplier"(): integer
get "name"(): string
get "defaultSpeedMultiplier"(): double
get "slotsMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableTier$Type = (("mega") | ("elite") | ("ultra")) | ($CableTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableTier_ = $CableTier$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredRequesterBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$TieredRequesterNetworkNode, $TieredRequesterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredRequesterNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredRequesterBlockEntity extends $TieredBlockEntity<($TieredRequesterNetworkNode)> {
static readonly "TYPE": $BlockEntitySynchronizationParameter<(integer), ($TieredRequesterBlockEntity)>
static readonly "AMOUNT": $BlockEntitySynchronizationParameter<(integer), ($TieredRequesterBlockEntity)>
static readonly "MISSING": $BlockEntitySynchronizationParameter<(boolean), ($TieredRequesterBlockEntity)>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredRequesterBlockEntity$Type = ($TieredRequesterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredRequesterBlockEntity_ = $TieredRequesterBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/$TieredNetworkNode" {
import {$ContentType, $ContentType$Type} from "packages/com/ultramega/cabletiers/$ContentType"
import {$UpgradeItemHandler, $UpgradeItemHandler$Type} from "packages/com/refinedmods/refinedstorage/inventory/item/$UpgradeItemHandler"
import {$NetworkNode, $NetworkNode$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$NetworkNode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredNetworkNode<N extends $TieredNetworkNode<(N)>> extends $NetworkNode {


public "getId"(): $ResourceLocation
public "getContentType"(): $ContentType<(any), (any), (any), (N)>
public "getAdditionalEnergyCost"(): integer
public "getTieredStackInteractCount"(): integer
public "getTieredStackInteractCount"(arg0: $UpgradeItemHandler$Type): integer
public "getTier"(): $CableTier
public "getSpeedMultiplier"(arg0: integer): double
get "id"(): $ResourceLocation
get "contentType"(): $ContentType<(any), (any), (any), (N)>
get "additionalEnergyCost"(): integer
get "tieredStackInteractCount"(): integer
get "tier"(): $CableTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredNetworkNode$Type<N> = ($TieredNetworkNode<(N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredNetworkNode_<N> = $TieredNetworkNode$Type<(N)>;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredRequesterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TieredRequesterNetworkNode, $TieredRequesterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredRequesterNetworkNode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredNetworkBlock, $TieredNetworkBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredNetworkBlock"
import {$TieredRequesterBlockEntity, $TieredRequesterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredRequesterBlockEntity"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredRequesterBlock extends $TieredNetworkBlock<($TieredRequesterBlockEntity), ($TieredRequesterNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredRequesterBlock$Type = ($TieredRequesterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredRequesterBlock_ = $TieredRequesterBlock$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredExporterContainerMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TieredExporterBlockEntity, $TieredExporterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredExporterBlockEntity"
import {$TieredExporterNetworkNode, $TieredExporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredExporterNetworkNode"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredExporterContainerMenu extends $TieredContainerMenu<($TieredExporterBlockEntity), ($TieredExporterNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredExporterBlockEntity$Type)

public "broadcastChanges"(): void
public "initSlots"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredExporterContainerMenu$Type = ($TieredExporterContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredExporterContainerMenu_ = $TieredExporterContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredDiskManipulatorContainerMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TieredDiskManipulatorNetworkNode, $TieredDiskManipulatorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/diskmanipulator/$TieredDiskManipulatorNetworkNode"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$TieredDiskManipulatorBlockEntity, $TieredDiskManipulatorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredDiskManipulatorBlockEntity"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredDiskManipulatorContainerMenu extends $TieredContainerMenu<($TieredDiskManipulatorBlockEntity), ($TieredDiskManipulatorNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredDiskManipulatorBlockEntity$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDiskManipulatorContainerMenu$Type = ($TieredDiskManipulatorContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDiskManipulatorContainerMenu_ = $TieredDiskManipulatorContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/container/$TieredDestructorContainerMenu" {
import {$TieredDestructorBlockEntity, $TieredDestructorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredDestructorBlockEntity"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TieredDestructorNetworkNode, $TieredDestructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredDestructorNetworkNode"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"

export class $TieredDestructorContainerMenu extends $TieredContainerMenu<($TieredDestructorBlockEntity), ($TieredDestructorNetworkNode)> {
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

constructor(arg0: integer, arg1: $Player$Type, arg2: $TieredDestructorBlockEntity$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDestructorContainerMenu$Type = ($TieredDestructorContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDestructorContainerMenu_ = $TieredDestructorContainerMenu$Type;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredConstructorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TieredConstructorBlockEntity, $TieredConstructorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredConstructorBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredCableBlock, $TieredCableBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredCableBlock"
import {$TieredConstructorNetworkNode, $TieredConstructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredConstructorNetworkNode"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredConstructorBlock extends $TieredCableBlock<($TieredConstructorBlockEntity), ($TieredConstructorNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredConstructorBlock$Type = ($TieredConstructorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredConstructorBlock_ = $TieredConstructorBlock$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredDiskManipulatorBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DiskState, $DiskState$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$DiskState"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TieredDiskManipulatorNetworkNode, $TieredDiskManipulatorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/diskmanipulator/$TieredDiskManipulatorNetworkNode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredDiskManipulatorBlockEntity extends $TieredBlockEntity<($TieredDiskManipulatorNetworkNode)> {
static readonly "COMPARE": $BlockEntitySynchronizationParameter<(integer), ($TieredDiskManipulatorBlockEntity)>
static readonly "WHITELIST_BLACKLIST": $BlockEntitySynchronizationParameter<(integer), ($TieredDiskManipulatorBlockEntity)>
static readonly "TYPE": $BlockEntitySynchronizationParameter<(integer), ($TieredDiskManipulatorBlockEntity)>
static readonly "IO_MODE": $BlockEntitySynchronizationParameter<(integer), ($TieredDiskManipulatorBlockEntity)>
static readonly "DISK_STATE_PROPERTY": $ModelProperty<(($DiskState)[])>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getModelData"(): $ModelData
public "writeUpdate"(arg0: $CompoundTag$Type): $CompoundTag
public "readUpdate"(arg0: $CompoundTag$Type): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDiskManipulatorBlockEntity$Type = ($TieredDiskManipulatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDiskManipulatorBlockEntity_ = $TieredDiskManipulatorBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredExporterBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$TieredExporterNetworkNode, $TieredExporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredExporterNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredExporterBlockEntity extends $TieredBlockEntity<($TieredExporterNetworkNode)> {
static readonly "COMPARE": $BlockEntitySynchronizationParameter<(integer), ($TieredExporterBlockEntity)>
static readonly "TYPE": $BlockEntitySynchronizationParameter<(integer), ($TieredExporterBlockEntity)>
static readonly "COVER_MANAGER": $BlockEntitySynchronizationParameter<($CompoundTag), ($TieredExporterBlockEntity)>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getModelData"(): $ModelData
public "writeUpdate"(arg0: $CompoundTag$Type): $CompoundTag
public "readUpdate"(arg0: $CompoundTag$Type): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredExporterBlockEntity$Type = ($TieredExporterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredExporterBlockEntity_ = $TieredExporterBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/$TieredExporterNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UpgradeItemHandler, $UpgradeItemHandler$Type} from "packages/com/refinedmods/refinedstorage/inventory/item/$UpgradeItemHandler"
import {$CoverManager, $CoverManager$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/cover/$CoverManager"
import {$ICoverable, $ICoverable$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$ICoverable"
import {$IType, $IType$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$IComparable, $IComparable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredExporterNetworkNode extends $TieredNetworkNode<($TieredExporterNetworkNode)> implements $IComparable, $IType, $ICoverable {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getType"(): integer
public "setType"(arg0: integer): void
public "getUpgrades"(): $UpgradeItemHandler
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getDrops"(): $IItemHandler
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "setCompare"(arg0: integer): void
public "getCompare"(): integer
public "getEnergyUsage"(): integer
public "getCoverManager"(): $CoverManager
public "getItemFilters"(): $IItemHandlerModifiable
public "getFluidFilters"(): $FluidInventory
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
get "type"(): integer
set "type"(value: integer)
get "upgrades"(): $UpgradeItemHandler
get "drops"(): $IItemHandler
set "compare"(value: integer)
get "compare"(): integer
get "energyUsage"(): integer
get "coverManager"(): $CoverManager
get "itemFilters"(): $IItemHandlerModifiable
get "fluidFilters"(): $FluidInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredExporterNetworkNode$Type = ($TieredExporterNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredExporterNetworkNode_ = $TieredExporterNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/node/diskmanipulator/$TieredDiskManipulatorNetworkNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DiskState, $DiskState$Type} from "packages/com/refinedmods/refinedstorage/apiimpl/network/node/$DiskState"
import {$AccessType, $AccessType$Type} from "packages/com/refinedmods/refinedstorage/api/storage/$AccessType"
import {$IStorageDiskContainerContext, $IStorageDiskContainerContext$Type} from "packages/com/refinedmods/refinedstorage/api/storage/disk/$IStorageDiskContainerContext"
import {$ProxyItemHandler, $ProxyItemHandler$Type} from "packages/com/refinedmods/refinedstorage/inventory/item/$ProxyItemHandler"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IType, $IType$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworkNodeProxy, $INetworkNodeProxy$Type} from "packages/com/refinedmods/refinedstorage/api/network/node/$INetworkNodeProxy"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$IWhitelistBlacklist, $IWhitelistBlacklist$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IWhitelistBlacklist"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntitySynchronizationClientListener, $BlockEntitySynchronizationClientListener$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationClientListener"
import {$IComparable, $IComparable$Type} from "packages/com/refinedmods/refinedstorage/blockentity/config/$IComparable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidInventory, $FluidInventory$Type} from "packages/com/refinedmods/refinedstorage/inventory/fluid/$FluidInventory"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredDiskManipulatorNetworkNode extends $TieredNetworkNode<($TieredDiskManipulatorNetworkNode)> implements $IComparable, $IWhitelistBlacklist, $IType, $IStorageDiskContainerContext {
static readonly "IO_MODE_INSERT": integer
static readonly "IO_MODE_EXTRACT": integer

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type)

public "update"(): void
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getType"(): integer
public "setType"(arg0: integer): void
public "getUpgrades"(): $IItemHandler
public "readConfiguration"(arg0: $CompoundTag$Type): void
public "getDisks"(): $ProxyItemHandler
public "getDrops"(): $IItemHandler
public "writeConfiguration"(arg0: $CompoundTag$Type): $CompoundTag
public "getAccessType"(): $AccessType
public "setCompare"(arg0: integer): void
public "getCompare"(): integer
public "getEnergyUsage"(): integer
public "getItemFilters"(): $IItemHandlerModifiable
public "getFluidFilters"(): $FluidInventory
public "setWhitelistBlacklistMode"(arg0: integer): void
public "getWhitelistBlacklistMode"(): integer
public "getDiskState"(): ($DiskState)[]
public "setIoMode"(arg0: integer): void
public "getIoMode"(): integer
public "getInputDisks"(): $IItemHandler
public "getOutputDisks"(): $IItemHandler
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type): $BlockEntitySynchronizationParameter<(integer), (T)>
public static "acceptsItem"(arg0: $IItemHandler$Type, arg1: integer, arg2: integer, arg3: $ItemStack$Type): boolean
public static "acceptsFluid"(arg0: $FluidInventory$Type, arg1: integer, arg2: integer, arg3: $FluidStack$Type): boolean
public static "createParameter"<T extends ($BlockEntity) & ($INetworkNodeProxy<(any)>)>(arg0: $ResourceLocation$Type, arg1: $BlockEntitySynchronizationClientListener$Type<(integer)>): $BlockEntitySynchronizationParameter<(integer), (T)>
get "type"(): integer
set "type"(value: integer)
get "upgrades"(): $IItemHandler
get "disks"(): $ProxyItemHandler
get "drops"(): $IItemHandler
get "accessType"(): $AccessType
set "compare"(value: integer)
get "compare"(): integer
get "energyUsage"(): integer
get "itemFilters"(): $IItemHandlerModifiable
get "fluidFilters"(): $FluidInventory
set "whitelistBlacklistMode"(value: integer)
get "whitelistBlacklistMode"(): integer
get "diskState"(): ($DiskState)[]
set "ioMode"(value: integer)
get "ioMode"(): integer
get "inputDisks"(): $IItemHandler
get "outputDisks"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDiskManipulatorNetworkNode$Type = ($TieredDiskManipulatorNetworkNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDiskManipulatorNetworkNode_ = $TieredDiskManipulatorNetworkNode$Type;
}}
declare module "packages/com/ultramega/cabletiers/blockentity/$TieredConstructorBlockEntity" {
import {$NetworkNodeBlockEntity, $NetworkNodeBlockEntity$Type} from "packages/com/refinedmods/refinedstorage/blockentity/$NetworkNodeBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntitySynchronizationParameter, $BlockEntitySynchronizationParameter$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationParameter"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TieredConstructorNetworkNode, $TieredConstructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredConstructorNetworkNode"
import {$BlockEntitySynchronizationSpec, $BlockEntitySynchronizationSpec$Type} from "packages/com/refinedmods/refinedstorage/blockentity/data/$BlockEntitySynchronizationSpec"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredConstructorBlockEntity extends $TieredBlockEntity<($TieredConstructorNetworkNode)> {
static readonly "COMPARE": $BlockEntitySynchronizationParameter<(integer), ($TieredConstructorBlockEntity)>
static readonly "TYPE": $BlockEntitySynchronizationParameter<(integer), ($TieredConstructorBlockEntity)>
static readonly "DROP": $BlockEntitySynchronizationParameter<(boolean), ($TieredConstructorBlockEntity)>
static readonly "COVER_MANAGER": $BlockEntitySynchronizationParameter<($CompoundTag), ($TieredConstructorBlockEntity)>
static "SPEC": $BlockEntitySynchronizationSpec
static readonly "REDSTONE_MODE": $BlockEntitySynchronizationParameter<(integer), ($NetworkNodeBlockEntity<(any)>)>

constructor(arg0: $CableTier$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getModelData"(): $ModelData
public "writeUpdate"(arg0: $CompoundTag$Type): $CompoundTag
public "readUpdate"(arg0: $CompoundTag$Type): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredConstructorBlockEntity$Type = ($TieredConstructorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredConstructorBlockEntity_ = $TieredConstructorBlockEntity$Type;
}}
declare module "packages/com/ultramega/cabletiers/$ContentType" {
import {$TieredInterfaceNetworkNode, $TieredInterfaceNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredInterfaceNetworkNode"
import {$TieredImporterNetworkNode, $TieredImporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredImporterNetworkNode"
import {$TieredRequesterNetworkNode, $TieredRequesterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredRequesterNetworkNode"
import {$TieredDiskManipulatorBlockEntity, $TieredDiskManipulatorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredDiskManipulatorBlockEntity"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$BaseBlock"
import {$TieredDiskManipulatorBlock, $TieredDiskManipulatorBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredDiskManipulatorBlock"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$TieredConstructorBlockEntity, $TieredConstructorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredConstructorBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TieredInterfaceContainerMenu, $TieredInterfaceContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredInterfaceContainerMenu"
import {$TieredExporterBlockEntity, $TieredExporterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredExporterBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TieredImporterBlockEntity, $TieredImporterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredImporterBlockEntity"
import {$TieredImporterBlock, $TieredImporterBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredImporterBlock"
import {$TieredExporterContainerMenu, $TieredExporterContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredExporterContainerMenu"
import {$TieredBlockEntity, $TieredBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredBlockEntity"
import {$TieredConstructorBlock, $TieredConstructorBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredConstructorBlock"
import {$TieredRequesterBlockEntity, $TieredRequesterBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredRequesterBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TieredRequesterBlock, $TieredRequesterBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredRequesterBlock"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$TieredDestructorContainerMenu, $TieredDestructorContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredDestructorContainerMenu"
import {$TieredDiskManipulatorNetworkNode, $TieredDiskManipulatorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/diskmanipulator/$TieredDiskManipulatorNetworkNode"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TieredInterfaceBlockEntity, $TieredInterfaceBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredInterfaceBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TieredDestructorBlock, $TieredDestructorBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredDestructorBlock"
import {$TieredInterfaceBlock, $TieredInterfaceBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredInterfaceBlock"
import {$TieredContainerMenu, $TieredContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredContainerMenu"
import {$TieredConstructorContainerMenu, $TieredConstructorContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredConstructorContainerMenu"
import {$TieredExporterBlock, $TieredExporterBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredExporterBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TieredNetworkNode, $TieredNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredNetworkNode"
import {$TieredDestructorBlockEntity, $TieredDestructorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredDestructorBlockEntity"
import {$TieredExporterNetworkNode, $TieredExporterNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredExporterNetworkNode"
import {$TieredDiskManipulatorContainerMenu, $TieredDiskManipulatorContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredDiskManipulatorContainerMenu"
import {$TieredRequesterContainerMenu, $TieredRequesterContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredRequesterContainerMenu"
import {$TieredDestructorNetworkNode, $TieredDestructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredDestructorNetworkNode"
import {$TieredImporterContainerMenu, $TieredImporterContainerMenu$Type} from "packages/com/ultramega/cabletiers/container/$TieredImporterContainerMenu"
import {$TieredConstructorNetworkNode, $TieredConstructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredConstructorNetworkNode"
import {$FMLCommonSetupEvent, $FMLCommonSetupEvent$Type} from "packages/net/minecraftforge/fml/event/lifecycle/$FMLCommonSetupEvent"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $ContentType<B extends $BaseBlock, T extends $TieredBlockEntity<(N)>, C extends $TieredContainerMenu<(T), (N)>, N extends $TieredNetworkNode<(N)>> {
static readonly "IMPORTER": $ContentType<($TieredImporterBlock), ($TieredImporterBlockEntity), ($TieredImporterContainerMenu), ($TieredImporterNetworkNode)>
static readonly "EXPORTER": $ContentType<($TieredExporterBlock), ($TieredExporterBlockEntity), ($TieredExporterContainerMenu), ($TieredExporterNetworkNode)>
static readonly "CONSTRUCTOR": $ContentType<($TieredConstructorBlock), ($TieredConstructorBlockEntity), ($TieredConstructorContainerMenu), ($TieredConstructorNetworkNode)>
static readonly "DESTRUCTOR": $ContentType<($TieredDestructorBlock), ($TieredDestructorBlockEntity), ($TieredDestructorContainerMenu), ($TieredDestructorNetworkNode)>
static readonly "DISK_MANIPULATOR": $ContentType<($TieredDiskManipulatorBlock), ($TieredDiskManipulatorBlockEntity), ($TieredDiskManipulatorContainerMenu), ($TieredDiskManipulatorNetworkNode)>
static readonly "INTERFACE": $ContentType<($TieredInterfaceBlock), ($TieredInterfaceBlockEntity), ($TieredInterfaceContainerMenu), ($TieredInterfaceNetworkNode)>
static readonly "REQUESTER": $ContentType<($TieredRequesterBlock), ($TieredRequesterBlockEntity), ($TieredRequesterContainerMenu), ($TieredRequesterNetworkNode)>
static readonly "CONTENT_TYPES": ($ContentType<(any), (any), (any), (any)>)[]
static readonly "TAB_CABLETIERS": $RegistryObject<($CreativeModeTab)>


public "getName"(arg0: $CableTier$Type): string
public static "init"(): void
public "getId"(arg0: $CableTier$Type): $ResourceLocation
public "getItem"(arg0: $CableTier$Type): $Item
public "getBlock"(arg0: $CableTier$Type): B
public "getBlockEntityType"(arg0: $CableTier$Type): $BlockEntityType<(T)>
public "createNetworkNode"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $CableTier$Type): N
public static "registerWithRS"(arg0: $FMLCommonSetupEvent$Type): void
public "createContainer"(arg0: integer, arg1: $Player$Type, arg2: T): C
public "getContainerType"(arg0: $CableTier$Type): $MenuType<(C)>
public "getNetworkNodeClass"(arg0: $CableTier$Type): $Class<(N)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentType$Type<B, T, C, N> = ($ContentType<(B), (T), (C), (N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentType_<B, T, C, N> = $ContentType$Type<(B), (T), (C), (N)>;
}}
declare module "packages/com/ultramega/cabletiers/blocks/$TieredDestructorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TieredCableBlock, $TieredCableBlock$Type} from "packages/com/ultramega/cabletiers/blocks/$TieredCableBlock"
import {$TieredDestructorBlockEntity, $TieredDestructorBlockEntity$Type} from "packages/com/ultramega/cabletiers/blockentity/$TieredDestructorBlockEntity"
import {$TieredDestructorNetworkNode, $TieredDestructorNetworkNode$Type} from "packages/com/ultramega/cabletiers/node/$TieredDestructorNetworkNode"
import {$CableTier, $CableTier$Type} from "packages/com/ultramega/cabletiers/$CableTier"

export class $TieredDestructorBlock extends $TieredCableBlock<($TieredDestructorBlockEntity), ($TieredDestructorNetworkNode)> {
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

constructor(arg0: $CableTier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredDestructorBlock$Type = ($TieredDestructorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredDestructorBlock_ = $TieredDestructorBlock$Type;
}}
