import React from "react";

import Button from "elements/Button";
import IconText from "./IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 405 }}>
            <IconText />
            <p className="brand-tagline">
                We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-unstyled">
                <li>
                    <Button type="link" href="/register">New Account</Button>
                </li>
                <li>
                    <Button type="link" href="/properties">Start Booking a Room</Button>
                </li>
                <li>
                    <Button type="link" href="/use-payment">Use Payments</Button>
                </li>
            </ul>
          </div>
          <div className="col-2">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-unstyled">
                <li>
                    <Button type="link" href="/careers">Our Careers</Button>
                </li>
                <li>
                    <Button type="link" href="/privacy">Privacy</Button>
                </li>
                <li>
                    <Button type="link" href="/terms">Terms & Conditions</Button>
                </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-unstyled">
                <li>
                    <Button type="link" isExternal href="mailto:support@staycation.id">support@staycation.id</Button>
                </li>
                <li>
                    <Button type="link" isExternal href="tel:+622122081996">021 - 2208 - 1996</Button>
                </li>
                <li>
                    <span>Staycation, Kemang, Jakarta</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="row">
            <div className="col text-center copyrights">
            Copyright 2019 • All rights reserved • Staycation
            </div>
        </div>
      </div>
    </footer>
  );
}
