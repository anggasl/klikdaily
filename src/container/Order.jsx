import React, {Component} from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/icons.css';

class Order extends Component {
    render() {
        return (
            <div classNameName="container-fluid">
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <h4 className="header-title m-b-15 m-l-20 font-bold">Create Order</h4>
                  <div className="card-box">

                    <form action="#" data-parsley-validate novalidate>
                      <div className="row">
                        <label className="col-lg-2 font-bold">Detail</label>
                        <div className="col-lg-10">
                          <div className="row form-group">
                            <div className="col-lg-6">
                              <label for="userName">Name *</label>
                              <input type="text" name="nick" required placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-lg-4">
                              <label for="userName">Distribution Center *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-lg-4">
                              <label for="userName">Payment Type *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                            <div className="col-lg-4">
                              <label for="userNamea">Expired Date *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-lg-6">
                              <label for="userName">Notes</label>
                              <textarea type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-lg-2 font-bold">Product</label>
                        <div className="col-lg-10">
                          <div className="row form-group">
                            <div className="col-lg-6">
                              <label for="userName">Product *</label>
                              <input type="text" name="nick" required placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                            <div className="col-lg-2">
                              <label for="userName">Unit *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-lg-2">
                              <label for="userName">Quantity *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                            <div className="col-lg-2">
                              <label for="userNamea">Price *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                            <div className="col-lg-4">
                              <label for="userNamea" className="label-right">Total Price *</label>
                              <input type="text" name="nick" parsley-trigger="change" required
                                      placeholder="Enter user name" className="form-control" id="userName"/>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="offset-lg-4 col-lg-2">
                              <label for="userName">Total Nett Price</label>
                            </div>
                            <div className="col-lg-2 label-right">
                              <label for="userName">300.000</label>
                            </div>
                          </div>
                          <div className="row form-group">
                            <button className="btn btn-warning waves-effect waves-light" type="submit">
                                NEW ITEM <i className="fa fa-plus"></i>
                            </button>
                          </div>
                          <div className="row form-group">
                            <div className="offset-lg-4 col-lg-2">
                              <label for="userName">Total</label>
                            </div>
                            <div className="col-lg-2 label-right">
                              <label for="userName">1.000.000</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group text-right m-b-0">
                        <button type="reset" style={{background:'transparent', color:'#000', border:'none'}} className="btn btn-secondary">
                          CANCEL
                        </button>
                        <button className="btn btn-success waves-effect waves-light m-l-5" type="submit">
                          CONFIRM
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Order;
