import React from "react";
import "./UserInfo.css";
import profileImg from "../../images/profileImg.png";

const UserInfo = () => {
  return (
    <>
      <div id="user-info">
        <div className="container user-info">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={profileImg}
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>John Doe</h4>
                        <p className="text-secondary mb-1">
                          Full Stack Developer
                        </p>
                        <p className="text-muted font-size-sm">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">ID</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Kenneth Valdez
                      </div>
                    </div>
                    <hr />
                    
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (239) 816-9029
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">About</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (320) 380-4539
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">likes</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (320) 380-4539
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Dislikes</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (320) 380-4539
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
