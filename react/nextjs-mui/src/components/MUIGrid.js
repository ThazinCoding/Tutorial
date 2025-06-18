import {Grid,Box} from "@mui/material";
export default function MUIGrid(){
    return(
       <Grid container spacing={2}>
        <Grid size={{xs:12,sm:6}}>
            <Box sx={{bgcolor:"primary.main",p:2 ,color:"secondary.main"}}>Left</Box>
        </Grid>
        <Grid size={{xs:12,sm:6}}>    
            <Box sx={{bgcolor:"secondary.main",p:2,color:"primary.main" }}>Right</Box>
        </Grid>
       </Grid>
    );
}