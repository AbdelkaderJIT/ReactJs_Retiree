import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@material-ui/core/Grid";
import axios from "axios";


function Page4({ formData, setFormData, setPage }) {

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


    const [enfantGarde,setEnfantGarde] = useState({nbEnfantGarde:"0"});
    const [enfantGarde1,setEnfantGarde1] = useState({nbEnfantGarde:"1"});
    const [enfantGarde2,setEnfantGarde2] = useState({nbEnfantGarde:"2"});
    const [enfantGarde3,setEnfantGarde3] = useState({nbEnfantGarde:"3"});
    const [enfantGarde4,setEnfantGarde4] = useState({nbEnfantGarde:"4"});
    const [enfantGarde5,setEnfantGarde5] = useState({nbEnfantGarde:"5"});
    const [enfantGarde6,setEnfantGarde6] = useState({nbEnfantGarde:"6"});










    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )

    const HandleEnfantEnGarde  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde.nbEnfantGarde, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfantEnGarde1  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde1.nbEnfantGarde, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfantEnGarde2  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde2.nbEnfantGarde, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfantEnGarde3  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde3.nbEnfantGarde, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfantEnGarde4  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde4.nbEnfantGarde, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfantEnGarde5  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde5.nbEnfantGarde, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfantEnGarde6  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfantGarde: enfantGarde6.nbEnfantGarde, id:formData.id})
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
                          HandleEnfantEnGarde();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText  primary="0"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleEnfantEnGarde1();
                          setPage((currPage) => currPage + 1);
                      }} button >
                <ListItemText primary="1"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleEnfantEnGarde2();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="2" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleEnfantEnGarde3();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="3" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleEnfantEnGarde4();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="4" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleEnfantEnGarde5();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="5" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) => {
                          HandleEnfantEnGarde6();
                          setPage((currPage) => currPage + 1);
                      }} button>
                <ListItemText primary="6" />
            </ListItem>
        </List>

    );
}

export default Page4;