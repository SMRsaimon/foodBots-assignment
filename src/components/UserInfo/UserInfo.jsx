import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import profileImg from "../../images/profileImg.png";

const UserInfo = () => {
  const [profile, setProfile] = useState({});

  const { name, id, phone, about, address, dislikes, likes } = profile;
  useEffect(() => {
    fetch("http://resturant243.herokuapp.com/userInformation")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <>
      <div id="user-info">
        <div className="container p-3 pt-4">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body m-2">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={profileImg}
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{name}</h4>
                        <p className="text-muted font-size-sm">{address}</p>
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
                      <div className="col-sm-9 text-secondary">{id}</div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{phone}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">About</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{about}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">likes</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {likes?.map((x) => (
                          <span>{x}, </span>
                        ))}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Dislikes</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {dislikes?.map((x) => (
                          <span>{x}, </span>
                        ))}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{address}</div>
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
