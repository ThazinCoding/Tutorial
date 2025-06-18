// "use client";

// import { Box, Typography } from "@mui/material";
// import { useParams } from "next/navigation";

// //Dynamic Route Page
// //Params: id

// export default function BlogDetail(){
//     const params = useParams();
//     console.log("Blog ID:", params.id)
//     const blogID = params.id;
//     return  (
//         <Box>
//             <Typography>Blog: {blogID}</Typography>
//         </Box>
//     );
// }
"use client";

import React from 'react'
 import { useParams } from "next/navigation";
import { Box, Typography } from '@mui/material';

const page = () => {
    const params = useParams();
    console.log("Blog ID:", params.id)
        const blogID = params.id;
  return (
    <div><Box>
               <Typography>Blog: {blogID}</Typography>
            </Box></div>
  );
}

export default page;