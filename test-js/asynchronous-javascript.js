// Callbacks

function suma1(a,callback){
    const res1=a+1;
    callback(res1);
}

function suma2(b,callback){
    const res2=b+2;
    callback(res2);
}

function suma3(c,callback){
    const res3=c+3;
    callback(res3);
}

suma1(1, (res1)=>{
    suma2(res1, (res2)=>{
        suma3(res2, (res3)=>{
            console.log(res3);
        })
    })
});

// Promesas 
// a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.


// Callback2

const operation = (a,b,callback)=>{
    return callback(a,b);
}

operation(1,2,(a,b)=>{console.log(a+b)});
operation(1,2,(a,b)=>{console.log(a*b)});
operation(1,2,(a,b)=>{console.log(a-b)});

// Promesas 

const users = [
    {
        'username':'jfg'
    },{
        'username':'zere'
    },{
        'username':'brunets'
    }
];

const getUsers = () => {
    return new Promise((resolve,reject) => {
        if (users.length==0){
            reject(new Error('No existen usuarios'));
        }
        setTimeout(()=>{
            resolve(users);
        },1000);
    });
}


getUsers()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));


async function gettingUsers(){
    const usuarios=await getUsers();
    console.log(usuarios);
}