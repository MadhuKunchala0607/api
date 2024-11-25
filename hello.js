async function fun(){
    const api=await fetch("http://localhost:5000/api/data")
    const data= await api.json()
    data.map((val)=>{
        console.log(val.name)
        console.log(val.role)
    })
}
fun()