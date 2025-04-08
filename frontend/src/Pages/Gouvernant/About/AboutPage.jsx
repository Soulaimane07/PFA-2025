import React from "react";
import Footer from '../../../Pages/Auth/LandingPage/Footer'
import Navbar from "../../Auth/LandingPage/Navbar";
import logo from "../../../../public/Logo.jpeg"; 
import teamPhoto from "../../../../public/Logo_solo.png"; 


export default function AboutPage() {
  const team = [
    "Feirouz EL MOUHTADI",
    "Fatim Zahra KELADI",
    "Soulaimane OUHMIDA",
    "Hamza ETTAKADOUMI",
  ];

  return (
    
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <Navbar/>
      <div style={{ textAlign: "center", marginBottom: "4rem",marginTop:"10rem" }}>
        <h1>Système de Recyclage de l'Eau</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Un projet innovant pour optimiser la gestion et le recyclage de l'eau dans les villes et industries
        </p>
        <div style={{ marginTop: "1rem", backgroundColor: "#e0f0ff", display: "inline-block", padding: "0.4rem 1rem", borderRadius: "8px", color: "#005fa3" }}>
          Projet de Fin d'Année • 4IIR G7
        </div>
      </div>

      {/* Team */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ textAlign: "center" }}>Notre Équipe</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          Une collaboration entre étudiants passionnés par l'innovation durable
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
          {team.map((name, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "#ccc", margin: "0 auto 1rem" }}>
              <img src={teamPhoto} alt="Équipe" style={{ width: "300px", borderRadius: "10px" }} />
              </div>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Problem & Needs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
        <div style={{ flex: "1", minWidth: "300px", height: "300px", backgroundColor: "#ccc" }}>
        <img src={logo} alt="Équipe" />
          {/* Placeholder for image */}
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{fontSize:"2rem"}}>Problématique et Besoins</h2>
          <div style={{ marginTop: "1rem",marginLeft:"3rem" }}>
            <h3 style={{fontSize:"1.5rem"}}>Problème :</h3>
            <ul>
              <li>Consommation excessive d'eau potable</li>
              <li>Gaspillage après une seule utilisation</li>
              <li>Coûts élevés de traitement</li>
              <li>Risque de pénurie</li>
            </ul>
          </div>
          <div style={{ marginTop: "1rem",marginLeft:"3rem" }}>
            <h3 style={{fontSize:"1.5rem"}}>Besoins :</h3>
            <ul>
              <li>Réduire la consommation via recyclage</li>
              <li>Système intelligent de traitement</li>
              <li>Assurer la qualité recyclée</li>
              <li>Automatiser la gestion du cycle</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div style={{ backgroundColor: "#f0f8ff", padding: "2rem", borderRadius: "10px", textAlign: "center",marginBottom:"5rem" }}>
        <h2>Conclusion</h2>
        <p>
          Ce projet combine IoT et IA pour optimiser la gestion de l'eau recyclée. Il réduit la consommation et les
          coûts tout en préservant les ressources.
        </p>
        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
          Prochaine étape : définir un MVP pour tester les capteurs et le système de traitement.
        </p>
        <div style={{ marginTop: "2rem" ,marginBottom:"5rem"}}>
          <a href="/contact" style={{ backgroundColor: "#007bff", color: "white", padding: "0.75rem 1.5rem", borderRadius: "6px", textDecoration: "none" }}>
            Contactez-nous →
          </a>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
