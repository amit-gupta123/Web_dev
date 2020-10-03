/*var answer=prompt("Are we theer yet")
while(answer!=="yes" && answer!=="yeah"){
    answer=prompt("Are we there yet")
}
alert("YES WE MADE IT")
*/

//but here we need to type Yes every time what if we type yes
//version2
var answer=prompt("Are we theer yet")
while(answer.indexOf("yes")===-1){
    answer=prompt("Are we there yet")
}
alert("YES WE MADE IT")
