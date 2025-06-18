"use client";
import {Button,Typography} from "@mui/material";
import Link from "next/link";
export default function AboutPage(){
    return (
        <div>
            <Typography variant="h4">About Page</Typography>
            <Link href="/Dashboard" passhref>
             <Button variant="contained">Go to Dashboard</Button> 
            </Link>
        </div>
    );
}