import FormSendMes from "../../components/cus/contact/FormSendMes";
import InfContact from "../../components/cus/contact/InfContact";
import Map from "../../components/cus/contact/Map";
import SectionTitle from "../../components/cus/contact/SectionTitle";

const ContactPage = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex flex-col gap-8">
            <InfContact />
            {/* ghim map */}
            <Map />
          </div>
          <FormSendMes/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
