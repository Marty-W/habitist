import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Settings',
}

export default function Layout(props: { children: React.ReactNode }) {
	return <section className="bg-smuted h-screen">{props.children}</section>
}
