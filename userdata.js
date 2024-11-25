async function fun() {
    const data=await fetch("http://localhost:3000/api/users")
    const apidata=await data.json()
    console.log(apidata)
    
}
fun()