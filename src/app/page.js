'use client'  

import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { createAudit, getAudits, redact } from '../../utils/pangea'

export default function Home() {
  const [audits, setAudits] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    getAudits()
      .then((res = {}) => {
        const { events = [] } = res?.data?.result || {}
        const audits = events.map(({ envelope } = {}) => envelope.event || {})
        setAudits(audits)
      })
      .catch(console.error)
  }, [])
  
  return (
    <>
      <Form.Control 
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message" 
        size="lg" 
        type="text"
        value={message} 
      />
      <Button 
        onClick={async () => {
          try {
            const res = await redact(message) || {}
            const messageRedacted = res?.data?.result?.redacted_text 
            await createAudit(message, messageRedacted) 
            setAudits([{ new: messageRedacted, old: message }, ...audits])
            setMessage('')
          } catch (err) {
            console.error(err)
          }
        }}
        variant='primary'
      >
        Submit
      </Button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Old Message</th>
            <th>New Message</th>
          </tr>
        </thead>
        <tbody>
          {
            audits.map((audit = {}, index) => {
              const { 
                new: messageNew, 
                old: messageOld,
              } = audit
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{messageOld}</td>
                  <td>{messageNew}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}
