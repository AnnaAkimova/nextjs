import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { NextResponse, NextRequest } from 'next/server'

export default function Home() {
   return NextResponse.redirect('/hello-nextjs')
}
