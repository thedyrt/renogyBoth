// @flow

declare type ObjMap<T> = { [key: string]: T, __proto__: null };

declare type ValidationMessages = string[];

declare type ValidationObject = ObjMap<ValidationMessages>;

declare type VisibleValidations = ObjMap<boolean>;
