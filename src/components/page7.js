import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@material-ui/core/Grid";
import axios from "axios";


function Page7({ formData, setFormData, setPage }) {

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


    const [capacEpar,setCapacEpar] = useState({capaciteEpargne:100});
    const [capacEpar1,setCapacEpar1] = useState({capaciteEpargne:300});
    const [capacEpar2,setCapacEpar2] = useState({capaciteEpargne:750});
    const [capacEpar3,setCapacEpar3] = useState({capaciteEpargne:800});


    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )

    const HandleCapaciteEpargne  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {capaciteEpargne: capacEpar.capaciteEpargne, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleCapaciteEpargne1  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {capaciteEpargne: capacEpar1.capaciteEpargne, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleCapaciteEpargne2  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {capaciteEpargne: capacEpar2.capaciteEpargne, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleCapaciteEpargne3  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {capaciteEpargne: capacEpar3.capaciteEpargne, id:formData.id})
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
                          HandleCapaciteEpargne();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText  primary="100€"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleCapaciteEpargne1();
                          setPage((currPage) => currPage + 1);
                      }} button >
                <ListItemText primary="entre 100€ et 300€"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleCapaciteEpargne2();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="750€" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleCapaciteEpargne3();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="plus que 750€" />
            </ListItem>

        </List>

    );
}

export default Page7;