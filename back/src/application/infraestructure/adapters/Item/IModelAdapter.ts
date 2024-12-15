
export interface IModelArrayAdapter<T,U>{
    transform(item: T[]): U;
}

export interface IModelAdapter<T,U>{
    transform(item: T): U;
}
