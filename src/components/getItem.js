import Api from "./Api.json"

const task = new Promise((res)=>{
    res(Api)
}, 2000)



export default function getItem() {
    return (
        task
    )
}
