import Image from 'next/image'
import Link from 'next/link';

import Greetings from '@/components/Greetings';
// import Contact from '@/components/Contact';
import {Contact, About} from '@/components/Contact';
import NavBar from '@/components/NavBar';
import Heading from '@/components/Heading';
import Gallery from '@/components/Gallery';
export default function Home() {


  return (
    <main>
      <NavBar/>
      <Heading/>
      <Gallery/>
      <Contact/>
      <About/>
      

    
<Greetings patiendID="P123456"/>
{/* <Greetings age="28"/> */}


<Link href='/contact'> contact Us </Link>
    </main>
  )
}
