import Image from 'next/image'
import Link from 'next/link';

import Greetings from '@/components/Greetings';
export default function Home() {
  var a = 10;
  var b = 20;
  var c = a + b;
  //This is a getColor function
  //  function getColor() {
// return 'Blue'
//   }
const getColor = () => {
  return 'Blue'
}
  var color = getColor()

  //jsx example
  const element = <h1> Hello World, this is Munmun!</h1>
  return (
    <main>
{element}
<h2>{color}</h2>
<Link href='/about'> About Us </Link>
    </main>
  )
}
