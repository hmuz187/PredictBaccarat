import React, { useContext, useEffect, useState } from 'react'
import { AuthStateContext } from '../../../context/auth'
import { getListInvoice } from '../../../apis/client'

import { ButtonNavigate } from '../../../components/client/index'
import './style.scss'


const History = () => {

  const [isList, setIsList] = useState(false)
  const [listInvoice, setListInvoice] = useState([])
  const { user } = useContext(AuthStateContext)

  const { _id: userId, username, email, totalPaid } = user

  useEffect(()=>{showListInvoice()}, [])

  const showListInvoice = async () => {

    const response = await getListInvoice(userId)
    //console.log(response)
    setListInvoice(response.listInvoice)
    setIsList(!isList)
  }

  return (
    <div className='clientPackageBought'>
      <ButtonNavigate />

      <div className='showList'>
        <h3>Hi {username}, here your detail invoices</h3>
      </div>

      {isList ? <>
        <table className='tablePackage'>
          <thead>
            <tr className='title'>
              <th>Index</th>
              <th>OrderID</th>
              <th>Total</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>

          <tbody>
            <tr className='conclude'>
              <td></td>
              <td>No.Invoices: {listInvoice.length}</td>
              <td>{totalPaid} $</td>
              <td></td>
              <td></td>
            </tr>
            {listInvoice.map((invoice, index) => {


              const items = invoice.invoice_detail[0]

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{invoice.invoice_orderId}</td>
                  <td>{invoice.invoice_totalPayment}</td>
                  <td>{invoice.invoice_status}</td>
                  <td>
                    {
                      items.map((item, indexItem) => {
                        const { algorithm, code, id, package: packageName, price, quantity, timePackage } = item
                        return (
                          <div key={indexItem} className="clearfix">
                            <div>
                              <span className="item-name">{indexItem + 1}. {algorithm} - <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{packageName}</span></span>
                            </div>

                            <span className="item-price">{price}$/unit</span>
                            <span className="item-quantity">No: {quantity}</span>
                            <span className="item-quantity">All: {quantity * price} $</span>
                            <span className="item-quantity item-package-total">Time: {timePackage} {timePackage > 1 ? 'days' : 'day'}</span>
                          </div>
                        )
                      })
                    }
                  </td>
                </tr>
              )
            })}
          </tbody>


        </table>
      </> : <>

      </>}


    </div>
  )
}

export default History