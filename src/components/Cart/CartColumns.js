import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                  <p className="text-upercase">products</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-upercase">name of products</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-upercase">price</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-upercase">quantity</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-upercase">remove</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-upercase">total</p>
              </div>
          </div>
      </div>
    )
  }
}
