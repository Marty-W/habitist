import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiOutlineCog } from 'react-icons/hi'
import clsx from 'clsx'

const SettingsButton = ({ className }: { className?: string }) => (
    <motion.button whileTap={{ scale: 0.95 }} className={className}>
        <Link href='/account'>
            <HiOutlineCog size='1.8rem' className='text-slate-500 hover:text-slate-700' />
        </Link>
    </motion.button>
)

export default SettingsButton
