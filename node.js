#!/usr/bin/env node


function IsPrime(pArray, val)
{
  var nZeroQuotient = 0;
  if (pArray == null)
    return true;
  for (var i = 0; i<pArray.length; i++)
  {
     var out = val % pArray[i];
     if (out == 0)
       nZeroQuotient = nZeroQuotient + 1;
  }
  //console.log("# Divisible: " + String(nZeroQuotient) + " pArray len: " + String(pArray.length));
  if (nZeroQuotient > 0)
    return false;

  return true;

}

var fs = require('fs');
var outfile = "part2.txt";
var primeArray = null;
var i = 1;
do 
{
   i = i + 1;
   if (IsPrime(primeArray, i) == false)
     continue 
     
   if (primeArray == null)
     primeArray = [String(i)];
   else
     primeArray.push(String(i))
} while (primeArray.length < 100);
var out = null;

//len = primeArray.length;
//out = primeArray[0] + ", ";
//for (i=1; i<len-1; i++)
//{
//      out = out + primeArray[i] + ", ";

//}
//out = out + String(primeArray[len-1])

//console.log(String(primeArray.length));

fs.writeFileSync(outfile, primeArray);
