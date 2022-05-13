import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">NAME</label>
            <input placeholder="Enter Name" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">ROLL NO</label>
            <input placeholder="Enter Roll no" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">ADM NO</label>
            <input placeholder="Enter ADM NO" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">MOBILE NO</label>
            <input placeholder="Enter Moble No" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">COLLEGE</label>
        <input placeholder="Enter clg" className="form-control"/>
        </div>
        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">USERNAME</label>
            <input placeholder="Enter username" className="form-control"/>   
        </div>
        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">PASSWORD</label>
            <input placeholder="Enter password" className="form-control"/>  
        </div>
        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button className="btn btn-primary">RGISTER</button>

        </div>
        
    </div>
   </div>
   
  );
}

export default App;
