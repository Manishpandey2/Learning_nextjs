import DbConnection from "@/database/DbConnection";


export async function GET(){
    DbConnection();
    return Response.json({
        message : 'GET request successful'
    })
}