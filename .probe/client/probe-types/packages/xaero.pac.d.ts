declare module "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI" {
import {$IRegionClaimsAPI, $IRegionClaimsAPI$Type} from "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export interface $IServerRegionClaimsAPI extends $IRegionClaimsAPI {

 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
 "getZ"(): integer
 "getX"(): integer
}

export namespace $IServerRegionClaimsAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerRegionClaimsAPI$Type = ($IServerRegionClaimsAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerRegionClaimsAPI_ = $IServerRegionClaimsAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult" {
import {$ClaimResult$Type, $ClaimResult$Type$Type} from "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export class $ClaimResult<C extends $IPlayerChunkClaimAPI> {

constructor(arg0: C, arg1: $ClaimResult$Type$Type)

public "getResultType"(): $ClaimResult$Type
public "getClaimResult"(): C
get "resultType"(): $ClaimResult$Type
get "claimResult"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$Type<C> = ($ClaimResult<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimResult_<C> = $ClaimResult$Type<(C)>;
}}
declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$IPlayerConfigClientStorageAPI, $IPlayerConfigClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IPlayerConfigOptionClientStorageAPI<T extends $Comparable<(T)>> {

 "getValue"(): T
 "getId"(): string
 "getType"(): $Class<(T)>
 "getComment"(): string
 "getOption"(): $IPlayerConfigOptionSpecAPI<(T)>
 "getValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI<(any)>), (T)>
 "getTooltipPrefix"(): string
 "getTranslation"(): string
 "getTranslationArgs"(): (any)[]
 "isMutable"(): boolean
 "isDefaulted"(): boolean
 "getCommentTranslationArgs"(): (any)[]
 "getCommentTranslation"(): string
}

export namespace $IPlayerConfigOptionClientStorageAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigOptionClientStorageAPI$Type<T> = ($IPlayerConfigOptionClientStorageAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigOptionClientStorageAPI_<T> = $IPlayerConfigOptionClientStorageAPI$Type<(T)>;
}}
declare module "packages/xaero/pac/common/server/core/accessor/$IServerGamePacketListenerImpl" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"

export interface $IServerGamePacketListenerImpl {

 "getXaero_OPAC_connection"(): $Connection

(): $Connection
}

export namespace $IServerGamePacketListenerImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerGamePacketListenerImpl$Type = ($IServerGamePacketListenerImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerGamePacketListenerImpl_ = $IServerGamePacketListenerImpl$Type;
}}
declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI" {
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IClaimsManagerListenerAPI {

 "onWholeRegionChange"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): void
 "onChunkChange"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: $IPlayerChunkClaimAPI$Type): void
 "onDimensionChange"(arg0: $ResourceLocation$Type): void
}

export namespace $IClaimsManagerListenerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerListenerAPI$Type = ($IClaimsManagerListenerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerListenerAPI_ = $IClaimsManagerListenerAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IAdaptiveLocalizerAPI {

 "getFor"(arg0: $ServerPlayer$Type, arg1: string, ...arg2: (any)[]): $MutableComponent
 "getFor"(arg0: $ServerPlayer$Type, arg1: $Component$Type): $Component
}

export namespace $IAdaptiveLocalizerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdaptiveLocalizerAPI$Type = ($IAdaptiveLocalizerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdaptiveLocalizerAPI_ = $IAdaptiveLocalizerAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPartyMemberDynamicInfoSyncableAPI {

 "getY"(): double
 "getDimension"(): $ResourceLocation
 "getZ"(): double
 "getX"(): double
 "getPlayerId"(): $UUID
}

export namespace $IPartyMemberDynamicInfoSyncableAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyMemberDynamicInfoSyncableAPI$Type = ($IPartyMemberDynamicInfoSyncableAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyMemberDynamicInfoSyncableAPI_ = $IPartyMemberDynamicInfoSyncableAPI$Type;
}}
declare module "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IServerPartyAPI, $IServerPartyAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPartyManagerAPI<P extends $IServerPartyAPI<(any), (any), (any)>> {

 "createPartyForOwner"(arg0: $Player$Type): P
 "getAllStream"(): $Stream<(P)>
 "removePartyByOwner"(arg0: $UUID$Type): void
 "removePartyById"(arg0: $UUID$Type): void
 "getPartiesThatAlly"(arg0: $UUID$Type): $Stream<(P)>
 "getPartyByOwner"(arg0: $UUID$Type): P
 "getPartyByMember"(arg0: $UUID$Type): P
 "partyExistsForOwner"(arg0: $UUID$Type): boolean
 "removeParty"(arg0: P): void
 "getPartyById"(arg0: $UUID$Type): P
}

export namespace $IPartyManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyManagerAPI$Type<P> = ($IPartyManagerAPI<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyManagerAPI_<P> = $IPartyManagerAPI$Type<(P)>;
}}
declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPlayerConfigClientStorageAPI, $IPlayerConfigClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import {$IPlayerConfigOptionClientStorageAPI, $IPlayerConfigOptionClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigOptionClientStorageAPI"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<(T)>> extends $IPlayerConfigOptionClientStorageAPI<(T)> {

 "getValue"(): T
 "getId"(): string
 "getType"(): $Class<(T)>
 "getComment"(): string
 "getOption"(): $IPlayerConfigOptionSpecAPI<(T)>
 "getValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI<(any)>), (T)>
 "getTooltipPrefix"(): string
 "getTranslation"(): string
 "isMutable"(): boolean
 "isDefaulted"(): boolean
 "getStringValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI<(any)>), (string)>
 "getCommandInputParser"(): $Function<(string), (T)>
 "getCommandOutputWriterCast"(): $Function<(any), ($Component)>
 "getTranslationArgs"(): (any)[]
 "getCommentTranslationArgs"(): (any)[]
 "getCommentTranslation"(): string
}

