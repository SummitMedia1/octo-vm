import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';

console.log("running client/src/pages/Home/Home.js");

class Home extends Component {


    // super(props);
    state={
        redirectToReferrerG: false,
        redirectToReferrerF: false,
        userId: "",
        email: "",
        img: ""
    };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
    render() {

const route = () => {

    window.location = "/videos";

};
return (
      <Container fluid>

        <div className="row">
            <div className="jumbotron logoTron">

                {/*<h1 className="display-3 text-center" style={{marginTop: '375px'}}>Octothorpe! #</h1>*/}
                <h1 className="display-3 text-center" style={{marginTop: '300px'}}><img src="./octothorpeAsset-2.png" style={{width: '200px', boxShadow: '6px 6px 13px black', borderRadius: '300px' }}/></h1>
            </div>
            <div className="jumbotron loginJumbo">

               <div className="pull-right col-md-8">

                <p className="lead" id="explanation-paragraph" style={{position: 'relative', zIndex: 20, paddingTop: '400px'}}>The University of Denver's Coding Bootcamp App powered by Trilogy Learning<br />offers current and past students an archive of all classroom learning videos, cut<br />down from the original source to the bare essential information for each learning<br /> topic and solved activity.</p>
               <br />
                <p>Login now to view.</p>
                <p className="lead" style={{position: 'relative', marginTop: '50px', zIndex: 19}}>
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Login</button>
                </p>
              </div>

            </div>

            <div className="modal fade" id="myModal" role="dialog" >
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Login using Facebook or Google</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="text-center">
                                    <h3>The University of Denver &<br />Trilogy Learning Video Archive</h3>
                                    <hr />
                                    <div className="col-md-2"></div>

                                    {/*<a href="http//localhost:3002/auth/google"  className="btn btn-facebook col-md-8">Login with <span className="fa fa-facebook-square"></span></a>*/}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="text-center">
                                    <div className="col-md-2"></div>

                                    {/*<a href="http//localhost:3002/auth/google"  className="btn btn-google col-md-8">Login with <span className="fa fa-google-plus-square"></span></a>*/}

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default " data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      <div className="row">
        <div className="gif">
          <img src="./logos.gif" />
        </div>
      </div>

    </Container>
  );
  }
}
export default Home;
