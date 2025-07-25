import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/patterns/FaqCard"

export const FAQLandingPage = () => {

  const FaqData = [
    {
      title: "What types of websites can you create?sss",
      description: "We have the capability to create various types of websites, including static websites for"
    }, {
      title: "Do you provide website maintenance services after the site is launched?",
      description: `Yes, absolutely! We offer comprehensive website maintenance services to ensure that
            your site remains up-to-date, secure, and functioning smoothly even after it's launched. Our
            team is dedicated to providing ongoing support to keep your website running seamlessly.`
    }, {
      title: "Can you help with website content creation?",
      description: `Of course! We understand the importance of engaging and relevant content for your
            website. Our team of experienced content creators can assist you in crafting compelling and
            informative content that resonates with your audience and aligns with your brand.`
    }, {
      title: "Is search engine optimization (SEO) included in your website services?",
      description: `Absolutely yes! We believe in maximizing the online visibility of your website. As part of
            our website services, we incorporate effective search engine optimization strategies to
            enhance your website's ranking and visibility on search engines, helping you reach your target
            audience more effectively.`
    }
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      <div>
        {FaqData.map((data: any, id: number) =>
          <AccordionItem value={`item-${id}`} key={id}>
            <AccordionTrigger>{data.title}</AccordionTrigger>
            <AccordionContent>
              {data.description}
            </AccordionContent>
          </AccordionItem>
        )}
      </div>
    </Accordion>
  )
}