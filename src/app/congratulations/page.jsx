'use client';

import React, { useState } from 'react';

import {
	Container,
	CardContainer,
	Title,
	TextSection,
	ImageSection,
	MainContainer,
	Description,
	Link,
} from './style';

export default function Form() {
	const [errorMessage, setErrorMessage] = useState('');

	const handleCongrats = () => {
		const timeout = setTimeout(() => {
			window.location.href = 'https://black-skulls.vercel.app';
		}, 1000);

		return () => clearTimeout(timeout);
	};

	return (
		<Container>
			<CardContainer>
				<TextSection>
					<MainContainer>
						<>
							<Title>
								Seu Interesse é Valorizado: Agradecemos sua Candidatura para a
								Black Skulls Tactical Team!
							</Title>
							<Description>
								Em nome de toda a equipe da Black Skulls Tactical Team,
								gostaríamos de expressar nossa sincera gratidão por escolher se
								juntar a nós nesta emocionante jornada. Sua decisão de ingressar
								em nossa equipe não apenas nos enche de orgulho, mas também
								fortalece nossa comunidade e enriquece nossa experiência
								coletiva no mundo do airsoft.
							</Description>
							<Description>
								Valorizamos imensamente a confiança que você depositou em nós e
								estamos ansiosos para trabalhar juntos, compartilhar
								estratégias, desafiar limites e, acima de tudo, criar memórias
								duradouras enquanto desfrutamos do esporte que tanto amamos.
							</Description>
							<Description>
								Saiba que cada membro é essencial para o sucesso e o espírito da
								Black Skulls. Juntos, formamos uma equipe unida, dedicada à
								excelência, ao respeito mútuo e à diversão. Estamos confiantes
								de que sua energia, habilidades e paixão acrescentarão uma
								dimensão valiosa ao nosso grupo.
							</Description>
							<Description>
								Portanto, mais uma vez, obrigado por se juntar à Black Skulls
								Tactical Team. Estamos ansiosos para compartilhar aventuras
								emocionantes, superar desafios e celebrar vitórias ao seu lado.
								Seja bem-vindo!
							</Description>
							<Link
								onClick={handleCongrats}
								href='https://chat.whatsapp.com/GZD83j6FMCd5y9SRNcoAZz'
								target='_blank'
							>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								Whats App
							</Link>
						</>
					</MainContainer>
					{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				</TextSection>
				<ImageSection />
			</CardContainer>
		</Container>
	);
}
