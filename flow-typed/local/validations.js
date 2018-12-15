// @flow

declare type ObjMap<T> = { [key: string]: T, __proto__: null };

declare type ValidationMessages = string[];

declare type ValidationObject = ObjMap<ValidationMessages>;

declare type VisibleValidations = ObjMap<boolean>;

declare type Validate = (resource?: Object, newVisibilityState?: VisibleValidations) => ValidationObject;

declare type UpdateComponentVisibilityState = (id: string, visibilityState: boolean) => void;
