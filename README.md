<<<<<<< HEAD
# invoice-app

The idea was taken from FrontendMentor.

**Features**

- Build this project as a full-stack application
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode

- login page (user authentication)
- home page (see all invoices, filter, create a new invoice)
- create a new invoice page
- each invoice => invoice page (see invoice details (edit, delete, mark as paid))

**API endpoints**

- create a new invoice => app.post('/api/v1/invoices')
- get single invoice => app.get('/api/v1/invoices/:id')
- delete an invoice => app.delete('/api/v1/invoices/:id')
- update invoice => app.patch('api/v1/invoices/:id)
- get all invoices('/api/v1/invoices')

