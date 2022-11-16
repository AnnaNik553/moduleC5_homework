const myJSON = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`

// Получить объект
// {
//     list: [
//       { name: 'Petr', age: 20, prof: 'mechanic' },
//       { name: 'Vova', age: 60, prof: 'pilot' },
//     ]
//   }

// Получение данных
const objResult = JSON.parse(myJSON);
console.log(objResult);
