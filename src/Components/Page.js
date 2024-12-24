import React from 'react';
import '../CSS/Header.css'; // Ensure your CSS file path is correct

function Page() {
  return (
    <div className="page-container">
      <section className="page1">
        <h1 className="title">New Born Photoshoot</h1>
        <span className="subtitle">Baby Sabarish</span>
      </section>
      <section className="page2">
        <h1 className="title">Pregnancy Photoshoot</h1>
        <span className="subtitle">Kani</span>
      </section>
      <section className="page3">
        <h1 className="title">Home Photoshoot</h1>
        <span className="subtitle">Kannan</span>
      </section>
      <section className="page4">
        <h1 className="title">Birthday Photoshoot</h1>
        <span className="subtitle">Kavimithra</span>
      </section>
    </div>
  );
}

export default Page;
