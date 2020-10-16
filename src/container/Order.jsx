import React, {Component} from 'react';
import Select from 'react-select';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/icons.css';

class Order extends Component {
    constructor(props) {
      super(props);
      this.state = {
        getOrderName: [],
        getOrderDest: [],
        showHidden: false,
      }
    }

    componentDidMount() {
      this.optionsName();
      this.optionsDest();
    }

    optionsName = (event) => {
      fetch('http://kobieducation.com/api/getDummyDailyName.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then ((responseJson) => {
        if(responseJson.status == 'success'){
          const options = responseJson.data.map(d => ({
            "value" : d.id,
            "label" : d.employee_name
          }))
          this.setState({getOrderName: options});
          this.optionsDest(event.value);
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    optionsDest = (event) => {
      alert(event)
      if(event == null){
        const options = [
          { value: '', label: 'No data available' }
        ]
        this.setState({getOrderDest: options});
      }else {
        fetch('http://kobieducation.com/api/getDummyDailyDest.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then ((responseJson) => {
          if(responseJson.status == 'success'){
            const options = responseJson.data.map(d => ({
              "value" : d.id,
              "label" : d.dest
            }))
            this.setState({getOrderDest: options, showHidden:true});

          } else {
            console.log(responseJson.message);
          }
        })
        .catch( (error) => {
          console.log(error);
        })
      }
    }

    render() {
        return (
            <div className="container-fluid">
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <h4 className="header-title m-b-15 m-l-20 font-bold">Create Order</h4>
                  <div className="card-box">

                    <form action="#" data-parsley-validate>
                      <div className="row">
                        <label className="col-lg-2 font-bold">Detail</label>
                        <div className="col-lg-10">
                          <div className="row form-group">
                            <div className="col-lg-6">
                              <label htmlFor="userName">Name <label style={{color:'red'}}>*</label></label>
                              <Select options={this.state.getOrderName} onChange={this.optionsName}></Select>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-lg-4">
                              <label htmlFor="userName">Distribution Center <label style={{color:'red'}}>*</label></label>
                              <Select options={this.state.getOrderDest} onChange={this.optionsDest}></Select>
                            </div>
                          </div>
                          <div style={{display: this.state.showHidden ? 'block' : 'none' }}>
                            <div className="row form-group">
                              <div className="col-lg-4">
                                <label htmlFor="userName">Payment Type <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                              <div className="col-lg-4">
                                <label htmlFor="userNamea">Expired Date <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-6">
                                <label htmlFor="userName">Notes</label>
                                <textarea type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{display: this.state.showHidden ? 'block' : 'none' }}>
                        <div className="row">
                          <label className="col-lg-2 font-bold">Product</label>
                          <div className="col-lg-10">
                            <div className="row form-group">
                              <div className="col-lg-6">
                                <label htmlFor="userName">Product <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                              <div className="col-lg-2">
                                <label htmlFor="userName">Unit <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-2">
                                <label htmlFor="userName">Quantity <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                              <div className="col-lg-2">
                                <label htmlFor="userNamea">Price <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                              <div className="col-lg-4">
                                <label htmlFor="userNamea" className="label-right">Total Price <label style={{color:'red'}}>*</label></label>
                                <input type="text" name="nick" required
                                        placeholder="Enter user name" className="form-control" id="userName"/>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="offset-lg-4 col-lg-2">
                                <label htmlFor="userName">Total Nett Price</label>
                              </div>
                              <div className="col-lg-2 label-right">
                                <label htmlFor="userName">300.000</label>
                              </div>
                            </div>
                            <div className="row form-group">
                              <button className="btn btn-warning waves-effect waves-light" type="submit">
                                  NEW ITEM <i className="fa fa-plus"></i>
                              </button>
                            </div>
                            <div className="row form-group">
                              <div className="offset-lg-4 col-lg-2">
                                <label htmlFor="userName">Total</label>
                              </div>
                              <div className="col-lg-2 label-right">
                                <label htmlFor="userName">1.000.000</label>
                              </div>
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
