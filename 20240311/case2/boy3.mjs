//重新命名導出
const aa = () => {
   console.log("yo")
}

const bb =() => {
   console.log("bruh")
}

export{
   aa as sayMyName,
   bb as sayMyCountry
}