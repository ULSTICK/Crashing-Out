declare module "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor" {
import {$IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"

export interface $ForgeRegistryForgeAccessor<V> {

 "puzzleslib$setAdd"(arg0: $IForgeRegistry$AddCallback$Type<(V)>): void
 "puzzleslib$getAdd"(): $IForgeRegistry$AddCallback<(V)>
}

export namespace $ForgeRegistryForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistryForgeAccessor$Type<V> = ($ForgeRegistryForgeAccessor<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistryForgeAccessor_<V> = $ForgeRegistryForgeAccessor$Type<(V)>;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $BlockAccessor {

 "puzzleslib$setItem"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAccessor$Type = ($BlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAccessor_ = $BlockAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/impl/item/$CopyTagRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CopyTagRecipe, $CopyTagRecipe$Type} from "packages/fuzs/puzzleslib/impl/item/$CopyTagRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CopyTagRecipe$Serializer<T extends $CraftingRecipe, S extends ($CraftingRecipe) & ($CopyTagRecipe)> extends $Record implements $RecipeSerializer<(S)> {

constructor(serializer: $RecipeSerializer$Type<(T)>, factory: $BiFunction$Type<(T), ($Ingredient$Type), (S)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $BiFunction<(T), ($Ingredient), (S)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): S
public "serializer"(): $RecipeSerializer<(T)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: S): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): S
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyTagRecipe$Serializer$Type<T, S> = ($CopyTagRecipe$Serializer<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyTagRecipe$Serializer_<T, S> = $CopyTagRecipe$Serializer$Type<(T), (S)>;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockItemAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockItemAccessor {

 "puzzleslib$setBlock"(arg0: $Block$Type): void

(arg0: $Block$Type): void
}

export namespace $BlockItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemAccessor$Type = ($BlockItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemAccessor_ = $BlockItemAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/api/config/v3/$ValueCallback" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export interface $ValueCallback {

 "accept"<S, V extends $ForgeConfigSpec$ConfigValue<(S)>>(arg0: V, arg1: $Consumer$Type<(S)>): V

(arg0: V, arg1: $Consumer$Type<(S)>): V
}

export namespace $ValueCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueCallback$Type = ($ValueCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueCallback_ = $ValueCallback$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$FireBlockForgeAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockForgeAccessor {

 "puzzleslib$setFlammable"(arg0: $Block$Type, arg1: integer, arg2: integer): void

(arg0: $Block$Type, arg1: integer, arg2: integer): void
}

export namespace $FireBlockForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockForgeAccessor$Type = ($FireBlockForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockForgeAccessor_ = $FireBlockForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/impl/item/$CopyTagRecipe" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export interface $CopyTagRecipe {

 "tryCopyTagToResult"(arg0: $ItemStack$Type, arg1: $CraftingContainer$Type): void
 "getCopyTagSource"(): $Ingredient

(arg0: $BiConsumer$Type<(string), ($Supplier$Type<($RecipeSerializer$Type<(any)>)>)>): void
}

export namespace $CopyTagRecipe {
const SHAPED_RECIPE_SERIALIZER_ID: string
const SHAPELESS_RECIPE_SERIALIZER_ID: string
function registerSerializers(arg0: $BiConsumer$Type<(string), ($Supplier$Type<($RecipeSerializer$Type<(any)>)>)>): void
function getModSerializer(arg0: string, arg1: string): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyTagRecipe$Type = ($CopyTagRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyTagRecipe_ = $CopyTagRecipe$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$LootTableForgeAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"

export interface $LootTableForgeAccessor {

 "puzzleslib$getPools"(): $List<($LootPool)>

(): $List<($LootPool)>
}

export namespace $LootTableForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableForgeAccessor$Type = ($LootTableForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableForgeAccessor_ = $LootTableForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$BiomeSpecialEffectsBuilderForgeAccessor" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"

export interface $BiomeSpecialEffectsBuilderForgeAccessor {

 "puzzleslib$setFoliageColorOverride"(arg0: $Optional$Type<(integer)>): void
 "puzzleslib$setGrassColorOverride"(arg0: $Optional$Type<(integer)>): void
 "puzzleslib$setAmbientParticle"(arg0: $Optional$Type<($AmbientParticleSettings$Type)>): void
 "puzzleslib$setBackgroundMusic"(arg0: $Optional$Type<($Music$Type)>): void
 "puzzleslib$setAmbientMoodSettings"(arg0: $Optional$Type<($AmbientMoodSettings$Type)>): void
 "puzzleslib$setAmbientAdditionsSettings"(arg0: $Optional$Type<($AmbientAdditionsSettings$Type)>): void
 "puzzleslib$setAmbientLoopSoundEvent"(arg0: $Optional$Type<($Holder$Type<($SoundEvent$Type)>)>): void
}

export namespace $BiomeSpecialEffectsBuilderForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilderForgeAccessor$Type = ($BiomeSpecialEffectsBuilderForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilderForgeAccessor_ = $BiomeSpecialEffectsBuilderForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/api/config/v3/$ConfigCore" {
import {$ValueCallback, $ValueCallback$Type} from "packages/fuzs/puzzleslib/api/config/v3/$ValueCallback"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export interface $ConfigCore {

 "addToBuilder"(arg0: $ForgeConfigSpec$Builder$Type, arg1: $ValueCallback$Type): void
 "afterConfigReload"(): void
}

export namespace $ConfigCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCore$Type = ($ConfigCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCore_ = $ConfigCore$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ModelBakeryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelBakeryAccessor {

}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$Type = ($ModelBakeryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$TooltipAccessor" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TooltipAccessor {

 "puzzleslib$setCachedTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>): void

(arg0: $List$Type<($FormattedCharSequence$Type)>): void
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccessor$Type = ($TooltipAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipAccessor_ = $TooltipAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/accessor/$MobSpawnSettingsBuilderForgeAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MobSpawnSettingsBuilderForgeAccessor {

 "puzzleslib$getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>

(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
}

export namespace $MobSpawnSettingsBuilderForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilderForgeAccessor$Type = ($MobSpawnSettingsBuilderForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilderForgeAccessor_ = $MobSpawnSettingsBuilderForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$BlockColorsForgeAccessor" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockColorsForgeAccessor {

 "puzzleslib$getBlockColors"(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>

(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>
}

export namespace $BlockColorsForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsForgeAccessor$Type = ($BlockColorsForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsForgeAccessor_ = $BlockColorsForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemForgeAccessor {

 "puzzleslib$setRenderProperties"(arg0: any): void
 "puzzleslib$getRenderProperties"(): any
}

export namespace $ItemForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemForgeAccessor$Type = ($ItemForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemForgeAccessor_ = $ItemForgeAccessor$Type;
}}
declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemColorsForgeAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemColorsForgeAccessor {

 "puzzleslib$getItemColors"(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>

(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>
}

export namespace $ItemColorsForgeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsForgeAccessor$Type = ($ItemColorsForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsForgeAccessor_ = $ItemColorsForgeAccessor$Type;
}}
