import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const titre = tw(SectionHeading)`sm:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;
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
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "Comment ?",
  description = "Le Plan Epargne Retraite est un produit financier auquel tous les contribuables français sont éligibles, salariés ou non. ",
  description2 = "Il s'agit d'un produit dépargne à long terme; pendant votre vie active vous épargnez au rythme que vous souhaitez pour récupérer, à l'âge de la retraite, le capitale constitué auquel s'ajoutent les interêts.",
    description3 = "Ce capital peut être versé en une seule fois ou sous forme de rente",
    description4 = "A cela s'ajoute un avantage fiscal non négligeable; vous pouvez déduire de votre imposition 10% du montant annuel versé multiplié par votre tranche marginale d'imposition.",
    titre ="Comment ?",
    description5 = "Choisir et adopter son PER en fonction de sa situation",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [

    {
      question: "Nombreuses caractéristiques",
      answer:
          "Un grand nombre de contrats sont présents sur le marché avec chacun des paramètres qui leur sont propres (intérêts en fonction du profil “risques”, frais divers, types de support…) les options sont donc multiples.\n"
    },
    {
      question: "Quel est le montant idéal à verser ?",
      answer:
        "De la même manière, le montant des versements et leur périodicités doivent être parfaitement adaptés à votre situation et à vos objectifs."
    },
    {
      question: "Le bilan patrimonial",
      answer:
        "Pour cibler au mieux l'offre la plus adéquate il est nécessaire de réaliser un bilan patrimonial qui analyse à l'instant T votre patrimoine et identifie des axes d'améliorations ainsi que des stratéfies d'optimisation."
    },
    {
      question: "Optimisation de sa fiscalité",
      answer:
        "A la suite d'un bilan patrimonial il apparaîtra de manière plus claire la manière don't optimiser votre fiscalité grâce au PER en définisannt les versements idéal."
    },
    {
      question: "Le choix du contrat",
      answer:
        "De la même manière, le bilan patrimonial mettra en évidence vos besoins présents, le choix du type de contract sera donc facilité."
    }
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <Description>{description2}</Description>
              <Description>{description3}</Description>
              <Description>{description4}</Description>
              <br/>
              <Subheading>{titre}</Subheading>
              <titre>{description5}</titre>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
