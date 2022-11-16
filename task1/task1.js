const myXML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

// Получить
// {
//     list: [
//       { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//       { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
//   }

let parser = new DOMParser();
const myObj = parser.parseFromString(myXML, "text/xml")

// Получение всех DOM-нод
const student = myObj.querySelectorAll("student");

// Запись данных в результирующий объект
let result = {
  list: []
}
for (let i = 0; i < student.length; i++) {
  let temp = {};
  temp.name = student[i].querySelector("first").textContent + ' ' + student[i].querySelector("second").textContent;
  temp.age = student[i].querySelector("age").textContent;
  temp.prof = student[i].querySelector("prof").textContent;
  temp.lang = student[i].querySelector("name").getAttribute("lang");
  result.list.push(temp);
}

console.log(result);