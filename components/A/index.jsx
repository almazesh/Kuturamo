import Link from 'next/link'

const A = ({ text, href, ...props }) => {
    return (
        <Link href={href}>
            <a {...props}>{text}</a>
        </Link>
    )
}

export default A