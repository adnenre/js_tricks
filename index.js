import compareObject from './objects/compareObjects'


// Example compare two object

const obj1 = {
    name :'car',
    model :'Mercedess',
    owner :{
        name :'jhon',
        age : 35
    }
}
const obj2 = {
    name :'car',
    model :'Mercedess',
    owner :{
        name :'jhon',
        age : 34
    }
}

const objectAreDeepEqual = compareObject(obj1, obj2);
console.log(objectAreDeepEqual)