import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <>
    <div className='m-3'>
         <Accordion style={{width:"60%",margin:"auto"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h6 className='card-title'>On What does PP Reddy Retirement Home work?</h6></Accordion.Header>
        <Accordion.Body>

          <p>We feel that it is our duty to treat elderly people with love and affection because they just don’t need it, but deserve it! It is the place that you feel most relaxed and happy. Each member of our team is committed for bringing a positive change in their life.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><h6 className='card-title'>Why we must choose PP Reddy Retirement Home?</h6></Accordion.Header>
        <Accordion.Body>
        
       <p>PP Reddy Retirement Home provides the required high-quality care services. Our care blended with comfort and compassion puts life back into lives. The infrastructure is designed on 4 Acres of lush green area, away for noise and pollution. The building is designed for senior citizens keeping their comfort in first place.</p>
        </Accordion.Body>
      </Accordion.Item>

     <Accordion.Item eventKey="2">
        <Accordion.Header> <h6 className="card-title">Is healthy food providec in your PP Reddy Retirement Home?</h6></Accordion.Header>
        <Accordion.Body>
<p>Vegetables, fruits everything in our Retirement Home is organic. Specialized cooks, diet plans & well designed dining hall makes our residents to enjoy food to their heart.</p>
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="3">
        <Accordion.Header><h6 className="card-title">Do you haves a special medical team for routine health chechups?</h6></Accordion.Header>
        <Accordion.Body>
Yes we have Senior Medical Doctor and team of nurses taking good care of our residents. They are normally available twenty-four hours a day, seven days a week, and will attend to all emergencies, decide and direct the specific care in consultation with specialists or the medical team every day.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="4">
        <Accordion.Header> <h6 className="card-title">What are the special features available during medical emergency?</h6></Accordion.Header>
        <Accordion.Body>
<p>It is a boon to our retirement home that many super specialty hospitals like Apolo-DRDO, Owaisi, Kamineni Hospitals, Om Sai Super Specialty Hospital and Global Hospitals are a stone throw away from our retirement home. In a medical emergency, first we take our resident to the nearby super specialty hospital. Later we inform the family members about the medical condition of our resident.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><h6 className="card-title">IS there any alternative transort available in case of emergency like ambulance?</h6></Accordion.Header>
        <Accordion.Body>
    Yes we do have a special vehicle an ambulance with a team of drivers to meet the special needs of our residents.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="6">
        <Accordion.Header><h6 className="card-title">When do my family members will be informed in case of emergency?</h6></Accordion.Header>
        <Accordion.Body>
        Dont worry about this. We keep contact numbers of your family members at the time of admission and they will be informed immediately as soon as possible.
        </Accordion.Body>
      </Accordion.Item>

       {/* <Accordion.Item eventKey="7">
        <Accordion.Header><h6 className="card-title"></h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
   </div>
    </>
  )
}

export default Faq