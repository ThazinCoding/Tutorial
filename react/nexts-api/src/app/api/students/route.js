import { NextResponse } from "next/server";

const StudentData =[
    {
        id: 1,
        name:"Su Su",
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
export async function GET() {
    return NextResponse.json (StudentData);
    
}

export async function POST(req) {
    const body =await req.json();
   
    return NextResponse.json ({
        message:"Student is successfully created.",
        bodyData :body,
    });
    
}