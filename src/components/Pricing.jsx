function subscribe(plan) {
  alert(`✅ You have successfully subscribed to the ${plan} plan!`);
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <h2>Choose Your VPN Plan</h2>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Basic</h3>
          <p className="price">$5 / month</p>
          <ul>
            <li>✔ Secure Browsing</li>
            <li>✔ 5 Locations</li>
            <li>✔ 1 Device</li>
          </ul>
          <button onClick={() => subscribe("Basic")}>Buy Subscription</button>
        </div>

        <div className="price-card featured">
          <h3>Pro</h3>
          <p className="price">$10 / month</p>
          <ul>
            <li>✔ Everything in Basic</li>
            <li>✔ 50+ Locations</li>
            <li>✔ 5 Devices</li>
          </ul>
          <button onClick={() => subscribe("Pro")}>Buy Subscription</button>
        </div>

        <div className="price-card">
          <h3>Ultimate</h3>
          <p className="price">$15 / month</p>
          <ul>
            <li>✔ Unlimited Locations</li>
            <li>✔ Unlimited Devices</li>
            <li>✔ Priority Speed</li>
          </ul>
          <button onClick={() => subscribe("Ultimate")}>
            Buy Subscription
          </button>
        </div>
      </div>
    </section>
  );
}
