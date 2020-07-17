///...............................Converted Feet To Mile......................////

function feetToMile (feet){

    var mile = feet*0.000189;
    return mile;  
}
var SreyoshiMile = feetToMile(50);
console.log(SreyoshiMile);

var MithunMile = feetToMile(250);
console.log(MithunMile);

///...............................Wood Calculation............................./////

function woodcalculator(chair,table,bed){

    var chairCount =  chair*1;
    var tableCount =  table*3;
    var bedCount   =  bed*5;

    var totalWood = chairCount + tableCount + bedCount;

    return totalWood;
 }

 var woodResult = woodcalculator(10,9,8);
 console.log(woodResult);

///.........................Friends Name...............................
function tinyFriend (names)
{
    var smallName = names[0].length;
    tinyName = names [0];
    for(var i=0; i<names.length;i++){
      var currentName=names[i].length;
      
      if(currentName<smallName){
          tinyName=currentName[i];
      }
      
     }
     return tinyName;
    }
     
  
     var smallestName=tinyFriend(['Deva','Sreyo','Ishita','Promi','Moumita','Antu','Bishow','Devashis','Sreyashi']);
     console.log(smallestName);
