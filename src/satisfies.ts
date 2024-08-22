type Animal = "dog" | "cat" | "pig";

// const awesomeFunction = (animal: Animal) => {
//   switch (animal) {
//     case "cat":
//       return "meow";
//     case "dog":
//       return "bowwow";
//     case "pig":
//       return "oink oink";
//     default:
//       const _: never = animal;
//   }
// }


// const awesomeFunction = (animal: Animal) => {
//   switch (animal) {
//     case "cat":
//       return "meow";
//     case "dog":
//       return "bowwow";
//     case "pig":
//       return "oink oink";
//     default:
//       animal satisfies never;
//   }
// }

const awesomeFunction = (animal: Animal) => {
  switch (animal) {
    case "cat":
      return "meow";
    case "dog":
      return "bowwow";
    case "pig":
      return "oink oink";
    default:
      return animal satisfies never;
  }
}


// const ailmentStatus = {
//   Burn: 0,
//   Freeze: 1,
//   Paralysis: 2,
//   Poison: 3,
//   Sleep: 4,
//   Fainting: 99,
//   Terastal: 1000000, //意図していない値
// } as const;


type Ailment = "Burn" | "Freeze" | "Paralysis" | "Poison" | "Sleep" | "Fainting";
type AilmentStatus = {
  [key in Ailment]: number;
}
// const ailmentStatus: AilmentStatus = {
//   Burn: 0,
//   Freeze: 1,
//   Paralysis: 2,
//   Poison: 3,
//   Sleep: 4,
//   Fainting: 99,
// } as const;
//AilmentNumberがnumber型になってしまう

const ailmentStatus = {
  Burn: 0,
  Freeze: 1,
  Paralysis: 2,
  Poison: 3,
  Sleep: 4,
  Fainting: 99,
} as const satisfies AilmentStatus;

type ValueOf<T, K extends keyof T = keyof T> = T[K];
type AilmentNumber = ValueOf<typeof ailmentStatus>;

// const palette = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   bleu: [0, 0, 255]
// }

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// const palette: Record<Colors, string | RGB> = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [0, 0, 255]
// }

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255]
} satisfies Record<Colors, string | RGB>;

const greenNormalized = palette.green.toUpperCase();