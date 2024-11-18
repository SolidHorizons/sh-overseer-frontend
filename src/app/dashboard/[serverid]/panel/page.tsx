export default async function Panel({ params }: { params: { serverid: number } }) {
    const { serverid } = await params;
    
    return (
        <h1>Panel with ID: {serverid}</h1>
    );
}