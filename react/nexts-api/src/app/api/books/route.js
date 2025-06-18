import { NextResponse } from "next/server";

const BooksList=[
    {
        title:"The Pragmatic Programmer",
        author:"Andrew Hunt",
        published_year:1999,
    },
    {
        title:"Beloved",
        author:"Toni Morrison",
        published_year:1987,
    },
    {
        title:"The Road",
        author:"Cormac McCarthy",
        published_year:2006,
    },
];
export async function GET() {
    return NextResponse.json(BooksList);
}


export async function POST(req) {
    const body =await req.json();
   
    return NextResponse.json ({
        message:"Create BookList.",
        bodyData :body,
    });
    
}