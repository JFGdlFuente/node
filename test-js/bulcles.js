// BUCLES WHILE Y FUNCIONES
function NodeIterator(max){
    let i = 0;
    while (i<max){
        console.log(i);
        i++;
    }
}

NodeIterator(40);

// BUCLES FOR

for (const value of ['a','b','x']){
    console.log(value);
}

// OBJETOS

let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

console.log(`Su nombre es {user.name} y tiene {user.age} años de edad. ¿Es administrador? {user.isAdmin}`);
