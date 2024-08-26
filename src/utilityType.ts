type T0 = {
  a: number;
  b: boolean;
  c: string;
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type Hoge1 = {
  n: number;
  s: string | null;
}
type Hoge2 = Partial<Hoge1>;

type Hoge3 = Pick<Required<Hoge2>, "n">;

type CatName = "tama" | "mike" | "kuro";
type CatInfo = {
  age: number;
  breed: string;
}
function func1(arg: { a: number; b: string }): void { }

type Func1 = typeof func1;

//Pick
type AC = Pick<T0, "a" | "c">;

//Omit
type OnlyB = Omit<T0, "a" | "c">;

//Exclude
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;

type T3 = Exclude<Shape, { kind: "circle" }>;

//Extract
type T4 = Extract<"a" | "b" | "c", "a" | "f">;

type T5 = Extract<string | number | (() => void), Function>;

type T6 = Extract<Shape, { kind: "circle" }>;

//NonNullable
type T7 = NonNullable<string | number | undefined>;

type T8 = NonNullable<string[] | null | undefined>;

//Partial
type T9 = Partial<Hoge1>;

//Required
type T10 = Required<Hoge2>;

//Readonly
type T11 = Readonly<Hoge3>;

//Record
type T12 = Record<CatName, CatInfo>;

//Parameters
type T13 = Parameters<() => string>;

type T14 = Parameters<(s: string) => void>;

type T15 = Parameters<<T>(arg: T) => T>;

type T16 = Parameters<Func1>;

type T17 = Parameters<any>;

type T18 = Parameters<never>;

//ReturnType
type T19 = ReturnType<() => string>;

type T20 = ReturnType<(s: string) => void>;

type T21 = ReturnType<<T>() => T>;

type T22 = ReturnType<<T extends U, U extends number[]>() => T>;

type T23 = ReturnType<Func1>;

type T24 = ReturnType<any>;

type T25 = ReturnType<never>;

//Awaited
type T26 = Awaited<Promise<string>>;

type T27 = Awaited<Promise<Promise<number>>>;

type T28 = Awaited<boolean | Promise<number>>;

//NoInfer
// function func2<C extends string>(values: C[], defaultValue: C) { }
function func2<C extends string>(values: C[], defaultValue: NoInfer<C>){}

func2(["a", "b", "c"], "a");
// func2(["a", "b", "c"], "z");