import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import faqData from './Faq.json';


const Faq = () => {
  return (
<>
<div className='m-3'>

      <Accordion style={{ width: "60%", margin: "auto" }}>
        {faqData.map((faqs) => (
          <Accordion.Item eventKey={faqs.id} key={faqs.id}>
            <Accordion.Header>
             {faqs.question}
            </Accordion.Header>
            <Accordion.Body>
              {faqs.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
 
    </div>
    </>
  )
}

export default Faq