declare module "packages/com/blamejared/crafttweaker/mixin/common/access/recipe/$AccessSmithingTrimRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessSmithingTrimRecipe {

 "crafttweaker$getAddition"(): $Ingredient
 "crafttweaker$getTemplate"(): $Ingredient
 "crafttweaker$getBase"(): $Ingredient
}

export namespace $AccessSmithingTrimRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessSmithingTrimRecipe$Type = ($AccessSmithingTrimRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessSmithingTrimRecipe_ = $AccessSmithingTrimRecipe$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/level/$CraftTweakerSavedDataHolder" {
import {$CraftTweakerSavedData, $CraftTweakerSavedData$Type} from "packages/com/blamejared/crafttweaker/api/level/$CraftTweakerSavedData"

export interface $CraftTweakerSavedDataHolder {

 "crafttweaker$getSavedData"(): $CraftTweakerSavedData

(): $CraftTweakerSavedData
}

export namespace $CraftTweakerSavedDataHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftTweakerSavedDataHolder$Type = ($CraftTweakerSavedDataHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftTweakerSavedDataHolder_ = $CraftTweakerSavedDataHolder$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/serializer/$CTShapelessRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeFunction1D, $RecipeFunction1D$Type} from "packages/com/blamejared/crafttweaker/api/recipe/fun/$RecipeFunction1D"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CTShapelessRecipe, $CTShapelessRecipe$Type} from "packages/com/blamejared/crafttweaker/api/recipe/type/$CTShapelessRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CTShapelessRecipeSerializer implements $RecipeSerializer<($CTShapelessRecipe)> {
static readonly "INSTANCE": $CTShapelessRecipeSerializer


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CTShapelessRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CTShapelessRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CTShapelessRecipe
public "makeRecipe"(arg0: $ResourceLocation$Type, arg1: $IItemStack$Type, arg2: ($IIngredient$Type)[], arg3: $RecipeFunction1D$Type): $CTShapelessRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CTShapelessRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTShapelessRecipeSerializer$Type = ($CTShapelessRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CTShapelessRecipeSerializer_ = $CTShapelessRecipeSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$ListData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ListData implements $IData {

constructor(arg0: ($IData$Type)[])
constructor(arg0: $List$Type<($IData$Type)>)
constructor()
constructor(arg0: $ListTag$Type)

public "add"(arg0: $IData$Type): $IData
public "remove"(arg0: integer): void
public "put"(arg0: string, arg1: $IData$Type): void
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "iterator"(): $Iterator<($IData)>
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "asList"(): $List<($IData)>
public "getKeys"(): $Set<(string)>
public "copyInternal"(): $IData
public "asByteArray"(): (byte)[]
public "equalTo"(arg0: $IData$Type): boolean
public "getAt"(arg0: integer): $IData
public "asIntArray"(): (integer)[]
public "asLongArray"(): (long)[]
public "isListable"(): boolean
public "remove"(arg0: string): void
public "compareTo"(arg0: $IData$Type): integer
public "isEmpty"(): boolean
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "sub"(arg0: $IData$Type): $IData
public "cat"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "neg"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "asInt"(): integer
public "asString"(): string
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "getAt"(arg0: string): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asBool"(): boolean
public "setAt"(arg0: string, arg1: $IData$Type): void
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "keys"(): $Set<(string)>
get "listable"(): boolean
get "empty"(): boolean
get "id"(): byte
get "mappable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListData$Type = ($ListData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListData_ = $ListData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/recipe/$AccessRecipeManager" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessRecipeManager {

 "crafttweaker$setByName"(arg0: $Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>): void
 "crafttweaker$getByName"(): $Map<($ResourceLocation), ($Recipe<(any)>)>
 "crafttweaker$setRecipes"(arg0: $Map$Type<($RecipeType$Type<(any)>), ($Map$Type<($ResourceLocation$Type), ($Recipe$Type<(any)>)>)>): void
 "crafttweaker$getRecipes"(): $Map<($RecipeType<(any)>), ($Map<($ResourceLocation), ($Recipe<(any)>)>)>
}

export namespace $AccessRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessRecipeManager$Type = ($AccessRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessRecipeManager_ = $AccessRecipeManager$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$IData$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IData$Type extends $Enum<($IData$Type)> {
static readonly "BOOL": $IData$Type
static readonly "BYTE_ARRAY": $IData$Type
static readonly "BYTE": $IData$Type
static readonly "DOUBLE": $IData$Type
static readonly "FLOAT": $IData$Type
static readonly "INT_ARRAY": $IData$Type
static readonly "INT": $IData$Type
static readonly "LIST": $IData$Type
static readonly "LONG_ARRAY": $IData$Type
static readonly "LONG": $IData$Type
static readonly "MAP": $IData$Type
static readonly "SHORT": $IData$Type
static readonly "STRING": $IData$Type


public static "values"(): ($IData$Type)[]
public static "valueOf"(arg0: string): $IData$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IData$Type$Type = (("bool") | ("string") | ("long_array") | ("byte") | ("double") | ("int_array") | ("float") | ("list") | ("int") | ("long") | ("short") | ("map") | ("byte_array")) | ($IData$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IData$Type_ = $IData$Type$Type;
}}
declare module "packages/com/blamejared/clumps/helper/$IClumpedOrb" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IClumpedOrb {

 "clumps$resolve"(): boolean
 "clumps$getClumpedMap"(): $Map<(integer), (integer)>
 "clumps$setClumpedMap"(arg0: $Map$Type<(integer), (integer)>): void
}

export namespace $IClumpedOrb {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClumpedOrb$Type = ($IClumpedOrb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClumpedOrb_ = $IClumpedOrb$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$IntData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntTag, $IntTag$Type} from "packages/net/minecraft/nbt/$IntTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IntData implements $IData {

constructor(arg0: $IntTag$Type)
constructor(arg0: integer)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "sub"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getInternal"(): $IntTag
public "copyInternal"(): $IData
public "neg"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "asList"(): $List<($IData)>
public "not"(): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "internal"(): $IntTag
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntData$Type = ($IntData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntData_ = $IntData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/level/$CraftTweakerSavedData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"

export class $CraftTweakerSavedData extends $SavedData {

constructor()
constructor(arg0: $MapData$Type)

public static "load"(arg0: $CompoundTag$Type): $CraftTweakerSavedData
public "getData"(): $IData
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "isDirty"(): boolean
public "setData"(arg0: $MapData$Type): void
public "updateData"(arg0: $IData$Type): void
get "data"(): $IData
get "dirty"(): boolean
set "data"(value: $MapData$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftTweakerSavedData$Type = ($CraftTweakerSavedData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftTweakerSavedData_ = $CraftTweakerSavedData$Type;
}}
declare module "packages/com/blamejared/controlling/mixin/$AccessInputConstantsKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessInputConstantsKey {

}

export namespace $AccessInputConstantsKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessInputConstantsKey$Type = ($AccessInputConstantsKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessInputConstantsKey_ = $AccessInputConstantsKey$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/food/$AccessFoodPropertiesForge" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $AccessFoodPropertiesForge {

 "crafttweaker$getEffects"(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>

(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>
}

export namespace $AccessFoodPropertiesForge {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFoodPropertiesForge$Type = ($AccessFoodPropertiesForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessFoodPropertiesForge_ = $AccessFoodPropertiesForge$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$TransformCustomSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$TransformCustom, $TransformCustom$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformCustom"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TransformCustomSerializer extends $Enum<($TransformCustomSerializer)> implements $IIngredientTransformerSerializer<($TransformCustom<(any)>)> {
static readonly "INSTANCE": $TransformCustomSerializer


public static "values"(): ($TransformCustomSerializer)[]
public static "valueOf"(arg0: string): $TransformCustomSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $TransformCustom$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TransformCustom$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $TransformCustom<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformCustomSerializer$Type = (("instance")) | ($TransformCustomSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformCustomSerializer_ = $TransformCustomSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/item/tooltip/$ITooltipFunction" {
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ITooltipFunction {

 "apply"(arg0: $IItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: $TooltipFlag$Type): void

(arg0: $IItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: $TooltipFlag$Type): void
}

export namespace $ITooltipFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipFunction$Type = ($ITooltipFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipFunction_ = $ITooltipFunction$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/fun/$RecipeFunction1D" {
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"

export interface $RecipeFunction1D {

 "process"(arg0: $IItemStack$Type, arg1: ($IItemStack$Type)[]): $IItemStack

(arg0: $IItemStack$Type, arg1: ($IItemStack$Type)[]): $IItemStack
}

export namespace $RecipeFunction1D {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFunction1D$Type = ($RecipeFunction1D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFunction1D_ = $RecipeFunction1D$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/fun/$RecipeFunction2D" {
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"

export interface $RecipeFunction2D {

 "process"(arg0: $IItemStack$Type, arg1: (($IItemStack$Type)[])[]): $IItemStack

(arg0: $IItemStack$Type, arg1: (($IItemStack$Type)[])[]): $IItemStack
}

export namespace $RecipeFunction2D {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFunction2D$Type = ($RecipeFunction2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFunction2D_ = $RecipeFunction2D$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/server/$AccessReloadableServerResources" {
import {$TagManager, $TagManager$Type} from "packages/net/minecraft/tags/$TagManager"

export interface $AccessReloadableServerResources {

 "crafttweaker$getTagManager"(): $TagManager

(): $TagManager
}

export namespace $AccessReloadableServerResources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessReloadableServerResources$Type = ($AccessReloadableServerResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessReloadableServerResources_ = $AccessReloadableServerResources$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/item/$IItemStack" {
import {$IIngredientConditioned, $IIngredientConditioned$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientConditioned"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Percentaged, $Percentaged$Type} from "packages/com/blamejared/crafttweaker/api/util/random/$Percentaged"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IIngredientWithAmount, $IIngredientWithAmount$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredientWithAmount"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IIngredientList, $IIngredientList$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientList"
import {$ITooltipFunction, $ITooltipFunction$Type} from "packages/com/blamejared/crafttweaker/api/item/tooltip/$ITooltipFunction"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IIngredientTransformed, $IIngredientTransformed$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientTransformed"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IItemStack extends $IIngredient, $IIngredientWithAmount {

 "getOwner"(): string
 "isEmpty"(): boolean
 "matches"(arg0: $IItemStack$Type, arg1: boolean): boolean
 "copy"(): $IItemStack
 "getDefinition"(): $Item
 "getAttributes"(arg0: $EquipmentSlot$Type): $Map<($Attribute), ($List<($AttributeModifier)>)>
 "grow"(arg0: integer): $IItemStack
 "getTag"(): $IData
 "getDisplayName"(): $Component
 "withTag"(arg0: $MapData$Type): $IItemStack
 "getRegistryName"(): $ResourceLocation
 "setAmount"(arg0: integer): $IItemStack
 "getInternal"(): $ItemStack
 "asMutable"(): $IItemStack
 "asIData"(): $IData
 "percent"(arg0: double): $Percentaged<($IItemStack)>
 "getMaxDamage"(): integer
 "isFireResistant"(): boolean
 "isDamaged"(): boolean
 "getBurnTime"(): integer
 "isImmutable"(): boolean
 "modify"(arg0: $Consumer$Type<($ItemStack$Type)>): $IItemStack
 "getCommandString"(): string
 "withLore"(...arg0: ($Component$Type)[]): $IItemStack
 "hasFoil"(): boolean
 "getHoverName"(): $Component
 "resetHoverName"(): void
 "isEnchantable"(): boolean
 "isEnchanted"(): boolean
 "withDisplayName"(arg0: $Component$Type): $IItemStack
 "getBaseRepairCost"(): integer
 "hasDisplayName"(): boolean
 "withDamage"(arg0: integer): $IItemStack
 "isStackable"(): boolean
 "setRarity"(arg0: $Rarity$Type): void
 "useOnRelease"(): boolean
 "getUseDuration"(): integer
 "setFood"(arg0: $FoodProperties$Type): void
 "setMaxDamage"(arg0: integer): void
 "setFireResistant"(arg0: boolean): void
 "getFood"(): $FoodProperties
 "isDamageableItem"(): boolean
 "withoutTag"(): $IItemStack
 "withEnchantment"(arg0: $Enchantment$Type, arg1: integer): $IItemStack
 "removeEnchantment"(arg0: $Enchantment$Type): $IItemStack
 "asItemLike"(): $ItemLike
 "withAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[], arg6: boolean): $IItemStack
 "withAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: double, arg3: $AttributeModifier$Operation$Type, arg4: ($EquipmentSlot$Type)[], arg5: boolean): $IItemStack
 "withAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[], arg6: boolean): $IItemStack
 "asWeightedItemStack"(): $Percentaged<($IItemStack)>
 "asImmutable"(): $IItemStack
 "getEnchantmentLevel"(arg0: $Enchantment$Type): integer
 "setMaxStackSize"(arg0: integer): void
 "shrink"(arg0: integer): $IItemStack
 "getDamage"(): integer
 "getMaxStackSize"(): integer
 "getAmount"(): integer
 "getEnchantments"(): $Map<($Enchantment), (integer)>
 "setEnchantments"(arg0: $Map$Type<($Enchantment$Type), (integer)>): $IItemStack
 "getIngredient"(): $IItemStack
 "isMutable"(): boolean
 "getDescriptionId"(): string
 "hasTag"(): boolean
 "getOrCreateTag"(): $IData
 "isEdible"(): boolean
 "asIIngredientWithAmount"(): $IIngredientWithAmount
 "asVanillaIngredient"(): $Ingredient
 "getRarity"(): $Rarity
 "getImmutableInternal"(): $ItemStack
 "matches"(arg0: $IItemStack$Type): boolean
 "contains"(arg0: $IIngredient$Type): boolean
 "transform"(arg0: $IIngredientTransformer$Type<($IIngredient$Type)>): $IIngredientTransformed<($IIngredient)>
 "or"(arg0: $IIngredient$Type): $IIngredientList
 "mul"(arg0: integer): $IIngredientWithAmount
 "reuse"(): $IIngredientTransformed<($IIngredient)>
 "setBurnTime"(arg0: integer): void
 "only"(arg0: $IIngredientCondition$Type<($IIngredient$Type)>): $IIngredientConditioned<($IIngredient)>
 "getItems"(): ($IItemStack)[]
 "addTooltip"(arg0: $Component$Type): void
 "removeGlobalAttributeModifier"(arg0: $UUID$Type, arg1: ($EquipmentSlot$Type)[]): void
 "removeGlobalAttributeModifier"(arg0: string, arg1: ($EquipmentSlot$Type)[]): void
 "removeGlobalAttribute"(arg0: $Attribute$Type, arg1: ($EquipmentSlot$Type)[]): void
 "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: double, arg3: $AttributeModifier$Operation$Type, arg4: ($EquipmentSlot$Type)[]): void
 "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
 "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
 "getRemainingItem"(arg0: $IItemStack$Type): $IItemStack
 "clearTooltip"(arg0: boolean): void
 "modifyTooltip"(arg0: $ITooltipFunction$Type): void
 "addShiftTooltip"(arg0: $Component$Type, arg1: $Component$Type): void
 "modifyShiftTooltip"(arg0: $ITooltipFunction$Type, arg1: $ITooltipFunction$Type): void
 "removeTooltip"(arg0: string): void
 "asMapData"(): $MapData
 "transformReplace"(arg0: $IItemStack$Type): $IIngredientTransformed<($IIngredient)>
 "transformDamage"(arg0: integer): $IIngredientTransformed<($IIngredient)>
 "transformCustom"(arg0: string, arg1: $Function$Type<($IItemStack$Type), ($IItemStack$Type)>): $IIngredientTransformed<($IIngredient)>
 "onlyDamaged"(): $IIngredientConditioned<($IIngredient)>
 "onlyDamagedAtLeast"(arg0: integer): $IIngredientConditioned<($IIngredient)>
 "onlyIf"(arg0: string, arg1: $Predicate$Type<($IItemStack$Type)>): $IIngredientConditioned<($IIngredient)>
 "anyDamage"(): $IIngredientConditioned<($IIngredient)>
 "onlyDamagedAtMost"(arg0: integer): $IIngredientConditioned<($IIngredient)>
}

export namespace $IItemStack {
const CRAFTTWEAKER_DATA_KEY: string
const BASE_ATTACK_DAMAGE_UUID: $UUID
const BASE_ATTACK_SPEED_UUID: $UUID
function of(arg0: $ItemStack$Type, arg1: boolean): $IItemStack
function of(arg0: $ItemStack$Type): $IItemStack
function empty(): $IItemStack
function ofMutable(arg0: $ItemStack$Type): $IItemStack
function fromIngredient(arg0: $Ingredient$Type): $IIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStack$Type = ($IItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStack_ = $IItemStack$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/tag/$AccessTagManager" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"

export interface $AccessTagManager {

 "crafttweaker$getRegistryAccess"(): $RegistryAccess

(): $RegistryAccess
}

export namespace $AccessTagManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessTagManager$Type = ($AccessTagManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessTagManager_ = $AccessTagManager$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient" {
import {$IIngredientConditioned, $IIngredientConditioned$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientConditioned"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"
import {$IIngredientWithAmount, $IIngredientWithAmount$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredientWithAmount"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$IIngredientList, $IIngredientList$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientList"
import {$ITooltipFunction, $ITooltipFunction$Type} from "packages/com/blamejared/crafttweaker/api/item/tooltip/$ITooltipFunction"
import {$IIngredientTransformed, $IIngredientTransformed$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientTransformed"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$CommandStringDisplayable, $CommandStringDisplayable$Type} from "packages/com/blamejared/crafttweaker/api/bracket/$CommandStringDisplayable"

export interface $IIngredient extends $CommandStringDisplayable {

 "isEmpty"(): boolean
 "matches"(arg0: $IItemStack$Type): boolean
 "matches"(arg0: $IItemStack$Type, arg1: boolean): boolean
 "contains"(arg0: $IIngredient$Type): boolean
 "transform"(arg0: $IIngredientTransformer$Type<($IIngredient$Type)>): $IIngredientTransformed<($IIngredient)>
 "or"(arg0: $IIngredient$Type): $IIngredientList
 "mul"(arg0: integer): $IIngredientWithAmount
 "reuse"(): $IIngredientTransformed<($IIngredient)>
 "asIData"(): $IData
 "setBurnTime"(arg0: integer): void
 "getCommandString"(): string
 "only"(arg0: $IIngredientCondition$Type<($IIngredient$Type)>): $IIngredientConditioned<($IIngredient)>
 "getItems"(): ($IItemStack)[]
 "addTooltip"(arg0: $Component$Type): void
 "removeGlobalAttributeModifier"(arg0: $UUID$Type, arg1: ($EquipmentSlot$Type)[]): void
 "removeGlobalAttributeModifier"(arg0: string, arg1: ($EquipmentSlot$Type)[]): void
 "asIIngredientWithAmount"(): $IIngredientWithAmount
 "removeGlobalAttribute"(arg0: $Attribute$Type, arg1: ($EquipmentSlot$Type)[]): void
 "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: double, arg3: $AttributeModifier$Operation$Type, arg4: ($EquipmentSlot$Type)[]): void
 "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
 "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
 "asVanillaIngredient"(): $Ingredient
 "getRemainingItem"(arg0: $IItemStack$Type): $IItemStack
 "clearTooltip"(arg0: boolean): void
 "modifyTooltip"(arg0: $ITooltipFunction$Type): void
 "addShiftTooltip"(arg0: $Component$Type, arg1: $Component$Type): void
 "modifyShiftTooltip"(arg0: $ITooltipFunction$Type, arg1: $ITooltipFunction$Type): void
 "removeTooltip"(arg0: string): void
 "asMapData"(): $MapData
 "transformReplace"(arg0: $IItemStack$Type): $IIngredientTransformed<($IIngredient)>
 "transformDamage"(arg0: integer): $IIngredientTransformed<($IIngredient)>
 "transformCustom"(arg0: string, arg1: $Function$Type<($IItemStack$Type), ($IItemStack$Type)>): $IIngredientTransformed<($IIngredient)>
 "onlyDamaged"(): $IIngredientConditioned<($IIngredient)>
 "onlyDamagedAtLeast"(arg0: integer): $IIngredientConditioned<($IIngredient)>
 "onlyIf"(arg0: string, arg1: $Predicate$Type<($IItemStack$Type)>): $IIngredientConditioned<($IIngredient)>
 "anyDamage"(): $IIngredientConditioned<($IIngredient)>
 "onlyDamagedAtMost"(arg0: integer): $IIngredientConditioned<($IIngredient)>
}

export namespace $IIngredient {
function fromIngredient(arg0: $Ingredient$Type): $IIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredient$Type = ($IIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredient_ = $IIngredient$Type;
}}
declare module "packages/com/blamejared/searchables/mixin/$AccessEditBox" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export interface $AccessEditBox {

 "searchables$getResponder"(): $Consumer<(string)>
 "searchables$getFilter"(): $Predicate<(string)>
}

export namespace $AccessEditBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessEditBox$Type = ($AccessEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessEditBox_ = $AccessEditBox$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/loot/$AccessLootTable" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $AccessLootTable {

 "crafttweaker$callGetRandomItems"(arg0: $LootContext$Type): $ObjectArrayList<($ItemStack)>

(arg0: $LootContext$Type): $ObjectArrayList<($ItemStack)>
}

export namespace $AccessLootTable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessLootTable$Type = ($AccessLootTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessLootTable_ = $AccessLootTable$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$LongArrayData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LongArrayTag, $LongArrayTag$Type} from "packages/net/minecraft/nbt/$LongArrayTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LongArrayData implements $IData {

constructor(arg0: $LongArrayTag$Type)
constructor(arg0: (long)[])

public "remove"(arg0: integer): void
public "put"(arg0: string, arg1: $IData$Type): void
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "iterator"(): $Iterator<($IData)>
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "asList"(): $List<($IData)>
public "copyInternal"(): $IData
public "asByteArray"(): (byte)[]
public "equalTo"(arg0: $IData$Type): boolean
public "getAt"(arg0: integer): $IData
public "asIntArray"(): (integer)[]
public "asLongArray"(): (long)[]
public "isListable"(): boolean
public "add"(arg0: $IData$Type): $IData
public "remove"(arg0: string): void
public "isEmpty"(): boolean
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "sub"(arg0: $IData$Type): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "neg"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "asInt"(): integer
public "asString"(): string
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "getAt"(arg0: string): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asBool"(): boolean
public "setAt"(arg0: string, arg1: $IData$Type): void
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "listable"(): boolean
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArrayData$Type = ($LongArrayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongArrayData_ = $LongArrayData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/type/$ConditionCustom" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConditionCustom<T extends $IIngredient> implements $IIngredientCondition<(T)> {
static readonly "knownConditions": $Map<(string), ($Predicate<($IItemStack)>)>

constructor(arg0: string, arg1: $Predicate$Type<($IItemStack$Type)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "matches"(arg0: $IItemStack$Type): boolean
public "getSerializer"(): $IIngredientConditionSerializer<(any)>
public "getCommandString"(arg0: T): string
public "getUid"(): string
public "ignoresDamage"(): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
get "serializer"(): $IIngredientConditionSerializer<(any)>
get "uid"(): string
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionCustom$Type<T> = ($ConditionCustom<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionCustom_<T> = $ConditionCustom$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/item/$AccessItem" {
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"

export interface $AccessItem {

 "crafttweaker$setRarity"(arg0: $Rarity$Type): void
 "crafttweaker$setMaxStackSize"(arg0: integer): void
 "crafttweaker$setFoodProperties"(arg0: $FoodProperties$Type): void
 "crafttweaker$setFireResistant"(arg0: boolean): void
 "crafttweaker$setMaxDamage"(arg0: integer): void
}

export namespace $AccessItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessItem$Type = ($AccessItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessItem_ = $AccessItem$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/loot/$AccessLootContext" {
import {$LootParams, $LootParams$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams"

export interface $AccessLootContext {

 "crafttweaker$getParams"(): $LootParams

(): $LootParams
}

export namespace $AccessLootContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessLootContext$Type = ($AccessLootContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessLootContext_ = $AccessLootContext$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/block/$AccessBlockStateBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessBlockStateBase {

 "crafttweaker$isUseShapeForLightOcclusion"(): boolean
 "crafttweaker$setRequiresCorrectToolForDrops"(arg0: boolean): void
 "crafttweaker$setUseShapeForLightOcclusion"(arg0: boolean): void
 "crafttweaker$isRequiresCorrectToolForDrops"(): boolean
 "crafttweaker$setCanOcclude"(arg0: boolean): void
 "crafttweaker$setDestroySpeed"(arg0: float): void
 "crafttweaker$isIsAir"(): boolean
 "crafttweaker$setIsAir"(arg0: boolean): void
 "crafttweaker$setLightEmission"(arg0: integer): void
 "crafttweaker$getDestroySpeed"(): float
 "crafttweaker$isCanOcclude"(): boolean
 "crafttweaker$getLightEmission"(): integer
}

export namespace $AccessBlockStateBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessBlockStateBase$Type = ($AccessBlockStateBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessBlockStateBase_ = $AccessBlockStateBase$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformReuse" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TransformerReuseSerializer, $TransformerReuseSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$TransformerReuseSerializer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"

export class $TransformReuse<T extends $IIngredient> implements $IIngredientTransformer<(T)> {

constructor()

public "transform"(arg0: $IItemStack$Type): $IItemStack
public "getSerializer"(): $TransformerReuseSerializer
public "getCommandString"(arg0: T): string
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
get "serializer"(): $TransformerReuseSerializer
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformReuse$Type<T> = ($TransformReuse<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformReuse_<T> = $TransformReuse$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/serializer/$CTShapedRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CTShapedRecipe, $CTShapedRecipe$Type} from "packages/com/blamejared/crafttweaker/api/recipe/type/$CTShapedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$RecipeFunction2D, $RecipeFunction2D$Type} from "packages/com/blamejared/crafttweaker/api/recipe/fun/$RecipeFunction2D"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$MirrorAxis, $MirrorAxis$Type} from "packages/com/blamejared/crafttweaker/api/recipe/$MirrorAxis"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CTShapedRecipeSerializer implements $RecipeSerializer<($CTShapedRecipe)> {
static readonly "INSTANCE": $CTShapedRecipeSerializer


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CTShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CTShapedRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CTShapedRecipe
public "makeRecipe"(arg0: $ResourceLocation$Type, arg1: $IItemStack$Type, arg2: (($IIngredient$Type)[])[], arg3: $MirrorAxis$Type, arg4: $RecipeFunction2D$Type): $CTShapedRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CTShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTShapedRecipeSerializer$Type = ($CTShapedRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CTShapedRecipeSerializer_ = $CTShapedRecipeSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/block/$AccessAbstractCauldronBlock" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessAbstractCauldronBlock {

 "crafttweaker$getInteractions"(): $Map<($Item), ($CauldronInteraction)>

(): $Map<($Item), ($CauldronInteraction)>
}

export namespace $AccessAbstractCauldronBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessAbstractCauldronBlock$Type = ($AccessAbstractCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessAbstractCauldronBlock_ = $AccessAbstractCauldronBlock$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$MapData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MapData implements $IData {

constructor(arg0: $Map$Type<(string), ($IData$Type)>)
constructor()
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $CompoundTag$Type, arg1: $Set$Type<(string)>)

public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "iterator"(): $Iterator<($IData)>
public "contains"(arg0: $IData$Type): boolean
public "merge"(arg0: $IData$Type): $IData
public "putAll"(arg0: $Map$Type<(string), ($IData$Type)>): void
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "getKeys"(): $Set<(string)>
public "copyInternal"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "equalTo"(arg0: $IData$Type): boolean
public "getAt"(arg0: integer): $IData
public "getAt"(arg0: string): $IData
public "boolDataKeys"(): $Set<(string)>
public "isMappable"(): boolean
public "add"(arg0: $IData$Type): $IData
public "compareTo"(arg0: $IData$Type): integer
public "isEmpty"(): boolean
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "asList"(): $List<($IData)>
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "sub"(arg0: $IData$Type): $IData
public "cat"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "neg"(): $IData
public "asInt"(): integer
public "asString"(): string
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asBool"(): boolean
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "empty"(): boolean
get "id"(): byte
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapData$Type = ($MapData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapData_ = $MapData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/impl/script/$ScriptSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ScriptRecipe, $ScriptRecipe$Type} from "packages/com/blamejared/crafttweaker/impl/script/$ScriptRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ScriptSerializer implements $RecipeSerializer<($ScriptRecipe)> {
static readonly "INSTANCE": $ScriptSerializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ScriptRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ScriptRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ScriptRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ScriptRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptSerializer$Type = ($ScriptSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptSerializer_ = $ScriptSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$ByteArrayData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ByteArrayTag, $ByteArrayTag$Type} from "packages/net/minecraft/nbt/$ByteArrayTag"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ByteArrayData implements $IData {

constructor(arg0: $ByteArrayTag$Type)
constructor(arg0: (byte)[])

public "remove"(arg0: integer): void
public "put"(arg0: string, arg1: $IData$Type): void
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "iterator"(): $Iterator<($IData)>
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "asList"(): $List<($IData)>
public "copyInternal"(): $ByteArrayData
public "asByteArray"(): (byte)[]
public "equalTo"(arg0: $IData$Type): boolean
public "getAt"(arg0: integer): $IData
public "asIntArray"(): (integer)[]
public "asLongArray"(): (long)[]
public "isListable"(): boolean
public "add"(arg0: $IData$Type): $IData
public "remove"(arg0: string): void
public "isEmpty"(): boolean
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "sub"(arg0: $IData$Type): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "neg"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "asInt"(): integer
public "asString"(): string
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "getAt"(arg0: string): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asBool"(): boolean
public "setAt"(arg0: string, arg1: $IData$Type): void
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "listable"(): boolean
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteArrayData$Type = ($ByteArrayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteArrayData_ = $ByteArrayData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredientWithAmount" {
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$CommandStringDisplayable, $CommandStringDisplayable$Type} from "packages/com/blamejared/crafttweaker/api/bracket/$CommandStringDisplayable"

export interface $IIngredientWithAmount extends $CommandStringDisplayable {

 "asIData"(): $IData
 "getAmount"(): integer
 "getIngredient"(): $IIngredient
 "getCommandString"(): string
}

export namespace $IIngredientWithAmount {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientWithAmount$Type = ($IIngredientWithAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientWithAmount_ = $IIngredientWithAmount$Type;
}}
declare module "packages/com/blamejared/crafttweaker/impl/script/$ScriptRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ScriptRecipe, $ScriptRecipe$Type} from "packages/com/blamejared/crafttweaker/impl/script/$ScriptRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ScriptRecipeType extends $Enum<($ScriptRecipeType)> implements $RecipeType<($ScriptRecipe)> {
static readonly "INSTANCE": $ScriptRecipeType


public "toString"(): string
public static "values"(): ($ScriptRecipeType)[]
public static "valueOf"(arg0: string): $ScriptRecipeType
public "id"(): $ResourceLocation
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<($ScriptRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<($ScriptRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptRecipeType$Type = (("instance")) | ($ScriptRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptRecipeType_ = $ScriptRecipeType$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientList" {
import {$IIngredientConditioned, $IIngredientConditioned$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientConditioned"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"
import {$IIngredientWithAmount, $IIngredientWithAmount$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredientWithAmount"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$ITooltipFunction, $ITooltipFunction$Type} from "packages/com/blamejared/crafttweaker/api/item/tooltip/$ITooltipFunction"
import {$IIngredientTransformed, $IIngredientTransformed$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientTransformed"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"

export class $IIngredientList implements $IIngredient {
static readonly "ID": $ResourceLocation

constructor(arg0: ($IIngredient$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "matches"(arg0: $IItemStack$Type, arg1: boolean): boolean
public "or"(arg0: $IIngredient$Type): $IIngredientList
public "getCommandString"(): string
public "getItems"(): ($IItemStack)[]
public "getIngredients"(): ($IIngredient)[]
public "asVanillaIngredient"(): $Ingredient
public "matches"(arg0: $IItemStack$Type): boolean
public "contains"(arg0: $IIngredient$Type): boolean
public "transform"(arg0: $IIngredientTransformer$Type<($IIngredient$Type)>): $IIngredientTransformed<($IIngredient)>
public "mul"(arg0: integer): $IIngredientWithAmount
public "reuse"(): $IIngredientTransformed<($IIngredient)>
public "asIData"(): $IData
public "setBurnTime"(arg0: integer): void
public "only"(arg0: $IIngredientCondition$Type<($IIngredient$Type)>): $IIngredientConditioned<($IIngredient)>
public "addTooltip"(arg0: $Component$Type): void
public "removeGlobalAttributeModifier"(arg0: $UUID$Type, arg1: ($EquipmentSlot$Type)[]): void
public "removeGlobalAttributeModifier"(arg0: string, arg1: ($EquipmentSlot$Type)[]): void
public "asIIngredientWithAmount"(): $IIngredientWithAmount
public "removeGlobalAttribute"(arg0: $Attribute$Type, arg1: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: double, arg3: $AttributeModifier$Operation$Type, arg4: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
public "getRemainingItem"(arg0: $IItemStack$Type): $IItemStack
public "clearTooltip"(arg0: boolean): void
public "modifyTooltip"(arg0: $ITooltipFunction$Type): void
public "addShiftTooltip"(arg0: $Component$Type, arg1: $Component$Type): void
public "modifyShiftTooltip"(arg0: $ITooltipFunction$Type, arg1: $ITooltipFunction$Type): void
public "removeTooltip"(arg0: string): void
public "asMapData"(): $MapData
public "transformReplace"(arg0: $IItemStack$Type): $IIngredientTransformed<($IIngredient)>
public static "fromIngredient"(arg0: $Ingredient$Type): $IIngredient
public "transformDamage"(arg0: integer): $IIngredientTransformed<($IIngredient)>
public "transformCustom"(arg0: string, arg1: $Function$Type<($IItemStack$Type), ($IItemStack$Type)>): $IIngredientTransformed<($IIngredient)>
public "onlyDamaged"(): $IIngredientConditioned<($IIngredient)>
public "onlyDamagedAtLeast"(arg0: integer): $IIngredientConditioned<($IIngredient)>
public "onlyIf"(arg0: string, arg1: $Predicate$Type<($IItemStack$Type)>): $IIngredientConditioned<($IIngredient)>
public "anyDamage"(): $IIngredientConditioned<($IIngredient)>
public "onlyDamagedAtMost"(arg0: integer): $IIngredientConditioned<($IIngredient)>
get "empty"(): boolean
get "commandString"(): string
get "items"(): ($IItemStack)[]
get "ingredients"(): ($IIngredient)[]
set "burnTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientList$Type = ($IIngredientList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientList_ = $IIngredientList$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/block/$AccessBlockBehaviour" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessBlockBehaviour {

 "crafttweaker$setExplosionResistance"(arg0: float): void
 "crafttweaker$getExplosionResistance"(): float
 "crafttweaker$getFriction"(): float
 "crafttweaker$getSpeedFactor"(): float
 "crafttweaker$setSpeedFactor"(arg0: float): void
 "crafttweaker$getHasCollision"(): boolean
 "crafttweaker$setHasCollision"(arg0: boolean): void
 "crafttweaker$setJumpFactor"(arg0: float): void
 "crafttweaker$setFriction"(arg0: float): void
 "crafttweaker$getJumpFactor"(): float
}

export namespace $AccessBlockBehaviour {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessBlockBehaviour$Type = ($AccessBlockBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessBlockBehaviour_ = $AccessBlockBehaviour$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$FloatData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FloatTag, $FloatTag$Type} from "packages/net/minecraft/nbt/$FloatTag"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FloatData implements $IData {

constructor(arg0: $FloatTag$Type)
constructor(arg0: float)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "mod"(arg0: $IData$Type): $IData
public "sub"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "copyInternal"(): $IData
public "neg"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "asList"(): $List<($IData)>
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatData$Type = ($FloatData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatData_ = $FloatData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$IData" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IData extends $Comparable<($IData)>, $Iterable<($IData)> {

 "add"(arg0: $IData$Type): $IData
 "remove"(arg0: integer): void
 "remove"(arg0: string): void
 "put"(arg0: string, arg1: $IData$Type): void
 "length"(): integer
 "compareTo"(arg0: $IData$Type): integer
 "isEmpty"(): boolean
 "iterator"(): $Iterator<($IData)>
 "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
 "contains"(arg0: $IData$Type): boolean
 "merge"(arg0: $IData$Type): $IData
 "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
 "getId"(): byte
 "getType"(): $IData$Type
 "copy"(): $IData
 "mod"(arg0: $IData$Type): $IData
 "asList"(): $List<($IData)>
 "or"(arg0: $IData$Type): $IData
 "and"(arg0: $IData$Type): $IData
 "not"(): $IData
 "sub"(arg0: $IData$Type): $IData
 "getKeys"(): $Set<(string)>
 "cat"(arg0: $IData$Type): $IData
 "mul"(arg0: $IData$Type): $IData
 "xor"(arg0: $IData$Type): $IData
 "div"(arg0: $IData$Type): $IData
 "getAsString"(): string
 "getInternal"(): $Tag
 "copyInternal"(): $IData
 "asByteArray"(): (byte)[]
 "neg"(): $IData
 "asMap"(): $Map<(string), ($IData)>
 "asInt"(): integer
 "asString"(): string
 "equalTo"(arg0: $IData$Type): boolean
 "asDouble"(): double
 "asLong"(): long
 "asFloat"(): float
 "asByte"(): byte
 "asShort"(): short
 "getAt"(arg0: string): $IData
 "getAt"(arg0: integer): $IData
 "shr"(arg0: $IData$Type): $IData
 "shl"(arg0: $IData$Type): $IData
 "asBool"(): boolean
 "asIntArray"(): (integer)[]
 "setAt"(arg0: string, arg1: $IData$Type): void
 "asLongArray"(): (long)[]
 "isMappable"(): boolean
 "containsList"(arg0: $List$Type<($IData$Type)>): boolean
 "isListable"(): boolean
 "spliterator"(): $Spliterator<($IData)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IData {
function listOf(...arg0: ($IData$Type)[]): $IData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IData$Type = ($IData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IData_ = $IData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/food/$AccessFoodProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessFoodProperties {

 "crafttweaker$setCanAlwaysEat"(arg0: boolean): void
 "crafttweaker$setNutrition"(arg0: integer): void
 "crafttweaker$setFastFood"(arg0: boolean): void
 "crafttweaker$setIsMeat"(arg0: boolean): void
 "crafttweaker$setSaturationModifier"(arg0: float): void
}

export namespace $AccessFoodProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFoodProperties$Type = ($AccessFoodProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessFoodProperties_ = $AccessFoodProperties$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/server/$AccessMinecraftServer" {
import {$MinecraftServer$ReloadableResources, $MinecraftServer$ReloadableResources$Type} from "packages/net/minecraft/server/$MinecraftServer$ReloadableResources"

export interface $AccessMinecraftServer {

 "crafttweaker$getResources"(): $MinecraftServer$ReloadableResources

(): $MinecraftServer$ReloadableResources
}

export namespace $AccessMinecraftServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessMinecraftServer$Type = ($AccessMinecraftServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessMinecraftServer_ = $AccessMinecraftServer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientTransformed" {
import {$IIngredientConditioned, $IIngredientConditioned$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientConditioned"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"
import {$IIngredientWithAmount, $IIngredientWithAmount$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredientWithAmount"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$IIngredientList, $IIngredientList$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientList"
import {$ITooltipFunction, $ITooltipFunction$Type} from "packages/com/blamejared/crafttweaker/api/item/tooltip/$ITooltipFunction"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"

export class $IIngredientTransformed<T extends $IIngredient> implements $IIngredient {
static readonly "ID": $ResourceLocation

constructor(arg0: T, arg1: $IIngredientTransformer$Type<(T)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "matches"(arg0: $IItemStack$Type, arg1: boolean): boolean
public "getCommandString"(): string
public "getTransformer"(): $IIngredientTransformer<(T)>
public "getItems"(): ($IItemStack)[]
public "asVanillaIngredient"(): $Ingredient
public "getRemainingItem"(arg0: $IItemStack$Type): $IItemStack
public "getBaseIngredient"(): T
public "isEmpty"(): boolean
public "matches"(arg0: $IItemStack$Type): boolean
public "contains"(arg0: $IIngredient$Type): boolean
public "transform"(arg0: $IIngredientTransformer$Type<($IIngredient$Type)>): $IIngredientTransformed<($IIngredient)>
public "or"(arg0: $IIngredient$Type): $IIngredientList
public "mul"(arg0: integer): $IIngredientWithAmount
public "reuse"(): $IIngredientTransformed<($IIngredient)>
public "asIData"(): $IData
public "setBurnTime"(arg0: integer): void
public "only"(arg0: $IIngredientCondition$Type<($IIngredient$Type)>): $IIngredientConditioned<($IIngredient)>
public "addTooltip"(arg0: $Component$Type): void
public "removeGlobalAttributeModifier"(arg0: $UUID$Type, arg1: ($EquipmentSlot$Type)[]): void
public "removeGlobalAttributeModifier"(arg0: string, arg1: ($EquipmentSlot$Type)[]): void
public "asIIngredientWithAmount"(): $IIngredientWithAmount
public "removeGlobalAttribute"(arg0: $Attribute$Type, arg1: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: double, arg3: $AttributeModifier$Operation$Type, arg4: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
public "clearTooltip"(arg0: boolean): void
public "modifyTooltip"(arg0: $ITooltipFunction$Type): void
public "addShiftTooltip"(arg0: $Component$Type, arg1: $Component$Type): void
public "modifyShiftTooltip"(arg0: $ITooltipFunction$Type, arg1: $ITooltipFunction$Type): void
public "removeTooltip"(arg0: string): void
public "asMapData"(): $MapData
public "transformReplace"(arg0: $IItemStack$Type): $IIngredientTransformed<($IIngredient)>
public static "fromIngredient"(arg0: $Ingredient$Type): $IIngredient
public "transformDamage"(arg0: integer): $IIngredientTransformed<($IIngredient)>
public "transformCustom"(arg0: string, arg1: $Function$Type<($IItemStack$Type), ($IItemStack$Type)>): $IIngredientTransformed<($IIngredient)>
public "onlyDamaged"(): $IIngredientConditioned<($IIngredient)>
public "onlyDamagedAtLeast"(arg0: integer): $IIngredientConditioned<($IIngredient)>
public "onlyIf"(arg0: string, arg1: $Predicate$Type<($IItemStack$Type)>): $IIngredientConditioned<($IIngredient)>
public "anyDamage"(): $IIngredientConditioned<($IIngredient)>
public "onlyDamagedAtMost"(arg0: integer): $IIngredientConditioned<($IIngredient)>
get "commandString"(): string
get "transformer"(): $IIngredientTransformer<(T)>
get "items"(): ($IItemStack)[]
get "baseIngredient"(): T
get "empty"(): boolean
set "burnTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTransformed$Type<T> = ($IIngredientTransformed<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTransformed_<T> = $IIngredientTransformed$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"

export interface $IIngredientCondition<T extends $IIngredient> {

 "matches"(arg0: $IItemStack$Type): boolean
 "write"(arg0: $FriendlyByteBuf$Type): void
 "getType"(): $ResourceLocation
 "getSerializer"(): $IIngredientConditionSerializer<(any)>
 "getCommandString"(arg0: T): string
 "toJson"(): $JsonObject
 "ignoresDamage"(): boolean
}

export namespace $IIngredientCondition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientCondition$Type<T> = ($IIngredientCondition<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientCondition_<T> = $IIngredientCondition$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/entity/$AccessFallingBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $AccessFallingBlockEntity {

 "crafttweaker$setBlockState"(arg0: $BlockState$Type): void

(arg0: $BlockState$Type): void
}

export namespace $AccessFallingBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFallingBlockEntity$Type = ($AccessFallingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessFallingBlockEntity_ = $AccessFallingBlockEntity$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer" {
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"

export interface $IIngredientTransformer<T extends $IIngredient> {

 "transform"(arg0: $IItemStack$Type): $IItemStack
 "getType"(): $ResourceLocation
 "getSerializer"(): $IIngredientTransformerSerializer<(any)>
 "getCommandString"(arg0: T): string
 "toJson"(): $JsonObject
 "toNetwork"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IIngredientTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTransformer$Type<T> = ($IIngredientTransformer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTransformer_<T> = $IIngredientTransformer$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"

export interface $IIngredientTransformerSerializer<T extends $IIngredientTransformer<(any)>> {

 "getType"(): $ResourceLocation
 "fromJson"(arg0: $JsonObject$Type): T
 "toJson"(arg0: T): $JsonObject
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromNetwork"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $IIngredientTransformerSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTransformerSerializer$Type<T> = ($IIngredientTransformerSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTransformerSerializer_<T> = $IIngredientTransformerSerializer$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$IntArrayData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IntArrayTag, $IntArrayTag$Type} from "packages/net/minecraft/nbt/$IntArrayTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IntArrayData implements $IData {

constructor(arg0: $IntArrayTag$Type)
constructor(arg0: (integer)[])

public "remove"(arg0: integer): void
public "put"(arg0: string, arg1: $IData$Type): void
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "iterator"(): $Iterator<($IData)>
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "asList"(): $List<($IData)>
public "copyInternal"(): $IntArrayData
public "asByteArray"(): (byte)[]
public "equalTo"(arg0: $IData$Type): boolean
public "getAt"(arg0: integer): $IData
public "asIntArray"(): (integer)[]
public "asLongArray"(): (long)[]
public "isListable"(): boolean
public "add"(arg0: $IData$Type): $IData
public "remove"(arg0: string): void
public "isEmpty"(): boolean
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "sub"(arg0: $IData$Type): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "neg"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "asInt"(): integer
public "asString"(): string
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "getAt"(arg0: string): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asBool"(): boolean
public "setAt"(arg0: string, arg1: $IData$Type): void
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "listable"(): boolean
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntArrayData$Type = ($IntArrayData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntArrayData_ = $IntArrayData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$BoolData" {
import {$ByteData, $ByteData$Type} from "packages/com/blamejared/crafttweaker/api/data/$ByteData"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$ByteTag, $ByteTag$Type} from "packages/net/minecraft/nbt/$ByteTag"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BoolData implements $IData {
static readonly "TRUE": $BoolData
static readonly "FALSE": $BoolData

constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "xor"(arg0: $IData$Type): $IData
public "getInternal"(): $ByteTag
public "copyInternal"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "asBool"(): boolean
public "getByteData"(): $ByteData
public "add"(arg0: $IData$Type): $IData
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "asList"(): $List<($IData)>
public "sub"(arg0: $IData$Type): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "neg"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "internal"(): $ByteTag
get "byteData"(): $ByteData
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoolData$Type = ($BoolData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoolData_ = $BoolData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/item/$AccessIngredient" {
import {$Ingredient$Value, $Ingredient$Value$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient$Value"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessIngredient {

 "crafttweaker$setItemStacks"(arg0: ($ItemStack$Type)[]): void
 "crafttweaker$getValues"(): ($Ingredient$Value)[]
 "crafttweaker$getItemStacks"(): ($ItemStack)[]
}

export namespace $AccessIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessIngredient$Type = ($AccessIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessIngredient_ = $AccessIngredient$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$TransformReplaceSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TransformReplace, $TransformReplace$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformReplace"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TransformReplaceSerializer extends $Enum<($TransformReplaceSerializer)> implements $IIngredientTransformerSerializer<($TransformReplace<(any)>)> {
static readonly "INSTANCE": $TransformReplaceSerializer


public static "values"(): ($TransformReplaceSerializer)[]
public static "valueOf"(arg0: string): $TransformReplaceSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $TransformReplace$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TransformReplace$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $TransformReplace<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformReplaceSerializer$Type = (("instance")) | ($TransformReplaceSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformReplaceSerializer_ = $TransformReplaceSerializer$Type;
}}
declare module "packages/com/blamejared/controlling/mixin/$AccessKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $AccessKeyMapping {

 "controlling$getKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $AccessKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessKeyMapping$Type = ($AccessKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessKeyMapping_ = $AccessKeyMapping$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformCustom" {
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransformCustom<T extends $IIngredient> implements $IIngredientTransformer<(T)> {
static readonly "knownTransformers": $Map<(string), ($Function<($IItemStack), ($IItemStack)>)>

constructor(arg0: string, arg1: $Function$Type<($IItemStack$Type), ($IItemStack$Type)>)

public "transform"(arg0: $IItemStack$Type): $IItemStack
public "getSerializer"(): $IIngredientTransformerSerializer<(any)>
public "getCommandString"(arg0: T): string
public "getUid"(): string
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
get "serializer"(): $IIngredientTransformerSerializer<(any)>
get "uid"(): string
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformCustom$Type<T> = ($TransformCustom<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformCustom_<T> = $TransformCustom$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/level/damage/$AccessDamageSources" {
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"

export interface $AccessDamageSources {

 "crafttweaker$getDamageTypes"(): $Registry<($DamageType)>

(): $Registry<($DamageType)>
}

export namespace $AccessDamageSources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessDamageSources$Type = ($AccessDamageSources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessDamageSources_ = $AccessDamageSources$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/type/$ConditionAnyDamage" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"

export class $ConditionAnyDamage<T extends $IIngredient> implements $IIngredientCondition<(T)> {

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "matches"(arg0: $IItemStack$Type): boolean
public "getSerializer"(): $IIngredientConditionSerializer<(any)>
public "getCommandString"(arg0: $IIngredient$Type): string
public "ignoresDamage"(): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
get "serializer"(): $IIngredientConditionSerializer<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionAnyDamage$Type<T> = ($ConditionAnyDamage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionAnyDamage_<T> = $ConditionAnyDamage$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/util/random/$Percentaged" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CommandStringDisplayable, $CommandStringDisplayable$Type} from "packages/com/blamejared/crafttweaker/api/bracket/$CommandStringDisplayable"

export class $Percentaged<T> implements $CommandStringDisplayable {

constructor(arg0: T, arg1: double, arg2: $Function$Type<(T), (string)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getData"(): T
public "getCommandString"(): string
public "getPercentage"(): double
get "data"(): T
get "commandString"(): string
get "percentage"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentaged$Type<T> = ($Percentaged<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentaged_<T> = $Percentaged$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$TransformerReuseSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TransformReuse, $TransformReuse$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformReuse"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TransformerReuseSerializer extends $Enum<($TransformerReuseSerializer)> implements $IIngredientTransformerSerializer<($TransformReuse<(any)>)> {
static readonly "INSTANCE": $TransformerReuseSerializer


public static "values"(): ($TransformerReuseSerializer)[]
public static "valueOf"(arg0: string): $TransformerReuseSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $TransformReuse$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TransformReuse$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $TransformReuse<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerReuseSerializer$Type = (("instance")) | ($TransformerReuseSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformerReuseSerializer_ = $TransformerReuseSerializer$Type;
}}
declare module "packages/com/blamejared/controlling/mixin/$AccessScreen" {
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $AccessScreen {

 "controlling$getRenderables"(): $List<($Renderable)>

(): $List<($Renderable)>
}

export namespace $AccessScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessScreen$Type = ($AccessScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessScreen_ = $AccessScreen$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$ConditionCustomSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ConditionCustom, $ConditionCustom$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/type/$ConditionCustom"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ConditionCustomSerializer extends $Enum<($ConditionCustomSerializer)> implements $IIngredientConditionSerializer<($ConditionCustom<(any)>)> {
static readonly "INSTANCE": $ConditionCustomSerializer


public static "values"(): ($ConditionCustomSerializer)[]
public static "valueOf"(arg0: string): $ConditionCustomSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $ConditionCustom$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ConditionCustom$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ConditionCustom<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionCustomSerializer$Type = (("instance")) | ($ConditionCustomSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionCustomSerializer_ = $ConditionCustomSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$TransformDamageSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TransformDamage, $TransformDamage$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformDamage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TransformDamageSerializer extends $Enum<($TransformDamageSerializer)> implements $IIngredientTransformerSerializer<($TransformDamage<(any)>)> {
static readonly "INSTANCE": $TransformDamageSerializer


public static "values"(): ($TransformDamageSerializer)[]
public static "valueOf"(arg0: string): $TransformDamageSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $TransformDamage$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TransformDamage$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $TransformDamage<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformDamageSerializer$Type = (("instance")) | ($TransformDamageSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformDamageSerializer_ = $TransformDamageSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$ConditionAnyDamagedSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ConditionAnyDamage, $ConditionAnyDamage$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/type/$ConditionAnyDamage"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ConditionAnyDamagedSerializer extends $Enum<($ConditionAnyDamagedSerializer)> implements $IIngredientConditionSerializer<($ConditionAnyDamage<(any)>)> {
static readonly "INSTANCE": $ConditionAnyDamagedSerializer


public static "values"(): ($ConditionAnyDamagedSerializer)[]
public static "valueOf"(arg0: string): $ConditionAnyDamagedSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $ConditionAnyDamage$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ConditionAnyDamage$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ConditionAnyDamage<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionAnyDamagedSerializer$Type = (("instance")) | ($ConditionAnyDamagedSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionAnyDamagedSerializer_ = $ConditionAnyDamagedSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientConditioned" {
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"
import {$IIngredientWithAmount, $IIngredientWithAmount$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredientWithAmount"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$IIngredientList, $IIngredientList$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientList"
import {$ITooltipFunction, $ITooltipFunction$Type} from "packages/com/blamejared/crafttweaker/api/item/tooltip/$ITooltipFunction"
import {$IIngredientTransformed, $IIngredientTransformed$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/type/$IIngredientTransformed"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"

export class $IIngredientConditioned<T extends $IIngredient> implements $IIngredient {
static readonly "ID": $ResourceLocation

constructor(arg0: T, arg1: $IIngredientCondition$Type<(T)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "matches"(arg0: $IItemStack$Type, arg1: boolean): boolean
public "getCommandString"(): string
public "getItems"(): ($IItemStack)[]
public "getCondition"(): $IIngredientCondition<(T)>
public "asVanillaIngredient"(): $Ingredient
public "getBaseIngredient"(): T
public "isEmpty"(): boolean
public "matches"(arg0: $IItemStack$Type): boolean
public "contains"(arg0: $IIngredient$Type): boolean
public "transform"(arg0: $IIngredientTransformer$Type<($IIngredient$Type)>): $IIngredientTransformed<($IIngredient)>
public "or"(arg0: $IIngredient$Type): $IIngredientList
public "mul"(arg0: integer): $IIngredientWithAmount
public "reuse"(): $IIngredientTransformed<($IIngredient)>
public "asIData"(): $IData
public "setBurnTime"(arg0: integer): void
public "only"(arg0: $IIngredientCondition$Type<($IIngredient$Type)>): $IIngredientConditioned<($IIngredient)>
public "addTooltip"(arg0: $Component$Type): void
public "removeGlobalAttributeModifier"(arg0: $UUID$Type, arg1: ($EquipmentSlot$Type)[]): void
public "removeGlobalAttributeModifier"(arg0: string, arg1: ($EquipmentSlot$Type)[]): void
public "asIIngredientWithAmount"(): $IIngredientWithAmount
public "removeGlobalAttribute"(arg0: $Attribute$Type, arg1: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: double, arg3: $AttributeModifier$Operation$Type, arg4: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: string, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
public "addGlobalAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: string, arg3: double, arg4: $AttributeModifier$Operation$Type, arg5: ($EquipmentSlot$Type)[]): void
public "getRemainingItem"(arg0: $IItemStack$Type): $IItemStack
public "clearTooltip"(arg0: boolean): void
public "modifyTooltip"(arg0: $ITooltipFunction$Type): void
public "addShiftTooltip"(arg0: $Component$Type, arg1: $Component$Type): void
public "modifyShiftTooltip"(arg0: $ITooltipFunction$Type, arg1: $ITooltipFunction$Type): void
public "removeTooltip"(arg0: string): void
public "asMapData"(): $MapData
public "transformReplace"(arg0: $IItemStack$Type): $IIngredientTransformed<($IIngredient)>
public static "fromIngredient"(arg0: $Ingredient$Type): $IIngredient
public "transformDamage"(arg0: integer): $IIngredientTransformed<($IIngredient)>
public "transformCustom"(arg0: string, arg1: $Function$Type<($IItemStack$Type), ($IItemStack$Type)>): $IIngredientTransformed<($IIngredient)>
public "onlyDamaged"(): $IIngredientConditioned<($IIngredient)>
public "onlyDamagedAtLeast"(arg0: integer): $IIngredientConditioned<($IIngredient)>
public "onlyIf"(arg0: string, arg1: $Predicate$Type<($IItemStack$Type)>): $IIngredientConditioned<($IIngredient)>
public "anyDamage"(): $IIngredientConditioned<($IIngredient)>
public "onlyDamagedAtMost"(arg0: integer): $IIngredientConditioned<($IIngredient)>
get "commandString"(): string
get "items"(): ($IItemStack)[]
get "condition"(): $IIngredientCondition<(T)>
get "baseIngredient"(): T
get "empty"(): boolean
set "burnTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientConditioned$Type<T> = ($IIngredientConditioned<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientConditioned_<T> = $IIngredientConditioned$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/impl/script/$ScriptRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ScriptRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: string)

public "getContent"(): string
public "getFileName"(): string
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
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
get "content"(): string
get "fileName"(): string
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
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
export type $ScriptRecipe$Type = ($ScriptRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptRecipe_ = $ScriptRecipe$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$ConditionDamagedSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ConditionDamaged, $ConditionDamaged$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/type/$ConditionDamaged"

export class $ConditionDamagedSerializer extends $Enum<($ConditionDamagedSerializer)> implements $IIngredientConditionSerializer<($ConditionDamaged<(any)>)> {
static readonly "INSTANCE": $ConditionDamagedSerializer


public static "values"(): ($ConditionDamagedSerializer)[]
public static "valueOf"(arg0: string): $ConditionDamagedSerializer
public "getType"(): $ResourceLocation
public "toJson"(arg0: $ConditionDamaged$Type<(any)>): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ConditionDamaged$Type<(any)>): void
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ConditionDamaged<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionDamagedSerializer$Type = (("instance")) | ($ConditionDamagedSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionDamagedSerializer_ = $ConditionDamagedSerializer$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformDamage" {
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"

export class $TransformDamage<T extends $IIngredient> implements $IIngredientTransformer<(T)> {

constructor(arg0: integer)

public "transform"(arg0: $IItemStack$Type): $IItemStack
public "getSerializer"(): $IIngredientTransformerSerializer<(any)>
public "getCommandString"(arg0: T): string
public "getAmount"(): integer
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
get "serializer"(): $IIngredientTransformerSerializer<(any)>
get "amount"(): integer
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformDamage$Type<T> = ($TransformDamage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformDamage_<T> = $TransformDamage$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$StringData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StringTag, $StringTag$Type} from "packages/net/minecraft/nbt/$StringTag"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StringData implements $IData {

constructor(arg0: $StringTag$Type)
constructor(arg0: string)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "cat"(arg0: $IData$Type): $IData
public "copyInternal"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "mod"(arg0: $IData$Type): $IData
public "asList"(): $List<($IData)>
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "sub"(arg0: $IData$Type): $IData
public "getKeys"(): $Set<(string)>
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "neg"(): $IData
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringData$Type = ($StringData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringData_ = $StringData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/bracket/$CommandStringDisplayable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommandStringDisplayable {

 "getCommandString"(): string

(): string
}

export namespace $CommandStringDisplayable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandStringDisplayable$Type = ($CommandStringDisplayable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandStringDisplayable_ = $CommandStringDisplayable$Type;
}}
declare module "packages/com/blamejared/clumps/mixin/$ExperienceOrbAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccess {

 "clumps$getAge"(): integer
 "clumps$setCount"(arg0: integer): void
 "clumps$setAge"(arg0: integer): void
}

export namespace $ExperienceOrbAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceOrbAccess$Type = ($ExperienceOrbAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceOrbAccess_ = $ExperienceOrbAccess$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/type/$CTShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeFunction2D, $RecipeFunction2D$Type} from "packages/com/blamejared/crafttweaker/api/recipe/fun/$RecipeFunction2D"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$MirrorAxis, $MirrorAxis$Type} from "packages/com/blamejared/crafttweaker/api/recipe/$MirrorAxis"

export class $CTShapedRecipe extends $ShapedRecipe {
readonly "width": integer
readonly "height": integer
readonly "result": $ItemStack

constructor(arg0: string, arg1: $IItemStack$Type, arg2: (($IIngredient$Type)[])[], arg3: $MirrorAxis$Type, arg4: $RecipeFunction2D$Type)
constructor(arg0: string, arg1: $CraftingBookCategory$Type, arg2: $IItemStack$Type, arg3: (($IIngredient$Type)[])[], arg4: $MirrorAxis$Type, arg5: $RecipeFunction2D$Type)

public "getFunction"(): $RecipeFunction2D
public "isMirrored"(): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $CraftingContainer$Type, arg1: $Pair$Type<(integer), (integer)>, arg2: (($IIngredient$Type)[])[]): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<($CTShapedRecipe)>
public "getCtOutput"(): $IItemStack
public "getCtIngredients"(): (($IIngredient)[])[]
public "getMirrorAxis"(): $MirrorAxis
get "function"(): $RecipeFunction2D
get "mirrored"(): boolean
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<($CTShapedRecipe)>
get "ctOutput"(): $IItemStack
get "ctIngredients"(): (($IIngredient)[])[]
get "mirrorAxis"(): $MirrorAxis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTShapedRecipe$Type = ($CTShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CTShapedRecipe_ = $CTShapedRecipe$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$DoubleData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$DoubleTag, $DoubleTag$Type} from "packages/net/minecraft/nbt/$DoubleTag"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DoubleData implements $IData {

constructor(arg0: $DoubleTag$Type)
constructor(arg0: double)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "mod"(arg0: $IData$Type): $IData
public "sub"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getInternal"(): $DoubleTag
public "copyInternal"(): $IData
public "neg"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "asList"(): $List<($IData)>
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "not"(): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "internal"(): $DoubleTag
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleData$Type = ($DoubleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleData_ = $DoubleData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/recipe/$AccessSmithingTransformRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessSmithingTransformRecipe {

 "crafttweaker$getAddition"(): $Ingredient
 "crafttweaker$getTemplate"(): $Ingredient
 "crafttweaker$getBase"(): $Ingredient
}

export namespace $AccessSmithingTransformRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessSmithingTransformRecipe$Type = ($AccessSmithingTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessSmithingTransformRecipe_ = $AccessSmithingTransformRecipe$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/type/$CTShapelessRecipe" {
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeFunction1D, $RecipeFunction1D$Type} from "packages/com/blamejared/crafttweaker/api/recipe/fun/$RecipeFunction1D"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"

export class $CTShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: string, arg1: $IItemStack$Type, arg2: ($IIngredient$Type)[], arg3: $RecipeFunction1D$Type)
constructor(arg0: string, arg1: $CraftingBookCategory$Type, arg2: $IItemStack$Type, arg3: ($IIngredient$Type)[], arg4: $RecipeFunction1D$Type)

public "getFunction"(): $RecipeFunction1D
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<($CTShapelessRecipe)>
public "getCtOutput"(): $IItemStack
public "getCtIngredients"(): ($IIngredient)[]
get "function"(): $RecipeFunction1D
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<($CTShapelessRecipe)>
get "ctOutput"(): $IItemStack
get "ctIngredients"(): ($IIngredient)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTShapelessRecipe$Type = ($CTShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CTShapelessRecipe_ = $CTShapelessRecipe$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/transform/type/$TransformReplace" {
import {$IIngredientTransformerSerializer, $IIngredientTransformerSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/serializer/$IIngredientTransformerSerializer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"
import {$IIngredientTransformer, $IIngredientTransformer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/transform/$IIngredientTransformer"

export class $TransformReplace<T extends $IIngredient> implements $IIngredientTransformer<(T)> {

constructor(arg0: $IItemStack$Type)

public "transform"(arg0: $IItemStack$Type): $IItemStack
public "getSerializer"(): $IIngredientTransformerSerializer<(any)>
public "getCommandString"(arg0: T): string
public "getReplaceWith"(): $IItemStack
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
get "serializer"(): $IIngredientTransformerSerializer<(any)>
get "replaceWith"(): $IItemStack
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformReplace$Type<T> = ($TransformReplace<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformReplace_<T> = $TransformReplace$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor" {
import {$ByteData, $ByteData$Type} from "packages/com/blamejared/crafttweaker/api/data/$ByteData"
import {$ByteArrayData, $ByteArrayData$Type} from "packages/com/blamejared/crafttweaker/api/data/$ByteArrayData"
import {$LongArrayData, $LongArrayData$Type} from "packages/com/blamejared/crafttweaker/api/data/$LongArrayData"
import {$StringData, $StringData$Type} from "packages/com/blamejared/crafttweaker/api/data/$StringData"
import {$LongData, $LongData$Type} from "packages/com/blamejared/crafttweaker/api/data/$LongData"
import {$BoolData, $BoolData$Type} from "packages/com/blamejared/crafttweaker/api/data/$BoolData"
import {$IntArrayData, $IntArrayData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IntArrayData"
import {$ListData, $ListData$Type} from "packages/com/blamejared/crafttweaker/api/data/$ListData"
import {$ShortData, $ShortData$Type} from "packages/com/blamejared/crafttweaker/api/data/$ShortData"
import {$IntData, $IntData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IntData"
import {$DoubleData, $DoubleData$Type} from "packages/com/blamejared/crafttweaker/api/data/$DoubleData"
import {$MapData, $MapData$Type} from "packages/com/blamejared/crafttweaker/api/data/$MapData"
import {$FloatData, $FloatData$Type} from "packages/com/blamejared/crafttweaker/api/data/$FloatData"

export interface $DataVisitor<T> {

 "visitByteArray"(arg0: $ByteArrayData$Type): T
 "visitBool"(arg0: $BoolData$Type): T
 "visitLongArray"(arg0: $LongArrayData$Type): T
 "visitMap"(arg0: $MapData$Type): T
 "visitList"(arg0: $ListData$Type): T
 "visitIntArray"(arg0: $IntArrayData$Type): T
 "visitByte"(arg0: $ByteData$Type): T
 "visitFloat"(arg0: $FloatData$Type): T
 "visitLong"(arg0: $LongData$Type): T
 "visitString"(arg0: $StringData$Type): T
 "visitDouble"(arg0: $DoubleData$Type): T
 "visitShort"(arg0: $ShortData$Type): T
 "visitInt"(arg0: $IntData$Type): T
}

export namespace $DataVisitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataVisitor$Type<T> = ($DataVisitor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataVisitor_<T> = $DataVisitor$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/recipe/$MirrorAxis" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MirrorAxis extends $Enum<($MirrorAxis)> {
static readonly "ALL": $MirrorAxis
static readonly "DIAGONAL": $MirrorAxis
static readonly "HORIZONTAL": $MirrorAxis
static readonly "NONE": $MirrorAxis
static readonly "VERTICAL": $MirrorAxis


public static "values"(): ($MirrorAxis)[]
public static "valueOf"(arg0: string): $MirrorAxis
public "isMirrored"(): boolean
public "isHorizontal"(): boolean
public "isVertical"(): boolean
public "isDiagonal"(): boolean
get "mirrored"(): boolean
get "horizontal"(): boolean
get "vertical"(): boolean
get "diagonal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorAxis$Type = (("all") | ("horizontal") | ("vertical") | ("none") | ("diagonal")) | ($MirrorAxis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorAxis_ = $MirrorAxis$Type;
}}
declare module "packages/com/blamejared/crafttweaker/mixin/common/access/entity/$AccessLightningBolt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessLightningBolt {

 "crafttweaker$isVisualOnly"(): boolean

(): boolean
}

export namespace $AccessLightningBolt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessLightningBolt$Type = ($AccessLightningBolt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessLightningBolt_ = $AccessLightningBolt$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$ShortData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ShortTag, $ShortTag$Type} from "packages/net/minecraft/nbt/$ShortTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShortData implements $IData {

constructor(arg0: $ShortTag$Type)
constructor(arg0: short)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "sub"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getInternal"(): $ShortTag
public "copyInternal"(): $IData
public "neg"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "asList"(): $List<($IData)>
public "not"(): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "internal"(): $ShortTag
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShortData$Type = ($ShortData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShortData_ = $ShortData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"

export interface $IIngredientConditionSerializer<T extends $IIngredientCondition<(any)>> {

 "getType"(): $ResourceLocation
 "fromJson"(arg0: $JsonObject$Type): T
 "toJson"(arg0: T): $JsonObject
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromNetwork"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $IIngredientConditionSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientConditionSerializer$Type<T> = ($IIngredientConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientConditionSerializer_<T> = $IIngredientConditionSerializer$Type<(T)>;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$ByteData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$ByteTag, $ByteTag$Type} from "packages/net/minecraft/nbt/$ByteTag"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ByteData implements $IData {

constructor(arg0: $ByteTag$Type)
constructor(arg0: byte)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "sub"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getInternal"(): $ByteTag
public "copyInternal"(): $IData
public "neg"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "asList"(): $List<($IData)>
public "not"(): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "internal"(): $ByteTag
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteData$Type = ($ByteData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteData_ = $ByteData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/data/$LongData" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LongTag, $LongTag$Type} from "packages/net/minecraft/nbt/$LongTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DataVisitor, $DataVisitor$Type} from "packages/com/blamejared/crafttweaker/api/data/visitor/$DataVisitor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$IData, $IData$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData"
import {$IData$Type, $IData$Type$Type} from "packages/com/blamejared/crafttweaker/api/data/$IData$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LongData implements $IData {

constructor(arg0: $LongTag$Type)
constructor(arg0: long)

public "add"(arg0: $IData$Type): $IData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $IData$Type): integer
public "contains"(arg0: $IData$Type): boolean
public "accept"<T>(arg0: $DataVisitor$Type<(T)>): T
public "getType"(): $IData$Type
public "copy"(): $IData
public "mod"(arg0: $IData$Type): $IData
public "or"(arg0: $IData$Type): $IData
public "and"(arg0: $IData$Type): $IData
public "sub"(arg0: $IData$Type): $IData
public "mul"(arg0: $IData$Type): $IData
public "xor"(arg0: $IData$Type): $IData
public "div"(arg0: $IData$Type): $IData
public "getInternal"(): $LongTag
public "copyInternal"(): $IData
public "neg"(): $IData
public "asInt"(): integer
public "equalTo"(arg0: $IData$Type): boolean
public "asDouble"(): double
public "asLong"(): long
public "asFloat"(): float
public "asByte"(): byte
public "asShort"(): short
public "shr"(arg0: $IData$Type): $IData
public "shl"(arg0: $IData$Type): $IData
public "asBool"(): boolean
public "remove"(arg0: integer): void
public "remove"(arg0: string): void
public "put"(arg0: string, arg1: $IData$Type): void
public "length"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($IData)>
public "map"(arg0: $Function$Type<($IData$Type), ($IData$Type)>): $IData
public "merge"(arg0: $IData$Type): $IData
public "getId"(): byte
public "asList"(): $List<($IData)>
public "not"(): $IData
public "getKeys"(): $Set<(string)>
public "cat"(arg0: $IData$Type): $IData
public "getAsString"(): string
public "asByteArray"(): (byte)[]
public "asMap"(): $Map<(string), ($IData)>
public "asString"(): string
public "getAt"(arg0: string): $IData
public "getAt"(arg0: integer): $IData
public static "listOf"(...arg0: ($IData$Type)[]): $IData
public "asIntArray"(): (integer)[]
public "setAt"(arg0: string, arg1: $IData$Type): void
public "asLongArray"(): (long)[]
public "isMappable"(): boolean
public "containsList"(arg0: $List$Type<($IData$Type)>): boolean
public "isListable"(): boolean
public "spliterator"(): $Spliterator<($IData)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$IData>;
get "type"(): $IData$Type
get "internal"(): $LongTag
get "empty"(): boolean
get "id"(): byte
get "keys"(): $Set<(string)>
get "mappable"(): boolean
get "listable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongData$Type = ($LongData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongData_ = $LongData$Type;
}}
declare module "packages/com/blamejared/crafttweaker/api/ingredient/condition/type/$ConditionDamaged" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$IItemStack, $IItemStack$Type} from "packages/com/blamejared/crafttweaker/api/item/$IItemStack"
import {$IIngredientConditionSerializer, $IIngredientConditionSerializer$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/serializer/$IIngredientConditionSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientCondition, $IIngredientCondition$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/condition/$IIngredientCondition"
import {$IIngredient, $IIngredient$Type} from "packages/com/blamejared/crafttweaker/api/ingredient/$IIngredient"

export class $ConditionDamaged<T extends $IIngredient> implements $IIngredientCondition<(T)> {

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "matches"(arg0: $IItemStack$Type): boolean
public "getSerializer"(): $IIngredientConditionSerializer<(any)>
public "getCommandString"(arg0: $IIngredient$Type): string
public "ignoresDamage"(): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getType"(): $ResourceLocation
public "toJson"(): $JsonObject
get "serializer"(): $IIngredientConditionSerializer<(any)>
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionDamaged$Type<T> = ($ConditionDamaged<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionDamaged_<T> = $ConditionDamaged$Type<(T)>;
}}
