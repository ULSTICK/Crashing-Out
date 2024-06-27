declare module "packages/com/buuz135/industrial/block/resourceproduction/$FluidSievingMachineBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidSievingMachineTile, $FluidSievingMachineTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidSievingMachineTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluidSievingMachineBlock extends $IndustrialBlock<($FluidSievingMachineTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidSievingMachineTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidSievingMachineTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSievingMachineBlock$Type = ($FluidSievingMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSievingMachineBlock_ = $FluidSievingMachineBlock$Type;
}}
declare module "packages/com/buuz135/industrial/item/$LaserLensItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LaserLensItem extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer)

public "getName"(arg0: $ItemStack$Type): $Component
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserLensItem$Type = ($LaserLensItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserLensItem_ = $LaserLensItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$MechanicalDirtTile" {
import {$IndustrialWorkingTile, $IndustrialWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile"
import {$SidedFluidTankComponent, $SidedFluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$SidedFluidTankComponent"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MechanicalDirtTile extends $IndustrialWorkingTile<($MechanicalDirtTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $MechanicalDirtTile$Type): void
public "getMeat"(): $SidedFluidTankComponent<($MechanicalDirtTile)>
public "getMaxProgress"(): integer
get "meat"(): $SidedFluidTankComponent<($MechanicalDirtTile)>
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalDirtTile$Type = ($MechanicalDirtTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalDirtTile_ = $MechanicalDirtTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedSimpleCompactingDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SimpleCompactingDrawerBlock, $SimpleCompactingDrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$SimpleCompactingDrawerBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SimpleCompactingDrawerTile, $SimpleCompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$SimpleCompactingDrawerTile"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"

export class $FramedSimpleCompactingDrawerBlock extends $SimpleCompactingDrawerBlock {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedSimpleCompactingDrawerBlock$Type = ($FramedSimpleCompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedSimpleCompactingDrawerBlock_ = $FramedSimpleCompactingDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$DrawerControllerBlock" {
import {$DrawerControllerTile, $DrawerControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$DrawerControllerTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StorageControllerBlock, $StorageControllerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerBlock"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DrawerControllerBlock extends $StorageControllerBlock<($DrawerControllerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerBlock$Type = ($DrawerControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerControllerBlock_ = $DrawerControllerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$DrawerControllerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler"
import {$ControllerFluidHandler, $ControllerFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DrawerControllerTile extends $StorageControllerTile<($DrawerControllerTile)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler

constructor(arg0: $BasicTileBlock$Type<($DrawerControllerTile$Type)>, arg1: $BlockEntityType$Type<($DrawerControllerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getSelf"(): $DrawerControllerTile
get "self"(): $DrawerControllerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerTile$Type = ($DrawerControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerControllerTile_ = $DrawerControllerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$OreLaserBaseTile" {
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IndustrialMachineTile, $IndustrialMachineTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialMachineTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ILaserBase, $ILaserBase$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$ILaserBase"

export class $OreLaserBaseTile extends $IndustrialMachineTile<($OreLaserBaseTile)> implements $ILaserBase<($OreLaserBaseTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "initClient"(): void
public "setChanged"(): void
public "canAcceptAugment"(arg0: $ItemStack$Type): boolean
public "getBar"(): $ProgressBarComponent<($OreLaserBaseTile)>
get "bar"(): $ProgressBarComponent<($OreLaserBaseTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreLaserBaseTile$Type = ($OreLaserBaseTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreLaserBaseTile_ = $OreLaserBaseTile$Type;
}}
declare module "packages/com/buuz135/industrial/fluid/$OreFluidInstance" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$DeferredRegistryHelper, $DeferredRegistryHelper$Type} from "packages/com/hrznstudio/titanium/module/$DeferredRegistryHelper"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"

export class $OreFluidInstance {

constructor(arg0: $DeferredRegistryHelper$Type, arg1: string, arg2: $FluidType$Properties$Type, arg3: $IClientFluidTypeExtensions$Type, arg4: $TitaniumTab$Type)

public "getFluid"(): string
public "getFluidType"(): $RegistryObject<($FluidType)>
public "getBucketFluid"(): $Item
public "getFlowingFluid"(): $Fluid
public "getBlockFluid"(): $Block
public "getSourceFluid"(): $Fluid
get "fluid"(): string
get "fluidType"(): $RegistryObject<($FluidType)>
get "bucketFluid"(): $Item
get "flowingFluid"(): $Fluid
get "blockFluid"(): $Block
get "sourceFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluidInstance$Type = ($OreFluidInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreFluidInstance_ = $OreFluidInstance$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$LaserDrillTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LaserDrillTile extends $IndustrialAreaWorkingTile<($LaserDrillTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getTarget"(): $BlockPos
public "work"(): $IndustrialWorkingTile$WorkAction<>
public "initClient"(): void
public "getSelf"(): $LaserDrillTile
public "findTarget"(): void
public "isValidTarget"(arg0: $BlockPos$Type): boolean
public "getWorkingArea"(): $VoxelShape
public "getMaxProgress"(): integer
get "target"(): $BlockPos
get "self"(): $LaserDrillTile
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserDrillTile$Type = ($LaserDrillTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserDrillTile_ = $LaserDrillTile$Type;
}}
declare module "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgrade" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBlockContainer, $IBlockContainer$Type} from "packages/com/buuz135/industrial/api/$IBlockContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IGuiComponent, $IGuiComponent$Type} from "packages/com/buuz135/industrial/api/conveyor/gui/$IGuiComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConveyorUpgradeFactory, $ConveyorUpgradeFactory$Type} from "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgradeFactory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ConveyorUpgrade implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $IBlockContainer$Type<(any)>, arg1: $ConveyorUpgradeFactory$Type, arg2: $Direction$Type)

public "update"(): void
public "getFactory"(): $ConveyorUpgradeFactory
public "getPos"(): $BlockPos
public "getContainer"(): $IBlockContainer<(any)>
public "handleButtonInteraction"(arg0: integer, arg1: $CompoundTag$Type): void
public "getSide"(): $Direction
public "getBoundingBox"(): $VoxelShape
public "getDrops"(): $Collection<($ItemStack)>
public "ignoresCollision"(): boolean
public "hasGui"(): boolean
public "onUpgradeActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "getRedstoneOutput"(): integer
public "handleEntity"(arg0: $Entity$Type): void
public "addComponentsToGui"(arg0: $List$Type<($IGuiComponent$Type)>): void
public "onUpgradeRemoved"(): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getWorld"(): $Level
get "factory"(): $ConveyorUpgradeFactory
get "pos"(): $BlockPos
get "container"(): $IBlockContainer<(any)>
get "side"(): $Direction
get "boundingBox"(): $VoxelShape
get "drops"(): $Collection<($ItemStack)>
get "redstoneOutput"(): integer
get "world"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorUpgrade$Type = ($ConveyorUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorUpgrade_ = $ConveyorUpgrade$Type;
}}
declare module "packages/com/buuz135/industrial/api/$IBlockContainer" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockContainer<T> {

 "removeUpgrade"(arg0: $Direction$Type, arg1: boolean): void
 "addUpgrade"(arg0: $Direction$Type, arg1: T): void
 "getBlockWorld"(): $Level
 "requestSync"(): void
 "requestFluidSync"(): void
 "hasUpgrade"(arg0: $Direction$Type): boolean
 "getBlockPosition"(): $BlockPos
 "getEntityFilter"(): $List<(integer)>
}

export namespace $IBlockContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockContainer$Type<T> = ($IBlockContainer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockContainer_<T> = $IBlockContainer$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$FramedControllerExtensionTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FramedDrawerModelData, $FramedDrawerModelData$Type} from "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FramedControllerExtensionTile extends $StorageControllerExtensionTile<($FramedControllerExtensionTile)> {

constructor(arg0: $BasicTileBlock$Type<($FramedControllerExtensionTile$Type)>, arg1: $BlockEntityType$Type<($FramedControllerExtensionTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getSelf"(): $FramedControllerExtensionTile
public "getModelData"(): $ModelData
public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$Type): void
get "self"(): $FramedControllerExtensionTile
get "modelData"(): $ModelData
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionTile$Type = ($FramedControllerExtensionTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedControllerExtensionTile_ = $FramedControllerExtensionTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ConnectedDrawers, $ConnectedDrawers$Type} from "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers"

export class $ControllerFluidHandler implements $IFluidHandler {

constructor()

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTankCapacity"(arg0: integer): integer
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "invalidateSlots"(): void
public "getDrawers"(): $ConnectedDrawers
get "tanks"(): integer
get "drawers"(): $ConnectedDrawers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerFluidHandler$Type = ($ControllerFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerFluidHandler_ = $ControllerFluidHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$StorageControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $StorageControllerExtensionBlock<T extends $StorageControllerExtensionTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRotationType"(): $RotatableBlock$RotationType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionBlock$Type<T> = ($StorageControllerExtensionBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerExtensionBlock_<T> = $StorageControllerExtensionBlock$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$HydroponicBedTile" {
import {$IndustrialWorkingTile, $IndustrialWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile"
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$SidedFluidTankComponent, $SidedFluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$SidedFluidTankComponent"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $HydroponicBedTile extends $IndustrialWorkingTile<($HydroponicBedTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $HydroponicBedTile$Type): void
public static "tryToHarvestAndReplant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $IItemHandler$Type, arg4: $ProgressBarComponent$Type<(any)>, arg5: $IndustrialWorkingTile$Type<(any)>): boolean
public "getEther"(): $SidedFluidTankComponent<($HydroponicBedTile)>
public "getWater"(): $SidedFluidTankComponent<($HydroponicBedTile)>
public "getMaxProgress"(): integer
get "ether"(): $SidedFluidTankComponent<($HydroponicBedTile)>
get "water"(): $SidedFluidTankComponent<($HydroponicBedTile)>
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydroponicBedTile$Type = ($HydroponicBedTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HydroponicBedTile_ = $HydroponicBedTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$PotionBrewerTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProgressBarComponent$BarDirection, $ProgressBarComponent$BarDirection$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent$BarDirection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $PotionBrewerTile extends $IndustrialProcessingTile<($PotionBrewerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $PotionBrewerTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getBarDirection"(): $ProgressBarComponent$BarDirection
get "self"(): $PotionBrewerTile
get "barDirection"(): $ProgressBarComponent$BarDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewerTile$Type = ($PotionBrewerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewerTile_ = $PotionBrewerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$SewageComposterTile" {
import {$SidedFluidTankComponent, $SidedFluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$SidedFluidTankComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$SidedInventoryComponent, $SidedInventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$SidedInventoryComponent"

export class $SewageComposterTile extends $IndustrialProcessingTile<($SewageComposterTile)> {
 "sewage": $SidedFluidTankComponent<($SewageComposterTile)>
 "fertilizerOutput": $SidedInventoryComponent<($SewageComposterTile)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewageComposterTile$Type = ($SewageComposterTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SewageComposterTile_ = $SewageComposterTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$InfinityChargerTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IndustrialMachineTile, $IndustrialMachineTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialMachineTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InfinityChargerTile extends $IndustrialMachineTile<($InfinityChargerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $InfinityChargerTile$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityChargerTile$Type = ($InfinityChargerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityChargerTile_ = $InfinityChargerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$CompactingFramedDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CompactingDrawerBlock, $CompactingDrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$CompactingDrawerBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CompactingDrawerTile, $CompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$CompactingDrawerTile"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"

export class $CompactingFramedDrawerBlock extends $CompactingDrawerBlock {
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingFramedDrawerBlock$Type = ($CompactingFramedDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingFramedDrawerBlock_ = $CompactingFramedDrawerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinitySaw" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$TreeCache, $TreeCache$Type} from "packages/com/buuz135/industrial/utils/apihandlers/plant/$TreeCache"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LoadingCache, $LoadingCache$Type} from "packages/com/google/common/cache/$LoadingCache"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinitySaw extends $ItemInfinity {
static "SAW_CACHE": $LoadingCache<($Pair<($Level), ($BlockPos)>), ($TreeCache)>
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinitySaw$Type = ($ItemInfinitySaw);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinitySaw_ = $ItemInfinitySaw$Type;
}}
declare module "packages/com/buuz135/industrial/capability/tile/$BigSidedFluidTankComponent" {
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$SidedFluidTankComponent, $SidedFluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$SidedFluidTankComponent"
import {$List, $List$Type} from "packages/java/util/$List"

export class $BigSidedFluidTankComponent<T extends $IComponentHarness> extends $SidedFluidTankComponent<(T)> {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "sync"(): void
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "getName"(): string
get "containerAddons"(): $List<($IFactory<(any)>)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigSidedFluidTankComponent$Type<T> = ($BigSidedFluidTankComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigSidedFluidTankComponent_<T> = $BigSidedFluidTankComponent$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/tile/$BlackHoleTankTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$SidedFluidTankComponent, $SidedFluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$SidedFluidTankComponent"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$BHTile, $BHTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$BHTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BigSidedFluidTankComponent, $BigSidedFluidTankComponent$Type} from "packages/com/buuz135/industrial/capability/tile/$BigSidedFluidTankComponent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlackHoleTankTile extends $BHTile<($BlackHoleTankTile)> {
 "tank": $BigSidedFluidTankComponent<($BlackHoleTankTile)>
 "display": boolean

constructor(arg0: $BasicTileBlock$Type<($BlackHoleTankTile$Type)>, arg1: $BlockEntityType$Type<(any)>, arg2: $Rarity$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type)

public "getDisplayStack"(): $ItemStack
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlackHoleTankTile$Type): void
public "getTank"(): $SidedFluidTankComponent<($BlackHoleTankTile)>
public "getFormatedDisplayAmount"(): string
get "displayStack"(): $ItemStack
get "tank"(): $SidedFluidTankComponent<($BlackHoleTankTile)>
get "formatedDisplayAmount"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleTankTile$Type = ($BlackHoleTankTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleTankTile_ = $BlackHoleTankTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$WaterCondensatorBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WaterCondensatorTile, $WaterCondensatorTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$WaterCondensatorTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WaterCondensatorBlock extends $IndustrialBlock<($WaterCondensatorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WaterCondensatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WaterCondensatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterCondensatorBlock$Type = ($WaterCondensatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterCondensatorBlock_ = $WaterCondensatorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/fluid/$OreFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$OreFluidInstance, $OreFluidInstance$Type} from "packages/com/buuz135/industrial/fluid/$OreFluidInstance"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $OreFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $OreFluidInstance$Type)

public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getBucket"(): $Item
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public "isSource"(arg0: $FluidState$Type): boolean
public "isSame"(arg0: $Fluid$Type): boolean
public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
public "getFluidType"(): $FluidType
get "bucket"(): $Item
get "source"(): $Fluid
get "flowing"(): $Fluid
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluid$Type = ($OreFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreFluid_ = $OreFluid$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityBackpack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InfinityEnergyStorage, $InfinityEnergyStorage$Type} from "packages/com/buuz135/industrial/item/infinity/$InfinityEnergyStorage"
import {$PlayerInventoryFinder$Target, $PlayerInventoryFinder$Target$Type} from "packages/com/hrznstudio/titanium/network/locator/$PlayerInventoryFinder$Target"
import {$FluidHandlerScreenProviderItemStack, $FluidHandlerScreenProviderItemStack$Type} from "packages/com/hrznstudio/titanium/capability/$FluidHandlerScreenProviderItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinityBackpack extends $ItemInfinity {
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "sync"(arg0: $Level$Type, arg1: string, arg2: $ServerPlayer$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "consumeFuel"(arg0: $ItemStack$Type): void
public "getEnergyConstructor"(arg0: $ItemStack$Type): $IFactory<($InfinityEnergyStorage)>
public "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "addNbt"(arg0: $ItemStack$Type, arg1: long, arg2: integer, arg3: boolean): void
public "getFuelFromStack"(arg0: $ItemStack$Type): integer
public "enoughFuel"(arg0: $ItemStack$Type): boolean
public "getTankConstructor"(arg0: $ItemStack$Type): $IFactory<($FluidHandlerScreenProviderItemStack)>
public "getScreenAddons"(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>
public static "isMagnetEnabled"(arg0: $ItemStack$Type): boolean
public static "setMagnet"(arg0: $ItemStack$Type, arg1: boolean): void
public static "findAllBackpacks"(arg0: $Player$Type): $List<($PlayerInventoryFinder$Target)>
public static "getSlotSize"(arg0: $ItemStack$Type): integer
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public static "findFirstBackpack"(arg0: $Player$Type): $Optional<($PlayerInventoryFinder$Target)>
public static "getPickUpMode"(arg0: $ItemStack$Type): integer
public static "setPickUpMode"(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityBackpack$Type = ($ItemInfinityBackpack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityBackpack_ = $ItemInfinityBackpack$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$WitherBuilderTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WitherBuilderTile extends $IndustrialAreaWorkingTile<($WitherBuilderTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getWorkingArea"(): $VoxelShape
public "getDefaultOrFind"(arg0: integer, arg1: $ItemStackHandler$Type, arg2: $ItemStack$Type): $ItemStack
public "getMaxProgress"(): integer
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherBuilderTile$Type = ($WitherBuilderTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitherBuilderTile_ = $WitherBuilderTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$SimpleCompactingDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SimpleCompactingDrawerTile, $SimpleCompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$SimpleCompactingDrawerTile"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"

export class $SimpleCompactingDrawerBlock extends $RotatableBlock<($SimpleCompactingDrawerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerBlock$Type = ($SimpleCompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCompactingDrawerBlock_ = $SimpleCompactingDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BigInventoryHandler$BigStack, $BigInventoryHandler$BigStack$Type} from "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler$BigStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"
import {$ILockable, $ILockable$Type} from "packages/com/buuz135/functionalstorage/inventory/$ILockable"

export class $BigInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)>, $ILockable {
static "BIG_ITEMS": string
static "STACK": string
static "AMOUNT": string

constructor(arg0: $FunctionalStorage$DrawerType$Type)

public "isLocked"(): boolean
public "isVoid"(): boolean
public "getMultiplier"(): integer
public "onChange"(): void
public "getSlots"(): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getStoredStacks"(): $List<($BigInventoryHandler$BigStack)>
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "hasDowngrade"(): boolean
public "isCreative"(): boolean
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
get "locked"(): boolean
get "void"(): boolean
get "multiplier"(): integer
get "slots"(): integer
get "storedStacks"(): $List<($BigInventoryHandler$BigStack)>
get "creative"(): boolean
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
export type $BigInventoryHandler$Type = ($BigInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInventoryHandler_ = $BigInventoryHandler$Type;
}}
declare module "packages/com/buuz135/industrial/block/$IndustrialBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IndustrialBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $TitaniumTab$Type)

public "getCreatorModId"(arg0: $ItemStack$Type): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialBlockItem$Type = ($IndustrialBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialBlockItem_ = $IndustrialBlockItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$MobCrusherTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MobCrusherTile extends $IndustrialAreaWorkingTile<($MobCrusherTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getWorkingArea"(): $VoxelShape
public "getMaxProgress"(): integer
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCrusherTile$Type = ($MobCrusherTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobCrusherTile_ = $MobCrusherTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$WashingFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WashingFactoryTile, $WashingFactoryTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$WashingFactoryTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WashingFactoryBlock extends $IndustrialBlock<($WashingFactoryTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WashingFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WashingFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WashingFactoryBlock$Type = ($WashingFactoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WashingFactoryBlock_ = $WashingFactoryBlock$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityLauncher" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemInfinityLauncher$PlungerAction, $ItemInfinityLauncher$PlungerAction$Type} from "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityLauncher$PlungerAction"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinityLauncher extends $ItemInfinity {
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static "PLUNGER_NBT": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "addNbt"(arg0: $ItemStack$Type, arg1: long, arg2: integer, arg3: boolean): void
public "getScreenAddons"(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>
public static "getArrowVelocity"(arg0: integer): float
public "setPlungerAction"(arg0: $ItemStack$Type, arg1: $ItemInfinityLauncher$PlungerAction$Type): void
public "getPlungerAction"(arg0: $ItemStack$Type): $ItemInfinityLauncher$PlungerAction
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityLauncher$Type = ($ItemInfinityLauncher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityLauncher_ = $ItemInfinityLauncher$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$FluidDrawerTile" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ControllableDrawerTile, $ControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BigFluidHandler, $BigFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $FluidDrawerTile extends $ControllableDrawerTile<($FluidDrawerTile)> {
 "fluidHandlerLazyOptional": $LazyOptional<($IFluidHandler)>

constructor(arg0: $BasicTileBlock$Type<($FluidDrawerTile$Type)>, arg1: $BlockEntityType$Type<($FluidDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $FunctionalStorage$DrawerType$Type)

public "initClient"(): void
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidDrawerTile$Type): void
public "getFluidHandler"(): $BigFluidHandler
public "getSelf"(): $FluidDrawerTile
public "setLocked"(arg0: boolean): void
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getDrawerType"(): $FunctionalStorage$DrawerType
public "getBaseSize"(arg0: integer): integer
public "getStorageDiv"(): double
get "fluidHandler"(): $BigFluidHandler
get "self"(): $FluidDrawerTile
set "locked"(value: boolean)
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "drawerType"(): $FunctionalStorage$DrawerType
get "storageDiv"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerTile$Type = ($FluidDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerTile_ = $FluidDrawerTile$Type;
}}
declare module "packages/com/buuz135/industrial/item/$FertilizerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FertilizerItem extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerItem$Type = ($FertilizerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizerItem_ = $FertilizerItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$DyeMixerTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $DyeMixerTile extends $IndustrialProcessingTile<($DyeMixerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "initClient"(): void
public "getSelf"(): $DyeMixerTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
get "self"(): $DyeMixerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeMixerTile$Type = ($DyeMixerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeMixerTile_ = $DyeMixerTile$Type;
}}
declare module "packages/com/buuz135/refinedstoragerequestify/proxy/block/$BlockCraftingEmitter" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $BlockCraftingEmitter extends $NetworkNodeBlock {
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
public "hasConnectedState"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCraftingEmitter$Type = ($BlockCraftingEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCraftingEmitter_ = $BlockCraftingEmitter$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile$DrawerOptions" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $ControllableDrawerTile$DrawerOptions implements $INBTSerializable<($CompoundTag)> {
 "options": $HashMap<($ConfigurationToolItem$ConfigurationAction), (boolean)>
 "advancedOptions": $HashMap<($ConfigurationToolItem$ConfigurationAction), (integer)>

constructor()

public "isActive"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): boolean
public "setActive"(arg0: $ConfigurationToolItem$ConfigurationAction$Type, arg1: boolean): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "setAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$Type, arg1: integer): void
public "getAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$DrawerOptions$Type = ($ControllableDrawerTile$DrawerOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableDrawerTile$DrawerOptions_ = $ControllableDrawerTile$DrawerOptions$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$PlantSowerTile" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PlantSowerTile extends $IndustrialAreaWorkingTile<($PlantSowerTile)> {
static "COLORS": ($DyeColor)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantSowerTile$Type = ($PlantSowerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantSowerTile_ = $PlantSowerTile$Type;
}}
declare module "packages/com/buuz135/industrial/item/$ItemConveyorUpgrade" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$ConveyorUpgradeFactory, $ConveyorUpgradeFactory$Type} from "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgradeFactory"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemConveyorUpgrade extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ConveyorUpgradeFactory$Type, arg1: $TitaniumTab$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConveyorUpgrade$Type = ($ItemConveyorUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemConveyorUpgrade_ = $ItemConveyorUpgrade$Type;
}}
declare module "packages/com/buuz135/industrial/item/$MeatFeederItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MeatFeederItem extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "drain"(arg0: $ItemStack$Type, arg1: integer): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "meatTick"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "getFilledAmount"(arg0: $ItemStack$Type): integer
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeatFeederItem$Type = ($MeatFeederItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeatFeederItem_ = $MeatFeederItem$Type;
}}
declare module "packages/com/buuz135/industrial/item/$IFCustomItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$IRecipeProvider, $IRecipeProvider$Type} from "packages/com/hrznstudio/titanium/api/$IRecipeProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IFCustomItem extends $BasicItem implements $IRecipeProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: string, arg1: $TitaniumTab$Type, arg2: $Item$Properties$Type)
constructor(arg0: string, arg1: $TitaniumTab$Type)

public "getCreatorModId"(arg0: $ItemStack$Type): string
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFCustomItem$Type = ($IFCustomItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFCustomItem_ = $IFCustomItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$ILaserBase" {
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"

export interface $ILaserBase<T extends $ActiveTile<(T)>> {

 "getBar"(): $ProgressBarComponent<(T)>

(): $ProgressBarComponent<(T)>
}

export namespace $ILaserBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILaserBase$Type<T> = ($ILaserBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILaserBase_<T> = $ILaserBase$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityNuke" {
import {$InfinityTier, $InfinityTier$Type} from "packages/com/buuz135/industrial/item/infinity/$InfinityTier"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinityNuke extends $ItemInfinity {
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getFormattedArea"(arg0: $ItemStack$Type, arg1: $InfinityTier$Type, arg2: integer, arg3: boolean): string
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public static "getRadius"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityNuke$Type = ($ItemInfinityNuke);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityNuke_ = $ItemInfinityNuke$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$StasisChamberBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StasisChamberTile, $StasisChamberTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$StasisChamberTile"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $StasisChamberBlock extends $IndustrialBlock<($StasisChamberTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($StasisChamberTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($StasisChamberTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StasisChamberBlock$Type = ($StasisChamberBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StasisChamberBlock_ = $StasisChamberBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction" {
import {$IndustrialWorkingTile, $IndustrialWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile"

export class $IndustrialWorkingTile$WorkAction {

constructor(arg0: $IndustrialWorkingTile$Type<(any)>, arg1: float, arg2: integer)

public "getWorkAmount"(): float
public "getEnergyConsumed"(): integer
get "workAmount"(): float
get "energyConsumed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialWorkingTile$WorkAction$Type = ($IndustrialWorkingTile$WorkAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialWorkingTile$WorkAction_ = $IndustrialWorkingTile$WorkAction$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$MaterialStoneWorkFactoryTile$StoneWorkAction" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $MaterialStoneWorkFactoryTile$StoneWorkAction {


public "getWork"(): $BiFunction<($Level), ($ItemStack), ($ItemStack)>
public "getAction"(): string
public "getIcon"(): $ItemStack
public "getShrinkAmount"(): integer
get "work"(): $BiFunction<($Level), ($ItemStack), ($ItemStack)>
get "action"(): string
get "icon"(): $ItemStack
get "shrinkAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialStoneWorkFactoryTile$StoneWorkAction$Type = ($MaterialStoneWorkFactoryTile$StoneWorkAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialStoneWorkFactoryTile$StoneWorkAction_ = $MaterialStoneWorkFactoryTile$StoneWorkAction$Type;
}}
declare module "packages/com/buuz135/industrial/recipe/$StoneWorkGenerateRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$GenericSerializer, $GenericSerializer$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$GenericSerializer"
import {$FluidTankComponent, $FluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SerializableRecipe, $SerializableRecipe$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$SerializableRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $StoneWorkGenerateRecipe extends $SerializableRecipe {
static "RECIPES": $List<($StoneWorkGenerateRecipe)>
 "output": $ItemStack
 "waterNeed": integer
 "lavaNeed": integer
 "waterConsume": integer
 "lavaConsume": integer

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
constructor(arg0: $ResourceLocation$Type)

public "consume"(arg0: $FluidTankComponent$Type<(any)>, arg1: $FluidTankComponent$Type<(any)>): void
public "getSerializer"(): $GenericSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "canIncrease"(arg0: $FluidTank$Type, arg1: $FluidTank$Type): boolean
get "serializer"(): $GenericSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoneWorkGenerateRecipe$Type = ($StoneWorkGenerateRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoneWorkGenerateRecipe_ = $StoneWorkGenerateRecipe$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/tile/$BlackHoleControllerTile" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $BlackHoleControllerTile extends $ActiveTile<($BlackHoleControllerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "getUnitsStorage"(): $InventoryComponent<($BlackHoleControllerTile)>
get "unitsStorage"(): $InventoryComponent<($BlackHoleControllerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleControllerTile$Type = ($BlackHoleControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleControllerTile_ = $BlackHoleControllerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ArmoryCabinetTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ArmoryCabinetInventoryHandler, $ArmoryCabinetInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ArmoryCabinetInventoryHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ArmoryCabinetTile extends $ActiveTile<($ArmoryCabinetTile)> {
 "handler": $ArmoryCabinetInventoryHandler

constructor(arg0: $BasicTileBlock$Type<($ArmoryCabinetTile$Type)>, arg1: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "getSelf"(): $ArmoryCabinetTile
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "invalidateCaps"(): void
public "isEverythingEmpty"(): boolean
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "self"(): $ArmoryCabinetTile
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "everythingEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetTile$Type = ($ArmoryCabinetTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetTile_ = $ArmoryCabinetTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FluidDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidDrawerTile, $FluidDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$FluidDrawerTile"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $FluidDrawerBlock extends $RotatableBlock<($FluidDrawerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$Type, arg1: $BlockBehaviour$Properties$Type)

public "getType"(): $FunctionalStorage$DrawerType
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "type"(): $FunctionalStorage$DrawerType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerBlock$Type = ($FluidDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerBlock_ = $FluidDrawerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$BlackHoleUnitBlock$BlackHoleUnitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlackHoleUnitBlock$BlackHoleUnitItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Rarity$Type)

public "getCreatorModId"(arg0: $ItemStack$Type): string
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
export type $BlackHoleUnitBlock$BlackHoleUnitItem$Type = ($BlackHoleUnitBlock$BlackHoleUnitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleUnitBlock$BlackHoleUnitItem_ = $BlackHoleUnitBlock$BlackHoleUnitItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidPlacerTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidPlacerTile extends $IndustrialAreaWorkingTile<($FluidPlacerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlacerTile$Type = ($FluidPlacerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlacerTile_ = $FluidPlacerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$BlockBreakerTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockBreakerTile extends $IndustrialAreaWorkingTile<($BlockBreakerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerTile$Type = ($BlockBreakerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBreakerTile_ = $BlockBreakerTile$Type;
}}
declare module "packages/com/buuz135/industrial/item/addon/$RangeAddonItem" {
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AddonItem, $AddonItem$Type} from "packages/com/buuz135/industrial/item/addon/$AddonItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IAugmentType, $IAugmentType$Type} from "packages/com/hrznstudio/titanium/api/augment/$IAugmentType"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ISpecialCreativeTabItem, $ISpecialCreativeTabItem$Type} from "packages/com/hrznstudio/titanium/api/$ISpecialCreativeTabItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RangeAddonItem extends $AddonItem implements $ISpecialCreativeTabItem {
static readonly "RANGE": $IAugmentType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: $TitaniumTab$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getDescriptionId"(): string
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeAddonItem$Type = ($RangeAddonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeAddonItem_ = $RangeAddonItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$LaserDrillBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LaserDrillTile, $LaserDrillTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$LaserDrillTile"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LaserDrillBlock extends $IndustrialBlock<($LaserDrillTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LaserDrillTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LaserDrillTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserDrillBlock$Type = ($LaserDrillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserDrillBlock_ = $LaserDrillBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$AnimalFeederTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AnimalFeederTile extends $IndustrialAreaWorkingTile<($AnimalFeederTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalFeederTile$Type = ($AnimalFeederTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalFeederTile_ = $AnimalFeederTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentFactoryTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $EnchantmentFactoryTile extends $IndustrialProcessingTile<($EnchantmentFactoryTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentFactoryTile$Type = ($EnchantmentFactoryTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentFactoryTile_ = $EnchantmentFactoryTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$BlackHoleTankBlock$BlackHoleTankItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlackHoleTankBlock$BlackHoleTankItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Rarity$Type, arg3: $TitaniumTab$Type)

public "getCreatorModId"(arg0: $ItemStack$Type): string
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
export type $BlackHoleTankBlock$BlackHoleTankItem$Type = ($BlackHoleTankBlock$BlackHoleTankItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleTankBlock$BlackHoleTankItem_ = $BlackHoleTankBlock$BlackHoleTankItem$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/$InfinityTier" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $InfinityTier extends $Enum<($InfinityTier)> {
static readonly "POOR": $InfinityTier
static readonly "COMMON": $InfinityTier
static readonly "UNCOMMON": $InfinityTier
static readonly "RARE": $InfinityTier
static readonly "EPIC": $InfinityTier
static readonly "LEGENDARY": $InfinityTier
static readonly "ARTIFACT": $InfinityTier


public "getName"(): string
public static "values"(): ($InfinityTier)[]
public static "valueOf"(arg0: string): $InfinityTier
public "getNext"(arg0: $InfinityTier$Type): $InfinityTier
public "getLocalizedName"(): string
public "getPrev"(arg0: $InfinityTier$Type): $InfinityTier
public "getColor"(): $ChatFormatting
public "getTextureColor"(): integer
public static "getTierBraquet"(arg0: long): $Pair<($InfinityTier), ($InfinityTier)>
public "getPowerNeeded"(): long
public "getRadius"(): integer
public "setRadius"(arg0: integer): void
public "setPowerNeeded"(arg0: long): void
get "name"(): string
get "localizedName"(): string
get "color"(): $ChatFormatting
get "textureColor"(): integer
get "powerNeeded"(): long
get "radius"(): integer
set "radius"(value: integer)
set "powerNeeded"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityTier$Type = (("artifact") | ("uncommon") | ("common") | ("poor") | ("legendary") | ("rare") | ("epic")) | ($InfinityTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityTier_ = $InfinityTier$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$PlantSowerBlock" {
import {$PlantSowerTile, $PlantSowerTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$PlantSowerTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PlantSowerBlock extends $IndustrialBlock<($PlantSowerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantSowerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantSowerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantSowerBlock$Type = ($PlantSowerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantSowerBlock_ = $PlantSowerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/util/$IWoodType" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IWoodType {

 "getName"(): string
 "getPlanks"(): $Block
 "getWood"(): $Block
}

export namespace $IWoodType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWoodType$Type = ($IWoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWoodType_ = $IWoodType$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$ControllableDrawerTile$DrawerOptions, $ControllableDrawerTile$DrawerOptions$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile$DrawerOptions"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllableDrawerTile<T extends $ControllableDrawerTile<(T)>> extends $ActiveTile<(T)> {

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "isLocked"(): boolean
public "isVoid"(): boolean
public "initClient"(): void
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "setLocked"(arg0: boolean): void
public "invalidateCaps"(): void
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getUtilitySlotAmount"(): integer
public "setNeedsUpgradeCache"(arg0: boolean): void
public "getStorageSlotAmount"(): integer
public "getStorageMultiplier"(): integer
public "getDrawerOptions"(): $ControllableDrawerTile$DrawerOptions
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getUtilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "setControllerPos"(arg0: $BlockPos$Type): void
public "getControllerPos"(): $BlockPos
public "clearControllerPos"(): void
public "getTitleColor"(): integer
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): void
public "getStorageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "toggleLocking"(): void
public "getBaseSize"(arg0: integer): integer
public "hasDowngrade"(): boolean
public "getStorageDiv"(): double
public "isCreative"(): boolean
get "locked"(): boolean
get "void"(): boolean
set "locked"(value: boolean)
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "utilitySlotAmount"(): integer
set "needsUpgradeCache"(value: boolean)
get "storageSlotAmount"(): integer
get "storageMultiplier"(): integer
get "drawerOptions"(): $ControllableDrawerTile$DrawerOptions
get "everythingEmpty"(): boolean
get "utilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
set "controllerPos"(value: $BlockPos$Type)
get "controllerPos"(): $BlockPos
get "titleColor"(): integer
get "storageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "storageDiv"(): double
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$Type<T> = ($ControllableDrawerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableDrawerTile_<T> = $ControllableDrawerTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/util/$CompactingUtil" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CompactingUtil$Result, $CompactingUtil$Result$Type} from "packages/com/buuz135/functionalstorage/util/$CompactingUtil$Result"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CompactingUtil {

constructor(arg0: $Level$Type, arg1: integer)

public "setup"(arg0: $ItemStack$Type): void
public "getResults"(): $List<($CompactingUtil$Result)>
set "up"(value: $ItemStack$Type)
get "results"(): $List<($CompactingUtil$Result)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$Type = ($CompactingUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUtil_ = $CompactingUtil$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$ArmoryCabinetBlock" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$ArmoryCabinetTile, $ArmoryCabinetTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ArmoryCabinetTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ArmoryCabinetBlock extends $RotatableBlock<($ArmoryCabinetTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getRotationType"(): $RotatableBlock$RotationType
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetBlock$Type = ($ArmoryCabinetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetBlock_ = $ArmoryCabinetBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$MaterialStoneWorkFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MaterialStoneWorkFactoryTile, $MaterialStoneWorkFactoryTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$MaterialStoneWorkFactoryTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MaterialStoneWorkFactoryBlock extends $IndustrialBlock<($MaterialStoneWorkFactoryTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MaterialStoneWorkFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MaterialStoneWorkFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialStoneWorkFactoryBlock$Type = ($MaterialStoneWorkFactoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialStoneWorkFactoryBlock_ = $MaterialStoneWorkFactoryBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$MechanicalDirtBlock" {
import {$MechanicalDirtTile, $MechanicalDirtTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$MechanicalDirtTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MechanicalDirtBlock extends $IndustrialBlock<($MechanicalDirtTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MechanicalDirtTile)>
public "getRotationType"(): $RotatableBlock$RotationType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MechanicalDirtTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalDirtBlock$Type = ($MechanicalDirtBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalDirtBlock_ = $MechanicalDirtBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$EnchantmentApplicatorBlock" {
import {$EnchantmentApplicatorTile, $EnchantmentApplicatorTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentApplicatorTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnchantmentApplicatorBlock extends $IndustrialBlock<($EnchantmentApplicatorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentApplicatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentApplicatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentApplicatorBlock$Type = ($EnchantmentApplicatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentApplicatorBlock_ = $EnchantmentApplicatorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$MarineFisherTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MarineFisherTile extends $IndustrialAreaWorkingTile<($MarineFisherTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getSelf"(): $MarineFisherTile
public "getWorkingArea"(): $VoxelShape
public "getMaxProgress"(): integer
get "self"(): $MarineFisherTile
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarineFisherTile$Type = ($MarineFisherTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarineFisherTile_ = $MarineFisherTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/tile/$PitifulGeneratorTile" {
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialGeneratorTile, $IndustrialGeneratorTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialGeneratorTile"

export class $PitifulGeneratorTile extends $IndustrialGeneratorTile<($PitifulGeneratorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $PitifulGeneratorTile
public "consumeFuel"(): integer
public "canStart"(): boolean
public "isSmart"(): boolean
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "getProgressBar"(): $ProgressBarComponent<($PitifulGeneratorTile)>
public "getEnergyCapacity"(): integer
get "self"(): $PitifulGeneratorTile
get "smart"(): boolean
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
get "progressBar"(): $ProgressBarComponent<($PitifulGeneratorTile)>
get "energyCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PitifulGeneratorTile$Type = ($PitifulGeneratorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PitifulGeneratorTile_ = $PitifulGeneratorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$WashingFactoryTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $WashingFactoryTile extends $IndustrialProcessingTile<($WashingFactoryTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $WashingFactoryTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "self"(): $WashingFactoryTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WashingFactoryTile$Type = ($WashingFactoryTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WashingFactoryTile_ = $WashingFactoryTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$BlockPlacerTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPlacerTile extends $IndustrialAreaWorkingTile<($BlockPlacerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerTile$Type = ($BlockPlacerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerTile_ = $BlockPlacerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$FluidCollectorBlock" {
import {$FluidCollectorTile, $FluidCollectorTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidCollectorTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluidCollectorBlock extends $IndustrialBlock<($FluidCollectorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidCollectorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidCollectorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollectorBlock$Type = ($FluidCollectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCollectorBlock_ = $FluidCollectorBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler$CustomFluidTank" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$BigFluidHandler, $BigFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler"

export class $BigFluidHandler$CustomFluidTank extends $FluidTank {

constructor(arg0: $BigFluidHandler$Type, arg1: integer)
constructor(arg0: $BigFluidHandler$Type, arg1: integer, arg2: $Predicate$Type<(any)>)

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "getCapacity"(): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "getFluid"(): $FluidStack
public "getFluidAmount"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
get "capacity"(): integer
get "fluid"(): $FluidStack
get "fluidAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$CustomFluidTank$Type = ($BigFluidHandler$CustomFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigFluidHandler$CustomFluidTank_ = $BigFluidHandler$CustomFluidTank$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$IndustrialGeneratorTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GeneratorTile, $GeneratorTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$GeneratorTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $IndustrialGeneratorTile<T extends $IndustrialGeneratorTile<(T)>> extends $GeneratorTile<(T)> {

constructor(arg0: $Pair$Type<($RegistryObject$Type<($Block$Type)>), ($RegistryObject$Type<($BlockEntityType$Type<(any)>)>)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialGeneratorTile$Type<T> = ($IndustrialGeneratorTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialGeneratorTile_<T> = $IndustrialGeneratorTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$CompactingDrawerBlock$CompactingDrawerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CompactingDrawerBlock$CompactingDrawerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: integer)

public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
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
export type $CompactingDrawerBlock$CompactingDrawerItem$Type = ($CompactingDrawerBlock$CompactingDrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerBlock$CompactingDrawerItem_ = $CompactingDrawerBlock$CompactingDrawerItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$HydroponicBedBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HydroponicBedTile, $HydroponicBedTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$HydroponicBedTile"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $HydroponicBedBlock extends $IndustrialBlock<($HydroponicBedTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($HydroponicBedTile)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($HydroponicBedTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydroponicBedBlock$Type = ($HydroponicBedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HydroponicBedBlock_ = $HydroponicBedBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$BlackHoleTankBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlackHoleTankTile, $BlackHoleTankTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$BlackHoleTankTile"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"

export class $BlackHoleTankBlock extends $IndustrialBlock<($BlackHoleTankTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $Rarity$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlackHoleTankTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlackHoleTankTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleTankBlock$Type = ($BlackHoleTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleTankBlock_ = $BlackHoleTankBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$ArmoryCabinetInventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ArmoryCabinetInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)> {
 "stackList": $List<($ItemStack)>

constructor()

public "onChange"(): void
public "getSlots"(): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
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
export type $ArmoryCabinetInventoryHandler$Type = ($ArmoryCabinetInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetInventoryHandler_ = $ArmoryCabinetInventoryHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FunctionalStorage$DrawerType extends $Enum<($FunctionalStorage$DrawerType)> {
static readonly "X_1": $FunctionalStorage$DrawerType
static readonly "X_2": $FunctionalStorage$DrawerType
static readonly "X_4": $FunctionalStorage$DrawerType


public static "values"(): ($FunctionalStorage$DrawerType)[]
public static "valueOf"(arg0: string): $FunctionalStorage$DrawerType
public "getDisplayName"(): string
public "getSlotAmount"(): integer
public "getSlots"(): integer
public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
get "displayName"(): string
get "slotAmount"(): integer
get "slots"(): integer
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionalStorage$DrawerType$Type = (("x_2") | ("x_1") | ("x_4")) | ($FunctionalStorage$DrawerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionalStorage$DrawerType_ = $FunctionalStorage$DrawerType$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/tile/$ConveyorTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ConveyorBlock$EnumType, $ConveyorBlock$EnumType$Type} from "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock$EnumType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$IBlockContainer, $IBlockContainer$Type} from "packages/com/buuz135/industrial/api/$IBlockContainer"
import {$ConveyorUpgrade, $ConveyorUpgrade$Type} from "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgrade"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ConveyorUpgradeFactory, $ConveyorUpgradeFactory$Type} from "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgradeFactory"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ConveyorTile extends $ActiveTile<($ConveyorTile)> implements $IBlockContainer<($ConveyorUpgradeFactory)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "setColor"(arg0: $DyeColor$Type): void
public "setColor"(arg0: integer): void
public "setType"(arg0: $ConveyorBlock$EnumType$Type): void
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ConveyorTile$Type): void
public "openGui"(arg0: $Player$Type, arg1: $Direction$Type): void
public "getSelf"(): $ConveyorTile
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "load"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "getColor"(): integer
public "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ConveyorTile$Type): void
public "getUpgradeMap"(): $Map<($Direction), ($ConveyorUpgrade)>
public "getTank"(): $FluidTank
public "getPower"(): integer
public "getConveyorType"(): $ConveyorBlock$EnumType
public "isSticky"(): boolean
public "setSticky"(arg0: boolean): void
public "removeUpgrade"(arg0: $Direction$Type, arg1: boolean): void
public "addUpgrade"(arg0: $Direction$Type, arg1: $ConveyorUpgradeFactory$Type): void
public "getBlockWorld"(): $Level
public "requestSync"(): void
public "requestFluidSync"(): void
public "handleEntityMovement"(arg0: $Entity$Type): void
public "markForUpdate"(): void
public "getFacing"(): $Direction
public "setFacing"(arg0: $Direction$Type): void
public "hasUpgrade"(arg0: $Direction$Type): boolean
public "getBlockPosition"(): $BlockPos
public "getEntityFilter"(): $List<(integer)>
public "getCollisionBoxes"(): $List<($AABB)>
set "color"(value: $DyeColor$Type)
set "color"(value: integer)
set "type"(value: $ConveyorBlock$EnumType$Type)
get "self"(): $ConveyorTile
get "modelData"(): $ModelData
get "color"(): integer
get "upgradeMap"(): $Map<($Direction), ($ConveyorUpgrade)>
get "tank"(): $FluidTank
get "power"(): integer
get "conveyorType"(): $ConveyorBlock$EnumType
get "sticky"(): boolean
set "sticky"(value: boolean)
get "blockWorld"(): $Level
get "facing"(): $Direction
set "facing"(value: $Direction$Type)
get "blockPosition"(): $BlockPos
get "entityFilter"(): $List<(integer)>
get "collisionBoxes"(): $List<($AABB)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorTile$Type = ($ConveyorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorTile_ = $ConveyorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$OreLaserBaseBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$OreLaserBaseTile, $OreLaserBaseTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$OreLaserBaseTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OreLaserBaseBlock extends $IndustrialBlock<($OreLaserBaseTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($OreLaserBaseTile)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($OreLaserBaseTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreLaserBaseBlock$Type = ($OreLaserBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreLaserBaseBlock_ = $OreLaserBaseBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ConnectedDrawers, $ConnectedDrawers$Type} from "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ControllerInventoryHandler implements $IItemHandler {

constructor()

public "getSlots"(): integer
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "invalidateSlots"(): void
public "getDrawers"(): $ConnectedDrawers
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
get "drawers"(): $ConnectedDrawers
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
export type $ControllerInventoryHandler$Type = ($ControllerInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerInventoryHandler_ = $ControllerInventoryHandler$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$PlantGathererTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PlantGathererTile extends $IndustrialAreaWorkingTile<($PlantGathererTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $PlantGathererTile
public "getMaxProgress"(): integer
get "self"(): $PlantGathererTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantGathererTile$Type = ($PlantGathererTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantGathererTile_ = $PlantGathererTile$Type;
}}
declare module "packages/com/buuz135/industrial/item/$ItemStraw" {
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemStraw extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStraw$Type = ($ItemStraw);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStraw_ = $ItemStraw$Type;
}}
declare module "packages/com/buuz135/industrial/item/$RecipelessCustomItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RecipelessCustomItem extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: string, arg1: $TitaniumTab$Type, arg2: $Item$Properties$Type)
constructor(arg0: string, arg1: $TitaniumTab$Type)

public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipelessCustomItem$Type = ($RecipelessCustomItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipelessCustomItem_ = $RecipelessCustomItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$SlaughterFactoryTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SlaughterFactoryTile extends $IndustrialAreaWorkingTile<($SlaughterFactoryTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getSelf"(): $SlaughterFactoryTile
public "getWorkingArea"(): $VoxelShape
public "getMaxProgress"(): integer
get "self"(): $SlaughterFactoryTile
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlaughterFactoryTile$Type = ($SlaughterFactoryTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlaughterFactoryTile_ = $SlaughterFactoryTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/tile/$BioReactorTile" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IndustrialWorkingTile, $IndustrialWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $BioReactorTile extends $IndustrialWorkingTile<($BioReactorTile)> {
static "VALID": ($TagKey<($Item)>)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getSelf"(): $BioReactorTile
public "getMaxProgress"(): integer
get "self"(): $BioReactorTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BioReactorTile$Type = ($BioReactorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BioReactorTile_ = $BioReactorTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/util/$CompactingUtil$Result" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CompactingUtil$Result {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "toString"(): string
public "getResult"(): $ItemStack
public "setResult"(arg0: $ItemStack$Type): void
public "getNeeded"(): integer
public "setNeeded"(arg0: integer): void
get "result"(): $ItemStack
set "result"(value: $ItemStack$Type)
get "needed"(): integer
set "needed"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$Result$Type = ($CompactingUtil$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUtil$Result_ = $CompactingUtil$Result$Type;
}}
declare module "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgradeFactory" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBlockContainer, $IBlockContainer$Type} from "packages/com/buuz135/industrial/api/$IBlockContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ConveyorUpgrade, $ConveyorUpgrade$Type} from "packages/com/buuz135/industrial/api/conveyor/$ConveyorUpgrade"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IRecipeProvider, $IRecipeProvider$Type} from "packages/com/hrznstudio/titanium/api/$IRecipeProvider"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"

export class $ConveyorUpgradeFactory implements $IRecipeProvider {
static readonly "HORIZONTAL": $ImmutableSet<($Direction)>
static readonly "DOWN": $ImmutableSet<($Direction)>
static readonly "FACTORIES": $List<($ConveyorUpgradeFactory)>

constructor(arg0: string)

public "getName"(): string
public "create"(arg0: $IBlockContainer$Type<(any)>, arg1: $Direction$Type): $ConveyorUpgrade
public "getModel"(arg0: $Direction$Type, arg1: $Direction$Type): $ResourceLocation
public "getTextures"(): $Set<($ResourceLocation)>
public "getValidFacings"(): $Set<($Direction)>
public "getUpgradeItem"(): $Item
public "getItemModel"(): $ResourceLocation
public "setUpgradeItem"(arg0: $Item$Type): void
public "getSideForPlacement"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $Direction
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "name"(): string
get "textures"(): $Set<($ResourceLocation)>
get "validFacings"(): $Set<($Direction)>
get "upgradeItem"(): $Item
get "itemModel"(): $ResourceLocation
set "upgradeItem"(value: $Item$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorUpgradeFactory$Type = ($ConveyorUpgradeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorUpgradeFactory_ = $ConveyorUpgradeFactory$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/mycelial/$IMycelialGeneratorType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ShapedRecipeBuilder, $ShapedRecipeBuilder$Type} from "packages/net/minecraft/data/recipes/$ShapedRecipeBuilder"
import {$IMycelialGeneratorType$Input, $IMycelialGeneratorType$Input$Type} from "packages/com/buuz135/industrial/block/generator/mycelial/$IMycelialGeneratorType$Input"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MycelialGeneratorRecipe, $MycelialGeneratorRecipe$Type} from "packages/com/buuz135/industrial/plugin/jei/generator/$MycelialGeneratorRecipe"

export interface $IMycelialGeneratorType {

 "getName"(): string
 "getInputs"(): ($IMycelialGeneratorType$Input)[]
 "onTick"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "getDisplay"(): $Item
 "getRecipes"(): $List<($MycelialGeneratorRecipe)>
 "canStart"(arg0: ($INBTSerializable$Type<($CompoundTag$Type)>)[]): boolean
 "getInputColors"(): ($DyeColor)[]
 "getTankInputPredicates"(): $List<($Predicate<($FluidStack)>)>
 "getTimeAndPowerGeneration"(arg0: ($INBTSerializable$Type<($CompoundTag$Type)>)[]): $Pair<(integer), (integer)>
 "getSlotInputPredicates"(): $List<($BiPredicate<($ItemStack), (integer)>)>
 "getSlotSize"(): integer
 "addIngredients"(arg0: $ShapedRecipeBuilder$Type): $ShapedRecipeBuilder
}

export namespace $IMycelialGeneratorType {
const TYPES: $List<($IMycelialGeneratorType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMycelialGeneratorType$Type = ($IMycelialGeneratorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMycelialGeneratorType_ = $IMycelialGeneratorType$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IndustrialMachineTile, $IndustrialMachineTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialMachineTile"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IndustrialWorkingTile<T extends $IndustrialWorkingTile<(T)>> extends $IndustrialMachineTile<(T)> {

constructor(arg0: $Pair$Type<($RegistryObject$Type<($Block$Type)>), ($RegistryObject$Type<($BlockEntityType$Type<(any)>)>)>, arg1: integer, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "canAcceptAugment"(arg0: $ItemStack$Type): boolean
public "hasEnergy"(arg0: integer): boolean
public "getAssetProvider"(): $IAssetProvider
public "getMaxProgress"(): integer
get "assetProvider"(): $IAssetProvider
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialWorkingTile$Type<T> = ($IndustrialWorkingTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialWorkingTile_<T> = $IndustrialWorkingTile$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/item/addon/$AddonItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AddonItem extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: string, arg1: $TitaniumTab$Type, arg2: $Item$Properties$Type)
constructor(arg0: string, arg1: $TitaniumTab$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddonItem$Type = ($AddonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddonItem_ = $AddonItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$MobDuplicatorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$MobDuplicatorTile, $MobDuplicatorTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$MobDuplicatorTile"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MobDuplicatorBlock extends $IndustrialBlock<($MobDuplicatorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDuplicatorTile)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDuplicatorTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDuplicatorBlock$Type = ($MobDuplicatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobDuplicatorBlock_ = $MobDuplicatorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$RangeManager" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RangeManager$RangeType, $RangeManager$RangeType$Type} from "packages/com/buuz135/industrial/block/tile/$RangeManager$RangeType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $RangeManager {

constructor(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $RangeManager$RangeType$Type)

public "get"(arg0: integer): $VoxelShape
public "getType"(): $RangeManager$RangeType
public "getCurrent"(): $BlockPos
public "getDirection"(): $Direction
public "getBox"(): $AABB
get "type"(): $RangeManager$RangeType
get "current"(): $BlockPos
get "direction"(): $Direction
get "box"(): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeManager$Type = ($RangeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeManager_ = $RangeManager$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$PotionBrewerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$PotionBrewerTile, $PotionBrewerTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$PotionBrewerTile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PotionBrewerBlock extends $IndustrialBlock<($PotionBrewerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PotionBrewerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PotionBrewerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewerBlock$Type = ($PotionBrewerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewerBlock_ = $PotionBrewerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $ConfigurationToolItem$ConfigurationAction extends $Enum<($ConfigurationToolItem$ConfigurationAction)> {
static readonly "LOCKING": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_NUMBERS": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_RENDER": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_UPGRADES": $ConfigurationToolItem$ConfigurationAction
static readonly "INDICATOR": $ConfigurationToolItem$ConfigurationAction


public static "values"(): ($ConfigurationToolItem$ConfigurationAction)[]
public static "valueOf"(arg0: string): $ConfigurationToolItem$ConfigurationAction
public "getMax"(): integer
public "getColor"(): $TextColor
get "max"(): integer
get "color"(): $TextColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$ConfigurationAction$Type = (("indicator") | ("toggle_numbers") | ("locking") | ("toggle_render") | ("toggle_upgrades")) | ($ConfigurationToolItem$ConfigurationAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationToolItem$ConfigurationAction_ = $ConfigurationToolItem$ConfigurationAction$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/$IInfinityDrillScreenAddons" {
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInfinityDrillScreenAddons {

 "getScreenAddons"(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>

(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>
}

export namespace $IInfinityDrillScreenAddons {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfinityDrillScreenAddons$Type = ($IInfinityDrillScreenAddons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInfinityDrillScreenAddons_ = $IInfinityDrillScreenAddons$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ControllableDrawerTile, $ControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemControllableDrawerTile<T extends $ItemControllableDrawerTile<(T)>> extends $ControllableDrawerTile<(T)> {

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "invalidateCaps"(): void
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getTitleColor"(): integer
public "getBaseSize"(arg0: integer): integer
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "titleColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemControllableDrawerTile$Type<T> = ($ItemControllableDrawerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemControllableDrawerTile_<T> = $ItemControllableDrawerTile$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$MobDuplicatorTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MobDuplicatorTile extends $IndustrialAreaWorkingTile<($MobDuplicatorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getWorkingArea"(): $VoxelShape
public "getMaxProgress"(): integer
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDuplicatorTile$Type = ($MobDuplicatorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobDuplicatorTile_ = $MobDuplicatorTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$EnderDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$EnderDrawerTile, $EnderDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$EnderDrawerTile"

export class $EnderDrawerBlock extends $RotatableBlock<($EnderDrawerTile)> {
static "FREQUENCY_LOOK": $HashMap<(string), ($List<($ItemStack)>)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public static "getFrequencyDisplay"(arg0: string): $List<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerBlock$Type = ($EnderDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDrawerBlock_ = $EnderDrawerBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$SimpleCompactingDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CompactingInventoryHandler, $CompactingInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$CompactingInventoryHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SimpleCompactingDrawerTile extends $ItemControllableDrawerTile<($SimpleCompactingDrawerTile)> {
 "handler": $CompactingInventoryHandler

constructor(arg0: $BasicTileBlock$Type<($SimpleCompactingDrawerTile$Type)>, arg1: $BlockEntityType$Type<($SimpleCompactingDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getHandler"(): $CompactingInventoryHandler
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $SimpleCompactingDrawerTile$Type): void
public "getSelf"(): $SimpleCompactingDrawerTile
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getBaseSize"(arg0: integer): integer
get "handler"(): $CompactingInventoryHandler
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "self"(): $SimpleCompactingDrawerTile
get "storageSlotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerTile$Type = ($SimpleCompactingDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCompactingDrawerTile_ = $SimpleCompactingDrawerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$BlockBreakerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockBreakerTile, $BlockBreakerTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$BlockBreakerTile"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockBreakerBlock extends $IndustrialBlock<($BlockBreakerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockBreakerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockBreakerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerBlock$Type = ($BlockBreakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBreakerBlock_ = $BlockBreakerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/tile/$TransporterTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TransporterType, $TransporterType$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterType"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TransporterTypeFactory, $TransporterTypeFactory$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBlockContainer, $IBlockContainer$Type} from "packages/com/buuz135/industrial/api/$IBlockContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransporterTile extends $ActiveTile<($TransporterTile)> implements $IBlockContainer<($TransporterTypeFactory)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $TransporterTile$Type): void
public "openGui"(arg0: $Player$Type, arg1: $Direction$Type): void
public "getSelf"(): $TransporterTile
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "load"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $TransporterTile$Type): void
public "removeUpgrade"(arg0: $Direction$Type, arg1: boolean): void
public "addUpgrade"(arg0: $Direction$Type, arg1: $TransporterTypeFactory$Type): void
public "getBlockWorld"(): $Level
public "requestSync"(): void
public "requestFluidSync"(): void
public "hasUpgrade"(arg0: $Direction$Type): boolean
public "getBlockPosition"(): $BlockPos
public "getEntityFilter"(): $List<(integer)>
public "getTransporterTypeMap"(): $Map<($Direction), ($TransporterType)>
get "self"(): $TransporterTile
get "modelData"(): $ModelData
get "blockWorld"(): $Level
get "blockPosition"(): $BlockPos
get "entityFilter"(): $List<(integer)>
get "transporterTypeMap"(): $Map<($Direction), ($TransporterType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterTile$Type = ($TransporterTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterTile_ = $TransporterTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/core/$FluidExtractorBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidExtractorTile, $FluidExtractorTile$Type} from "packages/com/buuz135/industrial/block/core/tile/$FluidExtractorTile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluidExtractorBlock extends $IndustrialBlock<($FluidExtractorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidExtractorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidExtractorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorBlock$Type = ($FluidExtractorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidExtractorBlock_ = $FluidExtractorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidCollectorTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidCollectorTile extends $IndustrialAreaWorkingTile<($FluidCollectorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollectorTile$Type = ($FluidCollectorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidCollectorTile_ = $FluidCollectorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$ResourcefulFurnaceTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $ResourcefulFurnaceTile extends $IndustrialProcessingTile<($ResourcefulFurnaceTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onLoad"(): void
public "getSelf"(): $ResourcefulFurnaceTile
public "setChanged"(): void
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
get "self"(): $ResourcefulFurnaceTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcefulFurnaceTile$Type = ($ResourcefulFurnaceTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcefulFurnaceTile_ = $ResourcefulFurnaceTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$PlantFertilizerBlock" {
import {$PlantFertilizerTile, $PlantFertilizerTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$PlantFertilizerTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PlantFertilizerBlock extends $IndustrialBlock<($PlantFertilizerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantFertilizerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantFertilizerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantFertilizerBlock$Type = ($PlantFertilizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantFertilizerBlock_ = $PlantFertilizerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IRecipeProvider, $IRecipeProvider$Type} from "packages/com/hrznstudio/titanium/api/$IRecipeProvider"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ConveyorBlock$EnumType, $ConveyorBlock$EnumType$Type} from "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock$EnumType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ConveyorBlock$ConveyorItem, $ConveyorBlock$ConveyorItem$Type} from "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock$ConveyorItem"
import {$ConveyorTile, $ConveyorTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$ConveyorTile"

export class $ConveyorBlock extends $BasicTileBlock<($ConveyorTile)> implements $SimpleWaterloggedBlock, $IRecipeProvider {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ConveyorBlock$EnumType)>
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

constructor(arg0: $TitaniumTab$Type)

public "getItem"(): $ConveyorBlock$ConveyorItem
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ConveyorTile)>
public "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
public "isPossibleToRespawnInThis"(arg0: $BlockState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getFacingUpgradeHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): $Direction
public "hasIndividualRenderVoxelShape"(): boolean
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "item"(): $ConveyorBlock$ConveyorItem
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ConveyorTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBlock$Type = ($ConveyorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorBlock_ = $ConveyorBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$LinkingToolItem" {
import {$LinkingToolItem$LinkingMode, $LinkingToolItem$LinkingMode$Type} from "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$LinkingMode"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LinkingToolItem$ActionMode, $LinkingToolItem$ActionMode$Type} from "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$ActionMode"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LinkingToolItem extends $BasicItem {
static readonly "NBT_MODE": string
static readonly "NBT_CONTROLLER": string
static readonly "NBT_ACTION": string
static readonly "NBT_FIRST": string
static readonly "NBT_ENDER": string
static readonly "NBT_ENDER_SAFETY": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getActionMode"(arg0: $ItemStack$Type): $LinkingToolItem$ActionMode
public static "getLinkingMode"(arg0: $ItemStack$Type): $LinkingToolItem$LinkingMode
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public static "getBlockPosInAABB"(arg0: $AABB$Type): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$Type = ($LinkingToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem_ = $LinkingToolItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$WitherBuilderBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WitherBuilderTile, $WitherBuilderTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$WitherBuilderTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $WitherBuilderBlock extends $IndustrialBlock<($WitherBuilderTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WitherBuilderTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WitherBuilderTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherBuilderBlock$Type = ($WitherBuilderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitherBuilderBlock_ = $WitherBuilderBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/mycelial/$IMycelialGeneratorType$Input" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IMycelialGeneratorType$Input extends $Enum<($IMycelialGeneratorType$Input)> {
static readonly "SLOT": $IMycelialGeneratorType$Input
static readonly "TANK": $IMycelialGeneratorType$Input


public static "values"(): ($IMycelialGeneratorType$Input)[]
public static "valueOf"(arg0: string): $IMycelialGeneratorType$Input
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMycelialGeneratorType$Input$Type = (("slot") | ("tank")) | ($IMycelialGeneratorType$Input);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMycelialGeneratorType$Input_ = $IMycelialGeneratorType$Input$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityTrident" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinityTrident extends $ItemInfinity {
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "addNbt"(arg0: $ItemStack$Type, arg1: long, arg2: integer, arg3: boolean): void
public "getScreenAddons"(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>
public "setLoyalty"(arg0: $ItemStack$Type, arg1: integer): void
public "getCurrentLoyalty"(arg0: $ItemStack$Type): integer
public "getCurrentRiptide"(arg0: $ItemStack$Type): integer
public "getMaxLoyalty"(arg0: $ItemStack$Type): integer
public "setChanneling"(arg0: $ItemStack$Type, arg1: boolean): void
public "setRiptide"(arg0: $ItemStack$Type, arg1: integer): void
public "getMaxRiptide"(arg0: $ItemStack$Type): integer
public "canChanneling"(arg0: $ItemStack$Type): boolean
public "getCurrentChanneling"(arg0: $ItemStack$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityTrident$Type = ($ItemInfinityTrident);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityTrident_ = $ItemInfinityTrident$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$BlackHoleUnitBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$BlackHoleUnitTile, $BlackHoleUnitTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$BlackHoleUnitTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"

export class $BlackHoleUnitBlock extends $IndustrialBlock<($BlackHoleUnitTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $Rarity$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlackHoleUnitTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlackHoleUnitTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleUnitBlock$Type = ($BlackHoleUnitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleUnitBlock_ = $BlackHoleUnitBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$IndustrialMachineTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$RedstoneAction, $RedstoneAction$Type} from "packages/com/hrznstudio/titanium/block/redstone/$RedstoneAction"
import {$RedstoneManager, $RedstoneManager$Type} from "packages/com/hrznstudio/titanium/block/redstone/$RedstoneManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IAssetProvider, $IAssetProvider$Type} from "packages/com/hrznstudio/titanium/client/screen/asset/$IAssetProvider"
import {$IRedstoneReader, $IRedstoneReader$Type} from "packages/com/hrznstudio/titanium/api/redstone/$IRedstoneReader"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IRedstoneState, $IRedstoneState$Type} from "packages/com/hrznstudio/titanium/api/redstone/$IRedstoneState"
import {$FluidTankComponent, $FluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$FluidTankComponent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MachineTile, $MachineTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$MachineTile"

export class $IndustrialMachineTile<T extends $IndustrialMachineTile<(T)>> extends $MachineTile<(T)> implements $IRedstoneReader {

constructor(arg0: $Pair$Type<($RegistryObject$Type<($Block$Type)>), ($RegistryObject$Type<($BlockEntityType$Type<(any)>)>)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "clientTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "addTank"(arg0: $FluidTankComponent$Type<(T)>): void
public "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type): void
public "canAcceptAugment"(arg0: $ItemStack$Type): boolean
public "getEnvironmentValue"(arg0: boolean, arg1: $Direction$Type): $IRedstoneState
public "isSoulPowered"(): boolean
public "getRedstoneManager"(): $RedstoneManager<($RedstoneAction)>
public "canBeSoulPowered"(): boolean
public "getAssetProvider"(): $IAssetProvider
get "soulPowered"(): boolean
get "redstoneManager"(): $RedstoneManager<($RedstoneAction)>
get "assetProvider"(): $IAssetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialMachineTile$Type<T> = ($IndustrialMachineTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialMachineTile_<T> = $IndustrialMachineTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$CompactingInventoryHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$CompactingUtil, $CompactingUtil$Type} from "packages/com/buuz135/functionalstorage/util/$CompactingUtil"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$CompactingUtil$Result, $CompactingUtil$Result$Type} from "packages/com/buuz135/functionalstorage/util/$CompactingUtil$Result"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ILockable, $ILockable$Type} from "packages/com/buuz135/functionalstorage/inventory/$ILockable"

export class $CompactingInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)>, $ILockable {
static "PARENT": string
static "BIG_ITEMS": string
static "STACK": string
static "AMOUNT": string
 "totalAmount": integer

constructor(arg0: integer)

public "getParent"(): $ItemStack
public "setup"(arg0: $CompactingUtil$Type): void
public "isVoid"(): boolean
public "reset"(): void
public "getMultiplier"(): integer
public "onChange"(): void
public "getSlots"(): integer
public "getAmount"(): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getSlotLimit"(arg0: integer): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getResultList"(): $List<($CompactingUtil$Result)>
public "isSetup"(): boolean
public "getSlotLimitBase"(arg0: integer): integer
public "hasDowngrade"(): boolean
public "isCreative"(): boolean
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
public "isLocked"(): boolean
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
get "parent"(): $ItemStack
set "up"(value: $CompactingUtil$Type)
get "void"(): boolean
get "multiplier"(): integer
get "slots"(): integer
get "amount"(): integer
get "resultList"(): $List<($CompactingUtil$Result)>
get "creative"(): boolean
get "mutable"(): boolean
get "slots"(): integer
get "locked"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingInventoryHandler$Type = ($CompactingInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingInventoryHandler_ = $CompactingInventoryHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedDrawerControllerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FramedDrawerControllerTile, $FramedDrawerControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$FramedDrawerControllerTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$StorageControllerBlock, $StorageControllerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FramedDrawerControllerBlock extends $StorageControllerBlock<($FramedDrawerControllerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerBlock$Type = ($FramedDrawerControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerControllerBlock_ = $FramedDrawerControllerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/core/$LatexProcessingUnitBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LatexProcessingUnitTile, $LatexProcessingUnitTile$Type} from "packages/com/buuz135/industrial/block/core/tile/$LatexProcessingUnitTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LatexProcessingUnitBlock extends $IndustrialBlock<($LatexProcessingUnitTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LatexProcessingUnitTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LatexProcessingUnitTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LatexProcessingUnitBlock$Type = ($LatexProcessingUnitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LatexProcessingUnitBlock_ = $LatexProcessingUnitBlock$Type;
}}
declare module "packages/com/buuz135/industrial/api/conveyor/gui/$IGuiComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IGuiComponent {

 "getXSize"(): integer
 "getYSize"(): integer
 "getTooltip"(arg0: integer, arg1: integer, arg2: double, arg3: double): $List<($Component)>
 "handleClick"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: integer, arg2: integer, arg3: double, arg4: double): boolean
 "onScrolled"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: integer, arg2: integer, arg3: double, arg4: double, arg5: double): boolean
 "getXPos"(): integer
 "getYPos"(): integer
 "drawGuiBackgroundLayer"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: double, arg4: double): void
 "drawGuiForegroundLayer"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: double, arg4: double): void
 "isInside"(arg0: double, arg1: double): boolean
}

export namespace $IGuiComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiComponent$Type = ($IGuiComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiComponent_ = $IGuiComponent$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityHammer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinityHammer extends $ItemInfinity {
static "HEADS": $HashMap<($Class<(any)>), ($Function<($Entity), ($ItemStack)>)>
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static "DAMAGE": integer
static "ATTACK_SPEED": float
static "BEHEADING_NBT": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "addNbt"(arg0: $ItemStack$Type, arg1: long, arg2: integer, arg3: boolean): void
public "getScreenAddons"(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>
public "getMaxBeheading"(arg0: $ItemStack$Type): integer
public "setBeheading"(arg0: $ItemStack$Type, arg1: integer): void
public static "createHead"(arg0: string): $ItemStack
public "getCurrentBeheading"(arg0: $ItemStack$Type): integer
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityHammer$Type = ($ItemInfinityHammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityHammer_ = $ItemInfinityHammer$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$AnimalFeederBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AnimalFeederTile, $AnimalFeederTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$AnimalFeederTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AnimalFeederBlock extends $IndustrialBlock<($AnimalFeederTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalFeederTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalFeederTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalFeederBlock$Type = ($AnimalFeederBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalFeederBlock_ = $AnimalFeederBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$LinkingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $LinkingToolItem$LinkingMode extends $Enum<($LinkingToolItem$LinkingMode)> {
static readonly "SINGLE": $LinkingToolItem$LinkingMode
static readonly "MULTIPLE": $LinkingToolItem$LinkingMode


public static "values"(): ($LinkingToolItem$LinkingMode)[]
public static "valueOf"(arg0: string): $LinkingToolItem$LinkingMode
public "getColor"(): $TextColor
get "color"(): $TextColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$LinkingMode$Type = (("single") | ("multiple")) | ($LinkingToolItem$LinkingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem$LinkingMode_ = $LinkingToolItem$LinkingMode$Type;
}}
declare module "packages/com/buuz135/industrial/fluid/$OreFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OreFluid, $OreFluid$Type} from "packages/com/buuz135/industrial/fluid/$OreFluid"
import {$OreFluidInstance, $OreFluidInstance$Type} from "packages/com/buuz135/industrial/fluid/$OreFluidInstance"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $OreFluid$Flowing extends $OreFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $OreFluidInstance$Type)

public "getAmount"(arg0: $FluidState$Type): integer
public "isSource"(arg0: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluid$Flowing$Type = ($OreFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreFluid$Flowing_ = $OreFluid$Flowing$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/$InfinityEnergyStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IComponentHarness, $IComponentHarness$Type} from "packages/com/hrznstudio/titanium/component/$IComponentHarness"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnergyStorageComponent, $EnergyStorageComponent$Type} from "packages/com/hrznstudio/titanium/component/energy/$EnergyStorageComponent"

export class $InfinityEnergyStorage<T extends $IComponentHarness> extends $EnergyStorageComponent<(T)> {

constructor(arg0: long, arg1: integer, arg2: integer)

public "canExtract"(): boolean
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "canReceive"(): boolean
public "getContainerAddons"(): $List<($IFactory<(any)>)>
public "deserializeNBT"(arg0: $Tag$Type): void
public "serializeNBT"(): $CompoundTag
public "getScreenAddons"(): $List<($IFactory<(any)>)>
public "getLongCapacity"(): long
public "getLongEnergyStored"(): long
public "setEnergyStored"(arg0: long): void
get "energyStored"(): integer
get "maxEnergyStored"(): integer
get "containerAddons"(): $List<($IFactory<(any)>)>
get "screenAddons"(): $List<($IFactory<(any)>)>
get "longCapacity"(): long
get "longEnergyStored"(): long
set "energyStored"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityEnergyStorage$Type<T> = ($InfinityEnergyStorage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityEnergyStorage_<T> = $InfinityEnergyStorage$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/generator/$MycelialGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IMycelialGeneratorType, $IMycelialGeneratorType$Type} from "packages/com/buuz135/industrial/block/generator/mycelial/$IMycelialGeneratorType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MycelialGeneratorTile, $MycelialGeneratorTile$Type} from "packages/com/buuz135/industrial/block/generator/tile/$MycelialGeneratorTile"

export class $MycelialGeneratorBlock extends $IndustrialBlock<($MycelialGeneratorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $IMycelialGeneratorType$Type)

public "getType"(): $IMycelialGeneratorType
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialGeneratorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "type"(): $IMycelialGeneratorType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialGeneratorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialGeneratorBlock$Type = ($MycelialGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MycelialGeneratorBlock_ = $MycelialGeneratorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$BlackHoleControllerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$BlackHoleControllerTile, $BlackHoleControllerTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$BlackHoleControllerTile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlackHoleControllerBlock extends $IndustrialBlock<($BlackHoleControllerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlackHoleControllerTile)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlackHoleControllerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleControllerBlock$Type = ($BlackHoleControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleControllerBlock_ = $BlackHoleControllerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$TransporterBlock" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$TransporterTile, $TransporterTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$TransporterTile"

export class $TransporterBlock extends $BasicTileBlock<($TransporterTile)> implements $SimpleWaterloggedBlock {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($TransporterTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getFacingUpgradeHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): $Pair<($Direction), (boolean)>
public "hasIndividualRenderVoxelShape"(): boolean
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($TransporterTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterBlock$Type = ($TransporterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterBlock_ = $TransporterBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$WaterCondensatorTile" {
import {$IndustrialWorkingTile, $IndustrialWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WaterCondensatorTile extends $IndustrialWorkingTile<($WaterCondensatorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getSelf"(): $WaterCondensatorTile
public "getMaxProgress"(): integer
get "self"(): $WaterCondensatorTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterCondensatorTile$Type = ($WaterCondensatorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterCondensatorTile_ = $WaterCondensatorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialMachineTile, $IndustrialMachineTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialMachineTile"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$ProgressBarComponent$BarDirection, $ProgressBarComponent$BarDirection$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent$BarDirection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IndustrialProcessingTile<T extends $IndustrialProcessingTile<(T)>> extends $IndustrialMachineTile<(T)> {

constructor(arg0: $Pair$Type<($RegistryObject$Type<($Block$Type)>), ($RegistryObject$Type<($BlockEntityType$Type<(any)>)>)>, arg1: integer, arg2: integer, arg3: $BlockPos$Type, arg4: $BlockState$Type)

public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getBarDirection"(): $ProgressBarComponent$BarDirection
public "getProgressBar"(): $ProgressBarComponent<(T)>
public "getMaxProgress"(): integer
get "barDirection"(): $ProgressBarComponent$BarDirection
get "progressBar"(): $ProgressBarComponent<(T)>
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialProcessingTile$Type<T> = ($IndustrialProcessingTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialProcessingTile_<T> = $IndustrialProcessingTile$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/core/tile/$DissolutionChamberTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $DissolutionChamberTile extends $IndustrialProcessingTile<($DissolutionChamberTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $DissolutionChamberTile
public "setLevel"(arg0: $Level$Type): void
public "setChanged"(): void
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public static "getSlotPos"(arg0: integer): $Pair<(integer), (integer)>
public "getMaxProgress"(): integer
get "self"(): $DissolutionChamberTile
set "level"(value: $Level$Type)
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DissolutionChamberTile$Type = ($DissolutionChamberTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DissolutionChamberTile_ = $DissolutionChamberTile$Type;
}}
declare module "packages/com/buuz135/industrial/item/addon/$EfficiencyAddonItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AddonItem, $AddonItem$Type} from "packages/com/buuz135/industrial/item/addon/$AddonItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ISpecialCreativeTabItem, $ISpecialCreativeTabItem$Type} from "packages/com/hrznstudio/titanium/api/$ISpecialCreativeTabItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EfficiencyAddonItem extends $AddonItem implements $ISpecialCreativeTabItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: $TitaniumTab$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getDescriptionId"(): string
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EfficiencyAddonItem$Type = ($EfficiencyAddonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EfficiencyAddonItem_ = $EfficiencyAddonItem$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityDrill" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemInfinity, $ItemInfinity$Type} from "packages/com/buuz135/industrial/item/infinity/$ItemInfinity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinityDrill extends $ItemInfinity {
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityDrill$Type = ($ItemInfinityDrill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityDrill_ = $ItemInfinityDrill$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/$BioReactorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BioReactorTile, $BioReactorTile$Type} from "packages/com/buuz135/industrial/block/generator/tile/$BioReactorTile"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BioReactorBlock extends $IndustrialBlock<($BioReactorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BioReactorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BioReactorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BioReactorBlock$Type = ($BioReactorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BioReactorBlock_ = $BioReactorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$PlantGathererBlock" {
import {$PlantGathererTile, $PlantGathererTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$PlantGathererTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PlantGathererBlock extends $IndustrialBlock<($PlantGathererTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantGathererTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantGathererTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantGathererBlock$Type = ($PlantGathererBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantGathererBlock_ = $PlantGathererBlock$Type;
}}
declare module "packages/com/buuz135/industrial/api/transporter/$TransporterType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TransporterTypeFactory, $TransporterTypeFactory$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBlockContainer, $IBlockContainer$Type} from "packages/com/buuz135/industrial/api/$IBlockContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TransporterTypeFactory$TransporterAction, $TransporterTypeFactory$TransporterAction$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory$TransporterAction"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IGuiComponent, $IGuiComponent$Type} from "packages/com/buuz135/industrial/api/conveyor/gui/$IGuiComponent"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TransporterType implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $IBlockContainer$Type<(any)>, arg1: $TransporterTypeFactory$Type, arg2: $Direction$Type, arg3: $TransporterTypeFactory$TransporterAction$Type)

public "update"(): void
public "getFactory"(): $TransporterTypeFactory
public "getPos"(): $BlockPos
public "getContainer"(): $IBlockContainer<(any)>
public "handleButtonInteraction"(arg0: integer, arg1: $CompoundTag$Type): void
public "getSide"(): $Direction
public "getLevel"(): $Level
public "getAction"(): $TransporterTypeFactory$TransporterAction
public "getEfficiency"(): float
public "getDrops"(): $Collection<($ItemStack)>
public "getSpeed"(): float
public "ignoresCollision"(): boolean
public "hasGui"(): boolean
public "onUpgradeActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "toggleAction"(): void
public "getRedstoneOutput"(): integer
public "handleEntity"(arg0: $Entity$Type): void
public "addComponentsToGui"(arg0: $List$Type<($IGuiComponent$Type)>): void
public "onUpgradeRemoved"(): void
public "updateClient"(): void
public "syncRender"(arg0: $Direction$Type, arg1: $CompoundTag$Type): void
public "renderTransfer"(arg0: $Vector3f$Type, arg1: $Direction$Type, arg2: integer, arg3: $PoseStack$Type, arg4: integer, arg5: $MultiBufferSource$Type, arg6: float, arg7: $Level$Type): void
public "getCenterBoundingBox"(): $VoxelShape
public "getBorderBoundingBox"(): $VoxelShape
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "handleRenderSync"(arg0: $Direction$Type, arg1: $CompoundTag$Type): void
get "factory"(): $TransporterTypeFactory
get "pos"(): $BlockPos
get "container"(): $IBlockContainer<(any)>
get "side"(): $Direction
get "level"(): $Level
get "action"(): $TransporterTypeFactory$TransporterAction
get "efficiency"(): float
get "drops"(): $Collection<($ItemStack)>
get "speed"(): float
get "redstoneOutput"(): integer
get "centerBoundingBox"(): $VoxelShape
get "borderBoundingBox"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterType$Type = ($TransporterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterType_ = $TransporterType$Type;
}}
declare module "packages/com/buuz135/industrial/fluid/$OreFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$OreFluid, $OreFluid$Type} from "packages/com/buuz135/industrial/fluid/$OreFluid"
import {$OreFluidInstance, $OreFluidInstance$Type} from "packages/com/buuz135/industrial/fluid/$OreFluidInstance"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $OreFluid$Source extends $OreFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $OreFluidInstance$Type)

public "getAmount"(arg0: $FluidState$Type): integer
public "isSource"(arg0: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluid$Source$Type = ($OreFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreFluid$Source_ = $OreFluid$Source$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler$BigStack" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BigInventoryHandler$BigStack {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "getStack"(): $ItemStack
public "setAmount"(arg0: integer): void
public "setStack"(arg0: $ItemStack$Type): void
public "getAmount"(): integer
get "stack"(): $ItemStack
set "amount"(value: integer)
set "stack"(value: $ItemStack$Type)
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInventoryHandler$BigStack$Type = ($BigInventoryHandler$BigStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInventoryHandler$BigStack_ = $BigInventoryHandler$BigStack$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidSievingMachineTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $FluidSievingMachineTile extends $IndustrialProcessingTile<($FluidSievingMachineTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $FluidSievingMachineTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "self"(): $FluidSievingMachineTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSievingMachineTile$Type = ($FluidSievingMachineTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSievingMachineTile_ = $FluidSievingMachineTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidLaserBaseTile" {
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IndustrialMachineTile, $IndustrialMachineTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialMachineTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ILaserBase, $ILaserBase$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$ILaserBase"

export class $FluidLaserBaseTile extends $IndustrialMachineTile<($FluidLaserBaseTile)> implements $ILaserBase<($FluidLaserBaseTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "initClient"(): void
public "setChanged"(): void
public "canAcceptAugment"(arg0: $ItemStack$Type): boolean
public "getBar"(): $ProgressBarComponent<($FluidLaserBaseTile)>
get "bar"(): $ProgressBarComponent<($FluidLaserBaseTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLaserBaseTile$Type = ($FluidLaserBaseTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLaserBaseTile_ = $FluidLaserBaseTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$SludgeRefinerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SludgeRefinerTile, $SludgeRefinerTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$SludgeRefinerTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SludgeRefinerBlock extends $IndustrialBlock<($SludgeRefinerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SludgeRefinerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SludgeRefinerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SludgeRefinerBlock$Type = ($SludgeRefinerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SludgeRefinerBlock_ = $SludgeRefinerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$DyeMixerBlock" {
import {$DyeMixerTile, $DyeMixerTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$DyeMixerTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DyeMixerBlock extends $IndustrialBlock<($DyeMixerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DyeMixerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DyeMixerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeMixerBlock$Type = ($DyeMixerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeMixerBlock_ = $DyeMixerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/plugin/jei/generator/$MycelialGeneratorRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $MycelialGeneratorRecipe {

constructor(arg0: $List$Type<($List$Type<($Ingredient$Type)>)>, arg1: $List$Type<($List$Type<($FluidStack$Type)>)>, arg2: integer, arg3: integer)

public "getPowerTick"(): integer
public "getTicks"(): integer
public "getInputItems"(): $List<($List<($Ingredient)>)>
public "getFluidItems"(): $List<($List<($FluidStack)>)>
get "powerTick"(): integer
get "ticks"(): integer
get "inputItems"(): $List<($List<($Ingredient)>)>
get "fluidItems"(): $List<($List<($FluidStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialGeneratorRecipe$Type = ($MycelialGeneratorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MycelialGeneratorRecipe_ = $MycelialGeneratorRecipe$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$PlantFertilizerTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SidedInventoryComponent, $SidedInventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$SidedInventoryComponent"

export class $PlantFertilizerTile extends $IndustrialAreaWorkingTile<($PlantFertilizerTile)> {
 "fertilizer": $SidedInventoryComponent<($PlantFertilizerTile)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getSelf"(): $PlantFertilizerTile
public "getMaxProgress"(): integer
get "self"(): $PlantFertilizerTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantFertilizerTile$Type = ($PlantFertilizerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantFertilizerTile_ = $PlantFertilizerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/$MachineFrameBlock$MachineFrameItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineFrameBlock$MachineFrameItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Rarity$Type, arg2: $TitaniumTab$Type)

public "getCreatorModId"(arg0: $ItemStack$Type): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFrameBlock$MachineFrameItem$Type = ($MachineFrameBlock$MachineFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFrameBlock$MachineFrameItem_ = $MachineFrameBlock$MachineFrameItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$MobCrusherBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MobCrusherTile, $MobCrusherTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$MobCrusherTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MobCrusherBlock extends $IndustrialBlock<($MobCrusherTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobCrusherTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobCrusherTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCrusherBlock$Type = ($MobCrusherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobCrusherBlock_ = $MobCrusherBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$MobDetectorTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MobDetectorTile extends $IndustrialAreaWorkingTile<($MobDetectorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getRedstoneSignal"(): integer
public "getMaxProgress"(): integer
get "redstoneSignal"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDetectorTile$Type = ($MobDetectorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobDetectorTile_ = $MobDetectorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/tile/$BiofuelGeneratorTile" {
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialGeneratorTile, $IndustrialGeneratorTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialGeneratorTile"

export class $BiofuelGeneratorTile extends $IndustrialGeneratorTile<($BiofuelGeneratorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $BiofuelGeneratorTile
public "consumeFuel"(): integer
public "canStart"(): boolean
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "getProgressBar"(): $ProgressBarComponent<(any)>
public "getEnergyCapacity"(): integer
get "self"(): $BiofuelGeneratorTile
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
get "progressBar"(): $ProgressBarComponent<(any)>
get "energyCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiofuelGeneratorTile$Type = ($BiofuelGeneratorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiofuelGeneratorTile_ = $BiofuelGeneratorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/$IndustrialBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BasicTile, $BasicTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$BasicTile"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $IndustrialBlock<T extends $BasicTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>, arg3: $TitaniumTab$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialBlock$Type<T> = ($IndustrialBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialBlock_<T> = $IndustrialBlock$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$AnimalRancherBlock" {
import {$AnimalRancherTile, $AnimalRancherTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$AnimalRancherTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AnimalRancherBlock extends $IndustrialBlock<($AnimalRancherTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalRancherTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalRancherTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalRancherBlock$Type = ($AnimalRancherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalRancherBlock_ = $AnimalRancherBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/core/$DissolutionChamberBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$DissolutionChamberTile, $DissolutionChamberTile$Type} from "packages/com/buuz135/industrial/block/core/tile/$DissolutionChamberTile"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DissolutionChamberBlock extends $IndustrialBlock<($DissolutionChamberTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DissolutionChamberTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DissolutionChamberTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DissolutionChamberBlock$Type = ($DissolutionChamberBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DissolutionChamberBlock_ = $DissolutionChamberBlock$Type;
}}
declare module "packages/com/buuz135/industrial/item/addon/$SpeedAddonItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AddonItem, $AddonItem$Type} from "packages/com/buuz135/industrial/item/addon/$AddonItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ISpecialCreativeTabItem, $ISpecialCreativeTabItem$Type} from "packages/com/hrznstudio/titanium/api/$ISpecialCreativeTabItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpeedAddonItem extends $AddonItem implements $ISpecialCreativeTabItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: $TitaniumTab$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getDescriptionId"(): string
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedAddonItem$Type = ($SpeedAddonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeedAddonItem_ = $SpeedAddonItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$FermentationStationBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FermentationStationTile, $FermentationStationTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$FermentationStationTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FermentationStationBlock extends $IndustrialBlock<($FermentationStationTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FermentationStationTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FermentationStationTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentationStationBlock$Type = ($FermentationStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermentationStationBlock_ = $FermentationStationBlock$Type;
}}
declare module "packages/com/buuz135/industrial/utils/apihandlers/plant/$TreeCache" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"

export class $TreeCache {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type)

public "getHighestBlock"(arg0: $BlockPos$Type): $BlockPos
public "chop"(arg0: $Queue$Type<($BlockPos$Type)>, arg1: boolean): $List<($ItemStack)>
public "getLeavesCache"(): $Queue<($BlockPos)>
public "getWoodCache"(): $Queue<($BlockPos)>
public "scanForTreeBlockSection"(): void
get "leavesCache"(): $Queue<($BlockPos)>
get "woodCache"(): $Queue<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeCache$Type = ($TreeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeCache_ = $TreeCache$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$FluidLaserBaseBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$FluidLaserBaseTile, $FluidLaserBaseTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidLaserBaseTile"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluidLaserBaseBlock extends $IndustrialBlock<($FluidLaserBaseTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidLaserBaseTile)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidLaserBaseTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLaserBaseBlock$Type = ($FluidLaserBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLaserBaseBlock_ = $FluidLaserBaseBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$SewerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SewerTile, $SewerTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$SewerTile"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SewerBlock extends $IndustrialBlock<($SewerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewerBlock$Type = ($SewerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SewerBlock_ = $SewerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$AnimalBabySeparatorTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AnimalBabySeparatorTile extends $IndustrialAreaWorkingTile<($AnimalBabySeparatorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "initClient"(): void
public "getSelf"(): $AnimalBabySeparatorTile
public "getMaxProgress"(): integer
get "self"(): $AnimalBabySeparatorTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalBabySeparatorTile$Type = ($AnimalBabySeparatorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalBabySeparatorTile_ = $AnimalBabySeparatorTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$EnderDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnderDrawerTile extends $ItemControllableDrawerTile<($EnderDrawerTile)> {

constructor(arg0: $BasicTileBlock$Type<($EnderDrawerTile$Type)>, arg1: $BlockEntityType$Type<($EnderDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "isVoid"(): boolean
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getFrequency"(): string
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $EnderDrawerTile$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "setLevel"(arg0: $Level$Type): void
public "setLocked"(arg0: boolean): void
public "setFrequency"(arg0: string): void
public "onClicked"(arg0: $Player$Type, arg1: integer): void
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getBaseSize"(arg0: integer): integer
get "void"(): boolean
get "storage"(): $IItemHandler
get "frequency"(): string
get "optional"(): $LazyOptional<($IItemHandler)>
set "level"(value: $Level$Type)
set "locked"(value: boolean)
set "frequency"(value: string)
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerTile$Type = ($EnderDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDrawerTile_ = $EnderDrawerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$SewerTile" {
import {$SidedFluidTankComponent, $SidedFluidTankComponent$Type} from "packages/com/hrznstudio/titanium/component/fluid/$SidedFluidTankComponent"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SewerTile extends $IndustrialAreaWorkingTile<($SewerTile)> {
 "sewage": $SidedFluidTankComponent<($SewerTile)>
 "essence": $SidedFluidTankComponent<($SewerTile)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewerTile$Type = ($SewerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SewerTile_ = $SewerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/$BiofuelGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BiofuelGeneratorTile, $BiofuelGeneratorTile$Type} from "packages/com/buuz135/industrial/block/generator/tile/$BiofuelGeneratorTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BiofuelGeneratorBlock extends $IndustrialBlock<($BiofuelGeneratorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BiofuelGeneratorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BiofuelGeneratorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiofuelGeneratorBlock$Type = ($BiofuelGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiofuelGeneratorBlock_ = $BiofuelGeneratorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock$EnumType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ConveyorBlock$EnumType extends $Enum<($ConveyorBlock$EnumType)> implements $StringRepresentable {
static readonly "FLAT": $ConveyorBlock$EnumType
static readonly "UP": $ConveyorBlock$EnumType
static readonly "DOWN": $ConveyorBlock$EnumType
static readonly "FLAT_FAST": $ConveyorBlock$EnumType
static readonly "UP_FAST": $ConveyorBlock$EnumType
static readonly "DOWN_FAST": $ConveyorBlock$EnumType


public "getName"(): string
public "toString"(): string
public static "values"(): ($ConveyorBlock$EnumType)[]
public static "valueOf"(arg0: string): $ConveyorBlock$EnumType
public "isUp"(): boolean
public "getTexture"(): string
public "getModel"(): string
public "isDown"(): boolean
public "getVertical"(arg0: $Direction$Type): $ConveyorBlock$EnumType
public "getFast"(): $ConveyorBlock$EnumType
public "isVertical"(): boolean
public "isFast"(): boolean
public "getSerializedName"(): string
public static "getFromName"(arg0: string): $ConveyorBlock$EnumType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "up"(): boolean
get "texture"(): string
get "model"(): string
get "down"(): boolean
get "fast"(): $ConveyorBlock$EnumType
get "vertical"(): boolean
get "fast"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBlock$EnumType$Type = (("up_fast") | ("flat") | ("down_fast") | ("up") | ("down") | ("flat_fast")) | ($ConveyorBlock$EnumType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorBlock$EnumType_ = $ConveyorBlock$EnumType$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$EnchantmentSorterBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$EnchantmentSorterTile, $EnchantmentSorterTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentSorterTile"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnchantmentSorterBlock extends $IndustrialBlock<($EnchantmentSorterTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentSorterTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentSorterTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSorterBlock$Type = ($EnchantmentSorterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentSorterBlock_ = $EnchantmentSorterBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/inventory/$ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable {

 "isLocked"(): boolean

(): boolean
}

export namespace $ILockable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$Type = ($ILockable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILockable_ = $ILockable$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StorageControllerExtensionTile<T extends $StorageControllerExtensionTile<(T)>> extends $ItemControllableDrawerTile<(T)> {

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "invalidateCaps"(): void
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): void
public "toggleLocking"(): void
public "getBaseSize"(arg0: integer): integer
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "storageSlotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionTile$Type<T> = ($StorageControllerExtensionTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerExtensionTile_<T> = $StorageControllerExtensionTile$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$DrawerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IWoodType, $IWoodType$Type} from "packages/com/buuz135/functionalstorage/util/$IWoodType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DrawerTile, $DrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$DrawerTile"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $DrawerBlock extends $RotatableBlock<($DrawerTile)> {
static "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>
static "LOCKED": $BooleanProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $IWoodType$Type, arg1: $FunctionalStorage$DrawerType$Type, arg2: $BlockBehaviour$Properties$Type)

public "getType"(): $FunctionalStorage$DrawerType
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
public "getWoodType"(): $IWoodType
public "hasIndividualRenderVoxelShape"(): boolean
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "type"(): $FunctionalStorage$DrawerType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
get "woodType"(): $IWoodType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerBlock$Type = ($DrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerBlock_ = $DrawerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$SludgeRefinerTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $SludgeRefinerTile extends $IndustrialProcessingTile<($SludgeRefinerTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $SludgeRefinerTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
get "self"(): $SludgeRefinerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SludgeRefinerTile$Type = ($SludgeRefinerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SludgeRefinerTile_ = $SludgeRefinerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$UpgradeItem" {
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UpgradeItem$Type, $UpgradeItem$Type$Type} from "packages/com/buuz135/functionalstorage/item/$UpgradeItem$Type"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $BasicItem {
static "MAX_SLOT": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $UpgradeItem$Type$Type)

public "getType"(): $UpgradeItem$Type
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "getDirection"(arg0: $ItemStack$Type): $Direction
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
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
declare module "packages/com/buuz135/functionalstorage/block/$StorageControllerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $StorageControllerBlock<T extends $StorageControllerTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Class$Type<(T)>)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRotationType"(): $RotatableBlock$RotationType
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlock$Type<T> = ($StorageControllerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlock_<T> = $StorageControllerBlock$Type<(T)>;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$StorageControllerExtensionBlock, $StorageControllerExtensionBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerExtensionBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FramedControllerExtensionTile, $FramedControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$FramedControllerExtensionTile"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FramedControllerExtensionBlock extends $StorageControllerExtensionBlock<($FramedControllerExtensionTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionBlock$Type = ($FramedControllerExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedControllerExtensionBlock_ = $FramedControllerExtensionBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$SewageComposterBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SewageComposterTile, $SewageComposterTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$SewageComposterTile"

export class $SewageComposterBlock extends $IndustrialBlock<($SewageComposterTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewageComposterTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewageComposterTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewageComposterBlock$Type = ($SewageComposterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SewageComposterBlock_ = $SewageComposterBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$TransporterBlock$Item" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IndustrialBlockItem, $IndustrialBlockItem$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISpecialCreativeTabItem, $ISpecialCreativeTabItem$Type} from "packages/com/hrznstudio/titanium/api/$ISpecialCreativeTabItem"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"

export class $TransporterBlock$Item extends $IndustrialBlockItem implements $ISpecialCreativeTabItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $TitaniumTab$Type)

public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterBlock$Item$Type = ($TransporterBlock$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterBlock$Item_ = $TransporterBlock$Item$Type;
}}
declare module "packages/com/buuz135/industrial/item/$MobImprisonmentToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobImprisonmentToolItem extends $IFCustomItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TitaniumTab$Type)

public "release"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Level$Type, arg4: $ItemStack$Type): boolean
public "getID"(arg0: $ItemStack$Type): string
public "capture"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
public "isBlacklisted"(arg0: $EntityType$Type<(any)>): boolean
public "getEntityFromStack"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: boolean, arg3: boolean): $Entity
public "containsEntity"(arg0: $ItemStack$Type): boolean
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobImprisonmentToolItem$Type = ($MobImprisonmentToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobImprisonmentToolItem_ = $MobImprisonmentToolItem$Type;
}}
declare module "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory$TransporterAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TransporterTypeFactory$TransporterAction extends $Enum<($TransporterTypeFactory$TransporterAction)> {
static readonly "INSERT": $TransporterTypeFactory$TransporterAction
static readonly "EXTRACT": $TransporterTypeFactory$TransporterAction


public static "values"(): ($TransporterTypeFactory$TransporterAction)[]
public static "valueOf"(arg0: string): $TransporterTypeFactory$TransporterAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterTypeFactory$TransporterAction$Type = (("extract") | ("insert")) | ($TransporterTypeFactory$TransporterAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterTypeFactory$TransporterAction_ = $TransporterTypeFactory$TransporterAction$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$SlaughterFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SlaughterFactoryTile, $SlaughterFactoryTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$SlaughterFactoryTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SlaughterFactoryBlock extends $IndustrialBlock<($SlaughterFactoryTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SlaughterFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SlaughterFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlaughterFactoryBlock$Type = ($SlaughterFactoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlaughterFactoryBlock_ = $SlaughterFactoryBlock$Type;
}}
declare module "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory" {
import {$TransporterType, $TransporterType$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBlockContainer, $IBlockContainer$Type} from "packages/com/buuz135/industrial/api/$IBlockContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TransporterTypeFactory$TransporterAction, $TransporterTypeFactory$TransporterAction$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory$TransporterAction"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IRecipeProvider, $IRecipeProvider$Type} from "packages/com/hrznstudio/titanium/api/$IRecipeProvider"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"

export class $TransporterTypeFactory implements $IRecipeProvider {
static readonly "ALL": $ImmutableSet<($Direction)>
static readonly "HORIZONTAL": $ImmutableSet<($Direction)>
static readonly "DOWN": $ImmutableSet<($Direction)>
static readonly "FACTORIES": $List<($TransporterTypeFactory)>

constructor(arg0: string)

public "getName"(): string
public "create"(arg0: $IBlockContainer$Type<(any)>, arg1: $Direction$Type, arg2: $TransporterTypeFactory$TransporterAction$Type): $TransporterType
public "getModel"(arg0: $Direction$Type, arg1: $TransporterTypeFactory$TransporterAction$Type): $ResourceLocation
public "getTextures"(): $Set<($ResourceLocation)>
public "getValidFacings"(): $Set<($Direction)>
public "getUpgradeItem"(): $Item
public "getItemModel"(): $ResourceLocation
public "setUpgradeItem"(arg0: $Item$Type): void
public "canBeAttachedAgainst"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "name"(): string
get "textures"(): $Set<($ResourceLocation)>
get "validFacings"(): $Set<($Direction)>
get "upgradeItem"(): $Item
get "itemModel"(): $ResourceLocation
set "upgradeItem"(value: $Item$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterTypeFactory$Type = ($TransporterTypeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterTypeFactory_ = $TransporterTypeFactory$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicItem, $BasicItem$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigurationToolItem extends $BasicItem {
static readonly "NBT_MODE": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "getAction"(arg0: $ItemStack$Type): $ConfigurationToolItem$ConfigurationAction
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$Type = ($ConfigurationToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationToolItem_ = $ConfigurationToolItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$DrawerBlock$DrawerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$DrawerBlock, $DrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$DrawerBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrawerBlock$DrawerItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DrawerBlock$Type, arg1: $Item$Properties$Type, arg2: $TitaniumTab$Type)

public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
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
export type $DrawerBlock$DrawerItem$Type = ($DrawerBlock$DrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerBlock$DrawerItem_ = $DrawerBlock$DrawerItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentExtractorTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $EnchantmentExtractorTile extends $IndustrialProcessingTile<($EnchantmentExtractorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentExtractorTile$Type = ($EnchantmentExtractorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentExtractorTile_ = $EnchantmentExtractorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$SporesRecreatorTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $SporesRecreatorTile extends $IndustrialProcessingTile<($SporesRecreatorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $SporesRecreatorTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
get "self"(): $SporesRecreatorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporesRecreatorTile$Type = ($SporesRecreatorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporesRecreatorTile_ = $SporesRecreatorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/generator/$PitifulGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$PitifulGeneratorTile, $PitifulGeneratorTile$Type} from "packages/com/buuz135/industrial/block/generator/tile/$PitifulGeneratorTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PitifulGeneratorBlock extends $IndustrialBlock<($PitifulGeneratorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PitifulGeneratorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PitifulGeneratorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PitifulGeneratorBlock$Type = ($PitifulGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PitifulGeneratorBlock_ = $PitifulGeneratorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/core/tile/$FluidExtractorTile" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$FluidExtractorTile$FluidExtractionProgress, $FluidExtractorTile$FluidExtractionProgress$Type} from "packages/com/buuz135/industrial/block/core/tile/$FluidExtractorTile$FluidExtractionProgress"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$FluidExtractorRecipe, $FluidExtractorRecipe$Type} from "packages/com/buuz135/industrial/recipe/$FluidExtractorRecipe"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidExtractorTile extends $IndustrialAreaWorkingTile<($FluidExtractorTile)> {
static "EXTRACTION": $HashMap<($DimensionType), ($HashMap<($ChunkPos), ($HashMap<($BlockPos), ($FluidExtractorTile$FluidExtractionProgress)>)>)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "findRecipe"(arg0: $Level$Type, arg1: $BlockPos$Type): $FluidExtractorRecipe
public "getSelf"(): $FluidExtractorTile
public "getMaxProgress"(): integer
get "self"(): $FluidExtractorTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorTile$Type = ($FluidExtractorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidExtractorTile_ = $FluidExtractorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/tile/$BHTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ActiveTile, $ActiveTile$Type} from "packages/com/hrznstudio/titanium/block/tile/$ActiveTile"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BHTile<T extends $BHTile<(T)>> extends $ActiveTile<(T)> {
 "display": boolean

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getDisplayStack"(): $ItemStack
public "getFormatedDisplayAmount"(): string
public "shouldDisplay"(): boolean
get "displayStack"(): $ItemStack
get "formatedDisplayAmount"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BHTile$Type<T> = ($BHTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BHTile_<T> = $BHTile$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/generator/tile/$MycelialGeneratorTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$IMycelialGeneratorType, $IMycelialGeneratorType$Type} from "packages/com/buuz135/industrial/block/generator/mycelial/$IMycelialGeneratorType"
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialGeneratorTile, $IndustrialGeneratorTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialGeneratorTile"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MycelialGeneratorTile extends $IndustrialGeneratorTile<($MycelialGeneratorTile)> {

constructor(arg0: $Pair$Type<($RegistryObject$Type<($Block$Type)>), ($RegistryObject$Type<($BlockEntityType$Type<(any)>)>)>, arg1: $IMycelialGeneratorType$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getOwner"(): string
public "setOwner"(arg0: string): void
public "initClient"(): void
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $MycelialGeneratorTile$Type): void
public "getSelf"(): $MycelialGeneratorTile
public "load"(arg0: $CompoundTag$Type): void
public "consumeFuel"(): integer
public "canStart"(): boolean
public "isSmart"(): boolean
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "getProgressBar"(): $ProgressBarComponent<($MycelialGeneratorTile)>
public "getEnergyCapacity"(): integer
get "owner"(): string
set "owner"(value: string)
get "self"(): $MycelialGeneratorTile
get "smart"(): boolean
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
get "progressBar"(): $ProgressBarComponent<($MycelialGeneratorTile)>
get "energyCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialGeneratorTile$Type = ($MycelialGeneratorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MycelialGeneratorTile_ = $MycelialGeneratorTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$BigFluidHandler$CustomFluidTank, $BigFluidHandler$CustomFluidTank$Type} from "packages/com/buuz135/functionalstorage/fluid/$BigFluidHandler$CustomFluidTank"

export class $BigFluidHandler implements $IFluidHandler, $INBTSerializable<($CompoundTag)> {

constructor(arg0: integer, arg1: integer)

public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "setCapacity"(arg0: integer): void
public "onChange"(): void
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTankCapacity"(arg0: integer): integer
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "lockHandler"(): void
public "getTankList"(): ($BigFluidHandler$CustomFluidTank)[]
public "isDrawerLocked"(): boolean
public "isDrawerCreative"(): boolean
public "getFilterStack"(): ($FluidStack)[]
public "isDrawerVoid"(): boolean
set "capacity"(value: integer)
get "tanks"(): integer
get "tankList"(): ($BigFluidHandler$CustomFluidTank)[]
get "drawerLocked"(): boolean
get "drawerCreative"(): boolean
get "filterStack"(): ($FluidStack)[]
get "drawerVoid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$Type = ($BigFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigFluidHandler_ = $BigFluidHandler$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$DrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IWoodType, $IWoodType$Type} from "packages/com/buuz135/functionalstorage/util/$IWoodType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BigInventoryHandler, $BigInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$BigInventoryHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $DrawerTile extends $ItemControllableDrawerTile<($DrawerTile)> {
 "handler": $BigInventoryHandler

constructor(arg0: $BasicTileBlock$Type<($DrawerTile$Type)>, arg1: $BlockEntityType$Type<($DrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $FunctionalStorage$DrawerType$Type, arg5: $IWoodType$Type)

public "getHandler"(): $BigInventoryHandler
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getDrawerType"(): $FunctionalStorage$DrawerType
public "getBaseSize"(arg0: integer): integer
get "handler"(): $BigInventoryHandler
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "storageSlotAmount"(): integer
get "drawerType"(): $FunctionalStorage$DrawerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerTile$Type = ($DrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerTile_ = $DrawerTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$ActionMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $LinkingToolItem$ActionMode extends $Enum<($LinkingToolItem$ActionMode)> {
static readonly "ADD": $LinkingToolItem$ActionMode
static readonly "REMOVE": $LinkingToolItem$ActionMode


public static "values"(): ($LinkingToolItem$ActionMode)[]
public static "valueOf"(arg0: string): $LinkingToolItem$ActionMode
public "getColor"(): $TextColor
get "color"(): $TextColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$ActionMode$Type = (("add") | ("remove")) | ($LinkingToolItem$ActionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem$ActionMode_ = $LinkingToolItem$ActionMode$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$Type} from "packages/com/buuz135/functionalstorage/item/$ConfigurationToolItem$ConfigurationAction"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ControllableDrawerTile, $ControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllableDrawerTile"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ControllerFluidHandler, $ControllerFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler"
import {$InventoryComponent, $InventoryComponent$Type} from "packages/com/hrznstudio/titanium/component/inventory/$InventoryComponent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ConnectedDrawers, $ConnectedDrawers$Type} from "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LinkingToolItem$ActionMode, $LinkingToolItem$ActionMode$Type} from "packages/com/buuz135/functionalstorage/item/$LinkingToolItem$ActionMode"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $StorageControllerTile<T extends $StorageControllerTile<(T)>> extends $ItemControllableDrawerTile<(T)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler

constructor(arg0: $BasicTileBlock$Type<(T)>, arg1: $BlockEntityType$Type<(T)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "getRenderBoundingBox"(): $AABB
public "getConnectedDrawers"(): $ConnectedDrawers
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "invalidateCaps"(): void
public "addConnectedDrawers"(arg0: $LinkingToolItem$ActionMode$Type, ...arg1: ($BlockPos$Type)[]): boolean
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getUtilitySlotAmount"(): integer
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$Type): void
public "toggleLocking"(): void
public "getBaseSize"(arg0: integer): integer
public "getStorageDiv"(): double
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "renderBoundingBox"(): $AABB
get "connectedDrawers"(): $ConnectedDrawers
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "utilitySlotAmount"(): integer
get "storageSlotAmount"(): integer
get "storageDiv"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerTile$Type<T> = ($StorageControllerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerTile_<T> = $StorageControllerTile$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/generator/$MycelialReactorBlock" {
import {$MycelialReactorTile, $MycelialReactorTile$Type} from "packages/com/buuz135/industrial/block/generator/tile/$MycelialReactorTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MycelialReactorBlock extends $IndustrialBlock<($MycelialReactorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialReactorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialReactorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialReactorBlock$Type = ($MycelialReactorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MycelialReactorBlock_ = $MycelialReactorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock$ConveyorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ConveyorBlock, $ConveyorBlock$Type} from "packages/com/buuz135/industrial/block/transportstorage/$ConveyorBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConveyorBlock$ConveyorItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ConveyorBlock$Type, arg1: $Block$Type, arg2: $TitaniumTab$Type)

public "getCreatorModId"(arg0: $ItemStack$Type): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBlock$ConveyorItem$Type = ($ConveyorBlock$ConveyorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorBlock$ConveyorItem_ = $ConveyorBlock$ConveyorItem$Type;
}}
declare module "packages/com/buuz135/refinedstoragerequestify/proxy/block/$BlockRequester" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$NetworkNodeBlock, $NetworkNodeBlock$Type} from "packages/com/refinedmods/refinedstorage/block/$NetworkNodeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockRequester extends $NetworkNodeBlock {
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRequester$Type = ($BlockRequester);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRequester_ = $BlockRequester$Type;
}}
declare module "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FramedDrawerModelData implements $INBTSerializable<($CompoundTag)> {
static readonly "FRAMED_PROPERTY": $ModelProperty<($FramedDrawerModelData)>

constructor(arg0: $Map$Type<(string), ($Item$Type)>)

public "getCode"(): string
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getDesign"(): $Map<(string), ($Item)>
get "code"(): string
get "design"(): $Map<(string), ($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerModelData$Type = ($FramedDrawerModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerModelData_ = $FramedDrawerModelData$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$StorageUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StorageUpgradeItem$StorageTier, $StorageUpgradeItem$StorageTier$Type} from "packages/com/buuz135/functionalstorage/item/$StorageUpgradeItem$StorageTier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$UpgradeItem, $UpgradeItem$Type} from "packages/com/buuz135/functionalstorage/item/$UpgradeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageUpgradeItem extends $UpgradeItem {
static "MAX_SLOT": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $StorageUpgradeItem$StorageTier$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "getStorageMultiplier"(): integer
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "getStorageTier"(): $StorageUpgradeItem$StorageTier
get "storageMultiplier"(): integer
get "storageTier"(): $StorageUpgradeItem$StorageTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$Type = ($StorageUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageUpgradeItem_ = $StorageUpgradeItem$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$ControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$StorageControllerExtensionBlock, $StorageControllerExtensionBlock$Type} from "packages/com/buuz135/functionalstorage/block/$StorageControllerExtensionBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ControllerExtensionTile, $ControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ControllerExtensionTile"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ControllerExtensionBlock extends $StorageControllerExtensionBlock<($ControllerExtensionTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionBlock$Type = ($ControllerExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerExtensionBlock_ = $ControllerExtensionBlock$Type;
}}
declare module "packages/com/buuz135/industrial/item/$ItemTransporterType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$TransporterTypeFactory, $TransporterTypeFactory$Type} from "packages/com/buuz135/industrial/api/transporter/$TransporterTypeFactory"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTransporterType extends $IFCustomItem {
 "factory": $TransporterTypeFactory
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TransporterTypeFactory$Type, arg1: $TitaniumTab$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransporterType$Type = ($ItemTransporterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransporterType_ = $ItemTransporterType$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$IndustrialWorkingTile, $IndustrialWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RangeManager$RangeType, $RangeManager$RangeType$Type} from "packages/com/buuz135/industrial/block/tile/$RangeManager$RangeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $IndustrialAreaWorkingTile<T extends $IndustrialAreaWorkingTile<(T)>> extends $IndustrialWorkingTile<(T)> {

constructor(arg0: $Pair$Type<($RegistryObject$Type<($Block$Type)>), ($RegistryObject$Type<($BlockEntityType$Type<(any)>)>)>, arg1: $RangeManager$RangeType$Type, arg2: boolean, arg3: integer, arg4: $BlockPos$Type, arg5: $BlockState$Type)

public "isLoaded"(arg0: $BlockPos$Type): boolean
public "getRenderBoundingBox"(): $AABB
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: T): void
public "canAcceptAugment"(arg0: $ItemStack$Type): boolean
public "increasePointer"(): void
public "getWorkingArea"(): $VoxelShape
public "getPointedBlockPos"(): $BlockPos
public "isShowingArea"(): boolean
get "renderBoundingBox"(): $AABB
get "workingArea"(): $VoxelShape
get "pointedBlockPos"(): $BlockPos
get "showingArea"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialAreaWorkingTile$Type<T> = ($IndustrialAreaWorkingTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialAreaWorkingTile_<T> = $IndustrialAreaWorkingTile$Type<(T)>;
}}
declare module "packages/com/buuz135/industrial/block/generator/tile/$MycelialReactorTile" {
import {$ProgressBarComponent, $ProgressBarComponent$Type} from "packages/com/hrznstudio/titanium/component/progress/$ProgressBarComponent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialGeneratorTile, $IndustrialGeneratorTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialGeneratorTile"

export class $MycelialReactorTile extends $IndustrialGeneratorTile<($MycelialReactorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getOwner"(): string
public "setOwner"(arg0: string): void
public "consumeFuel"(): integer
public "canStart"(): boolean
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "getProgressBar"(): $ProgressBarComponent<($MycelialReactorTile)>
public "getBar"(): $ProgressBarComponent<($MycelialReactorTile)>
public "getEnergyCapacity"(): integer
get "owner"(): string
set "owner"(value: string)
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
get "progressBar"(): $ProgressBarComponent<($MycelialReactorTile)>
get "bar"(): $ProgressBarComponent<($MycelialReactorTile)>
get "energyCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialReactorTile$Type = ($MycelialReactorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MycelialReactorTile_ = $MycelialReactorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$MarineFisherBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$MarineFisherTile, $MarineFisherTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$MarineFisherTile"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MarineFisherBlock extends $IndustrialBlock<($MarineFisherTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MarineFisherTile)>
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MarineFisherTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarineFisherBlock$Type = ($MarineFisherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarineFisherBlock_ = $MarineFisherBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$CompactingDrawerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$ItemControllableDrawerTile"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$CompactingInventoryHandler, $CompactingInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$CompactingInventoryHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CompactingDrawerTile extends $ItemControllableDrawerTile<($CompactingDrawerTile)> {
 "handler": $CompactingInventoryHandler

constructor(arg0: $BasicTileBlock$Type<($CompactingDrawerTile$Type)>, arg1: $BlockEntityType$Type<($CompactingDrawerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getHandler"(): $CompactingInventoryHandler
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "getOptional"(): $LazyOptional<($IItemHandler)>
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $CompactingDrawerTile$Type): void
public "getSelf"(): $CompactingDrawerTile
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getBaseSize"(arg0: integer): integer
get "handler"(): $CompactingInventoryHandler
get "storage"(): $IItemHandler
get "optional"(): $LazyOptional<($IItemHandler)>
get "self"(): $CompactingDrawerTile
get "storageSlotAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerTile$Type = ($CompactingDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerTile_ = $CompactingDrawerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/core/tile/$FluidExtractorTile$FluidExtractionProgress" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $FluidExtractorTile$FluidExtractionProgress {

constructor(arg0: $Level$Type)

public "setProgress"(arg0: integer): void
public "getProgress"(): integer
public "getBreakID"(): integer
set "progress"(value: integer)
get "progress"(): integer
get "breakID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorTile$FluidExtractionProgress$Type = ($FluidExtractorTile$FluidExtractionProgress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidExtractorTile$FluidExtractionProgress_ = $FluidExtractorTile$FluidExtractionProgress$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$FramedDrawerControllerTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$Type} from "packages/com/buuz135/functionalstorage/inventory/$ControllerInventoryHandler"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ControllerFluidHandler, $ControllerFluidHandler$Type} from "packages/com/buuz135/functionalstorage/fluid/$ControllerFluidHandler"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FramedDrawerModelData, $FramedDrawerModelData$Type} from "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FramedDrawerControllerTile extends $StorageControllerTile<($FramedDrawerControllerTile)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler

constructor(arg0: $BasicTileBlock$Type<($FramedDrawerControllerTile$Type)>, arg1: $BlockEntityType$Type<($FramedDrawerControllerTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getSelf"(): $FramedDrawerControllerTile
public "getModelData"(): $ModelData
public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$Type): void
get "self"(): $FramedDrawerControllerTile
get "modelData"(): $ModelData
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerTile$Type = ($FramedDrawerControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerControllerTile_ = $FramedDrawerControllerTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/tile/$RangeManager$RangeType" {
import {$RangeManager, $RangeManager$Type} from "packages/com/buuz135/industrial/block/tile/$RangeManager"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $RangeManager$RangeType extends $Enum<($RangeManager$RangeType)> {
static readonly "FRONT": $RangeManager$RangeType
static readonly "BEHIND": $RangeManager$RangeType
static readonly "TOP": $RangeManager$RangeType
static readonly "TOP_UP": $RangeManager$RangeType
static readonly "BOTTOM": $RangeManager$RangeType


public static "values"(): ($RangeManager$RangeType)[]
public static "valueOf"(arg0: string): $RangeManager$RangeType
public "getOffsetRange"(): $BiFunction<($RangeManager), (integer), ($AABB)>
public "getOffsetCreation"(): $BiFunction<($Direction), ($AABB), ($AABB)>
get "offsetRange"(): $BiFunction<($RangeManager), (integer), ($AABB)>
get "offsetCreation"(): $BiFunction<($Direction), ($AABB), ($AABB)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeManager$RangeType$Type = (("behind") | ("top") | ("bottom") | ("top_up") | ("front")) | ($RangeManager$RangeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeManager$RangeType_ = $RangeManager$RangeType$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$UpgradeItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeItem$Type extends $Enum<($UpgradeItem$Type)> {
static readonly "STORAGE": $UpgradeItem$Type
static readonly "UTILITY": $UpgradeItem$Type


public static "values"(): ($UpgradeItem$Type)[]
public static "valueOf"(arg0: string): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type$Type = (("utility") | ("storage")) | ($UpgradeItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Type_ = $UpgradeItem$Type$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/item/$ItemInfinityLauncher$PlungerAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $ItemInfinityLauncher$PlungerAction extends $Enum<($ItemInfinityLauncher$PlungerAction)> {
static readonly "RELEASE": $ItemInfinityLauncher$PlungerAction
static readonly "CAPTURE": $ItemInfinityLauncher$PlungerAction
static readonly "DAMAGE": $ItemInfinityLauncher$PlungerAction


public static "values"(): ($ItemInfinityLauncher$PlungerAction)[]
public static "valueOf"(arg0: string): $ItemInfinityLauncher$PlungerAction
public "getId"(): integer
public "getColor"(): $ChatFormatting
public static "getFromId"(arg0: integer): $ItemInfinityLauncher$PlungerAction
get "id"(): integer
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityLauncher$PlungerAction$Type = (("damage") | ("release") | ("capture")) | ($ItemInfinityLauncher$PlungerAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityLauncher$PlungerAction_ = $ItemInfinityLauncher$PlungerAction$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$MobDetectorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$MobDetectorTile, $MobDetectorTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$MobDetectorTile"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MobDetectorBlock extends $IndustrialBlock<($MobDetectorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDetectorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDetectorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDetectorBlock$Type = ($MobDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobDetectorBlock_ = $MobDetectorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/recipe/$FluidExtractorRecipe" {
import {$Ingredient$Value, $Ingredient$Value$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient$Value"
import {$GenericSerializer, $GenericSerializer$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$GenericSerializer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SerializableRecipe, $SerializableRecipe$Type} from "packages/com/hrznstudio/titanium/recipe/serializer/$SerializableRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidExtractorRecipe extends $SerializableRecipe {
static "RECIPES": $List<($FluidExtractorRecipe)>
 "input": $Ingredient$Value
 "result": $Block
 "breakChance": float
 "output": $FluidStack
 "defaultRecipe": boolean

constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Value$Type, arg2: $Block$Type, arg3: float, arg4: $FluidStack$Type, arg5: boolean)

public "matches"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "getSerializer"(): $GenericSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "serializer"(): $GenericSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorRecipe$Type = ($FluidExtractorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidExtractorRecipe_ = $FluidExtractorRecipe$Type;
}}
declare module "packages/com/buuz135/industrial/item/addon/$ProcessingAddonItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AddonItem, $AddonItem$Type} from "packages/com/buuz135/industrial/item/addon/$AddonItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IAugmentType, $IAugmentType$Type} from "packages/com/hrznstudio/titanium/api/augment/$IAugmentType"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$ISpecialCreativeTabItem, $ISpecialCreativeTabItem$Type} from "packages/com/hrznstudio/titanium/api/$ISpecialCreativeTabItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ProcessingAddonItem extends $AddonItem implements $ISpecialCreativeTabItem {
static readonly "PROCESSING": $IAugmentType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: $TitaniumTab$Type)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getDescriptionId"(): string
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingAddonItem$Type = ($ProcessingAddonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessingAddonItem_ = $ProcessingAddonItem$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentSorterTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $EnchantmentSorterTile extends $IndustrialProcessingTile<($EnchantmentSorterTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSorterTile$Type = ($EnchantmentSorterTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentSorterTile_ = $EnchantmentSorterTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/item/$StorageUpgradeItem$StorageTier" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StorageUpgradeItem$StorageTier extends $Enum<($StorageUpgradeItem$StorageTier)> {
static readonly "COPPER": $StorageUpgradeItem$StorageTier
static readonly "GOLD": $StorageUpgradeItem$StorageTier
static readonly "DIAMOND": $StorageUpgradeItem$StorageTier
static readonly "NETHERITE": $StorageUpgradeItem$StorageTier
static readonly "IRON": $StorageUpgradeItem$StorageTier


public static "values"(): ($StorageUpgradeItem$StorageTier)[]
public static "valueOf"(arg0: string): $StorageUpgradeItem$StorageTier
public "getColor"(): integer
public "getStorageMultiplier"(): integer
get "color"(): integer
get "storageMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$StorageTier$Type = (("gold") | ("diamond") | ("copper") | ("iron") | ("netherite")) | ($StorageUpgradeItem$StorageTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageUpgradeItem$StorageTier_ = $StorageUpgradeItem$StorageTier$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$FermentationStationTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $FermentationStationTile extends $IndustrialProcessingTile<($FermentationStationTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FermentationStationTile$Type): void
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentationStationTile$Type = ($FermentationStationTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermentationStationTile_ = $FermentationStationTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$InfinityChargerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$InfinityChargerTile, $InfinityChargerTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$InfinityChargerTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $InfinityChargerBlock extends $IndustrialBlock<($InfinityChargerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($InfinityChargerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($InfinityChargerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityChargerBlock$Type = ($InfinityChargerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityChargerBlock_ = $InfinityChargerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/$MachineFrameBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$BasicBlock, $BasicBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicBlock"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"

export class $MachineFrameBlock extends $BasicBlock {
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

constructor(arg0: $Rarity$Type, arg1: $TitaniumTab$Type)

public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFrameBlock$Type = ($MachineFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFrameBlock_ = $MachineFrameBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$BlockPlacerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$BlockPlacerTile, $BlockPlacerTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$BlockPlacerTile"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPlacerBlock extends $IndustrialBlock<($BlockPlacerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockPlacerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockPlacerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerBlock$Type = ($BlockPlacerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlacerBlock_ = $BlockPlacerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$FluidPlacerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FluidPlacerTile, $FluidPlacerTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$FluidPlacerTile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FluidPlacerBlock extends $IndustrialBlock<($FluidPlacerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidPlacerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidPlacerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlacerBlock$Type = ($FluidPlacerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlacerBlock_ = $FluidPlacerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$StasisChamberTile" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StasisChamberTile extends $IndustrialAreaWorkingTile<($StasisChamberTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getSelf"(): $StasisChamberTile
public "getWorkingArea"(): $VoxelShape
public "getMaxProgress"(): integer
get "self"(): $StasisChamberTile
get "workingArea"(): $VoxelShape
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StasisChamberTile$Type = ($StasisChamberTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StasisChamberTile_ = $StasisChamberTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/tile/$MaterialStoneWorkFactoryTile" {
import {$StoneWorkGenerateRecipe, $StoneWorkGenerateRecipe$Type} from "packages/com/buuz135/industrial/recipe/$StoneWorkGenerateRecipe"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MaterialStoneWorkFactoryTile$StoneWorkAction, $MaterialStoneWorkFactoryTile$StoneWorkAction$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$MaterialStoneWorkFactoryTile$StoneWorkAction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $MaterialStoneWorkFactoryTile extends $IndustrialProcessingTile<($MaterialStoneWorkFactoryTile)> {
static "DEFAULT": $ResourceLocation
static "ACTION_RECIPES": ($MaterialStoneWorkFactoryTile$StoneWorkAction)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getRecipe"(): $Optional<($StoneWorkGenerateRecipe)>
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "getNextRecipe"(arg0: boolean): $ResourceLocation
public "getMaxProgress"(): integer
get "recipe"(): $Optional<($StoneWorkGenerateRecipe)>
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialStoneWorkFactoryTile$Type = ($MaterialStoneWorkFactoryTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialStoneWorkFactoryTile_ = $MaterialStoneWorkFactoryTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$EnchantmentFactoryBlock" {
import {$EnchantmentFactoryTile, $EnchantmentFactoryTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentFactoryTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnchantmentFactoryBlock extends $IndustrialBlock<($EnchantmentFactoryTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentFactoryBlock$Type = ($EnchantmentFactoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentFactoryBlock_ = $EnchantmentFactoryBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$FramedDrawerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$DrawerBlock, $DrawerBlock$Type} from "packages/com/buuz135/functionalstorage/block/$DrawerBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$DrawerTile, $DrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$DrawerTile"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$FramedDrawerModelData, $FramedDrawerModelData$Type} from "packages/com/buuz135/functionalstorage/client/model/$FramedDrawerModelData"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$Type} from "packages/com/buuz135/functionalstorage/$FunctionalStorage$DrawerType"

export class $FramedDrawerBlock extends $DrawerBlock {
static "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>
static "LOCKED": $BooleanProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$Type)

public static "fill"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public static "getDrawerModelData"(arg0: $ItemStack$Type): $FramedDrawerModelData
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerBlock$Type = ($FramedDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerBlock_ = $FramedDrawerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/core/tile/$LatexProcessingUnitTile" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $LatexProcessingUnitTile extends $IndustrialProcessingTile<($LatexProcessingUnitTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $LatexProcessingUnitTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
get "self"(): $LatexProcessingUnitTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LatexProcessingUnitTile$Type = ($LatexProcessingUnitTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LatexProcessingUnitTile_ = $LatexProcessingUnitTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$SporesRecreatorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$SporesRecreatorTile, $SporesRecreatorTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$SporesRecreatorTile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SporesRecreatorBlock extends $IndustrialBlock<($SporesRecreatorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SporesRecreatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SporesRecreatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporesRecreatorBlock$Type = ($SporesRecreatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporesRecreatorBlock_ = $SporesRecreatorBlock$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/tile/$ControllerExtensionTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerExtensionTile"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerExtensionTile extends $StorageControllerExtensionTile<($ControllerExtensionTile)> {

constructor(arg0: $BasicTileBlock$Type<($ControllerExtensionTile$Type)>, arg1: $BlockEntityType$Type<($ControllerExtensionTile$Type)>, arg2: $BlockPos$Type, arg3: $BlockState$Type)

public "getSelf"(): $ControllerExtensionTile
get "self"(): $ControllerExtensionTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionTile$Type = ($ControllerExtensionTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerExtensionTile_ = $ControllerExtensionTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/transportstorage/tile/$BlackHoleUnitTile" {
import {$BasicTileBlock, $BasicTileBlock$Type} from "packages/com/hrznstudio/titanium/block/$BasicTileBlock"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$BHTile, $BHTile$Type} from "packages/com/buuz135/industrial/block/transportstorage/tile/$BHTile"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlackHoleUnitTile extends $BHTile<($BlackHoleUnitTile)> {
 "display": boolean

constructor(arg0: $BasicTileBlock$Type<($BlackHoleUnitTile$Type)>, arg1: $BlockEntityType$Type<(any)>, arg2: $Rarity$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type)

public "getDisplayStack"(): $ItemStack
public "initClient"(): void
public "setAmount"(arg0: integer): void
public "getCapability"<U>(arg0: $Capability$Type<(U)>, arg1: $Direction$Type): $LazyOptional<(U)>
public "setStack"(arg0: $ItemStack$Type): void
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Direction$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlackHoleUnitTile$Type): void
public "onClicked"(arg0: $Player$Type): void
public "isVoidItems"(): boolean
public "getFormatedDisplayAmount"(): string
get "displayStack"(): $ItemStack
set "amount"(value: integer)
set "stack"(value: $ItemStack$Type)
get "voidItems"(): boolean
get "formatedDisplayAmount"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleUnitTile$Type = ($BlackHoleUnitTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackHoleUnitTile_ = $BlackHoleUnitTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/resourceproduction/$ResourcefulFurnaceBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourcefulFurnaceTile, $ResourcefulFurnaceTile$Type} from "packages/com/buuz135/industrial/block/resourceproduction/tile/$ResourcefulFurnaceTile"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ResourcefulFurnaceBlock extends $IndustrialBlock<($ResourcefulFurnaceTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ResourcefulFurnaceTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ResourcefulFurnaceTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcefulFurnaceBlock$Type = ($ResourcefulFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcefulFurnaceBlock_ = $ResourcefulFurnaceBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$AnimalRancherTile" {
import {$IndustrialWorkingTile$WorkAction, $IndustrialWorkingTile$WorkAction$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialWorkingTile$WorkAction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialAreaWorkingTile, $IndustrialAreaWorkingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialAreaWorkingTile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AnimalRancherTile extends $IndustrialAreaWorkingTile<($AnimalRancherTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "work"(): $IndustrialWorkingTile$WorkAction<>
public "getMaxProgress"(): integer
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalRancherTile$Type = ($AnimalRancherTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalRancherTile_ = $AnimalRancherTile$Type;
}}
declare module "packages/com/buuz135/functionalstorage/util/$ConnectedDrawers" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StorageControllerTile, $StorageControllerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$StorageControllerTile"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ConnectedDrawers implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $Level$Type, arg1: $StorageControllerTile$Type<(any)>)

public "getExtensions"(): integer
public "setLevel"(arg0: $Level$Type): void
public "getConnectedDrawers"(): $List<(long)>
public "rebuild"(): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "getCachedVoxelShape"(): $VoxelShape
public "getFluidHandlers"(): $List<($IFluidHandler)>
public "getItemHandlers"(): $List<($IItemHandler)>
public "rebuildShapes"(): void
get "extensions"(): integer
set "level"(value: $Level$Type)
get "connectedDrawers"(): $List<(long)>
get "cachedVoxelShape"(): $VoxelShape
get "fluidHandlers"(): $List<($IFluidHandler)>
get "itemHandlers"(): $List<($IItemHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedDrawers$Type = ($ConnectedDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedDrawers_ = $ConnectedDrawers$Type;
}}
declare module "packages/com/buuz135/industrial/item/infinity/$ItemInfinity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BasicItem$Key, $BasicItem$Key$Type} from "packages/com/hrznstudio/titanium/item/$BasicItem$Key"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IButtonHandler, $IButtonHandler$Type} from "packages/com/hrznstudio/titanium/network/$IButtonHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TitaniumTab, $TitaniumTab$Type} from "packages/com/hrznstudio/titanium/tab/$TitaniumTab"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$IFactory, $IFactory$Type} from "packages/com/hrznstudio/titanium/api/$IFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IFCustomItem, $IFCustomItem$Type} from "packages/com/buuz135/industrial/item/$IFCustomItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$InfinityTier, $InfinityTier$Type} from "packages/com/buuz135/industrial/item/infinity/$InfinityTier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IInfinityDrillScreenAddons, $IInfinityDrillScreenAddons$Type} from "packages/com/buuz135/industrial/item/infinity/$IInfinityDrillScreenAddons"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$InfinityEnergyStorage, $InfinityEnergyStorage$Type} from "packages/com/buuz135/industrial/item/infinity/$InfinityEnergyStorage"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$ISpecialCreativeTabItem, $ISpecialCreativeTabItem$Type} from "packages/com/hrznstudio/titanium/api/$ISpecialCreativeTabItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemInfinity extends $IFCustomItem implements $MenuProvider, $IButtonHandler, $IInfinityDrillScreenAddons, $ISpecialCreativeTabItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: string, arg1: $TitaniumTab$Type, arg2: $Item$Properties$Type, arg3: integer, arg4: integer, arg5: boolean)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "shouldOverrideMultiplayerNbt"(): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "isSpecial"(arg0: $ItemStack$Type): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getDisplayName"(): $Component
public "consumeFuel"(arg0: $ItemStack$Type): void
public "getEnergyConstructor"(arg0: $ItemStack$Type): $IFactory<($InfinityEnergyStorage)>
public "handleButtonMessage"(arg0: integer, arg1: $Player$Type, arg2: $CompoundTag$Type): void
public "setSelectedDrillTier"(arg0: $ItemStack$Type, arg1: $InfinityTier$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "getPowerFromStack"(arg0: $ItemStack$Type): long
public "disableArea"(): void
public "getFormattedArea"(arg0: $ItemStack$Type, arg1: $InfinityTier$Type, arg2: integer, arg3: boolean): string
public static "getSelectedTier"(arg0: $ItemStack$Type): $InfinityTier
public "addNbt"(arg0: $ItemStack$Type, arg1: long, arg2: integer, arg3: boolean): void
public "getFuelFromStack"(arg0: $ItemStack$Type): integer
public "setSpecialEnabled"(arg0: $ItemStack$Type, arg1: boolean): void
public "isSpecialEnabled"(arg0: $ItemStack$Type): boolean
public "setCanCharge"(arg0: $ItemStack$Type, arg1: boolean): void
public "enoughFuel"(arg0: $ItemStack$Type): boolean
public static "canCharge"(arg0: $ItemStack$Type): boolean
public "getTankConstructor"(arg0: $ItemStack$Type): $IFactory<(any)>
public "getScreenAddons"(arg0: $Supplier$Type<($ItemStack$Type)>): $List<($IFactory<(any)>)>
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "getArea"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $InfinityTier$Type, arg3: boolean): $Pair<($BlockPos), ($BlockPos)>
public "hasTooltipDetails"(arg0: $BasicItem$Key$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$Type, arg1: $ItemStack$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): void
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "createStack"(arg0: long, arg1: integer, arg2: boolean): $ItemStack
get "enchantmentValue"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinity$Type = ($ItemInfinity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinity_ = $ItemInfinity$Type;
}}
declare module "packages/com/buuz135/functionalstorage/block/$CompactingDrawerBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RotatableBlock, $RotatableBlock$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicBlockLootTables, $BasicBlockLootTables$Type} from "packages/com/hrznstudio/titanium/datagenerator/loot/block/$BasicBlockLootTables"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CompactingDrawerTile, $CompactingDrawerTile$Type} from "packages/com/buuz135/functionalstorage/block/tile/$CompactingDrawerTile"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"

export class $CompactingDrawerBlock extends $RotatableBlock<($CompactingDrawerTile)> {
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "getLootTable"(arg0: $BasicBlockLootTables$Type): $LootTable$Builder
public "getHit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "getBoundingBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): $NonNullList<($ItemStack)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerBlock$Type = ($CompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerBlock_ = $CompactingDrawerBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/agriculturehusbandry/$AnimalBabySeparatorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AnimalBabySeparatorTile, $AnimalBabySeparatorTile$Type} from "packages/com/buuz135/industrial/block/agriculturehusbandry/tile/$AnimalBabySeparatorTile"

export class $AnimalBabySeparatorBlock extends $IndustrialBlock<($AnimalBabySeparatorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalBabySeparatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalBabySeparatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalBabySeparatorBlock$Type = ($AnimalBabySeparatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimalBabySeparatorBlock_ = $AnimalBabySeparatorBlock$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentApplicatorTile" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IndustrialProcessingTile, $IndustrialProcessingTile$Type} from "packages/com/buuz135/industrial/block/tile/$IndustrialProcessingTile"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $EnchantmentApplicatorTile extends $IndustrialProcessingTile<($EnchantmentApplicatorTile)> {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelf"(): $EnchantmentApplicatorTile
public "onFinish"(): $Runnable
public "canIncrease"(): boolean
public "updateRepairOutput"(): $Pair<($ItemStack), (integer)>
public "getMaxProgress"(): integer
get "self"(): $EnchantmentApplicatorTile
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentApplicatorTile$Type = ($EnchantmentApplicatorTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentApplicatorTile_ = $EnchantmentApplicatorTile$Type;
}}
declare module "packages/com/buuz135/industrial/block/misc/$EnchantmentExtractorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IndustrialBlock, $IndustrialBlock$Type} from "packages/com/buuz135/industrial/block/$IndustrialBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$Type} from "packages/com/hrznstudio/titanium/block/$RotatableBlock$RotationType"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EnchantmentExtractorTile, $EnchantmentExtractorTile$Type} from "packages/com/buuz135/industrial/block/misc/tile/$EnchantmentExtractorTile"

export class $EnchantmentExtractorBlock extends $IndustrialBlock<($EnchantmentExtractorTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentExtractorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentExtractorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentExtractorBlock$Type = ($EnchantmentExtractorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentExtractorBlock_ = $EnchantmentExtractorBlock$Type;
}}
