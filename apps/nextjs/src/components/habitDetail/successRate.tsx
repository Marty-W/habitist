import { Card, Title } from '@tremor/react'

import Counter from '~/components/ui/animatedCounter'

interface Props {
	rate: string
}

const SuccessRate = ({ rate }: Props) => {
	return (
		<Card>
			<Title>Success Rate</Title>
			<Counter
				from={0}
				to={Number(rate)}
				className="text-ssecondary-foreground text-tremor-metric font-semibold"
				animationDuration={3}
				postValue=" %"
			/>
		</Card>
	)
}

export default SuccessRate
