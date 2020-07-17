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

function woodCalculator(chair,table,bed){

    var chairCount =  chair*1;
    var tableCount =  table*3;
    var bedCount   =  bed*5;

    var totalWood = chairCount + tableCount + bedCount;

    return totalWood;
 }

 var woodResult = woodCalculator(10,9,8);
 console.log(woodResult);

 ////........................Brick Calculator...............................///

 function brickCalculator (floor){
     var totalHeight;
     var totalBrick;

     if(floor<=10){
         totalHeight = floor*15;
         totalBrick = totalHeight*1000;

     }
     else if(floor<=20)
     {
         totalHeight =(10*15)+(10*12);
         totalBrick = totalHeight*1000;
     }

       else{
         if(floor>=21){
             totalHeight=(10*15)+(10*12)+(floor*10);
             totalBrick = totalHeight*1000-(200000);
         }
     }
     return totalBrick;
 }

  var result = brickCalculator(21);
  console.log(result);


///.........................Friends Name....................................////

function tinyFriend (names)
{
    var smallName = names[0];
    tinyName = names [0];
    for(var i=0; i<names.length;i++){
      var currentName=names[i];
      
      if(currentName.length< smallName.length){
          smallName=currentName;
      }
      
     }
     return smallName;
    }
     
  
     var result=tinyFriend(['Oishe','Porshi','Sreyo','Sreyoshi','Deva','Ishita','Promi','Mumi','Moumita','Antu','Bishow','Devashis','sreyo']);
     console.log(result);

