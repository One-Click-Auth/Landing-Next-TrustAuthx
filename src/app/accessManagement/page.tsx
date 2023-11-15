import React from "react";
import Footer from "../../components/Footer";

function AccessManagement() {
  return (
    <div className="gap flex flex-col items-center justify-center py-20 ">
      <div className="section-first ">
        <div className="container flex flex-col gap-56">
          <div className=" ud-row row1 flex flex-col items-center  gap-32 md:flex-row">
            <div className="col-md-5 flex-1">
              <div className=" flex max-w-2xl  flex-col gap-5 [&>h2]:text-6xl [&>h2]:font-semibold [&>p]:text-xl">
                <h2 className="">Authorization and Access Control</h2>
                <p>
                  Streamline user access and authentication processes with our
                  Access Management solution. Utilize robust authentication
                  methods and manage user permissions seamlessly to ensure
                  secure and authorized access to your resources.
                </p>
                <div className="button-div mt-4">
                  <a href="#" className="ud-primary-btn">
                    <span className="title">Get in Touch</span>
                    <span className="icon"></span>
                  </a>
                  <a href="#" className="ud-secondary-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <img src="./images/image1.svg" alt="" />
            </div>
          </div>

          <div className=" ud-row row1 flex flex-col  items-center gap-32   md:flex-row">
            <div className="col-md-5 flex flex-[0.5] items-center justify-center">
              <img src="./images/image2.svg" alt="" />
            </div>

            <div className=" flex-1 ">
              <div className=" ml-auto flex max-w-2xl flex-col gap-5 text-right [&>h2]:text-6xl [&>h2]:font-semibold [&>p]:text-xl">
                <h2>Institutional-Grade API Authorization</h2>
                <p>
                  Empower Your API Economy with Advanced Authorization
                  Capabilities. Strengthen your integration points with
                  impenetrable authorization protocols, ensuring secure data
                  transfer and maximize the efficiency of your APIs while
                  preserving confidentiality, integrity, and availability.
                </p>
                <div className="button-div mt-4">
                  <a href="#" className="ud-secondary-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" ud-row row1 flex flex-col items-center  gap-32 md:flex-row">
            <div className="col-md-6 flex-1">
              <div className=" flex max-w-2xl flex-col gap-5 text-right [&>h2]:text-6xl [&>h2]:font-semibold [&>p]:text-xl">
                <h2>RBAC (Role-Based Access Control)</h2>
                <p>
                  Amplify the power of your institutional-grade infrastructure
                  with our RBAC solution. Achieve unparalleled user management
                  and control with granular permission assignments based on
                  roles and responsibilities. Strengthen security, streamline
                  operations, and maintain regulatory compliance effortlessly.
                </p>
                <div className="button-div mt-4">
                  <a href="#" className="ud-primary-btn">
                    <span className="title">Get in Touch</span>
                    <span className="icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-5 flex-1">
              <img src="./images/image3.svg" alt="" className="w-100" />
            </div>
          </div>

          <div className=" ud-row row1 flex flex-col items-center  gap-32 md:flex-row">
            <div className="col-md-5 flex flex-1 items-center justify-center">
              <img src="./images/image4.svg" alt="" className="w-100" />
            </div>

            <div className="col-md-6 flex-1">
              <div className=" flex max-w-2xl flex-col gap-5 text-right [&>h2]:text-6xl [&>h2]:font-semibold [&>p]:text-xl">
                <h2>Institutional-Grade Protection</h2>
                <p>
                  Step into the realm of uncompromising security by adopting our
                  Standards Based Security solution. Ensure adherence to
                  industry-standard protocols, encrypt data at rest and in
                  transit, and protect against emerging threats. Guarantee the
                  safety and resilience of your systems.
                </p>
                <div className="button-div mt-4">
                  <a href="#" className="ud-secondary-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessManagement;
