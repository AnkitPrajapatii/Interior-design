import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
    <h2>Our Services</h2>
    <div className="service-cards">
        <div className="card">
            <img src="https://cdn.wallpapersafari.com/32/47/KmkcTN.jpg" alt=""></img>
            <h3>Residential Design</h3>
            <p>We create beautiful and functional living spaces.</p>
        </div>
        <div className="card">
            <img src="https://wallscapeinc.com/wp-content/uploads/2017/05/004-Silver-Crinoline-02-office-loby-1080x675.jpg" alt=""></img>
            <h3>Commercial Design</h3>
            <p>Innovative solutions for commercial spaces.</p>
        </div>
        <div className="card">
            <img src="https://i.pinimg.com/originals/70/17/a8/7017a83d6eef48bb45f6c9d3bcb59e87.jpg" alt=""></img>
            <h3>Consultation</h3>
            <p>Expert advice to bring your vision to life.</p>
        </div>
    </div>
</section>
  );
};

export default Services;
