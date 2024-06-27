declare module "packages/mekanism/client/model/data/$TransmitterModelData" {
import {$ConnectionType, $ConnectionType$Type} from "packages/mekanism/common/lib/transmitter/$ConnectionType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransmitterModelData {

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public "check"(...types: ($ConnectionType$Type)[]): boolean
public "setConnectionData"(direction: $Direction$Type, connectionType: $ConnectionType$Type): void
public "setHasColor"(hasColor: boolean): void
public "getConnectionsMap"(): $Map<($Direction), ($ConnectionType)>
public "getHasColor"(): boolean
public "getConnectionType"(side: $Direction$Type): $ConnectionType
set "hasColor"(value: boolean)
get "connectionsMap"(): $Map<($Direction), ($ConnectionType)>
get "hasColor"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmitterModelData$Type = ($TransmitterModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransmitterModelData_ = $TransmitterModelData$Type;
}}
