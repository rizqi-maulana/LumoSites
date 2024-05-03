import { Checked } from "./checked"
export const BenefitWeb = () => {
    return (
        <div className="px-3 md:px-32 flex flex-col h-[200px] flex-wrap w-[50%] mt-5">
            <Checked title="SEO" />
            <Checked title="Free SSL" />
            <Checked title="Responsive Design" />
            <Checked title="Domain" />
            <Checked title="Hosting" />
        </div>
    )
}