import Section2 from "../../components/cus/about/Section2.tsx";
import Section3 from "../../components/cus/about/Section3.tsx";
import Section4 from "../../components/cus/about/Section4.tsx";
import SectionTitle from "../../components/cus/about/SectionTitle.tsx";

const AboutPage = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle />
        <Section2/>
        <Section3/>
        <Section4/>
      </div>
    </div>
  );
};

export default AboutPage;
