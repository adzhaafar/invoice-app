import React from 'react'

function Invoice() {
    const [invoiceData, setInvoiceData] = useState('')

    const getInvoiceData = () => {
        try {
            fetch('/invoice')
                .then(res => res.json())
                .then(data => setInvoiceData(data))
        } catch(err) {
            console.log(err)
        }
    }

  return (
      <div onClick={getInvoiceData}>Invoice is here {invoiceData}</div>
  )
}

export default Invoice