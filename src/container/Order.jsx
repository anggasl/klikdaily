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
        getOrderPayment: [],
        getOrderProduct: [],
        getOrderUnit: [],
        getOrderPrice: [],
        valProduct: '',
        valUnit: '',
        valPrice: 0,
        valTotalPrice: 0,
        showHidden: false,
        statusExpired: true,
        isDisabled: true,
        textInput: []
      }
    }

    componentDidMount() {
      this.optionsName();
      this.optionsProduct();
    }

    optionsName = () => {
      this.setState({isLoading: 'please wait...'});
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
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    optionsDest = () => {
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
          this.setState({getOrderDest: options});
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    addOtherSection = () => {
      this.setState ({ showHidden: true})
      
      fetch('http://kobieducation.com/api/getDummyDailyPayment.php', {
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
            "label" : d.payment
          }))
          this.setState({getOrderPayment: options});
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    selectExpiredDate = () => {
      this.setState({ statusExpired: false })
    }

    optionsProduct = () => {
      this.setState({isLoading: 'please wait...'});
      fetch('http://kobieducation.com/api/getDummyDailyProduct.php', {
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
            "label" : d.product
          }))
          this.setState({getOrderProduct: options});
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    optionsUnit = (event) => {
      this.setState({valProduct : event.value});
      fetch('http://kobieducation.com/api/getDummyDailyUnit.php', {
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
            "label" : d.name
          }))
          this.setState({getOrderUnit: options});
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    setUnit = (event) => {
      this.setState({valUnit : event.value});
    }

    setPrice = (event) => {
      var idProduct = this.state.valProduct;
      var idUnit = this.state.valUnit;
      var qty = event.target.value;

      fetch('http://kobieducation.com/api/getDummyDailyPrice.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then ((responseJson) => {
        if(responseJson.status == 'success'){
          responseJson.data.map(d => {
            if(idProduct == d.id_product && idUnit == d.id_unit){
              var price = parseInt(d.price);
              this.setState({valPrice: d.price, valTotalPrice: price*qty, isDisabled: false})
            } 
          })
        } else {
          console.log(responseJson.message);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }

    addItem = (index) => {
      let textInput = this.state.textInput;
      textInput.push(<input type="text" 
        onChangeText={(text) => this.addValues(text, index)} />);
      this.setState({ textInput });
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
                              <Select placeholder="Name" noOptionsMessage={() => this.state.isLoading} options={this.state.getOrderName} onChange={this.optionsDest} required></Select>
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-lg-4">
                              <label htmlFor="userName">Distribution Center <label style={{color:'red'}}>*</label></label>
                              <Select placeholder="Distribution Center" noOptionsMessage={()=> "No data available"} options={this.state.getOrderDest} onChange={this.addOtherSection} required></Select>
                            </div>
                          </div>
                          <div style={{display: this.state.showHidden ? 'block' : 'none' }}>
                            <div className="row form-group">
                              <div className="col-lg-4">
                                <label htmlFor="userName">Payment Type <label style={{color:'red'}}>*</label></label>
                                <Select placeholder="Payment Type" noOptionsMessage={()=> "No data available"} options={this.state.getOrderPayment} onChange={this.selectExpiredDate}></Select>
                              </div>
                              <div className="col-lg-4">
                                <label htmlFor="userNamea">Expired Date <label style={{color:'red'}}>*</label></label>
                                <input type="date" required
                                        placeholder="Enter user name" className="form-control" id="userName" disabled={this.state.statusExpired}/>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-6">
                                <label htmlFor="userName">Notes</label>
                                <textarea type="text" className="form-control" id="userName"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{display: this.state.showHidden ? 'block' : 'none' }}>
                        <hr/>
                        <div className="row">
                          <label className="col-lg-2 font-bold">Product</label>
                          <div className="col-lg-10">
                            <div className="row form-group">
                              <div className="col-lg-6">
                                <label htmlFor="userName">Product <label style={{color:'red'}}>*</label></label>
                                <Select placeholder="Product Name" options={this.state.getOrderProduct} onChange={this.optionsUnit}></Select>
                              </div>
                              <div className="col-lg-2">
                                <label htmlFor="userName">Unit <label style={{color:'red'}}>*</label></label>
                                <Select placeholder="Unit" options={this.state.getOrderUnit} onChange={this.setUnit}></Select>
                              </div>
                            </div>
                            <div>
                            {this.state.textInput.map((value) => {
                              return value
                            })}
                            </div>
                            <div className="row form-group">
                              <div className="col-lg-2">
                                <label htmlFor="userName">Quantity <label style={{color:'red'}}>*</label></label>
                                <input type="text" required
                                        placeholder="Quantity" className="form-control" id="userName" onChange={this.setPrice}/>
                              </div>
                              <div className="col-lg-2">
                                <label htmlFor="userNamea">Price <label style={{color:'red'}}>*</label></label>
                                <input type="text" required
                                        placeholder="0" value={this.state.valPrice} className="form-control" id="userName"/>
                              </div>
                              <div className="col-lg-4">
                                <label htmlFor="userNamea" className="label-right">Total Price <label style={{color:'red'}}>*</label></label>
                                <input type="text" value={this.state.valTotalPrice} required className="form-control" id="userName" readOnly/>
                              </div>
                            </div>
                            <div className="row form-group">
                              <div className="offset-lg-4 col-lg-2">
                                <label htmlFor="userName">Total Nett Price</label>
                              </div>
                              <div className="col-lg-2 label-right">
                                <label htmlFor="userName">{this.state.valTotalPrice}</label>
                              </div>
                            </div>
                            <div className="row form-group">
                              <button onClick={this.addItem} className="btn btn-warning waves-effect waves-light">
                                  NEW ITEM <i className="fa fa-plus"></i>
                              </button>
                            </div>
                            <div className="row form-group">
                              <div className="offset-lg-4 col-lg-2">
                                <label htmlFor="userName">Total</label>
                              </div>
                              <div className="col-lg-2 label-right">
                                <label htmlFor="userName">{this.state.valTotalPrice}</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group text-right m-b-0">
                        <button type="reset" style={{background:'transparent', color:'#000', border:'none'}} className="btn btn-secondary">
                          CANCEL
                        </button>
                        <button style={{ background: this.state.isDisabled ? '#f5f5f5' : '#1AB061', color: this.state.isDisabled ? '#a6a4a4' : '#FFFFFF'}} className="btn waves-effect waves-light m-l-5" type="submit" disabled={this.state.isDisabled}>
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
