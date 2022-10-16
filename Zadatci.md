# Uvod u javascript

Sa našeg repozitorija https://github.com/kula124/HCi_2020_Fresh/tree/intro-js

# Zadatci

Riješimo par zadataka. Za pokretanje koda otvorite link ispod:  
https://codesandbox.io/s/beautiful-satoshi-1dsph9?file=/src/index.js

## Zadatak 1

Napiši program koji traži najveći element niza za dani niz: | 121 221 232 12 |

<details>
<summary>Rješenje</summary>

```js
const array = [121, 221, 232, 12];
let biggest = Number.MIN_VALUE;
for (let i = 0; i < array.length; i++) {
  if (array[i] > biggest) {
    biggest = array[i];
  }
}
console.log(biggest);

// ili

array.forEach((e) => {
  if (e > biggest) {
    biggest = e;
  }
});
```

</details>

## Zadatak 2

Napiši program koji za niz brojeva stvara niz kvadrata tih brojeva.
Niz brojeva: | 2, 6, 5, 1, 10 |

<details>
<summary>Rješenje</summary>

```js
const arr = [2, 6, 5, 1, 10];
const squares = arr.map((e) => e * e);
```

</details>

## Zadatak 3

Napiši program koji za niz studenata označava prolaz studenta sa `true` ako je ocjena veća od 1. Ako je 1 stavlja `false`.
Niz studenata:

1.

- Filip Filipović
- Ocjena 4

2.

- Ante Antić
- Ocjena 1

3.

- Mirko Mirković
- Ocjena 2

<details>
<summary>Rješenje</summary>

```js
const studenti = [
  {
    fullName: "Filip Filipovic",
    grade: 4,
  },
  {
    fullName: "Ante Antic",
    grade: 1,
  },
  {
    fullName: "Mirko Mirkovic",
    grade: 2,
  },
];

studenti.forEach((student) => {
  if (student.grade > 1) {
    student.pass = true;
  } else {
    student.pass = false;
  }
});
```

</details>

// TODO Dodaj još dva zadatka
