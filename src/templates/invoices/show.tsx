import {Invoice} from '../../schemas/types/invoice'
import * as React from 'react'

export default function showInvoice(invoice: Invoice){
    return <div>
            <style>{`p : {color: red;}`}
            </style>
            <p>Name : {invoice.customer.name}</p>
            <p>Address : {invoice.customer.address.street + ", " + invoice.customer.address.zipcode + " " + invoice.customer.address.city + ", " + invoice.customer.address.country + (invoice.customer.address.additional ? ", " + invoice.customer.address.additional : '')}</p>
            <br/>
            <p>Biller :</p>
            <p>- Phone Number : {invoice.biller.phoneNumber}</p>
            <p>- Email : {invoice.biller.email}</p>
            <p>- Invoice Legal footer : {invoice.biller.invoiceLegalFooter}</p>
            <p>- Address : {invoice.biller.address.street + ", " + invoice.biller.address.zipcode + " " + invoice.biller.address.city + ", " + invoice.biller.address.country + (invoice.biller.address.additional ? ", " + invoice.biller.address.additional : '')}</p>
            <br/>
            <p>Items Invoice : </p>
            {
                invoice.itemInvoices.map(
                    (item) => 
                    <div>
                        <br />
                        <p>{item.description + " - " +item.quantity}</p>
                        <p>Unit price without taxes : {item.unitPriceWithoutTax}€</p>
                        <p>Taxes : {item.taxPercent}%</p>
                    </div>
                )
            }
        </div>
}