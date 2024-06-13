/*
var <object name> =
{
property 1 :value 1,
property 2 : value 2,
property 3 :value 3,
property 4 : value 4,
<function name> : function()
{
function defination code;
}
};*/
var car =
{
    carname : "BMW",
    invented: "karl Rapp",
    manufactured : 1913,
printcardata : function()
{
    console.log("the car name "+this.carname+"is invented by "+this.invented+"manufactured in "+this.manufactured);
}
};
console.log(car.printcardata());