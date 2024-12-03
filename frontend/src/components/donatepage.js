import React, { useState, useEffect } from "react";
import "./donatepage.css";

const Donate = () => {
  const [totalDonations, setTotalDonations] = useState(0);

  // Fetch total donations on component mount
  useEffect(() => {
    fetch(`http://localhost:5000/donations/total`)
      .then((response) => response.json())
      .then((data) => setTotalDonations(data.total || 0))
      .catch((error) => console.error("Error fetching total donations:", error));
  }, []);

  const handleDonation = async (e) => {
    e.preventDefault();

    const donationData = {
      name: e.target.name.value,
      email: e.target.email.value,
      amount: parseFloat(e.target.amount.value),
    };

    if (donationData.amount > 0) {
      try {
        const response = await fetch(`http://localhost:5000/donations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donationData),
        });

        if (response.ok) {
          const updatedTotal = await response.json();
          setTotalDonations(updatedTotal.total);
          e.target.reset();
        } else {
          console.error("Failed to submit donation");
        }
      } catch (error) {
        console.error("Error submitting donation:", error);
      }
    }
  };

  return (
    <div className="donate-container">
      <header className="donate-header">
        <h1>Support Mental Health Initiatives</h1>
        <p>Your contribution can help provide accessible mental health resources and services to those in need.</p>
      </header>
      <section className="donation-section-container">
        <div className="donation-info-card">
          <h2>Build a Community</h2>
          <p>
          Join us in creating a supportive community for mental health advocacy and support.
          Your generosity helps us build a sustainable future for mental health advocacy. 
          </p>
          <p>
          Donations are invested in long-term programs, ensuring ongoing support for individuals and communities. 
          Together, we can create a legacy of mental health awareness and care for generations to come.
          </p>
        </div>
        <div className="donation-card">
          <h2>Make a Donation</h2>
          <form className="donation-form" onSubmit={handleDonation}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="amount">Donation Amount</label>
            <input type="number" id="amount" name="amount" placeholder="Enter amount (USD)" required />

            <button type="submit" className="donate-button">Donate Now</button>
          </form>
          <p className="donation-total">Total Donations: ${totalDonations.toFixed(2)}</p>
        </div>
        <div className="donation-info-card">
          <h2>Why Your Donation Matters</h2>
          <p>
            Your support allows us to expand mental health services, provide resources to those in need,
            and create a stronger community. Every contribution, big or small, makes a difference.
          </p>
          <p>
            Join our mission to make mental health care accessible to everyone. Together, we can
            build a more compassionate world.
          </p>
        </div>
      </section>
      <footer className="donate-footer">
        <p>&copy; 2024 Mental Health Support. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Donate;
