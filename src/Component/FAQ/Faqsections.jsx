import { Typography } from "@material-tailwind/react";
import Faq from "./Faq";
import Title from "../SharedComponent/Title/Title";
import ImageSections from "./ImageSections";

const Faqsections = () => {
    return (
        <div className="container mx-auto mb-7">
            <div className="flex-1 lg:flex  justify-around items-center mx-5 ">
                {/* fa que section */}
                <div>
                    <Title title="FAQ’S"></Title>
                    <Typography variant="h2" className="font-bold">
                        Frequently <br /> Asked Questions.
                    </Typography>
                    <Faq></Faq>
                </div>
                {/* fa que image section */}
                <div className="mx-10 mt-10 mb-10">
                    <ImageSections></ImageSections>
                </div>
            </div>
        </div>
    );
};

export default Faqsections;
