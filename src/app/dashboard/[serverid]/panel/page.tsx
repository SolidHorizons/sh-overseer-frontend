export default function Panel({params}: {
    params: {serverid:number}
}){
    return (
        <h1>Panel with ID: {params.serverid}</h1>
    )
}