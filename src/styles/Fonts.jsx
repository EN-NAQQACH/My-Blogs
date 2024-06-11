import {Exo_2} from 'next/font/google';
import {Playfair_Display} from 'next/font/google';
const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-Exo-2',
  weight: ['600']
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-Playfair-Display',
  weight: ['800']
})
export {exo2, playfair}