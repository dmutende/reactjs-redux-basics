import React from "react";

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form className="form-inline">
                        <div className="form-group">
                            <input className="form-control" type="text" />
                            <button
                                className="btn btn-primary"
                                onClick={() => props.changeUsername('Alexa')}>Change the Username
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};