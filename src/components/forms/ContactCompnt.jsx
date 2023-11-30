import React from 'react';
import ContactForm from './ContactForm';
import { getEmailJsServersideProps } from '@/app/db/emailjs';

const ContactCompnt = async () => {
  const props = await getEmailJsServersideProps();
  const templateid = props.templateid;
  const serviceid = props.serviceid;
  const publickey = props.publickey;

  return (
    <div className="flex flex-row md:flex-col ">
      <div className="w-full z-10">
        <div className=" w-[70%] sm:w-[95%] mx-auto pb-20 mt-10">
          <ContactForm
            templateID={templateid}
            serviceID={serviceid}
            publicKEY={publickey}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCompnt;
