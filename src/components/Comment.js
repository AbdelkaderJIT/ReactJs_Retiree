import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import NbCaracteristiques from "images/NCaracteristiquesTexte.png";
import BlankImage from "images/blank.png";
import MontantVerser from "images/MontantàVerserTexte.png";
import ArrowToLeft from "images/ArrowToLeft.png";
import ArrowToRight from "images/ArrowToRight.png";
import BilanPatrimonial from "images/BilanPatrimonialTexte.png";
import ArrowBothWays from "images/ArrowBothWays.png";
import OptimisationFiscalite from "images/OptimisationFiscalistéTexte.png";
import ChoixContrat from "images/ChoixContratTexte.png";
import NbCaracteristiquesTitre from "images/NCaracteristiquesTitre.png";
import MontantVerserTitre from "images/MontantàVerserTitre.png";
import BilanPatrimonialTitre from "images/BilanPatrimonialTitre.png";
import OptimisationFiscaliteTitre from "images/OptimisationFiscalistéTitre.png";
import ChoixContratTitre from "images/ChoixContratTitre.png";

const Container = tw.div`relative -mx-8 px-8 md:mx-auto`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-600`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-10 `}
  .imageContainer {
    ${tw` text-center   flex-shrink-0`}
  
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
                    cards = null,
                    heading = "Comment",
                    subheading = "",
                    description = "Choisir et adapter son PER en fonction de sa situation"
                }) => {
    /*
     * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
     *  1) imageSrc - the image shown at the top of the card
     *  2) title - the title of the card
     *  3) description - the description of the card
     *  If a key for a particular card is not provided, a default value is used
     */

    const [hoverState,setHoverState] = useState(false);
    const [hoverState1,setHoverState1] = useState(false);
    const [hoverState2,setHoverState2] = useState(false);
    const [hoverState3,setHoverState3] = useState(false);
    const [hoverState4,setHoverState4] = useState(false);

    return (
        <Container>
            <ThreeColumnContainer>
                {subheading && <Subheading>{subheading}</Subheading>}
                <Heading>{heading} <span tw="text-primary-500">?</span></Heading>
                {description && <Description>{description}</Description>}
                <VerticalSpacer />

                {/*Column1*/}
                    <Column >
                        <Card
                            onMouseEnter={() => setHoverState(true)}
                            onMouseLeave={() => setHoverState(false)}
                        >
                        {hoverState?
              <span className="imageContainer">
                <img src={NbCaracteristiques} alt="" />
              </span>

                         :

              <span className="imageContainer">
                <img src={NbCaracteristiquesTitre}  alt="" />
              </span>
                                }
                        </Card>

                    </Column>

                {/*Column2*/}

                <Column >
                    <Card>
                            <span className="imageContainer">
                <img src={BlankImage} alt="" />
              </span>

                    </Card>

                </Column>

                {/*Column3*/}

                <Column >
                    <Card
                        onMouseEnter={() => setHoverState1(true)}
                        onMouseLeave={() => setHoverState1(false)}
                    >
                        {hoverState1?
                            <span className="imageContainer">
                <img src={MontantVerser} alt="" />
              </span>

                            :

                            <span className="imageContainer">
                <img src={MontantVerserTitre} alt="" />
              </span>
                        }
                    </Card>

                </Column>

                {/*Column4*/}

                <Column >
                    <Card>
                            <span className="imageContainer">
                <img src={ArrowToRight} alt="" />
              </span>

                    </Card>

                </Column>

                {/*Column5*/}


                <Column >
                    <Card
                        onMouseEnter={() => setHoverState2(true)}
                        onMouseLeave={() => setHoverState2(false)}
                    >
                        {hoverState2?
                            <span className="imageContainer">
                <img src={BilanPatrimonial} alt="" />
              </span>

                            :

                            <span className="imageContainer">
                <img src={BilanPatrimonialTitre} alt="" />
              </span>
                        }
                    </Card>

                </Column>

                {/*Column6*/}

                <Column >
                    <Card>
                            <span className="imageContainer">
                <img src={ArrowToLeft} alt="" />
              </span>

                    </Card>

                </Column>

                {/*Column7*/}

                <Column >
                    <Card
                        onMouseEnter={() => setHoverState3(true)}
                        onMouseLeave={() => setHoverState3(false)}
                    >
                        {hoverState3?
                            <span className="imageContainer">
                <img src={OptimisationFiscalite} alt="" />
              </span>

                            :

                            <span className="imageContainer">
                <img src={OptimisationFiscaliteTitre} alt="" />
              </span>
                        }
                    </Card>

                </Column>

                {/*Column8*/}

                <Column >
                    <Card>
                            <span className="imageContainer">
                <img src={ArrowBothWays} alt="" />
              </span>

                    </Card>

                </Column>

                {/*Column9*/}

                <Column >
                    <Card
                        onMouseEnter={() => setHoverState4(true)}
                        onMouseLeave={() => setHoverState4(false)}
                    >
                        {hoverState4?
                            <span className="imageContainer">
                <img src={ChoixContrat} alt="" />
              </span>

                            :

                            <span className="imageContainer">
                <img src={ChoixContratTitre} alt="" />
              </span>
                        }
                    </Card>

                </Column>









            </ThreeColumnContainer>
        </Container>
    );
};
