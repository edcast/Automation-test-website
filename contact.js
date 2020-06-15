class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    }
  }

  render() {
    return <div>
      <button type="button"
              className="btn btn-primary mt-4" onClick={() => this.setState({showForm: true})}>
        Render Form
      </button>
      <button type="button" disabled={this.state.showForm === false}
              className="btn btn-danger mt-4 ml-2"
              onClick={() => this.setState({showForm: false})}>
        Delete Form
      </button>
      {
        this.state.showForm ?
          <form className="mt-4">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="name3">Name</label>
                <input type="text" id="name3" className="form-control" placeholder="Enter Your Name"/>
              </div>
              <div className="form-group col-md-6">
                <label for="email3">Email</label>
                <input type="email" id="email3" className="form-control" placeholder="Enter a vaild email"/>
              </div>
            </div>
            <div className="form-group">
              <label for="add3">Address</label>
              <textarea type="text" id="add3" className="form-control" placeholder="Address">
              </textarea>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="city3">City</label>
                <input type="text" id="city3" className="form-control" placeholder="City"/>
              </div>
              <div className="form-group col-md-4">
                <label for="state3">State</label>
                <select className="form-control" id="state3">
                  <option>Choose...</option>
                  <option>Madhya Pradesh</option>
                  <option>Dehli</option>
                  <option>Gujrat</option>
                  <option>Rajsthan</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="zip3">Zip</label>
                <input type="text" id="zip3" className="form-control" placeholder="Pin Code"/>
              </div>
              <div className="form-row col-md-4">
                <div className="form-group">
                  <input type="checkbox" id="vehicle1b" name="vehicle1"/>
                  <label for="vehicle1b"> I have a bike</label><br/>
                </div>
                <div className="form-group ml-4">
                  <input type="checkbox" id="vehicle2b" name="vehicle2"/>
                  <label for="vehicle2b"> I have a car</label><br/>
                </div>
              </div>
            </div>
            <button type="submit" id="submit3" className="btn btn-primary">Submit</button>
          </form>
          :
          ''
      }
    </div>
  }
}

ReactDOM.render(<Contact/>, document.getElementById('contact'))
