let map = new Map();
let student = {
group: 201,
last_name: "Иванов",
first_name: "Иван"
};
map.set("Иван", "name");
map.set("Иванов", "fam");
map.set(201, "gr");
console.log(`Список свойств: ${(map.get("Иван"))}, ${(map.get("Иванов"))}, ${(map.get(201))}`);
let obj = Object.entries(map.entries());
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);