import React, { useState } from "react";
import tw from "twin.macro";
import {PrimaryButton as PrimaryButtonBase} from "./misc/Buttons";


function Page8({ formData }) {
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

    const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
    const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
    const InputContainer = tw.div`relative py-5 mt-2`;
    const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;

    const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`


    const HandleChange = (e) => {
        formData.birthYear = e.target.value;
        console.log(formData.birthYear);
    }

    const HandleChange1 = (e) => {
        formData.zipCode=e.target.value;
        console.log(formData.zipCode);
    }

    const HandleChange2 = (e) => {
        formData.lastName=e.target.value;
        console.log(formData.lastName);
    }

    const HandleChange3 = (e) => {
        formData.firstName=e.target.value;
        console.log(formData.firstName);
    }

    const HandleChange4 = (e) => {
        formData.email=e.target.value;
        console.log(formData.email);
    }
    
    const HandleChange5 = (e) => {
        formData.phoneNumber=e.target.value;
        console.log(formData.phoneNumber);
    }

    return (

        <Form  >
            <InputContainer>
                <Label htmlFor="birthYear">Votre année de naissance</Label>
                <Input
                    type="text"
                    name="birthYear"
                    placeholder="Année de naissance"
                    key="birthYear"
                    onChange={HandleChange}
                    value={formData.birthYear}
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="zipCode">Votre code postal</Label>
                <Input
                    type="text"
                    placeholder=""
                    key="zipCode"

                    onChange={HandleChange1}
                    value={formData.zipCode}
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="name-input">Nom</Label>
                <Input
                    type="text"
                    placeholder=""
                    key="lastName"
                    onChange={HandleChange2}
                    value={formData.lastName}
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="name-input">Prénom</Label>
                <Input
                    type="text"
                    placeholder=""
                    key="firstName"
                    onChange={HandleChange3}
                    value={formData.firstName}
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="name-input">Mail</Label>
                <Input
                    type="text"
                    placeholder=""
                    key="email"
                    onChange={HandleChange4}
                    value={formData.email}
                />
            </InputContainer>

            <InputContainer>
                <Label htmlFor="name-input">Numéro de téléphone</Label>
                <Input
                    type="text"
                    placeholder=""
                    key="phoneNumber"
                    onChange={HandleChange5}
                    value={formData.phoneNumber}
                />
            </InputContainer>

        </Form>

    );
}

export default Page8;