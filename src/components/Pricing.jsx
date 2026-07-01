import './css/Pricing.css'

export const Pricing = () => {
    return (
        <section className="pricings wep-bg">
            <div className="price-details">
                <h3 className="heading">Popular Package</h3>
                <h1 className="sub-heading" style={{ fontSize: "40px" }}>Our Pricing</h1>
            </div>
            <div className="pricing-content" style={{ marginBottom: "80px" }}>
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h4>Startup Plan</h4>
                        <h1>$ 50</h1>
                        <p>_Per Month</p>
                    </div>
                    <div className="pricing-list">
                        <ul>
                            <li className="pricing-item">Free Consultation</li>
                            <li className="pricing-item">WP Installation</li>
                            <li className="pricing-item">Speed Up WordPress</li>
                            <li className="pricing-item" style={{ textDecoration: "line-through", color: "rgb(136, 136, 136)" }}>27/7 Support</li>
                            <li className="pricing-item" style={{ textDecoration: "line-through", color: "rgb(136, 136, 136)" }}>Unlimited Revisions</li>
                            <li className="pricing-item" style={{ border: "none", texDecoration: "line-through", color: "rgb(136, 136, 136)" }}>Custom Theme Develop</li>
                        </ul>
                        <button className="get-btn">Get Started</button>
                    </div>
                </div>

                <div className="pricing-card">
                    <div className="pricing-header">
                        <h4>Startup Plan</h4>
                        <h1>$ 120</h1>
                        <p>_Per Month</p>
                    </div>
                    <div className="pricing-list">
                        <ul>
                            <li className="pricing-item">Free Consultation</li>
                            <li className="pricing-item">WP Installation</li>
                            <li className="pricing-item">Speed Up WordPress</li>
                            <li className="pricing-item">27/7 Support</li>
                            <li className="pricing-item" style={{ textDecoration: "line-through", color: "rgb(136, 136, 136)" }}>Unlimited Revisions</li>
                            <li className="pricing-item" style={{ border: "none", texDecoration: "line-through", color: "rgb(136, 136, 136)" }}>Custom Theme Develop</li>
                        </ul>
                        <button className="get-btn">Get Started</button>
                    </div>
                </div>

                <div className="pricing-card">
                    <div className="pricing-header">
                        <h4>Startup Plan</h4>
                        <h1>$ 250</h1>
                        <p>_Per Month</p>
                    </div>
                    <div className="pricing-list">
                        <ul>
                            <li className="pricing-item">Free Consultation</li>
                            <li className="pricing-item">WP Installation</li>
                            <li className="pricing-item">Speed Up WordPress</li>
                            <li className="pricing-item">27/7 Support</li>
                            <li className="pricing-item">Unlimited Revisions</li>
                            <li className="pricing-item" style={{ border: "none" }}>Custom Theme Develop</li>
                        </ul>
                        <button className="get-btn">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
