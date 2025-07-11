import React from 'react'
import Navbarproduct from './Navbarproduct'

const SearchProduct = () => {
  return (
    <div>
        <Navbarproduct />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PRODUCT NAME</label>
                            <input type="text" className="form-control" />
                            <div className="btn btn-success">SEARCH</div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct