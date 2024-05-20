'use client';

import styled, { keyframes, css } from 'styled-components';

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
		// background-image: linear-gradient(
		// 	132deg,
		// 	rgba(0, 0, 0, 0.9),
		// 	rgba(0, 0, 0, 0.8) 50%,
		// 	rgba(0, 0, 0, 0.9)
		// );
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
		// background-image: linear-gradient(
		// 	132deg,
		// 	rgba(0, 0, 0, 0.9),
		// 	rgba(0, 0, 0, 0.8) 50%,
		// 	rgba(0, 0, 0, 0.9)
		// );
		opacity: 1;
		transition: opacity 0.5s;
		animation: ${spin} 2.5s linear infinite;
	}

	@media (max-width: 960px) {
		height: 100%;
	}
`;

// export const CardContainer = styled.div`
//   display: flex;
//   // flex-flow: column nowrap;
//   background-color: #12192c;
//   background-image: -webkit-linear-gradient(30deg, #12192c 50%, #2f4f4f 50%);
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   max-width: 1210px;
//   margin: 50px auto;
//   animation: spin 2.5s linear infinite;
// `;
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

	&.active {
		filter: hue-rotate(110deg);
	}

	&.congrats {
		filter: hue-rotate(270deg);
	}

	${({ enrollment }) =>
		enrollment &&
		css`
			filter: hue-rotate(110deg);
		`}

	${({ enrollmentForm }) =>
		enrollmentForm &&
		css`
			filter: hue-rotate(270deg);
		`}

	@media (max-width: 960px) {
		flex-flow: column nowrap;
		height: 100%;
		margin: 10px;
	}
`;

// export const CardContainer = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   display: flex;
//   overflow: hidden;
// `;

export const TextSection = styled.div`
	flex: 2;
	padding: 20px;

	@media (max-width: 960px) {
		padding: 0;
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

export const Description = styled.p`
	color: #fff;
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 20px;
	text-align: justify;
	font-family: 'Montserrat', sans-serif;
`;

export const MainContainer = styled.div`
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
`;

export const Form = styled.div`
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
`;

export const Input = styled.input`
	font-size: 16px;
	padding: 10px;
	margin: 20px auto;
	color: #fff;
	cursor: pointer;
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border: none;
	border-bottom: 2px solid silver;
	background: none;
	outline: none;

	&:hover {
		color: #050801;
		box-shadow:
			0 0 5px #03e9f4,
			0 0 25px #03e9f4,
			0 0 50px #03e9f4,
			0 0 200px #03e9f4;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
	}

	&::placeholder {
		color: #fff;
	}
`;
// export const Input = styled.input`
// 	padding: 10px;
// 	font-size: 16px;
// 	width: 100%;
// 	// border: 1px solid #ccc;
// 	// border-radius: 4px;
// 	margin: 10px auto;

// 	backdrop-filter: blur(3px);
// 	background-color: rgba(255, 255, 255, 0.05);
// 	// border: 1px solid rgba(255, 255, 255, 0.1);
// 	// border-radius: 6px;
// 	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
// 	cursor: pointer;
// 	transition:
// 		background-color 600ms,
// 		border-color 600ms;

// 	border: none;
// 	border-bottom: 2px solid silver;

// 	&:hover {
// 		color: #050801;
// 		box-shadow:
// 			0 0 5px #03e9f4,
// 			0 0 25px #03e9f4,
// 			0 0 50px #03e9f4,
// 			0 0 200px #03e9f4;
// 		-webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
// 	}

// 	&::placeholder {
// 		color: #fff;
// 	}

// 	&:focus ~ label,
// 	&:valid ~ label {
// 		transform: translateY(-20px);
// 		font-size: 15px;
// 		color: #4158d0;
// 	}
// `;

export const Button = styled.a`
	// background-color: #007bff;
	// color: #fff;
	// border: none;
	// border-radius: 4px;
	// padding: 12px 20px;
	// font-size: 16px;
	// cursor: pointer;
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

	// &:nth-child(1) {
	// 	filter: hue-rotate(270deg);
	// }

	// &:nth-child(2) {
	// 	filter: hue-rotate(110deg);
	// }

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

export const SubmitButton = styled.div`
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

	// &:nth-child(1) {
	// 	filter: hue-rotate(270deg);
	// }

	// &:nth-child(2) {
	// 	filter: hue-rotate(110deg);
	// }

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
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 960px) {
		flex-flow: column nowrap;
	}
`;

export const ErrorMessage = styled.div`
	color: red;
	font-size: 14px;
	margin-top: 5px;
`;
