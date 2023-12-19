let count = 0;
function counter()
{
   count++;
   console.log(count);
   if(true)
   {setTimeout(counter ,1000);}

}
counter();
