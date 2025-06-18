"use client";
import Link from "next/link";
import { Typography,Button } from "@mui/material";
import LinkButton from "@/components/LinkButton";
export default function Dashboard(){
    return(
        <div>
            <Typography variant="h4">Dashboard</Typography>
            <Link href="/AboutPages" passHref>
            <Button variant="contained"> Go to About Pages</Button>
            </Link>
            <Link href="/" passHref>
            <Button variant="contained"> Go to Home</Button>

            </Link >
            <Link href="/setting" passHref>
            <Button variant="contained"> Go to Setting</Button>
            </Link>

        </div>
    );
}