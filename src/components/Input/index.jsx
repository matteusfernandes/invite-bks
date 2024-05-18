import { forwardRef } from 'react';
import {
	Container,
	Error,
	InputText,
	TextArea,
	Label,
	SelectText,
	WrapperButtons,
} from './style';

export const Input = forwardRef(function Input(
	{
		label,
		select,
		children,
		type,
		textarea,
		error,
		value,
		disabled,
		addedField,
		removeField,
		...props
	},
	ref
) {
	return (
		<Container>
			{label && <Label>{label}</Label>}
			<WrapperButtons>
				{!select && !textarea && (
					<InputText
						type={type}
						{...props}
						ref={ref}
						value={value}
						disabled={disabled}
					/>
				)}
				{textarea && (
					<TextArea {...props} ref={ref} value={value} disabled={disabled} />
				)}
				{select && (
					<SelectText {...props} ref={ref}>
						{children}
					</SelectText>
				)}
			</WrapperButtons>
			{error && <Error>{error}</Error>}
		</Container>
	);
});
