import { PlanCardHeader } from "../atoms/PlanCardHeader"
import { Buttons } from "../atoms/buttons"
import { CheckContainer } from "./CheckContainer"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

interface PlanCardType {
  plan: string,
  price: string,
  benefit: string,
  isPopuler: boolean,
  desc: string,
  product: string
}

export const PlanCard = ({ plan, price, benefit, isPopuler, desc, product }: PlanCardType) => {
  const router = useRouter()
  const pathname = usePathname()
  const ChatBisnis = ['+6287754146077', '+628990054659'];
  function getRandomElement(array: any) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const randomPhoneNumber = getRandomElement(ChatBisnis);

  const TextChat = `Hello admin, I would like to order the website **${product}** package __${plan}__ with the price *${price}*.`
  const TextChatID = `Halo min, saya ingin memesan website **${product}** paket __${plan}__ dengan harga *${price}*.`

  const HandleBuy = () => {
    router.push(`https://wa.me/${randomPhoneNumber}?text=${pathname?.includes('id') ? encodeURIComponent(TextChatID) : encodeURIComponent(TextChat)}`)
  }

  return (
    <div className={'bg-white dark:bg-slate-950 rounded-xl w-[80%] md:w-[370px] px-5 py-6 shadow-2xl'}>
      <PlanCardHeader plan={plan} price={price} desc={desc} isPopuler={isPopuler} />
      <Buttons onBuy={HandleBuy} className="!w-full !py-[6px] !from-[#110820] !to-[#110820] dark:!from-white dark:!to-white dark:!text-black rounded-md px-1 text-white mb-2" type="button">Select</Buttons>
      <CheckContainer title={benefit} />
    </div>
  )
}