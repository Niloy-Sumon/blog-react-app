import React from 'react';
import './SinglePost.css'

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="singlePostTitle">Lorem ipsum dolor </h1>
                    </div>
                    <div className="col-md-3">
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <a className="link" href="/posts?username=Safak">
                                Safak
                            </a>
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;