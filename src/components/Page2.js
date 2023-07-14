import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Page2({ formData, setFormData , setPage } ) {

    const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
    const styleGrid = {

        width: '100%',
        marginTop:'20px',

    };

    const url = 'http://per.elkhebir.com:8080/api/clients';

    const  accessToken ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2MjMzNjI5MH0.I_nLPqOooOS-l_aH-gc1imyYzOwo7_x0Hi8DQ0t8ZCQ3uA7P9_wv6yrwjjmpuYiZvt31HcO6nxsr4BSCOepTkA';


    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )


    const [marital,setMarital] = useState({maritale:"CELEBATAIRE"});
    const [marital1,setMarital1] = useState({maritale:"MARIE"});
    const [marital2,setMarital2] = useState({maritale:"VEUF"});
    const [marital3,setMarital3] = useState({maritale:"DIVORCE"});




    const HandleMaritale  = async () =>  {
        try {

                const resp = await authAxios.patch(url+`/${formData.id}`,{maritale:marital.maritale,id:formData.id})
                console.log(resp.data);
                console.log(formData.id);

        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleMaritale1  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`,{maritale:marital1.maritale,id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleMaritale2  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {maritale:marital2.maritale,id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleMaritale3  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {maritale:marital3.maritale,id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }





    return (
        <Grid container alignItems="stretch"  direction="column" justifyContent="space-between" >
            <Grid  >

                <Card sx={styleGrid} className='m-3' >
                    <CardActionArea
                        onClick={(event) => {
                                HandleMaritale();
                                setPage((currPage) => currPage + 1);
                        }}
                    >

                        <CardContent>

                            <Typography gutterBottom variant="h5" component="div">
                                Célibataire
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid  >

                <Card sx={styleGrid} className='m-3' >
                    <CardActionArea
                        onClick={(event) => {
                            HandleMaritale1();
                            setPage((currPage) => currPage + 1);
                        }
                        }
                    >

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Marié/Pacsé
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid >

                <Card sx={styleGrid} className='m-3' >
                    <CardActionArea
                        onClick={(event) => {
                            HandleMaritale2();
                            setPage((currPage) => currPage + 1);
                        }}
                    >

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Veuve/Veuf
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid >

                <Card sx={styleGrid} className='m-3' >
                    <CardActionArea
                        onClick={(event) => {
                            HandleMaritale3();
                            setFormData({...formData, maritale:"DIVORCE"})
                            setPage((currPage) => currPage + 1);
                        }}
                        >

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Divorcé
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

    );
}

export default Page2;