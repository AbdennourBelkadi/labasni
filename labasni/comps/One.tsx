import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/router";
import Alert from '@mui/material/Alert';
import { Backdrop } from "@mui/material";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  
  interface Products {
    brand: String;
    color: String;
    favorites: Boolean;
    imageUrl: String;
    name: String;
    price: Number;
    _id: String;
  }
const One = ({e,open,handleClose,handleToggle}:any) => {
   
console.log(e);

    const [name, setName] = useState(e.name);
    const [brand, setBrand] = useState(e.brand);
    const [price, setPrice] = useState(e.price);
    const [image, setImage] = useState(e.image);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
  

  return (
   <><Backdrop
   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
   open={open}

 >
   <Paper
     sx={{
       p: 2,
       margin: "auto",
       maxWidth: 500,
       flexGrow: 1,
       backgroundColor: (theme) =>
         theme.palette.mode === "dark" ? "#1A2027" : "#fff",
     }}
   >
     <Grid container spacing={2}>
       <Grid item>
         <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img alt="complex" src={e.imageUrl} />
         </ButtonBase>
       </Grid>
       <Grid item xs={12} sm container>
         <Grid item xs container direction="column" spacing={2}>
           <Grid item xs>
             <TextField
               label="name"
               id="outlined-size-small"
               defaultValue={name}
               onChange={(e)=>setName(e.target.value)}
               size="small"
             />
             <TextField
               label="brand"
               id="outlined-size-small"
               defaultValue={brand}
               size="small"
               onChange={(e)=>setBrand (e.target.value)}

             />
             <TextField
               label="image"
               id="outlined-size-small"
               defaultValue={image}
               size="small"
               onChange={(e)=>setImage(e.target.value)}

             />
             <TextField
               label="price"
               id="outlined-size-small"
               defaultValue={price}
               size="small"
               onChange={(e)=>setPrice(Number(e.target.value))}

             />
           </Grid>
           <Grid item>

             <Button
               sx={{ cursor: "pointer" }}
            //    variant="body2"
               onClick={() =>{ axios.put(`http://localhost:5000/api/clothes/${e._id}`,{name,image,price,brand}).then(e=>console.log(e)
               ).catch(er=>console.log(er)
               ), handleToggle(e), handleClose}}>Submit</Button>

           </Grid>
         </Grid>
         <Grid item>
           <Typography variant="subtitle1" component="div">
             ${e.price}
           </Typography>
         </Grid>
       </Grid>
     </Grid>
   </Paper>
 </Backdrop></>
  )
}

export default One