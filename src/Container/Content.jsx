import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row" style={{marginTop:'50px'}}>
                        <div className="col-md-12" style={{marginLeft:'27px'}}>
                            <div className="box">
                                <div className="box-header with-border" style={{background:'#FCF7F4'}}>
                                    <h3 className="box-title">Tracking</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong>Map will be show here...</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="box-footer">
                                    <div className="row">
                                        <div className="col-sm-3 col-xs-6">
                                            <div className="description-block border-right">
                                                <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                <h5 className="description-header">$35,210.43</h5>
                                                <span className="description-text">TOTAL REVENUE</span>
                                            </div>
                                        </div>    
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}