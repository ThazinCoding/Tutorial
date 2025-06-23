import { NextResponse } from "next/server";
import * as yup from "yup";
const BooksList = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        published_year: 1999,
    },
    {
        title: "Beloved",
        author: "Toni Morrison",
        published_year: 1987,
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        published_year: 2006,
    },
];
export async function GET() {
    return NextResponse.json(BooksList);
}

const schema = yup.object().shape({
    title: yup.string().required("title is required"),
    author: yup.string().required("Author is required"),
    published_year: yup.date().required("Published year is required"),
});

export async function POST(req) {
    try {
        const body = await req.json();
        await schema.validate(body, { abortEarly: false });
        return NextResponse.json({
            message: "Book is successfully created.",
            bodyData: body,
        });
    }
    catch (error) {

        if (error.name === "ValidationError") {
            return NextResponse.json({
                message: "Validation failed",
                errors: error.inner.map((e) => ({
                    path: e.path,
                    message: e.message,

                })),
            },
                { status: 400 }
            );
        }
        return NextResponse.json({
            message: "Unexpected Error",
            error: error.message,
        },
    { status: 500 }
        );
    }

}