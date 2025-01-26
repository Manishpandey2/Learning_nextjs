import DbConnection from "@/database/DbConnection";
import Course from "@/database/models/course.schema";
import User from "@/database/models/user.schema";


export async function GET(){
    DbConnection();
    await User.create({
        username : 'John Doe',
        email : 'johndoe@gmail.com',
        googleId : '123456789',
        profileImage : 'https://www.google.com'
    });

    await Course.create({
        title : 'Course 1',
        description : 'Description 1',
        price : 100
    });
    return Response.json({
        message : 'GET request successful'
    })
}