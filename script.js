const play = (user_id) =>
{
    const lst = document.querySelectorAll("img")
   
    
    for (let i = 0; i < lst.length; i++)
    {
        lst[i].style.border="None"
        }
    const computer = () =>
    {
        return val = Math.floor(Math.random() * 3)
        
    }
    const cptr_id = String(computer());
    
    document.getElementById(user_id).style.border = "10px solid yellow"
    document.getElementById(cptr_id).style.border = "10px solid yellow"
    const pairing =
    {
        "0": "a",
        "1": "b",
        "2":"c",
    }

    let res=""
    if (user_id == pairing[String(cptr_id)])
    {
        res = "Its a Draw!!";
    }
    else if((user_id=="a" && cptr_id=="1") || (user_id=="b" && cptr_id=="2") ||(user_id=="c" && cptr_id=="0"))
    {
        res = "You Lose!!";
    }
    else 
   {
    res = "You Won!!";
   }
    document.getElementById("result").innerHTML = res
    
}