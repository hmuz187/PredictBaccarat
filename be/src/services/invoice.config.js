
const {invoice, logicMath, aiPrediction, naturalRandom, fixPattern} = require('../models/invoice.model')

class Invoice {
    constructor({
        invoice_owner, invoice_totalPayment, invoice_applyPayment, invoice_detail
    }) {
        this.invoice_owner = invoice_owner
        this.invoice_totalPayment = invoice_totalPayment
        this.invoice_applyPayment = invoice_applyPayment
        this.invoice_detail = invoice_detail
    }

    async createInvoice(invoice_id){
        const newInvoice = await invoice.create({...this, _id: invoice_id})
        if (newInvoice) {
            await insertInventory({
                
            })
        }
    }
}