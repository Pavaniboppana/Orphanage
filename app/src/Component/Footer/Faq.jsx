import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import faqData from './Faq.json';

const Faq = () => {
  return (
  
<div className='m-3'>
      <Accordion style={{ width: "60%", margin: "auto" }}>
        {faqData.map((faq) => (
          <Accordion.Item eventKey={faq.id} key={faq.id}>
            <Accordion.Header>
             {faq.question}
            </Accordion.Header>
            <Accordion.Body>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
    
  )
}

export default Faq