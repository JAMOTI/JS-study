const nicoInfo = {
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMoview: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name:"Kimchi", 
            fatty:false
        }, 
        {
            name:"Cheese burger", 
            fatty:true
        }
    ]
}

console.log(nicoInfo.gender);

nicoInfo.gender = "Female";

console.log(nicoInfo.gender);

console.log(nicoInfo.favFood[0].fatty);