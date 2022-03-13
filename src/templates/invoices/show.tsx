import {Invoice} from '../../schemas/types/invoice'
import * as React from 'react'

export default function showInvoice(invoice: Invoice){
    return <div>
            <style>{`p : {color: red;}`}
            </style>
            <p>Choice : {invoice.choice}</p>
        </div>
}