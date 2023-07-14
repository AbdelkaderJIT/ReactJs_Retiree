import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";



import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

import tw from "twin.macro";
import styled from "styled-components";
import {PrimaryButton} from "components/misc/Buttons";
import Button from "@material-ui/core/Button";
import {ReactComponent as ArrowLeftIcon} from "../images/arrow-left-3-icon.svg";
import {ReactComponent as ArrowRightIcon} from "../images/arrow-right-3-icon.svg";
import Page4 from "./Page4";
import Page5 from "./Page5";
import axios from "axios";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import {motion} from "framer-motion";



const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw` mt-4 mx-4 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
  svg {
    ${tw`w-8 h-8 stroke-4`}
  }
`;
const ControlButton2 = styled.button`
  ${tw` mt-4 mx-4 p-2 justify-end float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
  svg {
    ${tw`w-8 h-8 stroke-4`}
  }
`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)` my-20 md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
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
const Heading = tw(SectionHeading)`mb-6 mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const FAQContent = tw.div`lg:ml-12`;






export default ({
                    subheading = "Simulation de votre avantage fiscal et le capital que vous pouvez générer.",
                    heading = "",
                    description = "",
                    textOnLeft = true,
                    description1 = "Le Plan Epargne Retraite est un produit financier auquel tous les contribuables français sont éligibles, salariés ou non. ",
                    description2 = "Il s'agit d'un produit dépargne à long terme; pendant votre vie active vous épargnez au rythme que vous souhaitez pour récupérer, à l'âge de la retraite, le capitale constitué auquel s'ajoutent les interêts.",
                    description3 = "Ce capital peut être versé en une seule fois ou sous forme de rente",
                    description4 = "A cela s'ajoute un avantage fiscal non négligeable; vous pouvez déduire de votre imposition 10% du montant annuel versé multiplié par votre tranche marginale d'imposition.",
                    titre ="Comment ?",
                    description5 = "Choisir et adopter son PER en fonction de sa situation",
                    faqs = null
                }) => {




    // const defaultFaqs = [
    //
    //     {
    //         question: "Nombreuses caractéristiques",
    //         answer:
    //             "Un grand nombre de contrats sont présents sur le marché avec chacun des paramètres qui leur sont propres (intérêts en fonction du profil “risques”, frais divers, types de support…) les options sont donc multiples.\n"
    //     },
    //     {
    //         question: "Quel est le montant idéal à verser ?",
    //         answer:
    //             "De la même manière, le montant des versements et leur périodicités doivent être parfaitement adaptés à votre situation et à vos objectifs."
    //     },
    //     {
    //         question: "Le bilan patrimonial",
    //         answer:
    //             "Pour cibler au mieux l'offre la plus adéquate il est nécessaire de réaliser un bilan patrimonial qui analyse à l'instant T votre patrimoine et identifie des axes d'améliorations ainsi que des stratéfies d'optimisation."
    //     },
    //     {
    //         question: "Optimisation de sa fiscalité",
    //         answer:
    //             "A la suite d'un bilan patrimonial il apparaîtra de manière plus claire la manière don't optimiser votre fiscalité grâce au PER en définisannt les versements idéal."
    //     },
    //     {
    //         question: "Le choix du contrat",
    //         answer:
    //             "De la même manière, le bilan patrimonial mettra en évidence vos besoins présents, le choix du type de contract sera donc facilité."
    //     }
    // ];
    //
    // if (!faqs || faqs.length === 0) faqs = defaultFaqs;
    //
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
    //
    // const toggleQuestion = questionIndex => {
    //     if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    //     else setActiveQuestionIndex(questionIndex);
    // };




    ///////////////////////////////////////////

    const [page, setPage] = useState(0);
    const [trancheData,setTrancheData] = useState();
    const [formData, setFormData] = useState({
        id:"",
        objectifClient: "",
        maritale: "",
        nbEnfant: "",
        nbEnfantGarde: "",
        tranche:"",
        situationProfessionnelle:"",
        capaciteEpargne:"",
        birthYear:"",
        zipCode:"",
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        divobool:false,
        prev:true,
        prev2:1,
    });


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

    const HandleAnneeDeNaissance  = async () =>  {
        try {
            const resp = await authAxios.patch(url+`/${formData.id}`, {
                birthYear: formData.birthYear,
                zipCode:formData.zipCode,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,id:formData.id})
            console.log(resp.data);
        }catch(error)
        {
            console.log(error);
        }
    }




    const FormTitles = ["Quel est votre objectif principal ?",
        "Cela a un impact sur le calcul de vos impôts ",
        "De la même manière cela va jouer sur la part du quotient familial" ,
        "Nombre d'enfant en garde alternée",
        "Revenus annuels personnel net",
        "Situation professionnelle",
        "Capacité d'Epargne mensuelle",
        "Données personnelles"];

    const PageDisplay = () => {
        if (page === 0) {
            return  <Page1 formData={formData} setFormData={setFormData}  setPage={setPage} />;
        } else if (page === 1) {
            return <Page2 formData={formData} setFormData={setFormData}  setPage={setPage} />;
        } else if (page === 2) {
            return <Page3 formData={formData} setFormData={setFormData}  setPage={setPage} />;
        } else if (page === 3 ) {
            if (formData.maritale === "DIVORCE")
            {
                return <Page4 formData={formData} setFormData={setFormData}  setPage={setPage} />;
            }else
            {
                setPage((currPage) => currPage + 1);
                return ;
            }
        } else if (page === 4) {
            return <Page5 trancheData={trancheData} setTrancheData={setTrancheData} formData={formData} setFormData={setFormData}   setPage={setPage}/>;
        }else if (page === 5) {
            return  <Page6 formData={formData} setFormData={setFormData}  setPage={setPage}  />;
        }else if (page === 6) {
            return  <Page7 formData={formData} setFormData={setFormData}  setPage={setPage} />;
        }
        else if (page === 7) {
            return  <Page8 formData={formData}  />;
        }
    };


    return (
        <Container >

            <TwoColumn>
                <ImageColumn>
                    {/*<FAQContent>*/}
                        {subheading ? <Subheading></Subheading> : null}
                        <Heading>  {
                            <>
                                {/*Do you have <span tw="text-primary-500">Questions ?</span>*/}
                                Qui <span tw="text-primary-500">/</span>  Quoi?
                            </>
                        }
                        </Heading>
                        <Description>{description1}</Description>
                        <Description>{description2}</Description>
                        <Description>{description3}</Description>
                        <Description>{description4}</Description>
                        <Description>{description5}</Description>
                        <br/>
                    {/*    <Subheading>{titre}</Subheading>*/}
                    {/*    <titre>{description5}</titre>*/}
                    {/*    <FAQSContainer>*/}
                    {/*        {faqs.map((faq, index) => (*/}
                    {/*            <FAQ*/}
                    {/*                key={index}*/}
                    {/*                onClick={() => {*/}
                    {/*                    toggleQuestion(index);*/}
                    {/*                }}*/}
                    {/*                className="group"*/}
                    {/*            >*/}
                    {/*                <Question>*/}
                    {/*                    <QuestionText>{faq.question}</QuestionText>*/}
                    {/*                    <QuestionToggleIcon>*/}
                    {/*                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}*/}
                    {/*                    </QuestionToggleIcon>*/}
                    {/*                </Question>*/}
                    {/*                <Answer*/}
                    {/*                    variants={{*/}
                    {/*                        open: { opacity: 1, height: "auto", marginTop: "16px" },*/}
                    {/*                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }*/}
                    {/*                    }}*/}
                    {/*                    initial="collapsed"*/}
                    {/*                    animate={activeQuestionIndex === index ? "open" : "collapsed"}*/}
                    {/*                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}*/}
                    {/*                >*/}
                    {/*                    {faq.answer}*/}
                    {/*                </Answer>*/}
                    {/*            </FAQ>*/}
                    {/*        ))}*/}
                    {/*    </FAQSContainer>*/}
                    {/*</FAQContent>*/}
              </ImageColumn>

                <TextColumn textOnLeft={textOnLeft}>


                    <TextContent>

                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && <Description>{description}</Description>}


            <div className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0">
                <div className="header">
                    <Heading>{FormTitles[page]}</Heading>
                </div>
                <div className="body">{PageDisplay()}</div>
                <Controls>

                    <ControlButton
                        disabled={page === 0}
                        onClick={() => {
                            if((page===4) && (formData.maritale !=="DIVORCE"))
                            {
                                setPage((currPage) => currPage - 2);
                                setFormData({...formData, prev: true });
                            }else if(page==4)
                            {
                                setPage((currPage) => currPage - 1);
                                setFormData({...formData, prev: true });
                            }
                            else
                            {
                                setPage((currPage) => currPage - 1);
                                setFormData({...formData, prev: true });
                            }
                        }}
                    >
                        Prev
                    </ControlButton>

                    <ControlButton2
                        onClick={() => {
                            if (page === FormTitles.length +1 ) {
                                console.log(formData);
                            }
                            else if (page === 7)  {
                                setPage((currPage) => currPage + 1);
                                console.log(formData);
                                HandleAnneeDeNaissance();
                            }
                            else {
                                setPage((currPage) => currPage + 1);
                                console.log(formData);
                            }
                        }}
                        disabled={page!==7}
                    >
                        {((page === 3) || ((page === 2) && (formData.maritale !== "DIVORCE")) ) ? "Calculer" : "Next"}
                    </ControlButton2>

                </Controls>
            </div>


                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
}


