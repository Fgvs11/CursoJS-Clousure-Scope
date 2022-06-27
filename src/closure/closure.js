function greeting(){
    let usernarme = 'Fernando';

    function displayUserName(){
        return `Hello ${usernarme}`;
    }
    return displayUserName;

}

const g = greeting();
console.log(g);
console.log(g());