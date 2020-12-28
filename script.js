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

function arrayCut(Array){
    let len = Array.length;
    for (let i=0; i<len; i++){
        if (Array.length>1){
        console.log(`${Array.pop()} осталось [${Array}]`);
    }
        else{
            console.log(Array[0]);
    }
}
}
arrayCut([1, 2, 3]);

function isPalindrome(pal){
    if (pal==pal.split("").reverse().join("")){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
isPalindrome("доход");
isPalindrome("хлеб");

function scalarMultiplication(n, Array){
    let len = Array.length;
    let zero = Array[0].length;
    for (let i = 0; i < len; i++){
        for (let j = 0; j < zero; j++){
            Array[i][j]*=n;
        }
    }
    console.log(Array);
}
scalarMultiplication(3, [[1, 2, 3],[4, 5, 6],[7, 8, 9]]);