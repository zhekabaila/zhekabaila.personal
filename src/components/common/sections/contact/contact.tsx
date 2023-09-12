'use client'

import React, { useEffect, useState } from 'react'

interface EmailPayload {
  from: string | null
  subject: string | null
  message: string | null
}

export const ContactSection = () => {
  const [payload, setPayload] = useState<EmailPayload>({
    from: null,
    subject: null,
    message: null,
  })

  useEffect(() => {
    console.log(payload)
  }, [payload])

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <div className="w-full">
          <label htmlFor="from" className="text-lg font-medium">
            From
          </label>
          <input
            type="text"
            id="from"
            onChange={({ target }: { target: { value: string } }) => {
              setPayload((prevPayload) => {
                return {
                  ...prevPayload,
                  from: target.value,
                }
              })
            }}
            className="w-full p-3 outline-2 outline outline-slate-300 focus:outline-black"
          />
        </div>
        <div className="w-full">
          <label htmlFor="subject" className="text-lg font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            onChange={({ target }: { target: { value: string } }) => {
              setPayload((prevPayload) => {
                return {
                  ...prevPayload,
                  subject: target.value,
                }
              })
            }}
            className="w-full p-3 outline-2 outline outline-slate-300 focus:outline-black"
          />
        </div>
        <div className="lg:col-span-2 w-full">
          <label htmlFor="message" className="text-lg font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-3 outline-2 outline outline-slate-300 focus:outline-black"
            onChange={({ target }: { target: { value: string } }) => {
              setPayload((prevPayload) => {
                return {
                  ...prevPayload,
                  message: target.value,
                }
              })
            }}
            rows={8}
          ></textarea>
        </div>
      </div>
    </section>
  )
}
