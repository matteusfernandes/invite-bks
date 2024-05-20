'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { http } from '@/lib/http';

import {
	Container,
	CardContainer,
	Title,
	TextSection,
	ImageSection,
	MainContainer,
	FormContainer,
	SubmitButton,
	ErrorMessage,
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
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleCode = useCallback(async (code) => {
		try {
			const { data } = await http.get(`/codes/${code}`);
			return data;
		} catch (error) {
			toast.error('Código inválido ou inexistente!');
		}
	}, []);

	const updateStatus = useCallback(async (code) => {
		await http.put(`/codes/update/${code}`);
	}, []);

	const handleDataSubmit = async (formData) => {
		try {
			const code = await handleCode(formData.code.toUpperCase());
			if (code && code === 'OPEN') {
				await updateStatus(formData.code);
				await emailjs.send(
					process.env.NEXT_PUBLIC_SERVICE_ID,
					process.env.NEXT_PUBLIC_TEMPLATE_ID,
					formData,
					process.env.NEXT_PUBLIC_USER_ID
				);
				toast.success('Enviado com Sucesso!');
				reset();
				router.push('/congratulations');
			}
			if (code && code === 'CLOSE') toast.error('Código já ultilizado!');
		} catch (error) {
			console.log(error);
			toast.error('Falha ao Enviar');
		} finally {
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
							{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
							<Input
								placeholder='O QUE VOCÊ ESPERA DA BLACK SKULLS?'
								textarea
								error={errors?.message?.message}
								{...register('message')}
							/>
							<SubmitButton type='submit'>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Enviar
							</SubmitButton>
						</FormContainer>
					</MainContainer>
				</TextSection>
				<ImageSection />
			</CardContainer>
		</Container>
	);
}
