import fs, { fstat } from "fs"
const userDb = "/Users/23LP2259/OneDrive - Nestcore LLC/NodeJS/models/users.json"
export const createUsers = async(req, res)=>{
    try{
        const {email: paramEmail} = req.params
        const allUsersJson = await fs.readFileSync(userDb)
        const alluser = JSON.parse(allUsersJson)
        if(paramEmail === email){
        const exactUser = allUser.find(({email})=> email === paramEmail)
    return res.send("Iim mail tei hereglegch baina")}
    }
}