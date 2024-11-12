import React from "react";
import { Link } from 'react-router-dom';
import PopularSearch from "./PopularSearch";
function Index() {
  return (
    <div class="container">
      <div class="container-fluid p-10">
        <hr />
        {/* <!-------------------20 product--------------------> */}
        <div className="container1 ">
          <div>
            <Link to="/restaurant">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Restaurants.png"
                    alt="Restaurants image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/restaurant">
                  <b style={{ fontSize: "15px" }}>Restaurants</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/hotelclient">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/hotel.png"
                    alt="hotel image"
                    className="small"
                  />
                </center>
              </div>
              <center>
                <Link to="/hotelclient">
                  <b style={{ fontSize: "15px" }}>Hotels</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/beauty">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Beauty.png"
                    alt="BeautyParlour image"
                    className="small2"
                  />
                </center>
              </div>
              <center>
                <Link to="/beauty">
                  <b style={{ fontSize: "15px" }}>
                    Beauty <br /> Spa
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/homedecover">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/HomeDecor.png"
                    alt="homedecor image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/homedecover">
                  <b style={{ fontSize: "15px" }}>
                    Home <br /> Decor
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/Wedding">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/WeddingPlanning.png"
                    alt="wedding image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="Wedding">
                  <b style={{ fontSize: "15px" }}>
                    Wedding
                    <br />
                    Planning
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/education">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Education.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/education">
                  <b style={{ fontSize: "15px" }}>Education</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/rentandhire">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Rent&Hire.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/rentandhire">
                  <b style={{ fontSize: "15px" }}>Rent & Hire</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/hospital">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/hospital.png"
                    alt="hosptal image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/hospital">
                  <b style={{ fontSize: "15px" }}>Hospitals</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/contractors">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/constractor.png"
                    alt="contractor image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/contractors">
                  <b style={{ fontSize: "15px" }}>Contractors</b>
                </Link>
              </center>
            </Link>
          </div>

          <div className="menu">
            <Link to="/petshops">
              {" "}
              <div className="box menu">
                <center>
                  <img
                    src="./images/fafa icon/pethouse.png"
                    alt="pethouse image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/petshops">
                  <b style={{ fontSize: "15px" }}>Pet Shops</b>
                </Link>
              </center>
            </Link>
          </div>
        </div>
        <div className="container1">
          <div>
            <Link to="/pghotels">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/pg.png"
                    alt="pg image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/pghotels">
                  <b style={{ fontSize: "15px" }}>PG/Hostels</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/estaeagents">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/EstateAgent.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/estaeagents">
                  <b style={{ fontSize: "15px" }}>
                    Estate
                    <br /> Agent
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/dentist">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Dentists.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/dentist">
                  <b style={{ fontSize: "15px" }}>Dentists </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/gym">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Gym.png"
                    alt="gym image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/gym">
                  <b style={{ fontSize: "15px" }}>Gym</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/consultants">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Consultants.png"
                    alt="bus image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/consultants">
                  <b style={{ fontSize: "15px" }}>Consultants</b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/eventorganizers">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/EventOrganisers.png"
                    alt="EventOrganisers image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/eventorganizers">
                  <b style={{ fontSize: "15px" }}>
                    Event
                    <br />
                    Organisers
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/drivingschool">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/DrivingSchools.png"
                    alt="DrivingSchools image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/drivingschool">
                  <b style={{ fontSize: "15px" }}>
                    Driving <br />
                    Schools
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/packers&movers">
              {" "}
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/Packer&Movers.png"
                    alt="Packer&Movers image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/packers&movers">
                  <b style={{ fontSize: "15px" }}>
                    Packers &<br />
                    Movers
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            <Link to="/couriers">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/CourierService.png"
                    alt="CourierService image"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <Link to="/couriers">
                  <b style={{ fontSize: "15px" }}>
                    Courier
                    <br />
                    Service
                  </b>
                </Link>
              </center>
            </Link>
          </div>
          <div>
            {/* <!-- Offcanvas container --> */}
            <div
              className="offcanvas offcanvas-start"
              id="demo99"
              style={{ width: "90%" }}
            >
              <div className="offcanvas-header">
                <h3 className="offcanvas-title">
                  <strong>Popular Categories</strong>
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                {/* <!-- Content of offcanvas menu --> */}
                <div className="row">
                  {/* <!-- Category Links --> */}
                  <div className="col-lg-2">
                    <Link to="/ac-repair">
                      <img
                        src="./images/fafa icon/ac.png"
                        width="20px"
                        alt="ac"
                      />{" "}
                      AC Services
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/software">
                      <img
                        src="./images/fafa icon/software.png"
                        width="20px"
                        alt="software"
                      />{" "}
                      Software
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/astrologies">
                      <img
                        src="./images/fafa icon/Astrology.png"
                        width="20px"
                        alt="astrology"
                      />
                      Astrology
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/Training">
                      <img
                        src="./images/fafa icon/training.png"
                        width="25px"
                        alt="training"
                      />
                      Training
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/carrepairs">
                      <img
                        src="./images/fafa icon/automobile.png"
                        width="20px"
                        alt="automobile"
                      />
                      Automobile
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/bills&recharge">
                      <img
                        src="./images/fafa icon/insurance.png"
                        width="20px"
                        alt="insurance"
                      />
                      Insurance
                    </Link>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="/Security">
                      <img
                        src="./images/fafa icon/security.png"
                        width="20px"
                        alt="security"
                      />
                      Security
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/flight">
                      <img
                        src="./images/fafa icon/flight.png"
                        width="20px"
                        alt="flight"
                      />
                      Travel
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/Shoping">
                      <img
                        src="./images/fafa icon/shopping.png"
                        width="20px"
                        alt="shopping"
                      />
                      Shopping
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/eventorganizers">
                      <img
                        src="./images/fafa icon/EventOrganisers.png"
                        width="20px"
                        alt="EventOrganisers"
                      />
                      Events
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/job">
                      <img
                        src="./images/fafa icon/job.png"
                        width="20px"
                        alt="job"
                      />
                      Jobs
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/incometax">
                      <img
                        src="./images/fafa icon/legal.png"
                        width="20px"
                        alt="legal"
                      />
                      Legal
                    </Link>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="/hotelclient">
                      <img
                        src="./images/fafa icon/pg.png"
                        width="20px"
                        alt="pg"
                      />
                      Hotels
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/electrician">
                      <img
                        src="./images/fafa icon/electricity.png"
                        width="20px"
                        alt="electricity"
                      />
                      Electrical
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/jewellary">
                      <img
                        src="./images/fafa icon/jewelary.png"
                        width="20px"
                        alt="jewelary"
                      />
                      Jewellary
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/movies">
                      <img
                        src="./images/fafa icon/Entertainment.png"
                        width="20px"
                        alt="Entertainment"
                      />
                      Entertainment
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/internet">
                      <img
                        src="./images/fafa icon/Internet.png"
                        width="20px"
                        alt="internet"
                      />
                      Internet
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/homedecover">
                      <img
                        src="./images/fafa icon/HomeDecor.png"
                        width="20px"
                        alt="Home Decor"
                      />
                      Home Decore
                    </Link>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="/beautyparlour">
                      <img
                        src="./images/fafa icon/slen.png"
                        width="20px"
                        alt="beauty parlour"
                      />
                      Salon
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/manufacturing">
                      <img
                        src="./images/fafa icon/Manufacturing.png"
                        width="20px"
                        alt="manufacturing.png"
                      />
                      Manufacturing
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/account">
                      <img
                        src="./images/fafa icon/account.png"
                        width="20px"
                        alt="account"
                      />
                      Account
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/advertise">
                      <img
                        src="./images/fafa icon/Advertising.png"
                        width="20px"
                        alt="advertising"
                      />
                      Advertising
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/internet">
                      <img
                        src="./images/fafa icon/Internet.png"
                        width="20px"
                        alt="internet"
                      />
                      Internet
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/Tatto">
                      <img
                        src="./images/fafa icon/tattoo.png"
                        width="20px"
                        alt="tattoo"
                      />
                      tattoo
                    </Link>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="Store">
                      <img
                        src="./images/fafa icon/store.png"
                        width="20px"
                        alt="store"
                      />
                      Store
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/photostudio">
                      <img
                        src="./images/fafa icon/PhotoStudio.png"
                        width="20px"
                        alt="photostudio"
                      />
                      Photo Studio
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/gym">
                      <img
                        src="./images/fafa icon/Gym.png"
                        width="20px"
                        alt="gym"
                      />
                      Fitness
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/engineers">
                      <img
                        src="./images/fafa icon/Engineers.png"
                        width="20px"
                        alt="engineers"
                      />
                      Engineers
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/restaurant">
                      <img
                        src="./images/fafa icon/Restaurants.png"
                        width="20px"
                        alt="restaurant"
                      />
                      Restaurants
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/education">
                      <img
                        src="./images/fafa icon/Education.png"
                        width="20px"
                        alt="education"
                      />
                      Education
                    </Link>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="/rentandhire">
                      <img
                        src="./images/fafa icon/Rent&Hire.png"
                        width="20px"
                        alt="rent and hire"
                      />
                      Rent & Hire
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/hospital">
                      <img
                        src="./images/fafa icon/hosp.png"
                        width="20px"
                        alt="hospital"
                      />
                      Hospitals
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/contractors">
                      <img
                        src="./images/fafa icon/constractor.png"
                        width="20px"
                        alt="contractor"
                      />
                      Contractors
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/petshops">
                      <img
                        src="./images/fafa icon/pethouse.png"
                        width="20px"
                        alt="pethouse"
                      />
                      Pet Shops
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/estaeagents">
                      <img
                        src="./images/fafa icon/EstateAgent.png"
                        width="20px"
                        alt="estageagent"
                      />
                      Estate Agent
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/dentist">
                      <img
                        src="./images/fafa icon/Dentists.png"
                        width="20px"
                        alt="dentist"
                      />
                      Dentists
                    </Link>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-2">
                    <Link to="/gym">
                      <img
                        src="./images/fafa icon/Gym.png"
                        width="20px"
                        alt="gym"
                      />
                      Gym
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/consultants">
                      <img
                        src="./images/fafa icon/Consultants.png"
                        width="20px"
                        alt="consultant"
                      />
                      Consultants
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/eventorganizers">
                      <img
                        src="./images/fafa icon/EventOrganisers.png"
                        width="20px"
                        alt="eventorganisers"
                      />
                      Event Organisers
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/drivingschool">
                      <img
                        src="./images/fafa icon/DrivingSchools.png"
                        width="20px"
                        alt="drivingschools"
                      />
                      Driving Schools
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/packers&movers">
                      <img
                        src="./images/fafa icon/Packer&Movers.png"
                        width="20px"
                        alt="packer&movers"
                      />
                      Packers & Movers
                    </Link>
                  </div>
                  <div className="col-lg-2">
                    <Link to="/courier">
                      <img
                        src="./images/fafa icon/CourierService.png"
                        width="20px"
                        alt="courierservice"
                      />
                      Courier Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Button to Trigger Offcanvas Menu --> */}
            <Link data-bs-toggle="offcanvas" data-bs-target="#demo99">
              <div className="box">
                <center>
                  <img
                    src="./images/fafa icon/PopularCategories.png"
                    alt="Popular Categories"
                    className="small1"
                  />
                </center>
              </div>
              <center>
                <b style={{ fontSize: "15px" }}>
                  Popular
                  <br /> Categories
                </b>
              </center>
            </Link>
          </div>
        </div>

        {/* <----end 20 product--------- --> */}
        <hr />
        <div style={{ padding: "10px" }}></div>
        <div class="container2">
          <div class="big">
            <h3 class="text-center">
              <strong>Wedding Requisites</strong>
            </h3>
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <Link to="/halls">
                    {" "}
                    <img
                      src="./images/Home services/banquet hall.png"
                      alt="banquet hall image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/halls">
                      <b style={{ fontSize: "15px" }}>Banquet Halls</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/jewellary">
                    {" "}
                    <img
                      src="./images/wedding/p5.png"
                      alt="spa image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/jewellary">
                      <b style={{ fontSize: "15px" }}>Bridal Requisite</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/cateres">
                    {" "}
                    <img
                      src="./images/Home services/Caterers.png"
                      alt="Caterers image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/cateres">
                      <b style={{ fontSize: "15px" }}>Caterers</b>{" "}
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div class="big">
            <h3 class="text-center">
              <strong>Beauty & Spa</strong>
            </h3>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-4">
                  <Link to="/beautyparlour">
                    <img
                      src="./images/Home services/Beauty salon.png"
                      alt="beauty image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    {" "}
                    <Link to="/beautyparlour">
                      <b style={{ fontSize: "15px" }}>Beauty Parlour</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/beautyparlour">
                    {" "}
                    <img
                      src="./images/Home services/spa.png"
                      alt="spa image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/beautyparlour">
                      <b style={{ fontSize: "15px" }}>spa & Massage</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/beautyparlour">
                    {" "}
                    <img
                      src="./images/Home services/salon.png"
                      alt="salon image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    {" "}
                    <Link to="/beautyparlour">
                      <b style={{ fontSize: "15px" }}>Salon</b>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            <div style={{ padding: "20px" }}></div>
          </div>
        </div>

        <div class="container2">
          <div class="big">
            <h3 class="text-center">
              <strong>Repairs & Services</strong>
            </h3>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-4">
                  <Link to="/acrepaire" style={{ textDecoration: "none" }}>
                    <img
                      src="./images/Home services/AC services.png"
                      alt="AC image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/acrepaire" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px" }}>AC Services</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/carservices" style={{ textDecoration: "none" }}>
                    {" "}
                    <img
                      src="./images/Home services/car services.png"
                      alt="car image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/carservices" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px" }}>Car Services</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/bike" style={{ textDecoration: "none" }}>
                    {" "}
                    <img
                      src="./images/Home services/bike services.png"
                      alt="bike image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/bike" style={{ textDecoration: "none" }}>
                      <b style={{ fontSize: "15px" }}>Bike Services</b>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div class="big">
            <h3 class="text-center">
              <strong>Daily Needs</strong>
            </h3>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-4">
                  <Link to="/movies">
                    {" "}
                    <img
                      src="./images/Home services/movies.png"
                      alt="hotel image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/movies">
                      <b style={{ fontSize: "15px" }}>Movies</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/grocery">
                    {" "}
                    <img
                      src="./images/Home services/grocery.png"
                      alt="hotel image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/grocery">
                      <b style={{ fontSize: "15px" }}>Grocery</b>
                    </Link>
                  </center>
                </div>
                <div class="col-lg-4">
                  <Link to="/electrician">
                    <img
                      src="./images/Home services/electrician.png"
                      alt="electrician image"
                      class="mx-2 daily"
                    />
                  </Link>
                  <center>
                    <Link to="/electrician">
                      <b style={{ fontSize: "15px" }}>Electrician</b>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            <div style={{ padding: "5px" }}></div>
          </div>
        </div>
        {/* <!-- ---services-------> */}
        <div style={{ padding: "2px" }}></div>
      </div>
      <hr />
      <PopularSearch />
      <hr />
    </div>
  );
}
export default Index;
