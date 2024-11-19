import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

function Advertise({ data }) {
  // State for form fields and other UI states
  const [credential, setCredential] = useState({
    name: "",
    address: "",
    number: data || "", // Initialize with props.data or an empty string
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Update the credential when `data` prop changes
  useEffect(() => {
    setCredential((prevState) => ({
      ...prevState,
      number: data,
    }));
  }, [data]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate fields before submitting
    if (!credential.name || !credential.address) {
      setError("Both name and address are required.");
      setLoading(false);
      return;
    }

    try {
      console.log("Submitting data:", credential); 
      const response = await axios.post('http://15.206.82.37:30001/api/auth/advertise', credential);

      // Check if the response status is 200 (OK)
      if (response.status === 200) {
        // Reset the form state if submission is successful
        setCredential({
          name: "",
          address: "",
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
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                name="name"
                value={credential.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <br/>
          
          <div className="row mx-2">
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={credential.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <br />
          
          <div className="row mx-2">
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary mb-2"
                disabled={loading}
              >
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

Advertise.propTypes = {
  data: PropTypes.string.isRequired,  // Expecting a string for the `data` prop
};

export default Advertise;
