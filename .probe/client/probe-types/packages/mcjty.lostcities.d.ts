declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PaletteEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntry, $BlockEntry$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BlockEntry"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $PaletteEntry {
static readonly "CODEC": $Codec<($PaletteEntry)>

constructor()
constructor(arg0: string, arg1: $Optional$Type<(string)>, arg2: $Optional$Type<(string)>, arg3: $Optional$Type<(string)>, arg4: $Optional$Type<($List$Type<($BlockEntry$Type)>)>, arg5: $Optional$Type<(string)>, arg6: $Optional$Type<(string)>, arg7: $Optional$Type<(string)>, arg8: $Optional$Type<(boolean)>, arg9: $Optional$Type<($CompoundTag$Type)>)

public "toString"(): string
public static "block"(arg0: string): $PaletteEntry
public "getTag"(): $CompoundTag
public "getVariant"(): string
public static "variant"(arg0: string): $PaletteEntry
public "getBlock"(): string
public static "blocks"(arg0: $List$Type<($BlockEntry$Type)>): $PaletteEntry
public "getBlocks"(): $List<($BlockEntry)>
public "getDamaged"(): string
public "getMob"(): string
public "getTorch"(): boolean
public "getFrompalette"(): string
public static "frompalette"(arg0: string): $PaletteEntry
public "getLoot"(): string
public "getChr"(): string
get "tag"(): $CompoundTag
get "damaged"(): string
get "mob"(): string
get "torch"(): boolean
get "loot"(): string
get "chr"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteEntry$Type = ($PaletteEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteEntry_ = $PaletteEntry$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BlockEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BlockEntry extends $Record {
static readonly "CODEC": $Codec<($BlockEntry)>

constructor(random: integer, block: string)

public "random"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "block"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntry$Type = ($BlockEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntry_ = $BlockEntry$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PaletteSelector" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $PaletteSelector extends $Record {
static readonly "CODEC": $Codec<($PaletteSelector)>

constructor(factor: float, palette: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factor"(): float
public "palette"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteSelector$Type = ($PaletteSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteSelector_ = $PaletteSelector$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CityBiomeMultiplier" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BiomeMatcher, $BiomeMatcher$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BiomeMatcher"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CityBiomeMultiplier extends $Record {
static readonly "CODEC": $Codec<($CityBiomeMultiplier)>

constructor(multiplier: float, biomeMatcher: $BiomeMatcher$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "multiplier"(): float
public "biomeMatcher"(): $BiomeMatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CityBiomeMultiplier$Type = ($CityBiomeMultiplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CityBiomeMultiplier_ = $CityBiomeMultiplier$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$BuildingPart" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$IBuildingPart, $IBuildingPart$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$IBuildingPart"
import {$BuildingInfo, $BuildingInfo$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo"
import {$Palette, $Palette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BuildingPartRE, $BuildingPartRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$BuildingPartRE"

export class $BuildingPart implements $IBuildingPart, $ILostCityAsset {

constructor(arg0: $BuildingPartRE$Type)

public "getName"(): string
public "get"(arg0: $BuildingInfo$Type, arg1: integer, arg2: integer, arg3: integer): $BlockState
public "getId"(): $ResourceLocation
public "getXSize"(): integer
public "getZSize"(): integer
public "getSlice"(arg0: integer): string
public "getC"(arg0: integer, arg1: integer, arg2: integer): character
public "getMetaFloat"(arg0: string): float
public "getMetaBoolean"(arg0: string): boolean
public "getPaletteChar"(arg0: integer, arg1: integer, arg2: integer): character
public "getMetaString"(arg0: string): string
public "getSliceCount"(): integer
public "getMetaChar"(arg0: string): character
public "getVslices"(): ((character)[])[]
public "getVSlice"(arg0: integer, arg1: integer): (character)[]
public "getMetaInteger"(arg0: string): integer
public "getLocalPalette"(arg0: $CommonLevelAccessor$Type): $Palette
public "getRefPaletteName"(): string
public "getSlices"(): (string)[]
public "init"(arg0: $CommonLevelAccessor$Type): void
get "name"(): string
get "id"(): $ResourceLocation
get "xSize"(): integer
get "zSize"(): integer
get "sliceCount"(): integer
get "vslices"(): ((character)[])[]
get "refPaletteName"(): string
get "slices"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingPart$Type = ($BuildingPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingPart_ = $BuildingPart$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$RailSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RailSettings {
static readonly "CODEC": $Codec<($RailSettings)>

constructor(arg0: $Optional$Type<(string)>)

public "getRailMainBlock"(): character
get "railMainBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailSettings$Type = ($RailSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailSettings_ = $RailSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAsset<T extends $IAsset<(any)>> {

 "setRegistryName"(arg0: $ResourceLocation$Type): T

(arg0: $ResourceLocation$Type): T
}

export namespace $IAsset {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsset$Type<T> = ($IAsset<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsset_<T> = $IAsset$Type<(T)>;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$StreetSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $StreetSettings {
static readonly "CODEC": $Codec<($StreetSettings)>

constructor(arg0: $Optional$Type<(integer)>, arg1: $Optional$Type<(string)>, arg2: $Optional$Type<(string)>, arg3: $Optional$Type<(string)>, arg4: $Optional$Type<(string)>, arg5: $Optional$Type<(string)>)

public "getStreetBaseBlock"(): character
public "getBorderBlock"(): character
public "getStreetBlock"(): character
public "getStreetWidth"(): integer
public "getWallBlock"(): character
public "getStreetVariantBlock"(): character
get "streetBaseBlock"(): character
get "borderBlock"(): character
get "streetBlock"(): character
get "streetWidth"(): integer
get "wallBlock"(): character
get "streetVariantBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreetSettings$Type = ($StreetSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StreetSettings_ = $StreetSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$SphereSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SphereSettings {
static readonly "CODEC": $Codec<($SphereSettings)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<(string)>, arg2: $Optional$Type<(string)>)

public "getSphereBlock"(): character
public "getSphereSideBlock"(): character
public "getSphereGlassBlock"(): character
get "sphereBlock"(): character
get "sphereSideBlock"(): character
get "sphereGlassBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SphereSettings$Type = ($SphereSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SphereSettings_ = $SphereSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$PaletteRE" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$PaletteEntry, $PaletteEntry$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PaletteEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IAsset, $IAsset$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset"

export class $PaletteRE implements $IAsset<($PaletteRE)> {
static readonly "CODEC": $Codec<($PaletteRE)>

constructor(arg0: $List$Type<($PaletteEntry$Type)>)

public "getRegistryName"(): $ResourceLocation
public "getPaletteEntries"(): $List<($PaletteEntry)>
get "registryName"(): $ResourceLocation
get "paletteEntries"(): $List<($PaletteEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteRE$Type = ($PaletteRE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteRE_ = $PaletteRE$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$Building" {
import {$BuildingRE, $BuildingRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$BuildingRE"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$PartRef, $PartRef$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartRef"
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$ConditionContext, $ConditionContext$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$ConditionContext"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Palette, $Palette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ILostCityBuilding, $ILostCityBuilding$Type} from "packages/mcjty/lostcities/api/$ILostCityBuilding"

export class $Building implements $ILostCityBuilding {

constructor(arg0: $BuildingRE$Type)

public "getName"(): string
public "getId"(): $ResourceLocation
public "readParts"(arg0: $List$Type<($Pair$Type<($Predicate$Type<($ConditionContext$Type)>), (string)>)>, arg1: $List$Type<($PartRef$Type)>): void
public "getRandomPart"(arg0: $Random$Type, arg1: $ConditionContext$Type): string
public "getRandomPart2"(arg0: $Random$Type, arg1: $ConditionContext$Type): string
public "getMinFloors"(): integer
public "getLocalPalette"(arg0: $CommonLevelAccessor$Type): $Palette
public "getMinCellars"(): integer
public "getMaxCellars"(): integer
public "getAllowFillers"(): boolean
public "getPrefersLonely"(): float
public "getMaxFloors"(): integer
public "getAllowDoors"(): boolean
public "getFillerBlock"(): character
public "getRubbleBlock"(): character
public "init"(arg0: $CommonLevelAccessor$Type): void
get "name"(): string
get "id"(): $ResourceLocation
get "minFloors"(): integer
get "minCellars"(): integer
get "maxCellars"(): integer
get "allowFillers"(): boolean
get "prefersLonely"(): float
get "maxFloors"(): integer
get "allowDoors"(): boolean
get "fillerBlock"(): character
get "rubbleBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Building$Type = ($Building);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Building_ = $Building$Type;
}}
declare module "packages/mcjty/lostcities/api/$MultiPos" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $MultiPos extends $Record {
static readonly "SINGLE": $MultiPos

constructor(x: integer, z: integer, w: integer, h: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "h"(): integer
public "z"(): integer
public "w"(): integer
public "isSingle"(): boolean
public "isTopLeft"(): boolean
public "isMulti"(): boolean
public "isBottomSide"(): boolean
public "isRightSide"(): boolean
get "single"(): boolean
get "topLeft"(): boolean
get "multi"(): boolean
get "bottomSide"(): boolean
get "rightSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPos$Type = ($MultiPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPos_ = $MultiPos$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$CompiledPalette" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Palette$Info, $Palette$Info$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette$Info"
import {$Palette, $Palette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $CompiledPalette {

constructor(arg0: $CompiledPalette$Type, ...arg1: ($Palette$Type)[])
constructor(...arg0: ($Palette$Type)[])

public "get"(arg0: character, arg1: $Random$Type): $BlockState
public "get"(arg0: character): $BlockState
public "find"(arg0: $BlockState$Type): character
public "isDefined"(arg0: character): boolean
public "getAll"(arg0: character): $Set<($BlockState)>
public "getInfo"(arg0: character): $Palette$Info
public "isSimple"(arg0: character): boolean
public "isMatch"(arg0: character, arg1: $BlockState$Type): boolean
public "getCharacters"(): $Set<(character)>
public "canBeDamagedToIronBars"(arg0: $BlockState$Type): $BlockState
get "characters"(): $Set<(character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledPalette$Type = ($CompiledPalette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompiledPalette_ = $CompiledPalette$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$Explosion" {
import {$ILostExplosion, $ILostExplosion$Type} from "packages/mcjty/lostcities/api/$ILostExplosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Explosion implements $ILostExplosion {

constructor(arg0: integer, arg1: $BlockPos$Type)

public "getCenter"(): $BlockPos
public "getRadius"(): integer
public "getSqradius"(): integer
get "center"(): $BlockPos
get "radius"(): integer
get "sqradius"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Explosion$Type = ($Explosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Explosion_ = $Explosion$Type;
}}
declare module "packages/mcjty/lostcities/api/$LostChunkCharacteristics" {
import {$ILostCityCityStyle, $ILostCityCityStyle$Type} from "packages/mcjty/lostcities/api/$ILostCityCityStyle"
import {$MultiPos, $MultiPos$Type} from "packages/mcjty/lostcities/api/$MultiPos"
import {$ILostCityMultiBuilding, $ILostCityMultiBuilding$Type} from "packages/mcjty/lostcities/api/$ILostCityMultiBuilding"
import {$ILostCityBuilding, $ILostCityBuilding$Type} from "packages/mcjty/lostcities/api/$ILostCityBuilding"

export class $LostChunkCharacteristics {
 "isCity": boolean
 "couldHaveBuilding": boolean
 "multiPos": $MultiPos
 "cityLevel": integer
 "cityStyle": $ILostCityCityStyle
 "multiBuilding": $ILostCityMultiBuilding
 "buildingType": $ILostCityBuilding

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostChunkCharacteristics$Type = ($LostChunkCharacteristics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LostChunkCharacteristics_ = $LostChunkCharacteristics$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CityStyleSelector" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BiomeMatcher, $BiomeMatcher$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BiomeMatcher"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CityStyleSelector extends $Record {
static readonly "CODEC": $Codec<($CityStyleSelector)>

constructor(factor: float, citystyle: string, biomeMatcher: $BiomeMatcher$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factor"(): float
public "biomeMatcher"(): $BiomeMatcher
public "citystyle"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CityStyleSelector$Type = ($CityStyleSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CityStyleSelector_ = $CityStyleSelector$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/$LostCityTerrainFeature" {
import {$ChunkCoord, $ChunkCoord$Type} from "packages/mcjty/lostcities/varia/$ChunkCoord"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$LostCityProfile, $LostCityProfile$Type} from "packages/mcjty/lostcities/config/$LostCityProfile"
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$Statistics, $Statistics$Type} from "packages/mcjty/lostcities/varia/$Statistics"
import {$BuildingInfo, $BuildingInfo$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ChunkHeightmap, $ChunkHeightmap$Type} from "packages/mcjty/lostcities/worldgen/$ChunkHeightmap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BuildingInfo$ConditionTodo, $BuildingInfo$ConditionTodo$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo$ConditionTodo"
import {$WorldGenRegion, $WorldGenRegion$Type} from "packages/net/minecraft/server/level/$WorldGenRegion"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LostCityTerrainFeature {
static readonly "FLOORHEIGHT": integer

constructor(arg0: $IDimensionInfo$Type, arg1: $LostCityProfile$Type, arg2: $RandomSource$Type)

public "generate"(arg0: $WorldGenRegion$Type, arg1: $ChunkAccess$Type): void
public "getHeightmap"(arg0: $ChunkCoord$Type, arg1: $WorldGenLevel$Type): $ChunkHeightmap
public "getStatistics"(): $Statistics
public "generateSpheres"(arg0: $WorldGenRegion$Type, arg1: $ChunkAccess$Type): void
public static "getRandomizedOffset"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public static "createLoot"(arg0: $BuildingInfo$Type, arg1: $RandomSource$Type, arg2: $LevelAccessor$Type, arg3: $BlockPos$Type, arg4: $BuildingInfo$ConditionTodo$Type, arg5: $IDimensionInfo$Type): void
public static "isWaterBiome"(arg0: $IDimensionInfo$Type, arg1: $ChunkCoord$Type): boolean
public static "getHeightOffsetL1"(arg0: integer, arg1: integer): integer
public static "getHeightOffsetL2"(arg0: integer, arg1: integer): integer
public static "createSpawner"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ResourceLocation$Type): void
public static "fastrand128"(): integer
public "setupStates"(arg0: $LostCityProfile$Type): void
public "getMinHeightAt"(arg0: $BuildingInfo$Type, arg1: integer, arg2: integer, arg3: $ChunkHeightmap$Type): integer
public static "getRandomSpawnerMob"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $IDimensionInfo$Type, arg3: $BuildingInfo$Type, arg4: $BuildingInfo$ConditionTodo$Type, arg5: $BlockPos$Type): $ResourceLocation
get "statistics"(): $Statistics
set "upStates"(value: $LostCityProfile$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostCityTerrainFeature$Type = ($LostCityTerrainFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LostCityTerrainFeature_ = $LostCityTerrainFeature$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostCityCityStyle" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILostCityCityStyle extends $ILostCityAsset {

 "getMaxCellarCount"(): integer
 "getMinCellarCount"(): integer
 "getMinFloorCount"(): integer
 "getMaxFloorCount"(): integer
 "getBuildingChance"(): float
 "getGrassBlock"(): character
 "getRailMainBlock"(): character
 "getStreetBaseBlock"(): character
 "getBorderBlock"(): character
 "getStreetBlock"(): character
 "getStreetWidth"(): integer
 "getStyle"(): string
 "getWallBlock"(): character
 "getCorridorGlassBlock"(): character
 "getStreetVariantBlock"(): character
 "getCorridorRoofBlock"(): character
 "getParkElevationBlock"(): character
 "getExplosionChance"(): float
 "getLeavesBlock"(): character
 "getIronbarsBlock"(): character
 "getGlowstoneBlock"(): character
 "getName"(): string
 "init"(arg0: $CommonLevelAccessor$Type): void
 "getId"(): $ResourceLocation
}

export namespace $ILostCityCityStyle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostCityCityStyle$Type = ($ILostCityCityStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostCityCityStyle_ = $ILostCityCityStyle$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostCityInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILostCityInfo {

 "getCityStyle"(): string
 "getCityRadius"(): float
}

export namespace $ILostCityInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostCityInfo$Type = ($ILostCityInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostCityInfo_ = $ILostCityInfo$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$DamageArea" {
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BuildingInfo, $BuildingInfo$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Explosion, $Explosion$Type} from "packages/mcjty/lostcities/worldgen/lost/$Explosion"
import {$CompiledPalette, $CompiledPalette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$CompiledPalette"

export class $DamageArea {
static readonly "BLOCK_DAMAGE_CHANCE": float

constructor(arg0: integer, arg1: integer, arg2: $IDimensionInfo$Type, arg3: $BuildingInfo$Type)

public "getExplosions"(): $List<($Explosion)>
public "getDamage"(arg0: integer, arg1: integer, arg2: integer): float
public "getDamageFactor"(): float
public "isCompletelyDestroyed"(arg0: integer): boolean
public "hasExplosions"(arg0: integer): boolean
public "hasExplosions"(): boolean
public "damageBlock"(arg0: $BlockState$Type, arg1: $IDimensionInfo$Type, arg2: integer, arg3: float, arg4: $CompiledPalette$Type, arg5: $BlockState$Type): $BlockState
public "getHighestExplosionHeight"(): integer
public "getLowestExplosionHeight"(): integer
get "explosions"(): $List<($Explosion)>
get "damageFactor"(): float
get "highestExplosionHeight"(): integer
get "lowestExplosionHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageArea$Type = ($DamageArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageArea_ = $DamageArea$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$RailwayParts" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RailwayParts extends $Record {
static readonly "CODEC": $Codec<($RailwayParts)>
static readonly "DEFAULT": $RailwayParts

constructor(stationUnderground: string, stationOpen: string, stationOpenRoof: string, stationUndergroundStairs: string, stationStaircase: string, stationStaircaseSurface: string, railsHorizontal: string, railsHorizontalEnd: string, railsHorizontalWater: string, railsVertical: string, railsVerticalWater: string, rails3Split: string, railsBend: string, railsFlat: string, railsDown1: string, railsDown2: string)

public "get"(): $Optional<($RailwayParts)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "railsDown1"(): string
public "railsDown2"(): string
public "rails3Split"(): string
public "railsHorizontalEnd"(): string
public "railsHorizontal"(): string
public "stationOpen"(): string
public "railsVertical"(): string
public "railsFlat"(): string
public "stationUnderground"(): string
public "stationStaircase"(): string
public "stationOpenRoof"(): string
public "railsVerticalWater"(): string
public "railsBend"(): string
public "stationStaircaseSurface"(): string
public "railsHorizontalWater"(): string
public "stationUndergroundStairs"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailwayParts$Type = ($RailwayParts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailwayParts_ = $RailwayParts$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo$ConditionTodo" {
import {$BuildingInfo, $BuildingInfo$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo"

export class $BuildingInfo$ConditionTodo {

constructor(arg0: string, arg1: string, arg2: $BuildingInfo$Type)

public "getPart"(): string
public "getCondition"(): string
public "getBuilding"(): string
get "part"(): string
get "condition"(): string
get "building"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingInfo$ConditionTodo$Type = ($BuildingInfo$ConditionTodo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingInfo$ConditionTodo_ = $BuildingInfo$ConditionTodo$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$BuildingRE" {
import {$PartRef, $PartRef$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartRef"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PaletteRE, $PaletteRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$PaletteRE"
import {$IAsset, $IAsset$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset"

export class $BuildingRE implements $IAsset<($BuildingRE)> {
static readonly "CODEC": $Codec<($BuildingRE)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<($PaletteRE$Type)>, arg2: string, arg3: $Optional$Type<(string)>, arg4: $Optional$Type<(integer)>, arg5: $Optional$Type<(integer)>, arg6: $Optional$Type<(integer)>, arg7: $Optional$Type<(integer)>, arg8: $Optional$Type<(boolean)>, arg9: $Optional$Type<(boolean)>, arg10: $Optional$Type<(float)>, arg11: $List$Type<($PartRef$Type)>, arg12: $Optional$Type<($List$Type<($PartRef$Type)>)>)

public "getRegistryName"(): $ResourceLocation
public "getParts"(): $List<($PartRef)>
public "getMinFloors"(): integer
public "getLocalPalette"(): $PaletteRE
public "getMinCellars"(): integer
public "getMaxCellars"(): integer
public "getAllowFillers"(): boolean
public "getParts2"(): $List<($PartRef)>
public "getPrefersLonely"(): float
public "getMaxFloors"(): integer
public "getAllowDoors"(): boolean
public "getFillerBlock"(): character
public "getRefPaletteName"(): string
public "getRubbleBlock"(): character
get "registryName"(): $ResourceLocation
get "parts"(): $List<($PartRef)>
get "minFloors"(): integer
get "localPalette"(): $PaletteRE
get "minCellars"(): integer
get "maxCellars"(): integer
get "allowFillers"(): boolean
get "parts2"(): $List<($PartRef)>
get "prefersLonely"(): float
get "maxFloors"(): integer
get "allowDoors"(): boolean
get "fillerBlock"(): character
get "refPaletteName"(): string
get "rubbleBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingRE$Type = ($BuildingRE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingRE_ = $BuildingRE$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$Railway$RailDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Railway$RailDirection extends $Enum<($Railway$RailDirection)> {
static readonly "BI": $Railway$RailDirection
static readonly "WEST": $Railway$RailDirection
static readonly "EAST": $Railway$RailDirection


public static "values"(): ($Railway$RailDirection)[]
public static "valueOf"(arg0: string): $Railway$RailDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Railway$RailDirection$Type = (("east") | ("bi") | ("west")) | ($Railway$RailDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Railway$RailDirection_ = $Railway$RailDirection$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$IBuildingPart" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$Palette, $Palette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette"

export interface $IBuildingPart {

 "getName"(): string
 "getXSize"(): integer
 "getZSize"(): integer
 "getMetaFloat"(arg0: string): float
 "getMetaBoolean"(arg0: string): boolean
 "getMetaString"(arg0: string): string
 "getSliceCount"(): integer
 "getMetaChar"(arg0: string): character
 "getVslices"(): ((character)[])[]
 "getVSlice"(arg0: integer, arg1: integer): (character)[]
 "getMetaInteger"(arg0: string): integer
 "getLocalPalette"(arg0: $CommonLevelAccessor$Type): $Palette
}

export namespace $IBuildingPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBuildingPart$Type = ($IBuildingPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBuildingPart_ = $IBuildingPart$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings" {
import {$CitySphereSettings$CitySpherePartOrigin, $CitySphereSettings$CitySpherePartOrigin$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings$CitySpherePartOrigin"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$CitySphereSettings$CitySphereCenterType, $CitySphereSettings$CitySphereCenterType$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings$CitySphereCenterType"

export class $CitySphereSettings {
static readonly "CODEC": $Codec<($CitySphereSettings)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<(string)>, arg2: $Optional$Type<(string)>, arg3: $Optional$Type<(integer)>)

public "getCenterpart"(): string
public "getCenterType"(): $CitySphereSettings$CitySphereCenterType
public "getCenterPartOrigin"(): $CitySphereSettings$CitySpherePartOrigin
public "getCenterPartOffset"(): integer
get "centerpart"(): string
get "centerType"(): $CitySphereSettings$CitySphereCenterType
get "centerPartOrigin"(): $CitySphereSettings$CitySpherePartOrigin
get "centerPartOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CitySphereSettings$Type = ($CitySphereSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CitySphereSettings_ = $CitySphereSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette$Info" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Palette$Info extends $Record {

constructor(mobId: string, loot: string, isTorch: boolean, tag: $CompoundTag$Type)

public "isTorch"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tag"(): $CompoundTag
public "isSpecial"(): boolean
public "loot"(): string
public "mobId"(): string
get "torch"(): boolean
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Palette$Info$Type = ($Palette$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Palette$Info_ = $Palette$Info$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$Orientation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/mcjty/lostcities/worldgen/lost/$Direction"

export class $Orientation extends $Enum<($Orientation)> {
static readonly "X": $Orientation
static readonly "Z": $Orientation


public static "values"(): ($Orientation)[]
public static "valueOf"(arg0: string): $Orientation
public "getOpposite"(): $Orientation
public "getMaxDir"(): $Direction
public "getMinDir"(): $Direction
get "opposite"(): $Orientation
get "maxDir"(): $Direction
get "minDir"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Orientation$Type = (("x") | ("z")) | ($Orientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Orientation_ = $Orientation$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$Transform" {
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $Transform extends $Enum<($Transform)> {
static readonly "ROTATE_NONE": $Transform
static readonly "ROTATE_90": $Transform
static readonly "ROTATE_180": $Transform
static readonly "ROTATE_270": $Transform
static readonly "MIRROR_X": $Transform
static readonly "MIRROR_Z": $Transform
static readonly "MIRROR_90_X": $Transform


public static "values"(): ($Transform)[]
public static "valueOf"(arg0: string): $Transform
public "transform"(arg0: $RailShape$Type): $RailShape
public "rotateZ"(arg0: integer, arg1: integer): integer
public "rotateX"(arg0: integer, arg1: integer): integer
public "getOpposite"(): $Transform
public "getMcRotation"(): $Rotation
get "opposite"(): $Transform
get "mcRotation"(): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type = (("mirror_90_x") | ("rotate_none") | ("rotate_270") | ("rotate_180") | ("mirror_x") | ("mirror_z") | ("rotate_90")) | ($Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_ = $Transform$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostSphere" {
import {$ChunkCoord, $ChunkCoord$Type} from "packages/mcjty/lostcities/varia/$ChunkCoord"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILostSphere {

 "isEnabled"(): boolean
 "getCenterPos"(): $BlockPos
 "getCenter"(): $ChunkCoord
 "getRadius"(): float
}

export namespace $ILostSphere {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostSphere$Type = ($ILostSphere);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostSphere_ = $ILostSphere$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$CitySphere" {
import {$ChunkCoord, $ChunkCoord$Type} from "packages/mcjty/lostcities/varia/$ChunkCoord"
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILostSphere, $ILostSphere$Type} from "packages/mcjty/lostcities/api/$ILostSphere"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CitySphere implements $ILostSphere {
static readonly "EMPTY": $CitySphere


public static "initSphere"(arg0: $CitySphere$Type, arg1: $IDimensionInfo$Type): void
public "getGlassBlock"(): $BlockState
public "getSideBlock"(): $BlockState
public "isEnabled"(): boolean
public "getCenterPos"(): $BlockPos
public static "cleanCache"(): void
public static "getRelativeDistanceToCityCenter"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): float
public static "squaredDistance"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): double
public static "getCitySphere"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): $CitySphere
public "setBlocks"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $BlockState$Type): void
public "getCenter"(): $ChunkCoord
public "getRadius"(): float
public "getBaseBlock"(): $BlockState
public static "intersectsWithCitySphere"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "hasVerticalMonorail"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "hasHorizontalMonorail"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "fullyInsideCitySpere"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "isInSphere"(arg0: $ChunkCoord$Type, arg1: $BlockPos$Type, arg2: $IDimensionInfo$Type): boolean
public static "onCitySphereBorder"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "hasMonorailStation"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "isCitySphereCenter"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
get "glassBlock"(): $BlockState
get "sideBlock"(): $BlockState
get "enabled"(): boolean
get "centerPos"(): $BlockPos
get "center"(): $ChunkCoord
get "radius"(): float
get "baseBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CitySphere$Type = ($CitySphere);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CitySphere_ = $CitySphere$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ParkSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ParkSettings {
static readonly "CODEC": $Codec<($ParkSettings)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<(string)>)

public "getGrassBlock"(): character
public "getParkElevationBlock"(): character
get "grassBlock"(): character
get "parkElevationBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParkSettings$Type = ($ParkSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParkSettings_ = $ParkSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$WorldStyleRE" {
import {$ScatteredSettings, $ScatteredSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ScatteredSettings"
import {$ScatteredReference, $ScatteredReference$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ScatteredReference"
import {$CityBiomeMultiplier, $CityBiomeMultiplier$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CityBiomeMultiplier"
import {$PartSelector, $PartSelector$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartSelector"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CityStyleSelector, $CityStyleSelector$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CityStyleSelector"
import {$CitySphereSettings, $CitySphereSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IAsset, $IAsset$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset"

export class $WorldStyleRE implements $IAsset<($WorldStyleRE)> {
static readonly "CODEC": $Codec<($WorldStyleRE)>

constructor(arg0: string, arg1: $Optional$Type<($CitySphereSettings$Type)>, arg2: $Optional$Type<($ScatteredSettings$Type)>, arg3: $Optional$Type<($PartSelector$Type)>, arg4: $List$Type<($CityStyleSelector$Type)>, arg5: $Optional$Type<($List$Type<($CityBiomeMultiplier$Type)>)>, arg6: $Optional$Type<($List$Type<($ScatteredReference$Type)>)>)

public "getRegistryName"(): $ResourceLocation
public "getOutsideStyle"(): string
public "getPartSelector"(): $PartSelector
public "getCityStyleSelectors"(): $List<($CityStyleSelector)>
public "getCityBiomeMultipliers"(): $List<($CityBiomeMultiplier)>
public "getCitysphereSettings"(): $CitySphereSettings
public "getScatteredSettings"(): $ScatteredSettings
public "getScatteredReferences"(): $List<($ScatteredReference)>
get "registryName"(): $ResourceLocation
get "outsideStyle"(): string
get "partSelector"(): $PartSelector
get "cityStyleSelectors"(): $List<($CityStyleSelector)>
get "cityBiomeMultipliers"(): $List<($CityBiomeMultiplier)>
get "citysphereSettings"(): $CitySphereSettings
get "scatteredSettings"(): $ScatteredSettings
get "scatteredReferences"(): $List<($ScatteredReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStyleRE$Type = ($WorldStyleRE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldStyleRE_ = $WorldStyleRE$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ConditionTest" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $ConditionTest {

constructor(arg0: $Optional$Type<(boolean)>, arg1: $Optional$Type<(boolean)>, arg2: $Optional$Type<(boolean)>, arg3: $Optional$Type<(boolean)>, arg4: $Optional$Type<(boolean)>, arg5: $Optional$Type<(integer)>, arg6: $Optional$Type<(integer)>, arg7: $Optional$Type<(integer)>, arg8: $Optional$Type<(string)>, arg9: $Optional$Type<(string)>, arg10: $Optional$Type<(string)>, arg11: $Optional$Type<(string)>)

public "getRange"(): string
public "getTop"(): boolean
public "getChunkz"(): integer
public "getCellar"(): boolean
public "getGround"(): boolean
public "getChunkx"(): integer
public "getIssphere"(): boolean
public "getInbiome"(): string
public "getInpart"(): string
public "getIsbuilding"(): boolean
public "getFloor"(): integer
public "getInbuilding"(): string
get "range"(): string
get "top"(): boolean
get "chunkz"(): integer
get "cellar"(): boolean
get "ground"(): boolean
get "chunkx"(): integer
get "issphere"(): boolean
get "inbiome"(): string
get "inpart"(): string
get "isbuilding"(): boolean
get "floor"(): integer
get "inbuilding"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionTest$Type = ($ConditionTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionTest_ = $ConditionTest$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$WorldStyle" {
import {$ChunkCoord, $ChunkCoord$Type} from "packages/mcjty/lostcities/varia/$ChunkCoord"
import {$ScatteredSettings, $ScatteredSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ScatteredSettings"
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$PartSelector, $PartSelector$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartSelector"
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CitySphereSettings, $CitySphereSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings"
import {$WorldStyleRE, $WorldStyleRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$WorldStyleRE"

export class $WorldStyle implements $ILostCityAsset {

constructor(arg0: $WorldStyleRE$Type)

public "getName"(): string
public "getId"(): $ResourceLocation
public "getCityChanceMultiplier"(arg0: $IDimensionInfo$Type, arg1: $ChunkCoord$Type): float
public "getOutsideStyle"(): string
public "getPartSelector"(): $PartSelector
public "getRandomCityStyle"(arg0: $IDimensionInfo$Type, arg1: $ChunkCoord$Type, arg2: $Random$Type): string
public "getCitysphereSettings"(): $CitySphereSettings
public "getScatteredSettings"(): $ScatteredSettings
public "init"(arg0: $CommonLevelAccessor$Type): void
get "name"(): string
get "id"(): $ResourceLocation
get "outsideStyle"(): string
get "partSelector"(): $PartSelector
get "citysphereSettings"(): $CitySphereSettings
get "scatteredSettings"(): $ScatteredSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStyle$Type = ($WorldStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldStyle_ = $WorldStyle$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartSelector" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$HighwayParts, $HighwayParts$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$HighwayParts"
import {$RailwayParts, $RailwayParts$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$RailwayParts"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MonorailParts, $MonorailParts$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$MonorailParts"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $PartSelector extends $Record {
static readonly "CODEC": $Codec<($PartSelector)>
static readonly "DEFAULT": $PartSelector

constructor(monoRailParts: $MonorailParts$Type, highwayParts: $HighwayParts$Type, railwayParts: $RailwayParts$Type)

public "get"(): $Optional<($PartSelector)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "highwayParts"(): $HighwayParts
public "monoRailParts"(): $MonorailParts
public "railwayParts"(): $RailwayParts
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartSelector$Type = ($PartSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartSelector_ = $PartSelector$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/$LostCitySphereFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $LostCitySphereFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostCitySphereFeature$Type = ($LostCitySphereFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LostCitySphereFeature_ = $LostCitySphereFeature$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo" {
import {$ChunkCoord, $ChunkCoord$Type} from "packages/mcjty/lostcities/varia/$ChunkCoord"
import {$LostChunkCharacteristics, $LostChunkCharacteristics$Type} from "packages/mcjty/lostcities/api/$LostChunkCharacteristics"
import {$ILostExplosion, $ILostExplosion$Type} from "packages/mcjty/lostcities/api/$ILostExplosion"
import {$Direction, $Direction$Type} from "packages/mcjty/lostcities/worldgen/lost/$Direction"
import {$BuildingInfo$StreetType, $BuildingInfo$StreetType$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo$StreetType"
import {$CitySphere, $CitySphere$Type} from "packages/mcjty/lostcities/worldgen/lost/$CitySphere"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Railway$RailChunkInfo, $Railway$RailChunkInfo$Type} from "packages/mcjty/lostcities/worldgen/lost/$Railway$RailChunkInfo"
import {$BuildingPart, $BuildingPart$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$BuildingPart"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CityStyle, $CityStyle$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$CityStyle"
import {$ILostCityMultiBuilding, $ILostCityMultiBuilding$Type} from "packages/mcjty/lostcities/api/$ILostCityMultiBuilding"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Building, $Building$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Building"
import {$LostCityProfile, $LostCityProfile$Type} from "packages/mcjty/lostcities/config/$LostCityProfile"
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$MultiPos, $MultiPos$Type} from "packages/mcjty/lostcities/api/$MultiPos"
import {$DamageArea, $DamageArea$Type} from "packages/mcjty/lostcities/worldgen/lost/$DamageArea"
import {$Style, $Style$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Style"
import {$ILostChunkInfo, $ILostChunkInfo$Type} from "packages/mcjty/lostcities/api/$ILostChunkInfo"
import {$BuildingInfo$MinMax, $BuildingInfo$MinMax$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo$MinMax"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Orientation, $Orientation$Type} from "packages/mcjty/lostcities/worldgen/lost/$Orientation"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$RailChunkType, $RailChunkType$Type} from "packages/mcjty/lostcities/api/$RailChunkType"
import {$ILostCityInfo, $ILostCityInfo$Type} from "packages/mcjty/lostcities/api/$ILostCityInfo"
import {$ILostCityBuilding, $ILostCityBuilding$Type} from "packages/mcjty/lostcities/api/$ILostCityBuilding"
import {$CompiledPalette, $CompiledPalette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$CompiledPalette"
import {$ILostSphere, $ILostSphere$Type} from "packages/mcjty/lostcities/api/$ILostSphere"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BuildingInfo implements $ILostChunkInfo {
readonly "chunkX": integer
readonly "chunkZ": integer
readonly "coord": $ChunkCoord
readonly "provider": $IDimensionInfo
readonly "profile": $LostCityProfile
readonly "minBuildHeight": integer
readonly "maxBuildHeight": integer
readonly "outsideChunk": boolean
 "groundLevel": integer
readonly "waterLevel": integer
readonly "isCity": boolean
 "hasBuilding": boolean
readonly "multiBuildingPos": $MultiPos
readonly "multiBuilding": $ILostCityMultiBuilding
 "buildingType": $ILostCityBuilding
readonly "fountainType": $BuildingPart
readonly "parkType": $BuildingPart
readonly "bridgeType": $BuildingPart
readonly "stairType": $BuildingPart
readonly "frontType": $BuildingPart
readonly "railDungeon": $BuildingPart
readonly "streetType": $BuildingInfo$StreetType
 "cellars": integer
 "floorTypes": ($BuildingPart)[]
 "floorTypes2": ($BuildingPart)[]
readonly "connectionAtX": (boolean)[]
readonly "connectionAtZ": (boolean)[]
readonly "noLoot": boolean
readonly "ruinHeight": float
readonly "highwayXLevel": integer
readonly "highwayZLevel": integer
readonly "cityLevel": integer
readonly "xBridge": boolean
readonly "zBridge": boolean
readonly "xRailCorridor": boolean
readonly "zRailCorridor": boolean
readonly "doorBlock": $Block


public static "cleanCache"(): void
public static "hasBuildingGui"(arg0: integer, arg1: integer, arg2: $IDimensionInfo$Type, arg3: $LostChunkCharacteristics$Type): boolean
public "isTunnel"(arg0: integer): boolean
public static "getChunkCharacteristics"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): $LostChunkCharacteristics
public "getMaxHeight"(): integer
public "getFloorPart2"(arg0: integer): $BuildingPart
public "getNumFloors"(): integer
public "setBuildingType"(arg0: $Building$Type, arg1: integer, arg2: integer, arg3: integer): void
public "getCityGroundLevel"(): integer
public "getExplosions"(): $Collection<($ILostExplosion)>
public "getHighwayXLevel"(): integer
public "getHighwayZLevel"(): integer
public "getDamage"(arg0: integer): float
public "isCity"(): boolean
public static "isCity"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public static "getBuildingInfo"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): $BuildingInfo
public "getOutsideStyle"(): $Style
public "getCityStyle"(): $CityStyle
public static "getProfile"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): $LostCityProfile
public static "getChunkCharacteristicsGui"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): $LostChunkCharacteristics
public "getCompiledPalette"(): $CompiledPalette
public "getBuilding"(): $ILostCityBuilding
public "isOcean"(): boolean
public "getAllowFillers"(): boolean
public "getAllowDoors"(): boolean
public "getFloor"(arg0: integer): $BuildingPart
public "getCityGroundLevelOutsideLower"(): integer
public static "getMultiBuildingRandom"(arg0: integer, arg1: integer, arg2: long): $Random
public "getActualStairDirection"(): $Direction
public "getLowestCityHeightAtChunkCorner"(): integer
public "isElevatedParkSection"(): boolean
public "hasConnectionAtZFromStreet"(arg0: integer): boolean
public "hasConnectionAtXFromStreet"(arg0: integer): boolean
public "hasVerticalMonorail"(): boolean
public "getDesiredMaxHeightL2"(): $BuildingInfo$MinMax
public "canWaterCorridorGoThrough"(): boolean
public "hasHorizontalMonorail"(): boolean
public "getCityHeightForChunk"(): integer
public "getTorchTodo"(): $List<($BlockPos)>
public "clearTorchTodo"(): void
public "addPostTodo"(arg0: $BlockPos$Type, arg1: $Runnable$Type): void
public "getPostTodo"(): $Map<($BlockPos), ($Runnable)>
public "clearPostTodo"(): void
public "getDamageArea"(): $DamageArea
public "addTorchTodo"(arg0: $BlockPos$Type): void
public "getXmax"(): $BuildingInfo
public "getXmin"(): $BuildingInfo
public "getZmax"(): $BuildingInfo
public "getZmin"(): $BuildingInfo
public "getCityLevel"(): integer
public static "getCityLevel"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): integer
public "getMaxHighwayLevel"(): integer
public static "getBuildingRandom"(arg0: integer, arg1: integer, arg2: long): $Random
public "isValidFloor"(arg0: integer): boolean
public static "isCityRaw"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type, arg2: $LostCityProfile$Type): boolean
public "getRailInfo"(): $Railway$RailChunkInfo
public static "isVoidChunk"(arg0: $ChunkCoord$Type, arg1: $IDimensionInfo$Type): boolean
public "hasMonorail"(): boolean
public "isStreetSection"(): boolean
public "hasBridge"(arg0: $IDimensionInfo$Type): boolean
public "hasBridge"(arg0: $IDimensionInfo$Type, arg1: $Orientation$Type): $BuildingPart
public "hasXBridge"(arg0: $IDimensionInfo$Type): $BuildingPart
public "hasZBridge"(arg0: $IDimensionInfo$Type): $BuildingPart
public "hasConnectionAtX"(arg0: integer): boolean
public "canRailGoThrough"(): boolean
public "hasFrontPartFrom"(arg0: $BuildingInfo$Type): boolean
public "hasZCorridor"(): boolean
public "doesRoadExtendTo"(): boolean
public static "hasRoadConnection"(arg0: $BuildingInfo$Type, arg1: $BuildingInfo$Type): boolean
public "hasXCorridor"(): boolean
public "globalToLocal"(arg0: integer): integer
public "hasConnectionAtZ"(arg0: integer): boolean
public "localToGlobal"(arg0: integer): integer
public "hasConnectionAt"(arg0: integer, arg1: $Orientation$Type): boolean
public "updateMinMaxL2"(arg0: $BuildingInfo$MinMax$Type, arg1: integer): void
public static "getSphereInt"(arg0: integer, arg1: integer, arg2: integer, arg3: $IDimensionInfo$Type): $CitySphere
public static "getSphereInt"(arg0: integer, arg1: integer, arg2: $IDimensionInfo$Type): $CitySphere
public "getRailLevel"(): integer
public "getCityInfo"(): $ILostCityInfo
public "getRuinLevel"(): integer
public "getBuildingType"(): string
public "getRailType"(): $RailChunkType
public "getSphere"(): $ILostSphere
public "getNumCellars"(): integer
get "maxHeight"(): integer
get "numFloors"(): integer
get "cityGroundLevel"(): integer
get "explosions"(): $Collection<($ILostExplosion)>
get "highwayXLevel"(): integer
get "highwayZLevel"(): integer
get "city"(): boolean
get "outsideStyle"(): $Style
get "cityStyle"(): $CityStyle
get "compiledPalette"(): $CompiledPalette
get "building"(): $ILostCityBuilding
get "ocean"(): boolean
get "allowFillers"(): boolean
get "allowDoors"(): boolean
get "cityGroundLevelOutsideLower"(): integer
get "actualStairDirection"(): $Direction
get "lowestCityHeightAtChunkCorner"(): integer
get "elevatedParkSection"(): boolean
get "desiredMaxHeightL2"(): $BuildingInfo$MinMax
get "cityHeightForChunk"(): integer
get "torchTodo"(): $List<($BlockPos)>
get "postTodo"(): $Map<($BlockPos), ($Runnable)>
get "damageArea"(): $DamageArea
get "xmax"(): $BuildingInfo
get "xmin"(): $BuildingInfo
get "zmax"(): $BuildingInfo
get "zmin"(): $BuildingInfo
get "cityLevel"(): integer
get "maxHighwayLevel"(): integer
get "railInfo"(): $Railway$RailChunkInfo
get "streetSection"(): boolean
get "railLevel"(): integer
get "cityInfo"(): $ILostCityInfo
get "ruinLevel"(): integer
get "buildingType"(): string
get "railType"(): $RailChunkType
get "sphere"(): $ILostSphere
get "numCellars"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingInfo$Type = ($BuildingInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingInfo_ = $BuildingInfo$Type;
}}
declare module "packages/mcjty/lostcities/varia/$ChunkCoord" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Orientation, $Orientation$Type} from "packages/mcjty/lostcities/worldgen/lost/$Orientation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $ChunkCoord extends $Record {

constructor(dimension: $ResourceKey$Type<($Level$Type)>, chunkX: integer, chunkZ: integer)

public "northWest"(): $ChunkCoord
public "southWest"(): $ChunkCoord
public "northEast"(): $ChunkCoord
public "southEast"(): $ChunkCoord
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "offset"(arg0: integer, arg1: integer): $ChunkCoord
public "lower"(arg0: $Orientation$Type): $ChunkCoord
public "higher"(arg0: $Orientation$Type): $ChunkCoord
public "dimension"(): $ResourceKey<($Level)>
public "chunkX"(): integer
public "chunkZ"(): integer
public "south"(): $ChunkCoord
public "east"(): $ChunkCoord
public "north"(): $ChunkCoord
public "west"(): $ChunkCoord
public "getCoord"(arg0: $Orientation$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkCoord$Type = ($ChunkCoord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkCoord_ = $ChunkCoord$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$Selectors" {
import {$ObjectSelector, $ObjectSelector$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ObjectSelector"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Selectors {
static readonly "CODEC": $Codec<($Selectors)>

constructor(arg0: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg1: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg2: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg3: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg4: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg5: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg6: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>, arg7: $Optional$Type<($List$Type<($ObjectSelector$Type)>)>)

public "getFrontSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getParkSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getStairSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getBridgeSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getMultiBuildingSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getRailDungeonSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getBuildingSelector"(): $Optional<($List<($ObjectSelector)>)>
public "getFountainSelector"(): $Optional<($List<($ObjectSelector)>)>
get "frontSelector"(): $Optional<($List<($ObjectSelector)>)>
get "parkSelector"(): $Optional<($List<($ObjectSelector)>)>
get "stairSelector"(): $Optional<($List<($ObjectSelector)>)>
get "bridgeSelector"(): $Optional<($List<($ObjectSelector)>)>
get "multiBuildingSelector"(): $Optional<($List<($ObjectSelector)>)>
get "railDungeonSelector"(): $Optional<($List<($ObjectSelector)>)>
get "buildingSelector"(): $Optional<($List<($ObjectSelector)>)>
get "fountainSelector"(): $Optional<($List<($ObjectSelector)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Selectors$Type = ($Selectors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Selectors_ = $Selectors$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BiomeMatcher" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BiomeMatcher implements $Predicate<($Holder<($Biome)>)> {
static readonly "CODEC": $Codec<($BiomeMatcher)>
static readonly "ANY": $BiomeMatcher

constructor(arg0: $Optional$Type<($List$Type<($HolderSet$Type<($Biome$Type)>)>)>, arg1: $Optional$Type<($List$Type<($HolderSet$Type<($Biome$Type)>)>)>, arg2: $Optional$Type<($List$Type<($HolderSet$Type<($Biome$Type)>)>)>)

public "test"(arg0: $Holder$Type<($Biome$Type)>): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Holder<($Biome)>)>
public "negate"(): $Predicate<($Holder<($Biome)>)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Holder<($Biome)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($Holder<($Biome)>)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Holder<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeMatcher$Type = ($BiomeMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeMatcher_ = $BiomeMatcher$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$MonorailParts" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $MonorailParts extends $Record {
static readonly "CODEC": $Codec<($MonorailParts)>
static readonly "DEFAULT": $MonorailParts

constructor(both: string, vertical: string, station: string)

public "get"(): $Optional<($MonorailParts)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "both"(): string
public "station"(): string
public "vertical"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonorailParts$Type = ($MonorailParts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonorailParts_ = $MonorailParts$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$GeneralSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $GeneralSettings {
static readonly "CODEC": $Codec<($GeneralSettings)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<(string)>, arg2: $Optional$Type<(string)>, arg3: $Optional$Type<(string)>)

public "getLeavesBlock"(): character
public "getRubbleDirtBlock"(): character
public "getIronbarsBlock"(): character
public "getGlowstoneBlock"(): character
get "leavesBlock"(): character
get "rubbleDirtBlock"(): character
get "ironbarsBlock"(): character
get "glowstoneBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneralSettings$Type = ($GeneralSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneralSettings_ = $GeneralSettings$Type;
}}
declare module "packages/mcjty/lostcities/config/$LostCityProfile" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Configuration, $Configuration$Type} from "packages/mcjty/lostcities/config/$Configuration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ILostCityProfile, $ILostCityProfile$Type} from "packages/mcjty/lostcities/api/$ILostCityProfile"
import {$LandscapeType, $LandscapeType$Type} from "packages/mcjty/lostcities/config/$LandscapeType"

export class $LostCityProfile implements $ILostCityProfile {
static readonly "CATEGORY_LOSTCITY": string
static readonly "CATEGORY_EXPLOSIONS": string
static readonly "CATEGORY_CITIES": string
static readonly "CATEGORY_CITY_SPHERES": string
static readonly "CATEGORY_CLIENT": string
 "DEBRIS_TO_NEARBYCHUNK_FACTOR": integer
 "VINE_CHANCE": float
 "CHANCE_OF_RANDOM_LEAFBLOCKS": float
 "THICKNESS_OF_RANDOM_LEAFBLOCKS": integer
 "AVOID_FOLIAGE": boolean
 "RUBBLELAYER": boolean
 "RUBBLE_DIRT_SCALE": float
 "RUBBLE_LEAVE_SCALE": float
 "RUIN_CHANCE": float
 "RUIN_MINLEVEL_PERCENT": float
 "RUIN_MAXLEVEL_PERCENT": float
 "GROUNDLEVEL": integer
 "SEALEVEL": integer
 "HIGHWAY_REQUIRES_TWO_CITIES": boolean
 "HIGHWAY_LEVEL_FROM_CITIES_MODE": integer
 "HIGHWAY_MAINPERLIN_SCALE": float
 "HIGHWAY_SECONDARYPERLIN_SCALE": float
 "HIGHWAY_PERLIN_FACTOR": float
 "HIGHWAY_DISTANCE_MASK": integer
 "HIGHWAY_SUPPORTS": boolean
 "RAILWAY_DUNGEON_CHANCE": float
 "RAILWAYS_CAN_END": boolean
 "RAILWAYS_ENABLED": boolean
 "RAILWAY_STATIONS_ENABLED": boolean
 "EXPLOSIONS_IN_CITIES_ONLY": boolean
 "EDITMODE": boolean
 "GENERATE_NETHER": boolean
 "GENERATE_SPAWNERS": boolean
 "GENERATE_LOOT": boolean
 "GENERATE_LIGHTING": boolean
 "AVOID_WATER": boolean
 "EXPLOSION_CHANCE": float
 "EXPLOSION_MINRADIUS": integer
 "EXPLOSION_MAXRADIUS": integer
 "EXPLOSION_MINHEIGHT": integer
 "EXPLOSION_MAXHEIGHT": integer
 "MINI_EXPLOSION_CHANCE": float
 "MINI_EXPLOSION_MINRADIUS": integer
 "MINI_EXPLOSION_MAXRADIUS": integer
 "MINI_EXPLOSION_MINHEIGHT": integer
 "MINI_EXPLOSION_MAXHEIGHT": integer
 "CITY_CHANCE": double
 "CITY_MINRADIUS": integer
 "CITY_MAXRADIUS": integer
 "CITY_PERLIN_SCALE": double
 "CITY_PERLIN_INNERSCALE": double
 "CITY_PERLIN_OFFSET": double
 "CITY_THRESHOLD": float
 "CITY_STYLE_THRESHOLD": float
 "CITY_STYLE_ALTERNATIVE": string
 "CITY_AVOID_VOID": boolean
 "CITYSPHERE_FACTOR": float
 "CITYSPHERE_CHANCE": float
 "CITYSPHERE_SURFACE_VARIATION": float
 "CITYSPHERE_OUTSIDE_SURFACE_VARIATION": float
 "CITYSPHERE_MONORAIL_CHANCE": float
 "CITYSPHERE_CLEARABOVE": integer
 "CITYSPHERE_CLEARBELOW": integer
 "CITYSPHERE_CLEARABOVE_UNTIL_AIR": boolean
 "CITYSPHERE_CLEARBELOW_UNTIL_AIR": boolean
 "CITYSPHERE_OUTSIDE_GROUNDLEVEL": integer
 "CITYSPHERE_OUTSIDE_PROFILE": string
 "CITYSPHERE_ONLY_PREDEFINED": boolean
 "CITYSPHERE_MONORAIL_HEIGHT_OFFSET": integer
 "CITY_LEVEL0_HEIGHT": integer
 "CITY_LEVEL1_HEIGHT": integer
 "CITY_LEVEL2_HEIGHT": integer
 "CITY_LEVEL3_HEIGHT": integer
 "OCEAN_CORRECTION_BORDER": integer
 "TERRAIN_FIX_LOWER_MIN_OFFSET": integer
 "TERRAIN_FIX_LOWER_MAX_OFFSET": integer
 "TERRAIN_FIX_UPPER_MIN_OFFSET": integer
 "TERRAIN_FIX_UPPER_MAX_OFFSET": integer
 "CHEST_WITHOUT_LOOT_CHANCE": float
 "BUILDING_WITHOUT_LOOT_CHANCE": float
 "BUILDING_CHANCE": float
 "BUILDING_MINFLOORS": integer
 "BUILDING_MAXFLOORS": integer
 "BUILDING_MINFLOORS_CHANCE": integer
 "BUILDING_MAXFLOORS_CHANCE": integer
 "BUILDING_MINCELLARS": integer
 "BUILDING_MAXCELLARS": integer
 "BUILDING_DOORWAYCHANCE": float
 "BUILDING_FRONTCHANCE": float
 "LIBRARY_CHANCE": float
 "DATACENTER_CHANCE": float
 "PARK_CHANCE": float
 "CORRIDOR_CHANCE": float
 "BRIDGE_CHANCE": float
 "FOUNTAIN_CHANCE": float
 "BUILDING2X2_CHANCE": float
 "MULTI_MAX_X": integer
 "MULTI_MAX_Z": integer
 "BRIDGE_SUPPORTS": boolean
 "PARK_ELEVATION": boolean
 "PARK_BORDER": boolean
 "BEDROCK_LAYER": integer
 "HORIZON": float
 "FOG_RED": float
 "FOG_GREEN": float
 "FOG_BLUE": float
 "FOG_DENSITY": float
 "SPAWN_BIOME": string
 "SPAWN_CITY": string
 "SPAWN_SPHERE": string
 "SPAWN_NOT_IN_BUILDING": boolean
 "FORCE_SPAWN_IN_BUILDING": boolean
 "LANDSCAPE_TYPE": $LandscapeType

constructor(arg0: string, arg1: boolean)
constructor(arg0: string, arg1: string)

public "getName"(): string
public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public "init"(arg0: $Configuration$Type): void
public "isPublic"(): boolean
public "isDefault"(): boolean
public "isSpace"(): boolean
public "isFloating"(): boolean
public "copyFrom"(arg0: $LostCityProfile$Type): void
public "getDescription"(): string
public "setWarning"(arg0: string): void
public "setIconFile"(arg0: string): void
public "toJson"(arg0: boolean): $JsonObject
public "setDescription"(arg0: string): void
public "getIcon"(): $ResourceLocation
public "getCategoryCitySpheres"(): string
public "getExtraDescription"(): string
public "setCityLevelHeights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getCategoryLostcity"(): string
public "setOceanCorrectionBorder"(arg0: integer): void
public "copyFromConfiguration"(arg0: $Configuration$Type): void
public "setWorldStyle"(arg0: string): void
public "setRuinChance"(arg0: float, arg1: float, arg2: float): void
public "setCityChancle"(arg0: double): void
public "isSpheres"(): boolean
public "toConfiguration"(): $Configuration
public "getWorldStyle"(): string
public "isCavern"(): boolean
public "setGroundLevel"(arg0: integer): void
public "getLiquidBlock"(): $BlockState
public "getWarning"(): string
public "getBaseBlock"(): $BlockState
public "setExtraDescription"(arg0: string): void
get "name"(): string
get "public"(): boolean
get "default"(): boolean
get "space"(): boolean
get "floating"(): boolean
get "description"(): string
set "warning"(value: string)
set "iconFile"(value: string)
set "description"(value: string)
get "icon"(): $ResourceLocation
get "categoryCitySpheres"(): string
get "extraDescription"(): string
get "categoryLostcity"(): string
set "oceanCorrectionBorder"(value: integer)
set "worldStyle"(value: string)
set "cityChancle"(value: double)
get "spheres"(): boolean
get "worldStyle"(): string
get "cavern"(): boolean
set "groundLevel"(value: integer)
get "liquidBlock"(): $BlockState
get "warning"(): string
get "baseBlock"(): $BlockState
set "extraDescription"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostCityProfile$Type = ($LostCityProfile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LostCityProfile_ = $LostCityProfile$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo$StreetType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BuildingInfo$StreetType extends $Enum<($BuildingInfo$StreetType)> {
static readonly "NORMAL": $BuildingInfo$StreetType
static readonly "FULL": $BuildingInfo$StreetType
static readonly "PARK": $BuildingInfo$StreetType


public static "values"(): ($BuildingInfo$StreetType)[]
public static "valueOf"(arg0: string): $BuildingInfo$StreetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingInfo$StreetType$Type = (("normal") | ("park") | ("full")) | ($BuildingInfo$StreetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingInfo$StreetType_ = $BuildingInfo$StreetType$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CorridorSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CorridorSettings {
static readonly "CODEC": $Codec<($CorridorSettings)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<(string)>)

public "getCorridorGlassBlock"(): character
public "getCorridorRoofBlock"(): character
get "corridorGlassBlock"(): character
get "corridorRoofBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorridorSettings$Type = ($CorridorSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorridorSettings_ = $CorridorSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette$PE" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Palette$Info, $Palette$Info$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette$Info"

export class $Palette$PE extends $Record {

constructor(blocks: any, info: $Palette$Info$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "info"(): $Palette$Info
public "blocks"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Palette$PE$Type = ($Palette$PE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Palette$PE_ = $Palette$PE$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo$MinMax" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BuildingInfo$MinMax {
 "min": integer
 "max": integer

constructor(arg0: integer, arg1: integer)
constructor(arg0: $BuildingInfo$MinMax$Type)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingInfo$MinMax$Type = ($BuildingInfo$MinMax);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingInfo$MinMax_ = $BuildingInfo$MinMax$Type;
}}
declare module "packages/mcjty/lostcities/config/$Configuration" {
import {$Configuration$Value, $Configuration$Value$Type} from "packages/mcjty/lostcities/config/$Configuration$Value"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $Configuration {

constructor()

public "get"<T>(arg0: string): T
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string): integer
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string): float
public "getDouble"(arg0: string, arg1: string, arg2: double, arg3: double, arg4: double, arg5: string): double
public "getValue"(arg0: string): $Configuration$Value<(any)>
public "set"<T>(arg0: string, arg1: T): void
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): string
public "getCategory"(arg0: string): $Collection<(any)>
public "fromJson"(arg0: $JsonObject$Type): void
public "toJson"(arg0: boolean): $JsonObject
public "hasKey"(arg0: string, arg1: string): boolean
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public "addCustomCategoryComment"(arg0: string, arg1: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Type = ($Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_ = $Configuration$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$Palette$PE, $Palette$PE$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette$PE"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PaletteRE, $PaletteRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$PaletteRE"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Palette implements $ILostCityAsset {

constructor(arg0: string)
constructor(arg0: $PaletteRE$Type)

public "getName"(): string
public "merge"(arg0: $Palette$Type): void
public "getId"(): $ResourceLocation
public "getPalette"(): $Map<(character), ($Palette$PE)>
public "parsePaletteArray"(arg0: $PaletteRE$Type): void
public "getDamaged"(): $Map<($BlockState), ($BlockState)>
public "init"(arg0: $CommonLevelAccessor$Type): void
get "name"(): string
get "id"(): $ResourceLocation
get "palette"(): $Map<(character), ($Palette$PE)>
get "damaged"(): $Map<($BlockState), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Palette$Type = ($Palette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Palette_ = $Palette$Type;
}}
declare module "packages/mcjty/lostcities/config/$Configuration$Value" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $Configuration$Value<T> {

constructor(arg0: string, arg1: T, arg2: T, arg3: T, arg4: $Comparator$Type<(T)>)

public "get"(): T
public "set"(arg0: T): void
public "getComment"(): $Component
public "constrain"(): boolean
get "comment"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Value$Type<T> = ($Configuration$Value<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration$Value_<T> = $Configuration$Value$Type<(T)>;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$CityStyleRE" {
import {$ParkSettings, $ParkSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ParkSettings"
import {$BuildingSettings, $BuildingSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BuildingSettings"
import {$SphereSettings, $SphereSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$SphereSettings"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CorridorSettings, $CorridorSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CorridorSettings"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$StreetSettings, $StreetSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$StreetSettings"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Selectors, $Selectors$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$Selectors"
import {$GeneralSettings, $GeneralSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$GeneralSettings"
import {$RailSettings, $RailSettings$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$RailSettings"
import {$IAsset, $IAsset$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset"

export class $CityStyleRE implements $IAsset<($CityStyleRE)> {
static readonly "CODEC": $Codec<($CityStyleRE)>

constructor(arg0: $Optional$Type<(float)>, arg1: $Optional$Type<(string)>, arg2: $Optional$Type<(string)>, arg3: $Optional$Type<($List$Type<(string)>)>, arg4: $Optional$Type<($GeneralSettings$Type)>, arg5: $Optional$Type<($BuildingSettings$Type)>, arg6: $Optional$Type<($CorridorSettings$Type)>, arg7: $Optional$Type<($ParkSettings$Type)>, arg8: $Optional$Type<($RailSettings$Type)>, arg9: $Optional$Type<($SphereSettings$Type)>, arg10: $Optional$Type<($StreetSettings$Type)>, arg11: $Optional$Type<($Selectors$Type)>)

public "getRegistryName"(): $ResourceLocation
public "getStyle"(): string
public "setRegistryName"(arg0: $ResourceLocation$Type): $CityStyleRE
public "getCorridorSettings"(): $Optional<($CorridorSettings)>
public "getBuildingSettings"(): $Optional<($BuildingSettings)>
public "getSphereSettings"(): $Optional<($SphereSettings)>
public "getParkSettings"(): $Optional<($ParkSettings)>
public "getGeneralSettings"(): $Optional<($GeneralSettings)>
public "getRailSettings"(): $Optional<($RailSettings)>
public "getInherit"(): string
public "getSelectors"(): $Optional<($Selectors)>
public "getStuffTags"(): $List<(string)>
public "getExplosionChance"(): float
public "getStreetSettings"(): $Optional<($StreetSettings)>
get "registryName"(): $ResourceLocation
get "style"(): string
set "registryName"(value: $ResourceLocation$Type)
get "corridorSettings"(): $Optional<($CorridorSettings)>
get "buildingSettings"(): $Optional<($BuildingSettings)>
get "sphereSettings"(): $Optional<($SphereSettings)>
get "parkSettings"(): $Optional<($ParkSettings)>
get "generalSettings"(): $Optional<($GeneralSettings)>
get "railSettings"(): $Optional<($RailSettings)>
get "inherit"(): string
get "selectors"(): $Optional<($Selectors)>
get "stuffTags"(): $List<(string)>
get "explosionChance"(): float
get "streetSettings"(): $Optional<($StreetSettings)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CityStyleRE$Type = ($CityStyleRE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CityStyleRE_ = $CityStyleRE$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostChunkInfo" {
import {$ILostExplosion, $ILostExplosion$Type} from "packages/mcjty/lostcities/api/$ILostExplosion"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RailChunkType, $RailChunkType$Type} from "packages/mcjty/lostcities/api/$RailChunkType"
import {$ILostCityInfo, $ILostCityInfo$Type} from "packages/mcjty/lostcities/api/$ILostCityInfo"
import {$ILostSphere, $ILostSphere$Type} from "packages/mcjty/lostcities/api/$ILostSphere"

export interface $ILostChunkInfo {

 "getNumFloors"(): integer
 "getExplosions"(): $Collection<($ILostExplosion)>
 "getDamage"(arg0: integer): float
 "isCity"(): boolean
 "getCityLevel"(): integer
 "getMaxHighwayLevel"(): integer
 "getRailLevel"(): integer
 "getCityInfo"(): $ILostCityInfo
 "getRuinLevel"(): integer
 "getBuildingType"(): string
 "getRailType"(): $RailChunkType
 "getSphere"(): $ILostSphere
 "getNumCellars"(): integer
}

export namespace $ILostChunkInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostChunkInfo$Type = ($ILostChunkInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostChunkInfo_ = $ILostChunkInfo$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartMeta" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $PartMeta extends $Record {
static readonly "CODEC": $Codec<($PartMeta)>

constructor(key: string, bool: boolean, chr: string, str: string, i: integer, f: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "i"(): integer
public "str"(): string
public "f"(): float
public "key"(): string
public static "create"(arg0: string, arg1: $Optional$Type<(boolean)>, arg2: $Optional$Type<(string)>, arg3: $Optional$Type<(string)>, arg4: $Optional$Type<(integer)>, arg5: $Optional$Type<(float)>): $PartMeta
public "bool"(): boolean
public "chr"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartMeta$Type = ($PartMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartMeta_ = $PartMeta$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartRef" {
import {$ConditionTest, $ConditionTest$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ConditionTest"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $PartRef extends $ConditionTest {
static readonly "CODEC": $Codec<($PartRef)>

constructor(arg0: string, arg1: $Optional$Type<(boolean)>, arg2: $Optional$Type<(boolean)>, arg3: $Optional$Type<(boolean)>, arg4: $Optional$Type<(boolean)>, arg5: $Optional$Type<(boolean)>, arg6: $Optional$Type<(integer)>, arg7: $Optional$Type<(integer)>, arg8: $Optional$Type<(integer)>, arg9: $Optional$Type<(string)>, arg10: $Optional$Type<(string)>, arg11: $Optional$Type<(string)>, arg12: $Optional$Type<(string)>)

public "getPart"(): string
get "part"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartRef$Type = ($PartRef);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartRef_ = $PartRef$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$HighwayParts" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $HighwayParts extends $Record {
static readonly "CODEC": $Codec<($HighwayParts)>
static readonly "DEFAULT": $HighwayParts

constructor(tunnel: string, open: string, bridge: string, tunnelBi: string, openBi: string, bridgeBi: string)

public "get"(): $Optional<($HighwayParts)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "open"(): string
public "open"(arg0: boolean): string
public "bridge"(): string
public "bridge"(arg0: boolean): string
public "openBi"(): string
public "tunnelBi"(): string
public "bridgeBi"(): string
public "tunnel"(): string
public "tunnel"(arg0: boolean): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighwayParts$Type = ($HighwayParts);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighwayParts_ = $HighwayParts$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$CityStyle" {
import {$ILostCityCityStyle, $ILostCityCityStyle$Type} from "packages/mcjty/lostcities/api/$ILostCityCityStyle"
import {$CityStyleRE, $CityStyleRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$CityStyleRE"
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CityStyle implements $ILostCityCityStyle {

constructor(arg0: $CityStyleRE$Type)

public "getName"(): string
public "init"(arg0: $CommonLevelAccessor$Type): void
public "getId"(): $ResourceLocation
public "getRandomRailDungeon"(arg0: $Random$Type): string
public "getRandomMultiBuilding"(arg0: $Random$Type): string
public "getMaxCellarCount"(): integer
public "getMinCellarCount"(): integer
public "getMinFloorCount"(): integer
public "getMaxFloorCount"(): integer
public "getBuildingChance"(): float
public "getGrassBlock"(): character
public "getRailMainBlock"(): character
public "getSphereBlock"(): character
public "getSphereSideBlock"(): character
public "getStreetBaseBlock"(): character
public "getBorderBlock"(): character
public "getStreetBlock"(): character
public "getStreetWidth"(): integer
public "getStyle"(): string
public "getRandomBridge"(arg0: $Random$Type): string
public "getRandomPark"(arg0: $Random$Type): string
public "getRandomFountain"(arg0: $Random$Type): string
public "getRandomStair"(arg0: $Random$Type): string
public "getRandomBuilding"(arg0: $Random$Type): string
public "hasMultiBuildings"(): boolean
public "getRandomFront"(arg0: $Random$Type): string
public "getWallBlock"(): character
public "getCorridorGlassBlock"(): character
public "getStreetVariantBlock"(): character
public "getCorridorRoofBlock"(): character
public "getParkElevationBlock"(): character
public "getSphereGlassBlock"(): character
public "getStuffTags"(): $Set<(string)>
public "getExplosionChance"(): float
public "getLeavesBlock"(): character
public "getRubbleDirtBlock"(): character
public "getIronbarsBlock"(): character
public "getGlowstoneBlock"(): character
get "name"(): string
get "id"(): $ResourceLocation
get "maxCellarCount"(): integer
get "minCellarCount"(): integer
get "minFloorCount"(): integer
get "maxFloorCount"(): integer
get "buildingChance"(): float
get "grassBlock"(): character
get "railMainBlock"(): character
get "sphereBlock"(): character
get "sphereSideBlock"(): character
get "streetBaseBlock"(): character
get "borderBlock"(): character
get "streetBlock"(): character
get "streetWidth"(): integer
get "style"(): string
get "wallBlock"(): character
get "corridorGlassBlock"(): character
get "streetVariantBlock"(): character
get "corridorRoofBlock"(): character
get "parkElevationBlock"(): character
get "sphereGlassBlock"(): character
get "stuffTags"(): $Set<(string)>
get "explosionChance"(): float
get "leavesBlock"(): character
get "rubbleDirtBlock"(): character
get "ironbarsBlock"(): character
get "glowstoneBlock"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CityStyle$Type = ($CityStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CityStyle_ = $CityStyle$Type;
}}
declare module "packages/mcjty/lostcities/api/$RailChunkType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RailChunkType extends $Enum<($RailChunkType)> {
static readonly "NONE": $RailChunkType
static readonly "STATION_SURFACE": $RailChunkType
static readonly "STATION_UNDERGROUND": $RailChunkType
static readonly "STATION_EXTENSION_SURFACE": $RailChunkType
static readonly "STATION_EXTENSION_UNDERGROUND": $RailChunkType
static readonly "GOING_DOWN_TWO_FROM_SURFACE": $RailChunkType
static readonly "GOING_DOWN_ONE_FROM_SURFACE": $RailChunkType
static readonly "GOING_DOWN_FURTHER": $RailChunkType
static readonly "HORIZONTAL": $RailChunkType
static readonly "THREE_SPLIT": $RailChunkType
static readonly "VERTICAL": $RailChunkType
static readonly "DOUBLE_BEND": $RailChunkType
static readonly "RAILS_END_HERE": $RailChunkType


public "isStation"(): boolean
public static "values"(): ($RailChunkType)[]
public static "valueOf"(arg0: string): $RailChunkType
public "isSurface"(): boolean
get "station"(): boolean
get "surface"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailChunkType$Type = (("vertical") | ("rails_end_here") | ("none") | ("double_bend") | ("horizontal") | ("station_underground") | ("going_down_one_from_surface") | ("going_down_further") | ("station_extension_underground") | ("going_down_two_from_surface") | ("three_split") | ("station_surface") | ("station_extension_surface")) | ($RailChunkType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailChunkType_ = $RailChunkType$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/$LostCityFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $LostCityFeature extends $Feature<($NoneFeatureConfiguration)> {
static "globalDimensionInfoDirtyCounter": integer
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public "getDimensionInfo"(arg0: $WorldGenLevel$Type): $IDimensionInfo
public "cleanUp"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostCityFeature$Type = ($LostCityFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LostCityFeature_ = $LostCityFeature$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings$CitySphereCenterType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CitySphereSettings$CitySphereCenterType extends $Enum<($CitySphereSettings$CitySphereCenterType)> {
static readonly "DEFAULT": $CitySphereSettings$CitySphereCenterType
static readonly "STREET": $CitySphereSettings$CitySphereCenterType
static readonly "BUILDING": $CitySphereSettings$CitySphereCenterType
static readonly "NORMAL": $CitySphereSettings$CitySphereCenterType


public static "values"(): ($CitySphereSettings$CitySphereCenterType)[]
public static "valueOf"(arg0: string): $CitySphereSettings$CitySphereCenterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CitySphereSettings$CitySphereCenterType$Type = (("normal") | ("default") | ("street") | ("building")) | ($CitySphereSettings$CitySphereCenterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CitySphereSettings$CitySphereCenterType_ = $CitySphereSettings$CitySphereCenterType$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$Railway$RailChunkInfo" {
import {$Railway$RailDirection, $Railway$RailDirection$Type} from "packages/mcjty/lostcities/worldgen/lost/$Railway$RailDirection"
import {$RailChunkType, $RailChunkType$Type} from "packages/mcjty/lostcities/api/$RailChunkType"

export class $Railway$RailChunkInfo {
static readonly "NOTHING": $Railway$RailChunkInfo

constructor(arg0: $RailChunkType$Type, arg1: $Railway$RailDirection$Type, arg2: integer, arg3: integer)
constructor(arg0: $RailChunkType$Type, arg1: $Railway$RailDirection$Type, arg2: integer, arg3: integer, arg4: string)

public "getType"(): $RailChunkType
public "getLevel"(): integer
public "getRails"(): integer
public "getPart"(): string
public "getDirection"(): $Railway$RailDirection
get "type"(): $RailChunkType
get "level"(): integer
get "rails"(): integer
get "part"(): string
get "direction"(): $Railway$RailDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Railway$RailChunkInfo$Type = ($Railway$RailChunkInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Railway$RailChunkInfo_ = $Railway$RailChunkInfo$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$Style" {
import {$IDimensionInfo, $IDimensionInfo$Type} from "packages/mcjty/lostcities/worldgen/$IDimensionInfo"
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$StyleRE, $StyleRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$StyleRE"
import {$Palette, $Palette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Style implements $ILostCityAsset {

constructor(arg0: $StyleRE$Type)

public "getName"(): string
public "getId"(): $ResourceLocation
public "getRandomPalette"(arg0: $IDimensionInfo$Type, arg1: $Random$Type): $Palette
public "init"(arg0: $CommonLevelAccessor$Type): void
get "name"(): string
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Style$Type = ($Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Style_ = $Style$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostCityMultiBuilding" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILostCityMultiBuilding extends $ILostCityAsset {

 "getDimX"(): integer
 "getDimZ"(): integer
 "getBuilding"(arg0: integer, arg1: integer): string
 "getName"(): string
 "init"(arg0: $CommonLevelAccessor$Type): void
 "getId"(): $ResourceLocation
}

export namespace $ILostCityMultiBuilding {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostCityMultiBuilding$Type = ($ILostCityMultiBuilding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostCityMultiBuilding_ = $ILostCityMultiBuilding$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostCityAsset" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILostCityAsset {

 "getName"(): string
 "init"(arg0: $CommonLevelAccessor$Type): void
 "getId"(): $ResourceLocation
}

export namespace $ILostCityAsset {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostCityAsset$Type = ($ILostCityAsset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostCityAsset_ = $ILostCityAsset$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostCityProfile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILostCityProfile {

 "setDescription"(arg0: string): void
 "setCityLevelHeights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
 "setOceanCorrectionBorder"(arg0: integer): void
 "setWorldStyle"(arg0: string): void
 "setRuinChance"(arg0: float, arg1: float, arg2: float): void
 "setCityChancle"(arg0: double): void
 "setGroundLevel"(arg0: integer): void
}

export namespace $ILostCityProfile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostCityProfile$Type = ($ILostCityProfile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostCityProfile_ = $ILostCityProfile$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ObjectSelector" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ObjectSelector extends $Record {
static readonly "CODEC": $Codec<($ObjectSelector)>

constructor(factor: float, value: string)

public "value"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectSelector$Type = ($ObjectSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectSelector_ = $ObjectSelector$Type;
}}
declare module "packages/mcjty/lostcities/config/$LandscapeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LandscapeType extends $Enum<($LandscapeType)> {
static readonly "DEFAULT": $LandscapeType
static readonly "FLOATING": $LandscapeType
static readonly "SPACE": $LandscapeType
static readonly "CAVERN": $LandscapeType
static readonly "SPHERES": $LandscapeType


public "getName"(): string
public static "values"(): ($LandscapeType)[]
public static "valueOf"(arg0: string): $LandscapeType
public static "getTypeByName"(arg0: string): $LandscapeType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LandscapeType$Type = (("default") | ("spheres") | ("cavern") | ("floating") | ("space")) | ($LandscapeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LandscapeType_ = $LandscapeType$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$StyleRE" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$PaletteSelector, $PaletteSelector$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PaletteSelector"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IAsset, $IAsset$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset"

export class $StyleRE implements $IAsset<($StyleRE)> {
static readonly "CODEC": $Codec<($StyleRE)>

constructor(arg0: $List$Type<($List$Type<($PaletteSelector$Type)>)>)

public "getRegistryName"(): $ResourceLocation
public "getRandomPaletteChoices"(): $List<($List<($PaletteSelector)>)>
get "registryName"(): $ResourceLocation
get "randomPaletteChoices"(): $List<($List<($PaletteSelector)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyleRE$Type = ($StyleRE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyleRE_ = $StyleRE$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/$Direction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Orientation, $Orientation$Type} from "packages/mcjty/lostcities/worldgen/lost/$Orientation"
import {$BuildingInfo, $BuildingInfo$Type} from "packages/mcjty/lostcities/worldgen/lost/$BuildingInfo"
import {$Transform, $Transform$Type} from "packages/mcjty/lostcities/worldgen/lost/$Transform"

export class $Direction extends $Enum<($Direction)> {
static readonly "XMIN": $Direction
static readonly "XMAX": $Direction
static readonly "ZMIN": $Direction
static readonly "ZMAX": $Direction
static readonly "VALUES": ($Direction)[]


public "get"(arg0: $BuildingInfo$Type): $BuildingInfo
public static "values"(): ($Direction)[]
public static "valueOf"(arg0: string): $Direction
public "getRotation"(): $Transform
public "getOpposite"(): $Direction
public "getOrientation"(): $Orientation
public "atSide"(arg0: integer, arg1: integer): boolean
get "rotation"(): $Transform
get "opposite"(): $Direction
get "orientation"(): $Orientation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$Type = (("zmin") | ("xmin") | ("zmax") | ("xmax")) | ($Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Direction_ = $Direction$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/$IDimensionInfo" {
import {$ChunkCoord, $ChunkCoord$Type} from "packages/mcjty/lostcities/varia/$ChunkCoord"
import {$LostCityTerrainFeature, $LostCityTerrainFeature$Type} from "packages/mcjty/lostcities/worldgen/$LostCityTerrainFeature"
import {$LostCityProfile, $LostCityProfile$Type} from "packages/mcjty/lostcities/config/$LostCityProfile"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ChunkHeightmap, $ChunkHeightmap$Type} from "packages/mcjty/lostcities/worldgen/$ChunkHeightmap"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$WorldStyle, $WorldStyle$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$WorldStyle"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IDimensionInfo {

 "getType"(): $ResourceKey<($Level)>
 "getSeed"(): long
 "getRandom"(): $Random
 "dimension"(): $ResourceKey<($Level)>
 "getFeature"(): $LostCityTerrainFeature
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
 "getHeightmap"(arg0: $ChunkCoord$Type): $ChunkHeightmap
 "getHeightmap"(arg0: integer, arg1: integer): $ChunkHeightmap
 "getOutsideProfile"(): $LostCityProfile
 "setWorld"(arg0: $WorldGenLevel$Type): void
 "getProfile"(): $LostCityProfile
 "getWorld"(): $WorldGenLevel
 "getWorldStyle"(): $WorldStyle
}

export namespace $IDimensionInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDimensionInfo$Type = ($IDimensionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDimensionInfo_ = $IDimensionInfo$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BuildingSettings" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BuildingSettings {
static readonly "CODEC": $Codec<($BuildingSettings)>

constructor(arg0: $Optional$Type<(integer)>, arg1: $Optional$Type<(integer)>, arg2: $Optional$Type<(integer)>, arg3: $Optional$Type<(integer)>, arg4: $Optional$Type<(float)>)

public "getMaxCellarCount"(): integer
public "getMinCellarCount"(): integer
public "getMinFloorCount"(): integer
public "getMaxFloorCount"(): integer
public "getBuildingChance"(): float
get "maxCellarCount"(): integer
get "minCellarCount"(): integer
get "minFloorCount"(): integer
get "maxFloorCount"(): integer
get "buildingChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingSettings$Type = ($BuildingSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingSettings_ = $BuildingSettings$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/cityassets/$ConditionContext" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ConditionTest, $ConditionTest$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ConditionTest"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ConditionContext {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: string, arg5: string, arg6: integer, arg7: integer)

public "getLevel"(): integer
public "getBiome"(): $ResourceLocation
public "getPart"(): string
public static "parseTest"(arg0: $JsonElement$Type): $Predicate<($ConditionContext)>
public static "parseTest"(arg0: $ConditionTest$Type): $Predicate<($ConditionContext)>
public "getBuilding"(): string
public "getChunkX"(): integer
public "getChunkZ"(): integer
public "getFloor"(): integer
public "getFloorsAboveGround"(): integer
public "getFloorsBelowGround"(): integer
public "isRange"(arg0: integer, arg1: integer): boolean
public "isSphere"(): boolean
public "isGroundFloor"(): boolean
public "isTopOfBuilding"(): boolean
public "isBuilding"(): boolean
public "isFloor"(arg0: integer): boolean
public "isCellar"(): boolean
get "level"(): integer
get "biome"(): $ResourceLocation
get "part"(): string
get "building"(): string
get "chunkX"(): integer
get "chunkZ"(): integer
get "floor"(): integer
get "floorsAboveGround"(): integer
get "floorsBelowGround"(): integer
get "sphere"(): boolean
get "groundFloor"(): boolean
get "topOfBuilding"(): boolean
get "building"(): boolean
get "cellar"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionContext$Type = ($ConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionContext_ = $ConditionContext$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ScatteredReference" {
import {$BiomeMatcher, $BiomeMatcher$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$BiomeMatcher"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ScatteredReference {
static readonly "CODEC": $Codec<($ScatteredReference)>

constructor(arg0: string, arg1: integer, arg2: $Optional$Type<(boolean)>, arg3: $Optional$Type<($BiomeMatcher$Type)>, arg4: $Optional$Type<(integer)>)

public "getName"(): string
public "getWeight"(): integer
public "isAllowVoid"(): boolean
public "getBiomeMatcher"(): $BiomeMatcher
public "getMaxheightdiff"(): integer
get "name"(): string
get "weight"(): integer
get "allowVoid"(): boolean
get "biomeMatcher"(): $BiomeMatcher
get "maxheightdiff"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScatteredReference$Type = ($ScatteredReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScatteredReference_ = $ScatteredReference$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostExplosion" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILostExplosion {

 "getCenter"(): $BlockPos
 "getRadius"(): integer
}

export namespace $ILostExplosion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostExplosion$Type = ($ILostExplosion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostExplosion_ = $ILostExplosion$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/$BuildingPartRE" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PartMeta, $PartMeta$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$PartMeta"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$PaletteRE, $PaletteRE$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$PaletteRE"
import {$IAsset, $IAsset$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/$IAsset"

export class $BuildingPartRE implements $IAsset<($BuildingPartRE)> {
static readonly "CODEC": $Codec<($BuildingPartRE)>

constructor(arg0: integer, arg1: integer, arg2: $List$Type<($List$Type<(string)>)>, arg3: $Optional$Type<(string)>, arg4: $Optional$Type<($PaletteRE$Type)>, arg5: $Optional$Type<($List$Type<($PartMeta$Type)>)>)

public "getRegistryName"(): $ResourceLocation
public "getLocalPalette"(): $PaletteRE
public "getRefPaletteName"(): string
public "getxSize"(): integer
public "getMetadata"(): $List<($PartMeta)>
public "getzSize"(): integer
public "getSlices"(): (string)[]
get "registryName"(): $ResourceLocation
get "localPalette"(): $PaletteRE
get "refPaletteName"(): string
get "xSize"(): integer
get "metadata"(): $List<($PartMeta)>
get "zSize"(): integer
get "slices"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingPartRE$Type = ($BuildingPartRE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingPartRE_ = $BuildingPartRE$Type;
}}
declare module "packages/mcjty/lostcities/api/$ILostCityBuilding" {
import {$CommonLevelAccessor, $CommonLevelAccessor$Type} from "packages/net/minecraft/world/level/$CommonLevelAccessor"
import {$Palette, $Palette$Type} from "packages/mcjty/lostcities/worldgen/lost/cityassets/$Palette"
import {$ILostCityAsset, $ILostCityAsset$Type} from "packages/mcjty/lostcities/api/$ILostCityAsset"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILostCityBuilding extends $ILostCityAsset {

 "getMinFloors"(): integer
 "getLocalPalette"(arg0: $CommonLevelAccessor$Type): $Palette
 "getMinCellars"(): integer
 "getMaxCellars"(): integer
 "getAllowFillers"(): boolean
 "getPrefersLonely"(): float
 "getMaxFloors"(): integer
 "getAllowDoors"(): boolean
 "getFillerBlock"(): character
 "getRubbleBlock"(): character
 "getName"(): string
 "init"(arg0: $CommonLevelAccessor$Type): void
 "getId"(): $ResourceLocation
}

export namespace $ILostCityBuilding {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILostCityBuilding$Type = ($ILostCityBuilding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILostCityBuilding_ = $ILostCityBuilding$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/$ChunkHeightmap" {
import {$LandscapeType, $LandscapeType$Type} from "packages/mcjty/lostcities/config/$LandscapeType"

export class $ChunkHeightmap {

constructor(arg0: $LandscapeType$Type, arg1: integer)

public "update"(arg0: integer): void
public "getHeight"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHeightmap$Type = ($ChunkHeightmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkHeightmap_ = $ChunkHeightmap$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ScatteredSettings" {
import {$ScatteredReference, $ScatteredReference$Type} from "packages/mcjty/lostcities/worldgen/lost/regassets/data/$ScatteredReference"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ScatteredSettings {
static readonly "CODEC": $Codec<($ScatteredSettings)>

constructor(arg0: integer, arg1: float, arg2: integer, arg3: $List$Type<($ScatteredReference$Type)>)

public "getList"(): $List<($ScatteredReference)>
public "getChance"(): float
public "getAreasize"(): integer
public "getWeightnone"(): integer
public "getTotalweight"(): integer
get "list"(): $List<($ScatteredReference)>
get "chance"(): float
get "areasize"(): integer
get "weightnone"(): integer
get "totalweight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScatteredSettings$Type = ($ScatteredSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScatteredSettings_ = $ScatteredSettings$Type;
}}
declare module "packages/mcjty/lostcities/varia/$Statistics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Statistics {
static readonly "COUNT": integer

constructor()

public "addTime"(arg0: long): void
public "getAverageTime"(): float
public "getMinTime"(): long
public "getMaxTime"(): long
get "averageTime"(): float
get "minTime"(): long
get "maxTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Statistics$Type = ($Statistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Statistics_ = $Statistics$Type;
}}
declare module "packages/mcjty/lostcities/worldgen/lost/regassets/data/$CitySphereSettings$CitySpherePartOrigin" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CitySphereSettings$CitySpherePartOrigin extends $Enum<($CitySphereSettings$CitySpherePartOrigin)> {
static readonly "FIXED": $CitySphereSettings$CitySpherePartOrigin
static readonly "CENTER": $CitySphereSettings$CitySpherePartOrigin
static readonly "FIRSTFLOOR": $CitySphereSettings$CitySpherePartOrigin
static readonly "GROUND": $CitySphereSettings$CitySpherePartOrigin
static readonly "TOP": $CitySphereSettings$CitySpherePartOrigin


public static "values"(): ($CitySphereSettings$CitySpherePartOrigin)[]
public static "valueOf"(arg0: string): $CitySphereSettings$CitySpherePartOrigin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CitySphereSettings$CitySpherePartOrigin$Type = (("top") | ("firstfloor") | ("center") | ("fixed") | ("ground")) | ($CitySphereSettings$CitySpherePartOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CitySphereSettings$CitySpherePartOrigin_ = $CitySphereSettings$CitySpherePartOrigin$Type;
}}