export namespace $IPlayerConfigStringableOptionClientStorageAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigStringableOptionClientStorageAPI$Type<T> = ($IPlayerConfigStringableOptionClientStorageAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigStringableOptionClientStorageAPI_<T> = $IPlayerConfigStringableOptionClientStorageAPI$Type<(T)>;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IPlayerChunkClaimAPI {

 "getSubConfigIndex"(): integer
 "isForceloadable"(): boolean
 "getPlayerId"(): $UUID
 "isSameClaimType"(arg0: $IPlayerChunkClaimAPI$Type): boolean
}

export namespace $IPlayerChunkClaimAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerChunkClaimAPI$Type = ($IPlayerChunkClaimAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerChunkClaimAPI_ = $IPlayerChunkClaimAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/member/$PartyMemberRank" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $PartyMemberRank extends $Enum<($PartyMemberRank)> {
static readonly "MEMBER": $PartyMemberRank
static readonly "MODERATOR": $PartyMemberRank
static readonly "ADMIN": $PartyMemberRank


public static "values"(): ($PartyMemberRank)[]
public static "valueOf"(arg0: string): $PartyMemberRank
public "getColor"(): $ChatFormatting
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartyMemberRank$Type = (("moderator") | ("member") | ("admin")) | ($PartyMemberRank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartyMemberRank_ = $PartyMemberRank$Type;
}}
declare module "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI" {
import {$IRegionClaimsAPI, $IRegionClaimsAPI$Type} from "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IDimensionClaimsManagerAPI<WRC extends $IRegionClaimsAPI> {

 "getCount"(): integer
 "getRegion"(arg0: integer, arg1: integer): WRC
 "getDimension"(): $ResourceLocation
 "getRegionStream"(): $Stream<(WRC)>
}

export namespace $IDimensionClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDimensionClaimsManagerAPI$Type<WRC> = ($IDimensionClaimsManagerAPI<(WRC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDimensionClaimsManagerAPI_<WRC> = $IDimensionClaimsManagerAPI$Type<(WRC)>;
}}
declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI" {
import {$IClaimsManagerListenerAPI, $IClaimsManagerListenerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"

export interface $IClaimsManagerTrackerRegisterAPI {

 "register"(arg0: $IClaimsManagerListenerAPI$Type): void

(arg0: $IClaimsManagerListenerAPI$Type): void
}

export namespace $IClaimsManagerTrackerRegisterAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerTrackerRegisterAPI$Type = ($IClaimsManagerTrackerRegisterAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerTrackerRegisterAPI_ = $IClaimsManagerTrackerRegisterAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IPlayerConfigAPI$SetResult, $IPlayerConfigAPI$SetResult$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult"
import {$PlayerConfigType, $PlayerConfigType$Type} from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPlayerConfigAPI {

 "getType"(): $PlayerConfigType
 "getFromEffectiveConfig"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "getUsedServerSubConfig"(): $IPlayerConfigAPI
 "createSubConfig"(arg0: string): $IPlayerConfigAPI
 "getRaw"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "subConfigExists"(arg0: integer): boolean
 "subConfigExists"(arg0: string): boolean
 "getSubConfigLimit"(): integer
 "getSubCount"(): integer
 "tryToSet"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>, arg1: T): $IPlayerConfigAPI$SetResult
 "getSubId"(): string
 "getSubIndex"(): integer
 "getPlayerId"(): $UUID
 "getSubConfig"(arg0: string): $IPlayerConfigAPI
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigAPI)>
 "isOptionAllowed"(arg0: $IPlayerConfigOptionSpecAPI$Type<(any)>): boolean
 "tryToReset"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): $IPlayerConfigAPI$SetResult
 "getDefaultRawValue"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "getUsedSubConfig"(): $IPlayerConfigAPI
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(string)>
 "getEffective"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): T
 "getEffectiveSubConfig"(arg0: integer): $IPlayerConfigAPI
 "getEffectiveSubConfig"(arg0: string): $IPlayerConfigAPI
}

