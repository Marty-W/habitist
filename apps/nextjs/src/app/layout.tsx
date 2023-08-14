import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '~/styles/globals.css'

import ThemeProvider from '../components/themeProvider'
import { TRPCReactProvider } from './providers'

const fontSans = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

//TODO edit metadata
export const metadata: Metadata = {
	title: 'HabitSync',
}

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={['font-sans', fontSans.variable].join(' ')}>
				<TRPCReactProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<div>{props.children}</div>
					</ThemeProvider>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
