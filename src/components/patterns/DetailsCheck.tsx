import { Checked } from "../atoms/checked"

export const DetailsCheck = () => {
    return (
        <div className="flex gap-7 md:gap-10 bg-white flex-col h-[200px] flex-wrap w-[90%] md:w-[500px] mt-5 ">
            <Checked title="SEO" />
            <Checked title="Free SSL" />
            <Checked title="Responsive Design" />
            <Checked title="Domain" />
            <Checked title="Hosting" />
        </div>

    )
}