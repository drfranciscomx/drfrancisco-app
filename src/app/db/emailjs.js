
export async function getEmailJsServersideProps() {
    //email js service Ids
    const templateid = process.env.EMAILJS_TEMPLATE_ID
    const serviceid = process.env.EMAILJS_SERVICE_ID
    const publickey = process.env.EMAILJS_PUB_KEY
    return {
        templateid,
        serviceid,
        publickey,
        }
  
  }