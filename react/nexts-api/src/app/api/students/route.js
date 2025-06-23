import { NextResponse } from "next/server";
import * as yup from "yup";
const StudentData = [
    {
        id: 1,
        name: "Su Su",
        age: 17,
        address: "Hlaing",
        major: "Computer Sicence",
    },
    // {
    //     id: 2,
    //     name:"Min Min",
    //     age: 17,
    //     address: "Yan Kin",
    //     major: "Computer Sicence",
    // },

];
//Get student list API
export async function GET() {
    return NextResponse.json(StudentData);

}
//Validation schema to v
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    fatherName: yup.string().required("Father name is required"),
    address: yup.string().required("Address is required"),
    age: yup.number().required("Age is required"),
    major: yup.string().required("Major is required"),
});


export async function POST(req) {
    try {
        const body = await req.json();
        await schema.validate(body, { abortEarly: false });
        return NextResponse.json({
            message: "Student is successfully created.",
            bodyData: body,
        });
    }
    catch (error) {
        // return NextResponse.json({message:"Internal Sever Error"},
        //     {
        //         status:500,
        //     });
        if (error.name === "ValidationError") {
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