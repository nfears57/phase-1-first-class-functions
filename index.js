function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function nameFunction(){

    }
}
function returnsAnAnonymousFunction(){
    return function(){

    }
}