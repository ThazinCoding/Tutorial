import { NextResponse } from "next/server";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    fatherName: yup.string().required("Father name is required"),
    address: yup.string().required("Address is required"),
    age: yup.number().required("Age is required"),
    major: yup.string().required("Major is required"),
});

export async function PUT(req, { params }) {
    try {

        const studentID = params.id;
        
        const body = await req.json();
        await schema.validate(body, { abortEarly: false });
        return NextResponse.json({
            message: "Student is successfully updated.", studentID,
            bodyData: body,

        });
    } catch (error) {
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

export async function DELETE(req, { params }) {
    const studentID = params.id;//get URI params field
    return NextResponse.json({
        message: "Student is successfully deleted.", studentID,
    });
}

export async function GET(req, { params }) {
    const studentID = params.id;//get URI 
    const student = {
        id: studentID,
        name: "Su Su",
        age: 17,
        gender: "female",
        fathernamae: "U Maung",
        address: "Hlaing",
        major: "Computer Sicence",
    };
    return NextResponse.json(student);
}