export namespace $IPlayerConfigAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigAPI$Type = ($IPlayerConfigAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigAPI_ = $IPlayerConfigAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ClaimResult$Type extends $Enum<($ClaimResult$Type)> {
static readonly "ALREADY_FORCELOADABLE": $ClaimResult$Type
static readonly "ALREADY_UNFORCELOADED": $ClaimResult$Type
static readonly "CLAIMS_ARE_DISABLED": $ClaimResult$Type
static readonly "TOO_MANY_CHUNKS": $ClaimResult$Type
static readonly "UNCLAIMABLE_DIMENSION": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER_FORCELOAD": $ClaimResult$Type
static readonly "NOT_CLAIMED_BY_USER": $ClaimResult$Type
static readonly "ALREADY_CLAIMED": $ClaimResult$Type
static readonly "FORCELOAD_LIMIT_REACHED": $ClaimResult$Type
static readonly "CLAIM_LIMIT_REACHED": $ClaimResult$Type
static readonly "TOO_FAR": $ClaimResult$Type
static readonly "REPLACEMENT_IN_PROGRESS": $ClaimResult$Type
static readonly "NO_SERVER_PERMISSION": $ClaimResult$Type
static readonly "SUCCESSFUL_UNFORCELOAD": $ClaimResult$Type
static readonly "SUCCESSFUL_UNCLAIM": $ClaimResult$Type
static readonly "SUCCESSFUL_FORCELOAD": $ClaimResult$Type
static readonly "SUCCESSFUL_CLAIM": $ClaimResult$Type
readonly "message": $Component
readonly "success": boolean
readonly "fail": boolean


public static "values"(): ($ClaimResult$Type)[]
public static "valueOf"(arg0: string): $ClaimResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$Type$Type = (("already_forceloadable") | ("forceload_limit_reached") | ("successful_forceload") | ("no_server_permission") | ("successful_claim") | ("too_far") | ("not_claimed_by_user") | ("already_claimed") | ("claims_are_disabled") | ("too_many_chunks") | ("successful_unclaim") | ("replacement_in_progress") | ("already_unforceloaded") | ("successful_unforceload") | ("not_claimed_by_user_forceload") | ("unclaimable_dimension") | ("claim_limit_reached")) | ($ClaimResult$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimResult$Type_ = $ClaimResult$Type$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PlayerConfigType, $PlayerConfigType$Type} from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import {$IPlayerConfigClientStorageAPI, $IPlayerConfigClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"

export interface $IPlayerConfigOptionSpecAPI<T extends $Comparable<(T)>> {

 "getId"(): string
 "getType"(): $Class<(T)>
 "getDefaultValue"(): T
 "getPath"(): $List<(string)>
 "getComment"(): string
 "getServerSideValidator"(): $BiPredicate<($IPlayerConfigAPI), (T)>
 "getConfigTypeFilter"(): $Predicate<($PlayerConfigType)>
 "getTooltipPrefix"(): string
 "getTranslation"(): string
 "getTranslationArgs"(): (string)[]
 "getShortenedId"(): string
 "getCommentTranslationArgs"(): (string)[]
 "getCommentTranslation"(): string
 "getCommandOutputWriter"(): $Function<(T), ($Component)>
 "getCommandInputParser"(): $Function<(string), (T)>
 "getClientSideValidator"(): $BiPredicate<($IPlayerConfigClientStorageAPI<(any)>), (T)>
}

export namespace $IPlayerConfigOptionSpecAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigOptionSpecAPI$Type<T> = ($IPlayerConfigOptionSpecAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigOptionSpecAPI_<T> = $IPlayerConfigOptionSpecAPI$Type<(T)>;
}}
declare module "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerPlayerDataAPI {

constructor()

public static "from"(arg0: $ServerPlayer$Type): $ServerPlayerDataAPI
public "isClaimsNonallyMode"(): boolean
public "isClaimsServerMode"(): boolean
public "isClaimsAdminMode"(): boolean
get "claimsNonallyMode"(): boolean
get "claimsServerMode"(): boolean
get "claimsAdminMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerDataAPI$Type = ($ServerPlayerDataAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerDataAPI_ = $ServerPlayerDataAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI" {
import {$IPlayerClaimPosListAPI, $IPlayerClaimPosListAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPlayerDimensionClaimsAPI<L extends $IPlayerClaimPosListAPI> {

 "getStream"(): $Stream<(L)>

(): $Stream<(L)>
}

export namespace $IPlayerDimensionClaimsAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerDimensionClaimsAPI$Type<L> = ($IPlayerDimensionClaimsAPI<(L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerDimensionClaimsAPI_<L> = $IPlayerDimensionClaimsAPI$Type<(L)>;
}}
declare module "packages/xaero/pac/common/claims/api/$IRegionClaimsAPI" {
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"

export interface $IRegionClaimsAPI {

 "get"(arg0: integer, arg1: integer): $IPlayerChunkClaimAPI
 "getZ"(): integer
 "getX"(): integer
}

export namespace $IRegionClaimsAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegionClaimsAPI$Type = ($IRegionClaimsAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegionClaimsAPI_ = $IRegionClaimsAPI$Type;
}}
declare module "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI" {
import {$IPlayerDimensionClaimsAPI, $IPlayerDimensionClaimsAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerClaimInfoAPI, $IPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IServerPlayerClaimInfoAPI<DC extends $IPlayerDimensionClaimsAPI<(any)>> extends $IPlayerClaimInfoAPI<(DC)> {

 "getStream"(): $Stream<($Map$Entry<($ResourceLocation), (DC)>)>
 "getDimension"(arg0: $ResourceLocation$Type): DC
 "getPlayerId"(): $UUID
 "getClaimCount"(): integer
 "getClaimsColor"(arg0: integer): integer
 "getClaimsColor"(arg0: string): integer
 "getClaimsColor"(): integer
 "getForceloadCount"(): integer
 "getClaimsName"(arg0: integer): string
 "getClaimsName"(): string
 "getClaimsName"(arg0: string): string
 "getPlayerUsername"(): string
}

export namespace $IServerPlayerClaimInfoAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayerClaimInfoAPI$Type<DC> = ($IServerPlayerClaimInfoAPI<(DC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayerClaimInfoAPI_<DC> = $IServerPlayerClaimInfoAPI$Type<(DC)>;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IPlayerClaimPosListAPI {

 "getCount"(): integer
 "getStream"(): $Stream<($ChunkPos)>
 "getClaimState"(): $IPlayerChunkClaimAPI
}

export namespace $IPlayerClaimPosListAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerClaimPosListAPI$Type = ($IPlayerClaimPosListAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerClaimPosListAPI_ = $IPlayerClaimPosListAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartyMemberRank, $PartyMemberRank$Type} from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export interface $IPartyMemberAPI extends $IPartyPlayerInfoAPI {

 "getUsername"(): string
 "getRank"(): $PartyMemberRank
 "isOwner"(): boolean
 "getUUID"(): $UUID
}

export namespace $IPartyMemberAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyMemberAPI$Type = ($IPartyMemberAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyMemberAPI_ = $IPartyMemberAPI$Type;
}}
declare module "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IPartyPlayerInfoAPI {

 "getUsername"(): string
 "getUUID"(): $UUID
}

export namespace $IPartyPlayerInfoAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyPlayerInfoAPI$Type = ($IPartyPlayerInfoAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyPlayerInfoAPI_ = $IPartyPlayerInfoAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/data/$IOpenPACServerPlayer" {
import {$ServerPlayerDataAPI, $ServerPlayerDataAPI$Type} from "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI"

export interface $IOpenPACServerPlayer {

 "setXaero_OPAC_PlayerData"(arg0: $ServerPlayerDataAPI$Type): void
 "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
}

export namespace $IOpenPACServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenPACServerPlayer$Type = ($IOpenPACServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpenPACServerPlayer_ = $IOpenPACServerPlayer$Type;
}}
declare module "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IDimensionClaimsManagerAPI, $IDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$IPlayerClaimInfoAPI, $IPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClaimsManagerTrackerAPI, $IClaimsManagerTrackerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI"

export interface $IClaimsManagerAPI<PCI extends $IPlayerClaimInfoAPI<(any)>, WCM extends $IDimensionClaimsManagerAPI<(any)>> {

 "get"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type): $IPlayerChunkClaimAPI
 "get"(arg0: $ResourceLocation$Type, arg1: $ChunkPos$Type): $IPlayerChunkClaimAPI
 "getDimensionStream"(): $Stream<(WCM)>
 "hasPlayerInfo"(arg0: $UUID$Type): boolean
 "getDimension"(arg0: $ResourceLocation$Type): WCM
 "getTracker"(): $IClaimsManagerTrackerAPI
 "getPlayerInfo"(arg0: $UUID$Type): PCI
 "getPlayerInfoStream"(): $Stream<(PCI)>
}

export namespace $IClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerAPI$Type<PCI, WCM> = ($IClaimsManagerAPI<(PCI), (WCM)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerAPI_<PCI, WCM> = $IClaimsManagerAPI$Type<(PCI), (WCM)>;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI$SetResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IPlayerConfigAPI$SetResult extends $Enum<($IPlayerConfigAPI$SetResult)> {
static readonly "INVALID": $IPlayerConfigAPI$SetResult
static readonly "ILLEGAL_OPTION": $IPlayerConfigAPI$SetResult
static readonly "DEFAULTED": $IPlayerConfigAPI$SetResult
static readonly "SUCCESS": $IPlayerConfigAPI$SetResult


public static "values"(): ($IPlayerConfigAPI$SetResult)[]
public static "valueOf"(arg0: string): $IPlayerConfigAPI$SetResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigAPI$SetResult$Type = (("illegal_option") | ("success") | ("defaulted") | ("invalid")) | ($IPlayerConfigAPI$SetResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigAPI$SetResult_ = $IPlayerConfigAPI$SetResult$Type;
}}
declare module "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IPartyAllyAPI {

 "getPartyId"(): $UUID

(): $UUID
}

export namespace $IPartyAllyAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyAllyAPI$Type = ($IPartyAllyAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyAllyAPI_ = $IPartyAllyAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/player/api/$IPlayerClaimInfoAPI" {
import {$IPlayerDimensionClaimsAPI, $IPlayerDimensionClaimsAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IPlayerClaimInfoAPI<DC extends $IPlayerDimensionClaimsAPI<(any)>> {

 "getStream"(): $Stream<($Map$Entry<($ResourceLocation), (DC)>)>
 "getDimension"(arg0: $ResourceLocation$Type): DC
 "getPlayerId"(): $UUID
 "getClaimCount"(): integer
 "getClaimsColor"(): integer
 "getClaimsColor"(arg0: integer): integer
 "getForceloadCount"(): integer
 "getClaimsName"(): string
 "getClaimsName"(arg0: integer): string
 "getPlayerUsername"(): string
}

export namespace $IPlayerClaimInfoAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerClaimInfoAPI$Type<DC> = ($IPlayerClaimInfoAPI<(DC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerClaimInfoAPI_<DC> = $IPlayerClaimInfoAPI$Type<(DC)>;
}}
declare module "packages/xaero/pac/client/player/config/api/$IPlayerConfigClientStorageAPI" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlayerConfigType, $PlayerConfigType$Type} from "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPlayerConfigStringableOptionClientStorageAPI, $IPlayerConfigStringableOptionClientStorageAPI$Type} from "packages/xaero/pac/client/player/config/api/$IPlayerConfigStringableOptionClientStorageAPI"

export interface $IPlayerConfigClientStorageAPI<OS extends $IPlayerConfigStringableOptionClientStorageAPI<(any)>> {

 "getOwner"(): $UUID
 "getType"(): $PlayerConfigType
 "subConfigExists"(arg0: string): boolean
 "getSubConfigLimit"(): integer
 "getSubCount"(): integer
 "getOptionStorage"<T extends $Comparable<(T)>>(arg0: $IPlayerConfigOptionSpecAPI$Type<(T)>): OS
 "getSubConfig"(arg0: string): $IPlayerConfigClientStorageAPI<(OS)>
 "getSubConfigAPIStream"(): $Stream<($IPlayerConfigClientStorageAPI<(OS)>)>
 "optionStream"(): $Stream<(OS)>
 "isBeingDeleted"(): boolean
 "getSubConfigIds"(): $List<(string)>
 "getEffectiveSubConfig"(arg0: string): $IPlayerConfigClientStorageAPI<(OS)>
}

export namespace $IPlayerConfigClientStorageAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigClientStorageAPI$Type<OS> = ($IPlayerConfigClientStorageAPI<(OS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigClientStorageAPI_<OS> = $IPlayerConfigClientStorageAPI$Type<(OS)>;
}}
declare module "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartyMemberRank, $PartyMemberRank$Type} from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import {$IPartyAllyAPI, $IPartyAllyAPI$Type} from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPartyMemberAPI, $IPartyMemberAPI$Type} from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"
import {$IPartyAPI, $IPartyAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyAPI"

export interface $IServerPartyAPI<M extends $IPartyMemberAPI, I extends $IPartyPlayerInfoAPI, A extends $IPartyAllyAPI> extends $IPartyAPI<(M), (I), (A)> {

 "getOwner"(): M
 "getId"(): $UUID
 "getOnlineMemberStream"(): $Stream<($ServerPlayer)>
 "getDefaultName"(): string
 "removeMember"(arg0: $UUID$Type): M
 "addMember"(arg0: $UUID$Type, arg1: $PartyMemberRank$Type, arg2: string): M
 "setRank"(arg0: M, arg1: $PartyMemberRank$Type): boolean
 "addAllyParty"(arg0: $UUID$Type): void
 "getMemberInfo"(arg0: $UUID$Type): M
 "getMemberInfo"(arg0: string): M
 "isAlly"(arg0: $UUID$Type): boolean
 "getStaffInfoStream"(): $Stream<(M)>
 "getInviteCount"(): integer
 "getMemberCount"(): integer
 "removeAllyParty"(arg0: $UUID$Type): void
 "getAllyCount"(): integer
 "uninvitePlayer"(arg0: $UUID$Type): I
 "isInvited"(arg0: $UUID$Type): boolean
 "invitePlayer"(arg0: $UUID$Type, arg1: string): I
 "getMemberInfoStream"(): $Stream<(M)>
 "getAllyPartiesStream"(): $Stream<(A)>
 "getNonStaffInfoStream"(): $Stream<(M)>
 "getInvitedPlayersStream"(): $Stream<(I)>
}

export namespace $IServerPartyAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPartyAPI$Type<M, I, A> = ($IServerPartyAPI<(M), (I), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPartyAPI_<M, I, A> = $IServerPartyAPI$Type<(M), (I), (A)>;
}}
declare module "packages/xaero/pac/common/claims/result/api/$AreaClaimResult" {
import {$ClaimResult$Type, $ClaimResult$Type$Type} from "packages/xaero/pac/common/claims/result/api/$ClaimResult$Type"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $AreaClaimResult {

constructor(arg0: $Set$Type<($ClaimResult$Type$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "getSize"(): integer
public "getBottom"(): integer
public "getLeft"(): integer
public "getRight"(): integer
public "getTop"(): integer
public "getResultTypesIterable"(): $Iterable<($ClaimResult$Type)>
public "getResultTypesStream"(): $Stream<($ClaimResult$Type)>
get "size"(): integer
get "bottom"(): integer
get "left"(): integer
get "right"(): integer
get "top"(): integer
get "resultTypesIterable"(): $Iterable<($ClaimResult$Type)>
get "resultTypesStream"(): $Stream<($ClaimResult$Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaClaimResult$Type = ($AreaClaimResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AreaClaimResult_ = $AreaClaimResult$Type;
}}
declare module "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IChunkProtectionAPI {

 "hasChunkAccess"(arg0: $IPlayerConfigAPI$Type, arg1: $UUID$Type): boolean
 "hasChunkAccess"(arg0: $IPlayerConfigAPI$Type, arg1: $Entity$Type): boolean
 "getClaimConfig"(arg0: $IPlayerChunkClaimAPI$Type): $IPlayerConfigAPI
 "onItemPickup"(arg0: $Entity$Type, arg1: $ItemEntity$Type): boolean
 "onProjectileHitSpawnedEntity"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
 "onEntityInteraction"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $Entity$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type, arg5: boolean, arg6: boolean): boolean
 "onBlockInteraction"(arg0: $Entity$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: $ServerLevel$Type, arg4: $BlockPos$Type, arg5: $Direction$Type, arg6: boolean, arg7: boolean): boolean
 "onEntityPlaceBlock"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $Entity$Type): boolean
 "checkProtectionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $UUID$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $Entity$Type): boolean
 "checkExceptionLeveledOption"(arg0: $IPlayerConfigOptionSpecAPI$Type<(integer)>, arg1: $IPlayerConfigAPI$Type, arg2: $UUID$Type): boolean
 "onPosAffectedByAnotherPos"(arg0: $ServerLevel$Type, arg1: $ChunkPos$Type, arg2: $ServerLevel$Type, arg3: $ChunkPos$Type, arg4: boolean, arg5: boolean, arg6: boolean): boolean
 "removeFullPass"(arg0: $UUID$Type): void
 "giveFullPass"(arg0: $UUID$Type): void
}

export namespace $IChunkProtectionAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkProtectionAPI$Type = ($IChunkProtectionAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkProtectionAPI_ = $IChunkProtectionAPI$Type;
}}
declare module "packages/xaero/pac/common/server/$IServerDataAPI" {
import {$IChunkProtectionAPI, $IChunkProtectionAPI$Type} from "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI"
import {$IAdaptiveLocalizerAPI, $IAdaptiveLocalizerAPI$Type} from "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI"
import {$OpenPACServerAPI, $OpenPACServerAPI$Type} from "packages/xaero/pac/common/server/api/$OpenPACServerAPI"
import {$IServerPartyAPI, $IServerPartyAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI"
import {$IPartyManagerAPI, $IPartyManagerAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI"
import {$IServerClaimsManagerAPI, $IServerClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI"
import {$IPlayerConfigManagerAPI, $IPlayerConfigManagerAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI"

export interface $IServerDataAPI<CM extends $IServerClaimsManagerAPI<(any), (any), (any)>, P extends $IServerPartyAPI<(any), (any), (any)>> {

 "getAdaptiveLocalizer"(): $IAdaptiveLocalizerAPI
 "getServerClaimsManager"(): CM
 "getChunkProtection"(): $IChunkProtectionAPI
 "getPartyManager"(): $IPartyManagerAPI<(P)>
 "getPlayerConfigs"(): $IPlayerConfigManagerAPI
 "getAPI"(): $OpenPACServerAPI
}

export namespace $IServerDataAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDataAPI$Type<CM, P> = ($IServerDataAPI<(CM), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerDataAPI_<CM, P> = $IServerDataAPI$Type<(CM), (P)>;
}}
declare module "packages/xaero/pac/common/parties/party/api/$IPartyAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PartyMemberRank, $PartyMemberRank$Type} from "packages/xaero/pac/common/parties/party/member/$PartyMemberRank"
import {$IPartyAllyAPI, $IPartyAllyAPI$Type} from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPartyMemberAPI, $IPartyMemberAPI$Type} from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export interface $IPartyAPI<M extends $IPartyMemberAPI, I extends $IPartyPlayerInfoAPI, A extends $IPartyAllyAPI> {

 "getOwner"(): M
 "getId"(): $UUID
 "getDefaultName"(): string
 "setRank"(arg0: M, arg1: $PartyMemberRank$Type): boolean
 "getMemberInfo"(arg0: $UUID$Type): M
 "isAlly"(arg0: $UUID$Type): boolean
 "getStaffInfoStream"(): $Stream<(M)>
 "getInviteCount"(): integer
 "getMemberCount"(): integer
 "getAllyCount"(): integer
 "isInvited"(arg0: $UUID$Type): boolean
 "getMemberInfoStream"(): $Stream<(M)>
 "getAllyPartiesStream"(): $Stream<(A)>
 "getNonStaffInfoStream"(): $Stream<(M)>
 "getInvitedPlayersStream"(): $Stream<(I)>
}

export namespace $IPartyAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyAPI$Type<M, I, A> = ($IPartyAPI<(M), (I), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartyAPI_<M, I, A> = $IPartyAPI$Type<(M), (I), (A)>;
}}
declare module "packages/xaero/pac/common/entity/$IItemEntity" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IItemEntity {

 "getXaero_OPAC_throwerAccessor"(): $UUID
 "setXaero_OPAC_throwerAccessor"(arg0: $UUID$Type): void
 "getXaero_OPAC_target"(): $UUID
 "getXaero_OPAC_thrower"(): $UUID
}

export namespace $IItemEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemEntity$Type = ($IItemEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemEntity_ = $IItemEntity$Type;
}}
declare module "packages/xaero/pac/common/capability/$ICapabilityProvider" {
import {$ICapability, $ICapability$Type} from "packages/xaero/pac/common/capability/$ICapability"

export interface $ICapabilityProvider {

 "getCapability"<T>(arg0: $ICapability$Type<(T)>): T

(arg0: $ICapability$Type<(T)>): T
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$Type = ($ICapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPlayerConfigOptionSpecAPI, $IPlayerConfigOptionSpecAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigOptionSpecAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IPlayerConfigAPI, $IPlayerConfigAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigAPI"

export interface $IPlayerConfigManagerAPI {

 "getDefaultConfig"(): $IPlayerConfigAPI
 "getOptionForId"(arg0: string): $IPlayerConfigOptionSpecAPI<(any)>
 "getWildernessConfig"(): $IPlayerConfigAPI
 "getAllOptionsStream"(): $Stream<($IPlayerConfigOptionSpecAPI<(any)>)>
 "getLoadedConfig"(arg0: $UUID$Type): $IPlayerConfigAPI
 "getServerClaimConfig"(): $IPlayerConfigAPI
 "getExpiredClaimConfig"(): $IPlayerConfigAPI
}

export namespace $IPlayerConfigManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerConfigManagerAPI$Type = ($IPlayerConfigManagerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerConfigManagerAPI_ = $IPlayerConfigManagerAPI$Type;
}}
declare module "packages/xaero/pac/common/server/player/config/api/$PlayerConfigType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerConfigType extends $Enum<($PlayerConfigType)> {
static readonly "SERVER": $PlayerConfigType
static readonly "EXPIRED": $PlayerConfigType
static readonly "WILDERNESS": $PlayerConfigType
static readonly "DEFAULT_PLAYER": $PlayerConfigType
static readonly "PLAYER": $PlayerConfigType


public "getName"(): $Component
public static "values"(): ($PlayerConfigType)[]
public static "valueOf"(arg0: string): $PlayerConfigType
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerConfigType$Type = (("server") | ("expired") | ("default_player") | ("wilderness") | ("player")) | ($PlayerConfigType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerConfigType_ = $PlayerConfigType$Type;
}}
declare module "packages/xaero/pac/common/capability/$ICapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapability<T> {

}

export namespace $ICapability {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapability$Type<T> = ($ICapability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapability_<T> = $ICapability$Type<(T)>;
}}
declare module "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI" {
import {$IServerRegionClaimsAPI, $IServerRegionClaimsAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI"
import {$IDimensionClaimsManagerAPI, $IDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/claims/api/$IDimensionClaimsManagerAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IServerDimensionClaimsManagerAPI<WRC extends $IServerRegionClaimsAPI> extends $IDimensionClaimsManagerAPI<(WRC)> {

 "getCount"(): integer
 "getDimension"(): $ResourceLocation
 "getRegionStream"(): $Stream<(WRC)>
}

export namespace $IServerDimensionClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDimensionClaimsManagerAPI$Type<WRC> = ($IServerDimensionClaimsManagerAPI<(WRC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerDimensionClaimsManagerAPI_<WRC> = $IServerDimensionClaimsManagerAPI$Type<(WRC)>;
}}
declare module "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ClaimResult, $ClaimResult$Type} from "packages/xaero/pac/common/claims/result/api/$ClaimResult"
import {$IClaimsManagerAPI, $IClaimsManagerAPI$Type} from "packages/xaero/pac/common/claims/api/$IClaimsManagerAPI"
import {$IServerPlayerClaimInfoAPI, $IServerPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$IServerDimensionClaimsManagerAPI, $IServerDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AreaClaimResult, $AreaClaimResult$Type} from "packages/xaero/pac/common/claims/result/api/$AreaClaimResult"
import {$IClaimsManagerTrackerAPI, $IClaimsManagerTrackerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI"

export interface $IServerClaimsManagerAPI<C extends $IPlayerChunkClaimAPI, PCI extends $IServerPlayerClaimInfoAPI<(any)>, WCM extends $IServerDimensionClaimsManagerAPI<(any)>> extends $IClaimsManagerAPI<(PCI), (WCM)> {

 "get"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): C
 "get"(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type): C
 "get"(arg0: $ResourceLocation$Type, arg1: $ChunkPos$Type): C
 "getPlayerBaseClaimLimit"(arg0: $UUID$Type): integer
 "getPlayerBaseClaimLimit"(arg0: $ServerPlayer$Type): integer
 "getPlayerBaseForceloadLimit"(arg0: $UUID$Type): integer
 "getPlayerBaseForceloadLimit"(arg0: $ServerPlayer$Type): integer
 "getDimensionStream"(): $Stream<(WCM)>
 "unclaim"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): void
 "hasPlayerInfo"(arg0: $UUID$Type): boolean
 "getDimension"(arg0: $ResourceLocation$Type): WCM
 "claim"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): C
 "tryToClaimArea"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean): $AreaClaimResult
 "tryToUnclaimArea"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean): $AreaClaimResult
 "tryToForceloadArea"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: boolean): $AreaClaimResult
 "isClaimable"(arg0: $ResourceLocation$Type): boolean
 "getTracker"(): $IClaimsManagerTrackerAPI
 "getPlayerInfoStream"(): $Stream<(PCI)>
 "tryToForceload"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): $ClaimResult<(C)>
 "tryToClaim"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean): $ClaimResult<(C)>
 "tryToUnclaim"(arg0: $ResourceLocation$Type, arg1: $UUID$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): $ClaimResult<(C)>
}

export namespace $IServerClaimsManagerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerClaimsManagerAPI$Type<C, PCI, WCM> = ($IServerClaimsManagerAPI<(C), (PCI), (WCM)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerClaimsManagerAPI_<C, PCI, WCM> = $IServerClaimsManagerAPI$Type<(C), (PCI), (WCM)>;
}}
declare module "packages/xaero/pac/common/server/api/$OpenPACServerAPI" {
import {$IChunkProtectionAPI, $IChunkProtectionAPI$Type} from "packages/xaero/pac/common/server/claims/protection/api/$IChunkProtectionAPI"
import {$IServerDataAPI, $IServerDataAPI$Type} from "packages/xaero/pac/common/server/$IServerDataAPI"
import {$IServerPlayerClaimInfoAPI, $IServerPlayerClaimInfoAPI$Type} from "packages/xaero/pac/common/server/claims/player/api/$IServerPlayerClaimInfoAPI"
import {$IServerPartyAPI, $IServerPartyAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IServerPartyAPI"
import {$IPartyAllyAPI, $IPartyAllyAPI$Type} from "packages/xaero/pac/common/parties/party/ally/api/$IPartyAllyAPI"
import {$IPlayerConfigManagerAPI, $IPlayerConfigManagerAPI$Type} from "packages/xaero/pac/common/server/player/config/api/$IPlayerConfigManagerAPI"
import {$IServerRegionClaimsAPI, $IServerRegionClaimsAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerRegionClaimsAPI"
import {$IPlayerDimensionClaimsAPI, $IPlayerDimensionClaimsAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerDimensionClaimsAPI"
import {$IAdaptiveLocalizerAPI, $IAdaptiveLocalizerAPI$Type} from "packages/xaero/pac/common/server/player/localization/api/$IAdaptiveLocalizerAPI"
import {$IPlayerClaimPosListAPI, $IPlayerClaimPosListAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerClaimPosListAPI"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$IServerDimensionClaimsManagerAPI, $IServerDimensionClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerDimensionClaimsManagerAPI"
import {$IPartyManagerAPI, $IPartyManagerAPI$Type} from "packages/xaero/pac/common/server/parties/party/api/$IPartyManagerAPI"
import {$IServerClaimsManagerAPI, $IServerClaimsManagerAPI$Type} from "packages/xaero/pac/common/server/claims/api/$IServerClaimsManagerAPI"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$IPartyMemberAPI, $IPartyMemberAPI$Type} from "packages/xaero/pac/common/parties/party/member/api/$IPartyMemberAPI"
import {$IPartyPlayerInfoAPI, $IPartyPlayerInfoAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyPlayerInfoAPI"

export class $OpenPACServerAPI {

constructor(arg0: $IServerDataAPI$Type<(any), (any)>)

public static "get"(arg0: $MinecraftServer$Type): $OpenPACServerAPI
public "getServerClaimsManager"(): $IServerClaimsManagerAPI<($IPlayerChunkClaimAPI), ($IServerPlayerClaimInfoAPI<($IPlayerDimensionClaimsAPI<($IPlayerClaimPosListAPI)>)>), ($IServerDimensionClaimsManagerAPI<($IServerRegionClaimsAPI)>)>
public "getChunkProtection"(): $IChunkProtectionAPI
public "getPartyManager"(): $IPartyManagerAPI<($IServerPartyAPI<($IPartyMemberAPI), ($IPartyPlayerInfoAPI), ($IPartyAllyAPI)>)>
public "getPlayerConfigs"(): $IPlayerConfigManagerAPI
public "getAdaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
get "serverClaimsManager"(): $IServerClaimsManagerAPI<($IPlayerChunkClaimAPI), ($IServerPlayerClaimInfoAPI<($IPlayerDimensionClaimsAPI<($IPlayerClaimPosListAPI)>)>), ($IServerDimensionClaimsManagerAPI<($IServerRegionClaimsAPI)>)>
get "chunkProtection"(): $IChunkProtectionAPI
get "partyManager"(): $IPartyManagerAPI<($IServerPartyAPI<($IPartyMemberAPI), ($IPartyPlayerInfoAPI), ($IPartyAllyAPI)>)>
get "playerConfigs"(): $IPlayerConfigManagerAPI
get "adaptiveTextLocalizer"(): $IAdaptiveLocalizerAPI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenPACServerAPI$Type = ($OpenPACServerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenPACServerAPI_ = $OpenPACServerAPI$Type;
}}
declare module "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerAPI" {
import {$IClaimsManagerListenerAPI, $IClaimsManagerListenerAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerListenerAPI"
import {$IClaimsManagerTrackerRegisterAPI, $IClaimsManagerTrackerRegisterAPI$Type} from "packages/xaero/pac/common/claims/tracker/api/$IClaimsManagerTrackerRegisterAPI"

export interface $IClaimsManagerTrackerAPI extends $IClaimsManagerTrackerRegisterAPI {

 "register"(arg0: $IClaimsManagerListenerAPI$Type): void

(arg0: $IClaimsManagerListenerAPI$Type): void
}

export namespace $IClaimsManagerTrackerAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClaimsManagerTrackerAPI$Type = ($IClaimsManagerTrackerAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClaimsManagerTrackerAPI_ = $IClaimsManagerTrackerAPI$Type;
}}
declare module "packages/xaero/pac/common/capability/$ICapableObject" {
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/xaero/pac/common/capability/$ICapabilityProvider"

export interface $ICapableObject {

 "getXaero_OPAC_CapabilityProvider"(): $ICapabilityProvider
 "setXaero_OPAC_CapabilityProvider"(arg0: $ICapabilityProvider$Type): void
}

export namespace $ICapableObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapableObject$Type = ($ICapableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapableObject_ = $ICapableObject$Type;
}}
