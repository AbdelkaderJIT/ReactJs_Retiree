import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@material-ui/core/Grid";
import axios from "axios";


function Page3({ formData, setFormData,setPage }) {

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


    const [enfant,setEnfant] = useState({nbEnfant:"0"});
    const [enfant1,setEnfant1] = useState({nbEnfant:"1"});
    const [enfant2,setEnfant2] = useState({nbEnfant:"2"});
    const [enfant3,setEnfant3] = useState({nbEnfant:"3"});
    const [enfant4,setEnfant4] = useState({nbEnfant:"4"});
    const [enfant5,setEnfant5] = useState({nbEnfant:"5"});
    const [enfant6,setEnfant6] = useState({nbEnfant:"6"});

    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )

    const HandleEnfant  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfant1  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant1.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfant2  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant2.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfant3  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant3.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfant4  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant4.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfant5  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant5.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }
    const HandleEnfant6  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {nbEnfant: enfant6.nbEnfant, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }



    return (

        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>{
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant();
                              setPage((currPage) => currPage + 2);
                          }
                      }
                      } button>
                <ListItemText  primary="0"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>
                      {
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant1();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant1();
                              setPage((currPage) => currPage + 2);
                          }
                      }
                      } button >
                <ListItemText primary="1"  />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>
                      {
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant2();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant2();
                              setPage((currPage) => currPage + 2);
                          }
                      }

                      }
                      button>
                <ListItemText primary="2" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>
                      {
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant3();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant3();
                              setPage((currPage) => currPage + 2);
                          }
                      }
                    }
                           button>
                <ListItemText primary="3" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>
                      {
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant4();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant4();
                              setPage((currPage) => currPage + 2);
                          }
                      }
                  } button>
                <ListItemText primary="4" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>
                      {
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant5();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant5();
                              setPage((currPage) => currPage + 2);
                          }
                      }
                  } button>
                <ListItemText primary="5" />
            </ListItem>

            <ListItem sx={styleItem} className="m-3"
                      onClick={(event) =>
                      {
                          if(formData.maritale==="DIVORCE")
                          {
                              HandleEnfant6();
                              setPage((currPage) => currPage + 1);
                          }else{
                              HandleEnfant6();
                              setPage((currPage) => currPage + 2);
                          }
                      }
                    } button>
                <ListItemText primary="6" />
            </ListItem>
        </List>

    );
}

export default Page3;