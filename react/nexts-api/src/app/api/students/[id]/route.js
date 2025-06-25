import { NextResponse } from "next/server";
import * as yup from "yup";
import { prisma } from "@/lib/prisma";
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    father_name: yup.string().required("Father name is required"),
    gender: yup.string().required("Gender is required").oneOf(["male", "female"], 'Invalid Gender'),
    age: yup.number().required("Age is required"),
    dob: yup.date().required("DOB is required"),
    phone: yup.string().required("Phone is required"),
    address: yup.string().required("Address is required"),
    major: yup.string().required("Major is required"),
});

export async function PUT(req, { params }) {
    try {

        const studentID = parseInt(params.id);

        const body = await req.json();
        const validatedData = await schema.validate(body, { abortEarly: false, stripUnknown: true });
        await prisma.student.update({
            where : {id: studentID},
            data : validatedData,
        });
        return NextResponse.json({
            message: "Student is successfully updated.", studentID,
            //bodyData: body,

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
    try{
    const studentID = parseInt(params.id);//get URI params field
    await prisma.student.delete({
        where :{id : studentID},
    });
    return NextResponse.json({
        message: "Student is successfully deleted.", studentID,
    });
} catch(error){
    return NextResponse.json(
        {
            message :"Student not found of Student deletion is fail.",
        },
        {
            status: 404,
        }
    );
}
}
export async function GET(req, { params }) {
    const studentID = parseInt(params.id);//get URI 
    const student = await prisma.student.findUnique({
        where: {
            id: studentID,
        },
    });

    return NextResponse.json(student);
}