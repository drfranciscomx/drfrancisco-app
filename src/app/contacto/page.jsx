import ContactCompnt from '@/components/forms/ContactCompnt';
import TeamComponemt from '@/components/team/TeamComponent';
import PageTransition from '@/components/transitions/PageTransition';

const ContactPage = () => {
  return (
    <div className="h-full">
      <PageTransition />
      <TeamComponemt />
      <ContactCompnt />
    </div>
  );
};

export default ContactPage;
