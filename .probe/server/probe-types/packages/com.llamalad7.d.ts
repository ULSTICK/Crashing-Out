declare module "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Operation<R> {

 "call"(...arg0: (any)[]): R

(...arg0: (any)[]): R
}

export namespace $Operation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Operation$Type<R> = ($Operation<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Operation_<R> = $Operation$Type<(R)>;
}}
