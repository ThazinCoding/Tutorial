import { NextResponse} from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required("title is required"),
    author: yup.string().required("Author is required"),
    published_year: yup.date().required("Published year is required"),
});

export async function PUT(req, { params }) {
    try{
    const bookID = params.id;
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({ message: "Book is successfully updated.", bookID,
    //bodyData:body,
});
} catch(error){
    if(error.name === "ValidationError"){
        return NextResponse.json(
            {
                message: "Validation failed",
                errors: error.inner.map((e) => ({
                    path: e.path,
                    message: e.message,

                })),
            },
            { staus: 400 }
        );
    }
    return NextResponse.json(
        {
            message: "Unexpected Error",
            error: error.message,
        },
        { status: 500 }
    );
}
}  
export async function DELETE(req, { params }){
    const bookID = params.id;//get URI params field
    return NextResponse.json({ message: "Book is successfully deleted.",bookID, 
    });   
}

export async function GET(req, { params }){
    const bookID = params.id;//get URI 
    const student ={
        id:bookID ,
        title:"The Pragmatic Programmer",
        author:"Andrew Hunt",
        published_year:1999,
    };
    return NextResponse.json(student);   
}