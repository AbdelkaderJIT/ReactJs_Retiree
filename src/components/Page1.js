import React, {useState,useEffect} from "react";
import tw from "twin.macro";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@material-ui/core/Grid";
import axios from "axios";



function Page1({formData, setFormData, setPage}) {

   /* const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
    const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
    const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0 `;*/

    const styleGridImg = {

        width: '100%',
        justifyContent: 'space-between',
        display: 'inline-flex',

    };

    const url = 'http://per.elkhebir.com:8080/api/clients';

    const  accessToken ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2MjMzNjI5MH0.I_nLPqOooOS-l_aH-gc1imyYzOwo7_x0Hi8DQ0t8ZCQ3uA7P9_wv6yrwjjmpuYiZvt31HcO6nxsr4BSCOepTkA';

    const [client,setClient] = useState({objectifClient:"IMPOT"});
    const [client2,setClient2] = useState({objectifClient:"PATRIMOINE"});
    const [client3,setClient3] = useState({objectifClient:"FAMILLE"});
    const [client4,setClient4] = useState({objectifClient:"RETRAITE"});




    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )

    const HandleObjectif = async () => {
        try {
            const resp = await authAxios.post(url, client)
            console.log(resp.data);
            setFormData(resp.data);
        }catch(error)
        {
            console.log(error.response);
        }
    }
    const HandleObjectif1 = async () => {
        try {
            const resp = await authAxios.post(url, client2)
            console.log(resp.data);
            setFormData(resp.data);
        }catch(error)
        {
            console.log(error.response);
        }
    }
    const HandleObjectif2 = async () => {
        try {
            const resp = await authAxios.post(url, client3)
            console.log(resp.data);
            setFormData(resp.data);
        }catch(error)
        {
            console.log(error.response);
        }
    }
    const HandleObjectif3 = async () => {
        try {
            const resp = await authAxios.post(url, client4)
            console.log(resp.data);
            setFormData(resp.data);
        }catch(error)
        {
            console.log(error.response);
        }
    }
    useEffect(() => {
        console.log(formData);
    }, [formData.id])


    return (

        <Grid container spacing={3}   >
        <Grid  item xs={5} >

        <Card sx={styleGridImg} >

            <CardActionArea
                onClick={(event) =>{
                    HandleObjectif();
                    setPage((currPage) => currPage + 1);
                }}
                  >
                <CardMedia
                    component="img"
                    height="2%"
                    widht="2%"
                    image="https://www.seekpng.com/png/detail/21-215421_money-icon-risikomanagement-im-lichte-des-shareholder-value.png"

                />

                <CardContent>

                    <Typography gutterBottom variant="h6" component="div">
                        Réduire mes impots
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
            <Grid  item xs={5}>

                <Card sx={styleGridImg} >
                    <CardActionArea
                        onClick={(event) =>{
                            HandleObjectif1();
                            setPage((currPage) => currPage + 1);
                        }}
                        >
                        <CardMedia
                            component="img"
                            height="2"
                            widht="2"
                            image="https://www.seekpng.com/png/detail/21-215421_money-icon-risikomanagement-im-lichte-des-shareholder-value.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Constituer un patrimoine
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid  item xs={5} >

                <Card sx={styleGridImg} >
                    <CardActionArea
                        onClick={(event) =>{
                            HandleObjectif2();
                            setPage((currPage) => currPage + 1);
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="2"
                            widht="2"
                            image="https://www.seekpng.com/png/detail/21-215421_money-icon-risikomanagement-im-lichte-des-shareholder-value.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Protéger ma famille
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid  item xs={5} >

                <Card sx={styleGridImg} >
                    <CardActionArea
                        onClick={(event) =>{
                            HandleObjectif3();
                            setPage((currPage) => currPage + 1);
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="2"
                            widht="2"
                            image="https://www.seekpng.com/png/detail/21-215421_money-icon-risikomanagement-im-lichte-des-shareholder-value.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Préparer ma retraite
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

    );
}

export default Page1;

