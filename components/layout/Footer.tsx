import Image from "next/image";


export default function FooterFlowSee(){
    return(
       <footer className="bg-[#1A1A1A] w-full py-0 px-40">
        <Image
         src="/images/footer/logo.png"
         alt="FlowSee Logo"
         width={180}
  height={60}
/>
       </footer>
    )
}