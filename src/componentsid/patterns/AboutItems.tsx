import { AboutCard } from "../atoms/AboutCard"

export const AboutItems = () => {
  return (
    <div className="w-full h-max ">
      <AboutCard title="Domain & Hosting" description="Get your website off the ground with a complimentary domain & hosting package! No need
to worry about all technicalities – we’ve got you covered every step of the way." image="Domain" />
      <AboutCard title="Responsive Design" description="Say goodbye to awkward website views on mobile devices! Our designs are crafted to ensure
that your site looks stunning and functions flawlessly across all screens, whether it's a
desktop, smartphone, or tablet. Enjoy a seamless user experience that keeps your visitors
engaged wherever they are." image="Responsive" background={true} />
      <AboutCard title="Free SSL" description="With our free SSL certificate, your website is not only protected from online threats, but it
also adds that extra layer of trust and professionalism." image="Ssl" />
    </div>
  )
}