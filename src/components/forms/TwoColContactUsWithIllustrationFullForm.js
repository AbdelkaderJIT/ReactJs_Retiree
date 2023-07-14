import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import axios from "axios";
import {CardActionArea} from "@mui/material";
import Header, {DesktopNavLinks, LogoLink, NavLink, NavLinks, NavToggle, PrimaryLink} from "../headers/light";
import {red} from "@mui/material/colors";



const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-black hover:border-gray-300 hover:text-black`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = tw.div`relative`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
const msg = {

  color: 'red',

};
const msg2 = {

  color: 'Green',

};


export default ({
  subheading = "Contactez nous",
  heading = <>Contactez <span tw="text-primary-500">nous</span><wbr/> </>,
  description = "Vos données personnelles seront sécurisés. ",
  submitButtonText = "Envoyer",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        PER
      </NavLink>
      <NavLink href="#">
        Retraite
      </NavLink>
      <NavLink href="#">
        Impot
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
    </NavLinks>
  ];

  const initialValues ={ name: "", mail: "", tel: "", texte: ""}
  const [contactData,setContactData] = useState({initialValues});
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const url = 'http://per.elkhebir.com:8080/api/contacts';

  const  accessToken ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2MjMzNjI5MH0.I_nLPqOooOS-l_aH-gc1imyYzOwo7_x0Hi8DQ0t8ZCQ3uA7P9_wv6yrwjjmpuYiZvt31HcO6nxsr4BSCOepTkA';

  const authAxios = axios.create(
      {
        baseURL: url,
        headers: {
          Authorization :`Bearer ${accessToken}`,
        }
      }
  )


  const HandleContactezNous = async () => {
    try {
      const resp = await authAxios.post(url, {name: contactData.name, mail:contactData.mail, tel:contactData.tel, texte:contactData.texte})
      console.log(resp.data);
      window.location.reload();
    }catch(error)
    {
      console.log(error.response);
    }
  }

  const HandleChangeName = (e) => {
    setContactData({...contactData, name: e.target.value});
    console.log(contactData.name);
  }

  const HandleChangeEmail = (e) => {
    setContactData({...contactData, mail: e.target.value});
    console.log(contactData.mail);
  }

  const HandleChangeTel = (e) => {
    setContactData({...contactData, tel: e.target.value});
    console.log(contactData.tel);
  }

  const HandleChangeTexte = (e) => {
    setContactData({...contactData, texte: e.target.value});
    console.log(contactData.texte);
  }




  const HandleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(contactData));
    setIsSubmit(true);
  };

  useEffect(()=> {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      HandleContactezNous();
    }
  },[formErrors,isSubmit]);


  const validate = (values) => {
    const errors ={};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (!values.name){
      errors.name = "le nom est obligatoire!";
    }else if (values.name.length <6){
      errors.name ="veuillez entrer un nom et prénom valide!";
    }
    if (!values.mail){
      errors.mail = "l'email est obligatoire!";
    }else if (!regex.test(values.mail)){
      errors.mail ="ce n'est pas un email valide!";
    }
    if (!values.tel){
      errors.tel = "le numérou de téléphone est obligatoire!";
    }else if (values.tel.length<8){
      errors.tel ="ce n'est pas un numérou de téléphone valide!";
    }
    return errors;
  };



  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (


    <Container>
      <HeroContainer>
      <StyledHeader links={navLinks} />
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}

            <Form onSubmit={HandleSubmit}>

              <Input
                  type="text"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  key="mail"
                  onChange={HandleChangeEmail}
                  value={contactData.mail}
              />
                <span className="block sm:inline" style={msg} >{formErrors.mail}</span>

              <Input
                  type="text"
                  name="name"
                  placeholder="Nom et Prénom"
                  key="name"
                  onChange={HandleChangeName}
                  value={contactData.name}
              />

              <span className="block sm:inline" style={msg} >{formErrors.name}</span>

              <Input
                  type="number"
                  name="subject"
                  placeholder="Numéro du téléphone"
                  key="tel"
                  onChange={HandleChangeTel}
                  value={contactData.tel}
              />
              <span className="block sm:inline" style={msg} >{formErrors.tel}</span>

              <Textarea
                  name="message"
                  placeholder="Votre message ici"
                  key="texte"
                  onChange={HandleChangeTexte}
                  value={contactData.texte}
              />



              <SubmitButton type="submit">{submitButtonText}</SubmitButton>


            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
