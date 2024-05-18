'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
	Container,
	CardContainer,
	Title,
	TextSection,
	ImageSection,
	MainContainer,
	FormContainer,
	SubmitButton,
} from './style';

import { Input } from '@/components/Input';

const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().required(),
	phone: yup.number().required(),
	code: yup.string().required(),
	message: yup.string().required(),
});

export default function Form() {
	const [errorMessage, setErrorMessage] = useState('');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleDataSubmit = async (formData) => {
		console.log('clicou');
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				formData,
				process.env.NEXT_PUBLIC_USER_ID
			);
			toast.success('Enviado com Sucesso');
		} catch (error) {
			toast.error('Falha ao Enviar');
		} finally {
			reset();
		}
	};

	return (
		<Container>
			<CardContainer>
				<TextSection>
					<MainContainer>
						<FormContainer onSubmit={handleSubmit(handleDataSubmit)}>
							<Title>
								Seja Parte da Ação: Preencha o Formulário de Inscrição da Black
								Skulls Tactical Team
							</Title>
							<Input
								placeholder='NOME'
								type='text'
								error={errors?.name?.message}
								{...register('name')}
							/>
							<Input
								placeholder='E-MAIL'
								type='email'
								error={errors?.email?.message}
								{...register('email')}
							/>
							<Input
								placeholder='WHATS APP'
								type='text'
								error={errors?.phone?.message}
								{...register('phone')}
							/>
							<Input
								placeholder='CÓDIGO DE CONVITE'
								type='text'
								error={errors?.code?.message}
								{...register('code')}
							/>
							<Input
								placeholder='O QUE VOCÊ ESPERA DA BLACK SKULLS?'
								textarea
								error={errors?.message?.message}
								{...register('message')}
							/>
						</FormContainer>
						<SubmitButton type='submit'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Enviar
						</SubmitButton>
					</MainContainer>
					{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				</TextSection>
			</CardContainer>
		</Container>
	);
}
