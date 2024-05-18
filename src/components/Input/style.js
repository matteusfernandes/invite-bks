import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-flow: column nowrap;
	margin-bottom: 20px;
	width: 100%;
	position: relative;
`;

export const Label = styled.span`
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.WHITE[900]};
	margin-bottom: 10px;
	width: 100%;
`;

export const InputText = styled.input`
	font-size: 16px;
	padding: 10px;
	margin: 10px auto;
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
		color: #fff;
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

export const TextArea = styled.textarea`
	border: 1px ${({ theme }) => theme.COLORS.WHITE[900]} solid;
	background: ${({ theme }) => theme.COLORS.WHITE[900]};
	padding: 10px 20px;
	height: 150px;
	width: 100%;
	font-size: 18px;
	margin: 10px auto;
	color: #1e1e1e;
	border-radius: 4.5px;
`;

export const SelectText = styled.select`
	border: 1px ${({ theme }) => theme.COLORS.WHITE[900]} solid;
	background: rgba(255, 255, 255, 0.5);
	width: 100%;
	padding: 0 20px;
	height: 50px;
	font-size: 18px;
	color: #1e1e1e;
	border-radius: 4.5px;
`;

export const WrapperButtons = styled.div`
	width: 100%;
	display: flex;
`;

export const AddedButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: transparent;
	height: 50px;
	width: 50px;
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}
`;

export const RemoveButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background-color: transparent;
	height: 50px;
	width: 50px;
	font-size: 28px;
	bottom: 10px;
	right: 50px;
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}
`;

export const Error = styled.p`
	color: #f1f1f1;
	font-size: 18px;
	margin-top: 10px;
	text-transform: capitalize;
	width: 100%;
`;
