const chai = ("chai")
const spies =("chai-spies")
function receivesAFunction (spy){
    return spy()
}

function returnsANamedFunction(){
    return (function print(){
        console.log (print)
    })
}

function returnsAnAnonymousFunction(){
    return (()=>{ 
        console.log ("Hello!")
    })
}