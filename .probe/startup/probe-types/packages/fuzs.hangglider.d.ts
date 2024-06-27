declare module "packages/fuzs/hangglider/world/item/$GliderItem" {
import {$ServerConfig$GliderConfig, $ServerConfig$GliderConfig$Type} from "packages/fuzs/hangglider/config/$ServerConfig$GliderConfig"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GliderItem$Type, $GliderItem$Type$Type} from "packages/fuzs/hangglider/world/item/$GliderItem$Type"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GliderItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $GliderItem$Type$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getGliderMaterialSettings"(): $ServerConfig$GliderConfig
get "gliderMaterialSettings"(): $ServerConfig$GliderConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GliderItem$Type = ($GliderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GliderItem_ = $GliderItem$Type;
}}
declare module "packages/fuzs/hangglider/config/$ServerConfig$GliderConfig" {
import {$ValueCallback, $ValueCallback$Type} from "packages/fuzs/puzzleslib/api/config/v3/$ValueCallback"
import {$ConfigCore, $ConfigCore$Type} from "packages/fuzs/puzzleslib/api/config/v3/$ConfigCore"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ServerConfig$GliderConfig implements $ConfigCore {
 "horizontalSpeed": double
 "verticalSpeed": double
 "fastHorizontalSpeed": double
 "fastVerticalSpeed": double
 "windModifier": double
 "airResistance": double
 "consumeDurability": boolean
 "durabilityUseInterval": integer

constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: boolean, arg7: integer)

public "addToBuilder"(arg0: $ForgeConfigSpec$Builder$Type, arg1: $ValueCallback$Type): void
public "afterConfigReload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfig$GliderConfig$Type = ($ServerConfig$GliderConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerConfig$GliderConfig_ = $ServerConfig$GliderConfig$Type;
}}
declare module "packages/fuzs/hangglider/mixin/accessor/$ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor {

 "hangglider$setAboveGroundTickCount"(arg0: integer): void
 "hangglider$setAboveGroundVehicleTickCount"(arg0: integer): void
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplAccessor_ = $ServerGamePacketListenerImplAccessor$Type;
}}
declare module "packages/fuzs/hangglider/world/item/$GliderItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GliderItem$Type extends $Enum<($GliderItem$Type)> {
static readonly "BASIC": $GliderItem$Type
static readonly "REINFORCED": $GliderItem$Type


public static "values"(): ($GliderItem$Type)[]
public static "valueOf"(arg0: string): $GliderItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GliderItem$Type$Type = (("basic") | ("reinforced")) | ($GliderItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GliderItem$Type_ = $GliderItem$Type$Type;
}}
