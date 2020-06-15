class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false
    }
  }

  render() {
    return (
      <div>
        <button type="button"
                className="btn btn-primary mt-4
                " onClick={() => this.setState({shown: true})}>
          Show Form
        </button>
        <button type="button" disabled={this.state.shown === false}
                className="btn btn-danger mt-4 ml-2"
                onClick={() => this.setState({shown: false})}>
          Hide Form
        </button>
        <form className={
          this.state.shown ? `mt-4` : `mt-4 d-none`}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" placeholder="Enter a vaild email"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea type="text" className="form-control" placeholder="Address">
                        </textarea>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="City">City</label>
              <input type="text" className="form-control" placeholder="City"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <select className="form-control">
                <option>Choose...</option>
                <option>Madhya Pradesh</option>
                <option>Dehli</option>
                <option>Gujrat</option>
                <option>Rajsthan</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="zip">Zip</label>
              <input type="text" className="form-control" placeholder="Pin Code"/>
            </div>
            <div className="form-row col-md-4">
              <div className="form-group">
                <input type="checkbox" id="vehicle1" name="vehicle1"/>
                <label htmlFor="vehicle1"> I have a bike</label><br/>
              </div>
              <div className="form-group ml-4">
                <input type="checkbox" id="vehicle2" name="vehicle2"/>
                <label htmlFor="vehicle2"> I have a car</label><br/>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<
  App/>, document.getElementById('profile'))