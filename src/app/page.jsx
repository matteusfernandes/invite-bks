'use client';

require('dotenv').config();

import React, { useState } from 'react';

import {
	Container,
	CardContainer,
	Title,
	Description,
	Link,
	ErrorMessage,
	TextSection,
	ImageSection,
	MainContainer,
} from './style';

export default function Home() {
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<Container>
			<CardContainer>
				<TextSection>
					<MainContainer>
						<Title>
							Faça Parte de uma Nova Era: Junte-se à Black Skulls Tactical Team
						</Title>
						<Description>
							Sabemos que você já é parte de uma equipe dedicada e apaixonada
							pelo jogo tático. No entanto, gostaríamos de apresentar a você uma
							alternativa que pode complementar e enriquecer ainda mais sua
							jornada no mundo do airsoft.
						</Description>
						<Description>
							A Black Skulls Tactical Team é mais do que apenas uma equipe de
							airsoft, somos uma comunidade unida por nossa paixão pelo jogo
							estratégico e pela camaradagem. Aqui, você encontrará um ambiente
							acolhedor e uma abordagem centrada no desenvolvimento pessoal e no
							trabalho em equipe.
						</Description>
						<Description>
							Nossa equipe se destaca não apenas pelos desafios táticos que
							oferecemos, mas também pela forte ênfase na inclusão e no respeito
							mútuo entre os membros. Valorizamos a diversidade de perspectivas
							e habilidades, e acreditamos que cada membro contribui de forma
							única para o nosso sucesso coletivo.
						</Description>
						<Description>
							Ao se juntar à Black Skulls, você terá acesso a oportunidades
							exclusivas de treinamento, eventos emocionantes e uma comunidade
							de jogadores dedicados e apaixonados. Estamos comprometidos em
							proporcionar uma experiência enriquecedora e gratificante para
							todos os nossos membros.
						</Description>
						<Description>
							Convidamos você a considerar esta oportunidade de fazer parte de
							uma nova era no mundo do airsoft. Junte-se à Black Skulls Tactical
							Team e descubra o que nos torna uma equipe verdadeiramente
							excepcional.
						</Description>
						<Description>
							Estamos ansiosos para recebê-lo em nossas fileiras.
						</Description>
						<Link href='/form'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Junte-se a nós
						</Link>
					</MainContainer>
					{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				</TextSection>
				<ImageSection />
			</CardContainer>
		</Container>
	);
}
