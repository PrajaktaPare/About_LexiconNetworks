// Print 1–50, skip multiples of 5// 7 muliple break

function printnum()
{
    for (let i=1,j=1;i<=10,j<=10;i++,j++)//35
    {
        if(i%7!=0){
            console.log(i)//1 

            break
        }
        if (j%5==0)
        {
            console.log(j)

            continue
        }
    }
}
printnum()


for (let i = 1, j = 4;; i++, j--) {
 if (i==3){
    console.log(i,j)//3 2 
    break
 }
//   console.log(i, j);

}
//1 2 3 4
//4 3 2 1 
//1 4
//2 3

