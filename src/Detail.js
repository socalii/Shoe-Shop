import { React, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function Detail(props) {
  let { id } = useParams()
  let history = useHistory()

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={'https://codingapple1.github.io/shop/shoes1.jpg'}
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className='btn btn-danger'>SUBMIT ORDER</button>
          <button
            className='btn btn-danger'
            onClick={() => {
              history.goBack()
            }}
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail
