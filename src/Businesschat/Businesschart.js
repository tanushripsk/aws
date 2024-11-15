import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

function Businesschat({ data }) {
  // Initialize state with 'data' prop for 'number' and empty values for 'name'
  const [credential, setCredential] = useState({
    name: "",
    number: data || "", // Initialize number with the 'data' prop
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Update the state when 'data' prop changes
  useEffect(() => {
    setCredential((prevState) => ({
      ...prevState,
      number: data, // Update number with the latest 'data' prop
    }));
  }, [data]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate fields before submitting
    if (!credential.name || !credential.number) {
      setError("Both name and number are required.");
      setLoading(false);
      return;
    }

    try {
      console.log("Submitting data:", credential); // Log data for debugging

      // Send data to the backend via Axios POST request
      const response = await axios.post('http://3.110.156.218:30001/api/auth/businesschat', credential);

      // Check if the response status is 200 (OK)
      if (response.status === 200) {
        // Reset the form state if submission is successful
        setCredential({
          name: "",
          number: "",
        });

        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds

        alert("Data saved successfully!");
        navigate("/"); // Redirect to homepage or a desired route
      } else {
        setError(response.data.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to open WhatsApp with a pre-filled message
  const openWhatsApp = () => {
    const { name, number } = credential;
    const message = `I found your business on NagpurDial\nName: ${name}\nNumber: ${number}`;
    const whatsappNumber = "919975288300"; // Replace with your WhatsApp number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      whatsappNumber
    )}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <div className="row mx-2">
            <div className="col-12">
              <label htmlFor="name" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={credential.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <br />

          <div className="row mx-2">
            <div className="col-12">
              <label htmlFor="number" className="form-label">
                Number:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter number"
                name="number"
                value={credential.number}
                onChange={handleChange}
              />
            </div>
          </div>

          <br />

          <div className="row mx-2">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="row mx-2">
              <div className="col-12">
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </div>
            </div>
          )}

          {/* Success message */}
          {success && (
            <div className="row mx-2">
              <div className="col-12">
                <div className="alert alert-success" role="alert">
                  Data saved successfully!
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

Businesschat.propTypes = {
  data: PropTypes.string.isRequired, // Expecting a string for the `data` prop
};

export default Businesschat;
