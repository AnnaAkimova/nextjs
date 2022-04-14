import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
   const router = useRouter()
      const CustomPanel = [
           {href: '/users', text: 'All Lists user'},
           {href: '/about', text: 'About'}
      ]

    useEffect(() => {}, [CustomPanel]) // All the magic is here

    return (
       <div>
          {CustomPanel.map((item, inx) => (
               <a key={inx} onClick={() => router.push(`${item.href}`)}>{item.text}</a>
          ))}
       </div>
    )
}
