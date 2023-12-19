let count = 0;
function counter()
{
   count++;
   console.log(count);
   if(count<10)
   {setTimeout(counter ,1000);}

}
counter();
