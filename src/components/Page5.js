import React, {useState,useEffect} from "react";
import tw from "twin.macro";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";


function Page5({ formData, setFormData, trancheData, setTrancheData, setPage }) {

    const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
    const style = {
        width: '100%',
        bgcolor: 'background.paper',
    };


    const Container = tw.div`relative`;
    const url = 'http://per.elkhebir.com:8080/api/clients';
    const url2 ='http://per.elkhebir.com:8080/api/tranches';

    const  accessToken ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2MjMzNjI5MH0.I_nLPqOooOS-l_aH-gc1imyYzOwo7_x0Hi8DQ0t8ZCQ3uA7P9_wv6yrwjjmpuYiZvt31HcO6nxsr4BSCOepTkA';

    const authAxios = axios.create(
        {
            baseURL: url,
            headers: {
                Authorization :`Bearer ${accessToken}`,
            }
        }
    )


    const HandleTranches = async () => {

        const resp = await authAxios.get(url2+`/${formData.id}`)
            .then (resp => {
                setTrancheData(resp.data)
            }  ).catch( err => console.log(err))

    };

    const HandleTranche  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {tranche: formData.tranche, id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(() => {
        setFormData({...formData, tranche:""})
    }, [])

    useEffect(() => {
        if  (formData.prev === false)
        {
            HandleTranche();
            setPage((currPage) => currPage + 1);
            setFormData({...formData, prev:true});
        }else
        {
            setFormData({...formData, prev:false});
        }
    }, [formData.tranche])

    if(formData.tranche!==""){
        setFormData({...formData, tranche:""})
    };

    useEffect(() => {
        setFormData({...formData, tranche:""})
    }, [])


    useEffect(() => {
        HandleTranches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const styleItem = {

        width: '100%',
        marginTop:'20px',
        border:1,
        borderColor:'Gray',
        maxWidth:'100%',
        textAlign:'center',
    };


    return (

        <List sx={style} component="nav" aria-label="mailbox folders">
            {
                trancheData? ( trancheData.map((tranche) => (

                    <ListItem sx={styleItem} className="m-3" key={tranche.titre}
                    onClick={(event) => {
                        setFormData( {...formData, tranche: tranche.titre})
                    }}
                        button>
                   <ListItemText> {tranche.titre} </ListItemText>
                    </ListItem>))):

                (<Container className="m-5" sx={{ display: 'flex',alignItems: 'center',
                justifyContent: 'center',  }} >
                <CircularProgress style={{color:"purple"}} />
                </Container>)

            }
        </List>

    );
}

export default Page5;