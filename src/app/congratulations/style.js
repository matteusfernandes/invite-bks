'use client';

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
`;

export const Container = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	background-image: linear-gradient(
		132deg,
		rgba(0, 0, 0, 0.9),
		rgba(0, 0, 0, 0.8) 50%,
		rgba(0, 0, 0, 0.9)
	);
	flex-flow: column nowrap;
	margin-bottom: 20px;
	// margin: 50px auto 0;

	&::before {
		content: '';
		width: 100;
		height: 100%;
		border-radius: 8px;
		position: absolute;
		z-index: -1;
		animation: ${spin} 2.5s linear infinite;
	}

	&::after {
		position: absolute;
		content: '';
		z-index: -1;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		transform: scale(0.8);
		filter: blur(calc(30vh / 6));
		opacity: 1;
		transition: opacity 0.5s;
		animation: ${spin} 2.5s linear infinite;
	}

	@media (max-width: 960px) {
		height: 100%;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	border-radius: 8px;
	padding: 20px;
	max-width: 1400px;
	height: 90vh;
	margin: 50px auto;
	background: #000;
	color: rgba(88, 199, 250, 0%);
	box-shadow:
		0 0 5px #03e9f4,
		0 0 25px #03e9f4,
		0 0 50px #03e9f4,
		0 0 200px #03e9f4;
	filter: hue-rotate(270deg);

	&.active {
		filter: hue-rotate(270deg);
	}

	@media (max-width: 960px) {
		flex-flow: column nowrap;
		height: 100%;
		margin: 10px;
	}
`;

export const TextSection = styled.div`
	flex: 2;
	padding: 20px;

	@media (max-width: 960px) {
		padding: 0;
	}
`;

export const Title = styled.h1`
	color: #5ddcff;
	font-size: 45px;
	font-family: 'Protest Guerrilla', sans-serif;
	margin: 30px auto;
	text-align: center;

	@media (max-width: 960px) {
		font-size: 30px;
	}
`;

export const ImageSection = styled.div`
	flex: 1;
	background-image: url('/images/skullWhite.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	@media (max-width: 960px) {
		width: 300px;
		min-height: 200px;
	}
`;

export const MainContainer = styled.div`
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
`;

export const Description = styled.p`
	color: #fff;
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 20px;
	text-align: justify;
	font-family: 'Montserrat', sans-serif;
`;

const animate = keyframes`
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
`;

const animate2 = keyframes`
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%
    }
`;

const animate3 = keyframes`
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
`;

const animate4 = keyframes`
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
`;

const gradientAnimationDelay = [0.25, 0.5, 0.75];

export const Link = styled.a`
	cursor: pointer;
	position: relative;
	display: inline-block;
	padding: 25px 30px;
	margin: 40px 0;
	color: #03e9f4;
	text-decoration: none;
	text-transform: uppercase;
	transition: 0.5s;
	letter-spacing: 4px;
	overflow: hidden;
	margin-right: 50px;
	max-width: 250px;

	&:hover {
		background: #03e9f4;
		color: #050801;
		box-shadow:
			0 0 5px #03e9f4,
			0 0 25px #03e9f4,
			0 0 50px #03e9f4,
			0 0 200px #03e9f4;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
	}

	span {
		position: absolute;
		display: block;

		&:nth-child(1) {
			top: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient(90deg, transparent, #03e9f4);
			animation: ${animate} 1s linear infinite;
		}

		&:nth-child(2) {
			top: -100%;
			right: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(180deg, transparent, #03e9f4);
			animation: ${animate2} 1s linear infinite;
			animation-delay: ${gradientAnimationDelay[0]}s;
		}

		&:nth-child(3) {
			bottom: 0;
			right: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient(270deg, transparent, #03e9f4);
			animation: ${animate3} 1s linear infinite;
			animation-delay: ${gradientAnimationDelay[0]}s;
		}

		&:nth-child(4) {
			bottom: -100%;
			left: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(360deg, transparent, #03e9f4);
			animation: ${animate4} 1s linear infinite;
			animation-delay: ${gradientAnimationDelay[0]}s;
		}
	}

	@media (max-width: 960px) {
		font-size: 10px;
		margin: 40px 40px;
	}
`;
