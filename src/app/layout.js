import './globals.css';
import Providers from '@/providers';

export default function RootLayout({ children }) {
	return (
		<html lang='pt-Br'>
			<head>
				<title>Black Skulls Tactical Team</title>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
