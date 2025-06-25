import { NextResponse } from "next/server";
import * as yup from "yup";
import{prisma} from "@/lib/prisma";
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
   
];
export async function GET() {
    const book = await prisma.book.findMany();
    return NextResponse.json(book);
}

const schema = yup.object().shape({
    title: yup.string().required("title is required"),
    author: yup.string().required("Author is required"),
    published_year: yup.number().required("Published year is required"),
});

export async function POST(req) {
    try {
        const body = await req.json();
        const validatedData= await schema.validate(body, { abortEarly: false });
        const book =await prisma.book.create({
            data: validatedData,
        });
        return NextResponse.json({
            message: "Book is successfully created.",
            book:book,
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
            error: error.message || error,
        },
    { status: 500 }
        );
    }

}