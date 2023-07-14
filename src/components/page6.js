import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@material-ui/core/Grid";
import axios from "axios";


function Page6({ formData, setFormData, setPage }) {

    const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
    const style = {
        width: '100%',
        bgcolor: 'background.paper',
    };
    const styleItem = {

        width: '100%',
        marginTop:'20px',
        border:1,
        borderColor:'Gray',
        maxWidth:'100%',
        textAlign:'center',
    };


    const url = 'http://per.elkhebir.com:8080/api/clients';

    const  accessToken ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2MjMzNjI5MH0.I_nLPqOooOS-l_aH-gc1imyYzOwo7_x0Hi8DQ0t8ZCQ3uA7P9_wv6yrwjjmpuYiZvt31HcO6nxsr4BSCOepTkA';



    const [sitProfess,setSitProfess] = useState({situationProfessionnelle:"CDI"});
    const [sitProfess1,setSitProfess1] = useState({situationProfessionnelle:"CDD"});
    const [sitProfess2,setSitProfess2] = useState({situationProfessionnelle:"INDEPENDANT"});
    const [sitProfess3,setSitProfess3] = useState({situationProfessionnelle:"INTERIMAIRE"});




    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )

    const HandleSituationProfessionnelle  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {situationProfessionnelle: sitProfess.situationProfessionnelle, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleSituationProfessionnelle1  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {situationProfessionnelle: sitProfess1.situationProfessionnelle, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleSituationProfessionnelle2  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {situationProfessionnelle: sitProfess2.situationProfessionnelle, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleSituationProfessionnelle3  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {situationProfessionnelle: sitProfess3.situationProfessionnelle, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }


    return (

        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleSituationProfessionnelle();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText  primary="CDI"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleSituationProfessionnelle1();
                          setPage((currPage) => currPage + 1);
                      }} button >
                <ListItemText primary="CDD"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleSituationProfessionnelle2();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="Indépendant / TNS" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleSituationProfessionnelle3();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="Intérimaire" />
            </ListItem>

        </List>

    );
}

export default Page6;