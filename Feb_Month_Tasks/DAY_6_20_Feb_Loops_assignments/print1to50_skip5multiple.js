// Print 1–50, skip multiples of 5

function printnum()
{
    for (let i=1;i<=50;i++)
    {
      
        if (i%5==0)
        {
            continue
        }
          if(i%7==0){
            break
        }
        console.log(i)
    }
}
printnum()