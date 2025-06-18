"use client";
import{
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    Button,
    InputLabel,
    FormHelperText,
    } from "@mui/material";
import { schema } from "./validationSchema1";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm,Controller } from "react-hook-form";

const CITY=[
    {value:"cty1", label:"City1"},
    {value:"cty2", label:"City2"},
    {value:"cty3", label:"City3"},
    {value:"cty4", label:"City4"},
];
const TOWNSHIP=[
    {value:"township1", label:"Township1"},
    {value:"township2", label:"Township2"},
    {value:"township3", label:"Township3"},
    {value:"township4", label:"Township4"}
];

export default function ContactForm(){
    const {
            register,
            handleSubmit,
            reset,
            control,
            formState: { errors },
        } = useForm({
                resolver: yupResolver(schema),
                        defaultValues: {
                            city:"",
                            township:"",
                        }
        });
        const onSubmit = (formData) => {
           
            reset();
        };
        const save =()=>{
            alert ("We saved your ContactForm!")
        }

    return(
        <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Name"
                fullWidth
                sx={{ mb: 2 }}
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />
            <TextField
                label="Email"
                fullWidth
                sx={{ mb: 2 }}
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <TextField
                label="Phone.No"
                fullWidth
                sx={{ mb: 2 }}
                {...register("phoneno")}
                error={!!errors.phoneno}
                helperText={errors.phoneno?.message}
            />
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.city}>
                <InputLabel id="city-label">City</InputLabel>
                <Controller
                    name="city"
                    control={control}
                    error={!!errors.role}
                    render={({ field }) => (
                        <Select
                            {...field}
                            labelId="city-label"
                            label="city"
                            value={field.value || ""}         //Ensure Controlled value

                        >
                            {CITY.map((city, index1) => (
                                <MenuItem key={index1} value={city.value}>
                                    {city.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
                <FormHelperText>{errors.city?.message}</FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.township}>
                <InputLabel id="township-label">Township</InputLabel>
                <Controller
                    name="township"
                    control={control}
                    error={!!errors.township}
                    render={({ field }) => (
                        <Select
                            {...field}
                            labelId="township-label"
                            label="township"
                            value={field.value || ""}         //Ensure Controlled value

                        >
                            {TOWNSHIP.map((township, index1) => (
                                <MenuItem key={index1} value={township.value}>
                                    {township.label}
                                </MenuItem>
                            ))}Township
                        </Select>
                    )}
                />
                <FormHelperText>{errors.township?.message}</FormHelperText>
            </FormControl>
            
            <Button variant="contained" type="submit" >
                reset
            </Button>
            <Button variant="contained"  type="button" onClick={() => save()}>
                Save
            </Button>

      </Box>          
    );
}