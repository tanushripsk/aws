import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

function Consultants() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner24">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div class="row">
          <div class="col-lg-4 col-lg-41">
            <Link to="/lawyers" class="icons-img">
              {" "}
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />
              Lawyers
            </Link>
          </div>
          <div class="col-lg-4 col-lg-41">
            <Link to="/auditors" class="icons-img">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />{" "}
              Auditors
            </Link>
          </div>
          <div class="col-lg-4 col-lg-41">
            <Link to="/ca" class="icons-img hh">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />
              Chartered Accountants
            </Link>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-4 col-lg-41">
            <Link to="/Valuers" class="icons-img hide1">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />
              Valuers
            </Link>
          </div>
          <div class="col-lg-4 col-lg-41">
            <Link to="/incometax" class="icons-img hide1">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />{" "}
              GST Compliance Consultants
            </Link>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-6 col-lg-61 h">
            <Link to="/valours" class="icons-img">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />{" "}
              Valuers
            </Link>
          </div>
          <div class="col-lg-6 col-lg-61 h">
            <Link to="/incometax" class="icons-img">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />
              GST
            </Link>
          </div>
        </div>

        <div class="row ">
          <div class="col-lg-6 col-lg-61 h">
            <Link to="/ca" class="icons-img">
              <img
                src="./images/fafa icon/lawyers.png"
                class="icons-img"
                alt="lawyers"
              />
              CA
            </Link>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        <p style={{ color: "grey", fontSize: "12px" }}>
          Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
          Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
          Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
          Sexologist Doctors | Neurologists | Gynaecologist | & Obstetrician |
          Doctors |Train Ticket| Booking Agents| Travel Agents| Paying Guest
          Accommodations| General Physician Doctors| Dentists| Orthopaedic
          Doctors| Chemists| Motor Training Schools| Gastroenterologists |Car
          Rental| Salons Courier Services |Dance Classes| Pathology Labs| Taxi
          Services| Cake Shops| AC Repair & Services| Mobile Phone| Dealers| Pet
          Shops | Dmart| Packers And Movers| Psychiatrists| Dharamshalas|
          Urologist Doctors| Bakeries | Bicycle | Dealers Coffee Shops|
          Paediatricians |Sonography Centres | Yoga Classes| Hostels
          Cardiologists| Electrical Shops| Skin Care Clinics | Diagnostic
          Centres| Homeopathic Doctors | Physiotherapists | Photo Studios |
          Plumbers |Music Classes| Electricians| Sports |Goods Dealers| Shoe
          Dealers| Hair Stylists| Gift Shops | Ophthalmologists | Car Repair &
          Services |Ayurvedic Doctors| Eye Clinics| Restaurants| Carpenters|
          Jewellery| Showrooms |Cooks On Hire |Stationery Shops| Nephrologists
          |Caterers Interior Designers| Rehabilitation Center | Grocery Stores
          |Banks ATM |5 Star Hotels |Hotels |Resorts |Plastic Surgeons
        </p>
        <div style={{ padding: "2px" }}></div>
      </div>
    </div>
  );
}
export default Consultants;
