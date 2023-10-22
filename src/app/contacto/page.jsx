import TeamComponemt from '@/components/team/TeamComponent'
import PageTransition from '@/components/transitions/PageTransition'

export async function getServersideProps() {
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


const index = async () => {
  const props = await getServersideProps()
  const templateid = props.templateid
  const serviceid = props.serviceid
  const publickey = props.publickey
  
  return (
    
    <div className='h-full'>
    <PageTransition />
        <TeamComponemt templateID={templateid} serviceID={serviceid} publicKEY={publickey} />
    </div>
  )
}


export default index