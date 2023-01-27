import React from "react";

const ContactUs = ({ greet }) => {
  // const [myInput, setMyInput] = useState('');
  // const [emailBox, setOtherBox] = useState('');

  // // Or like this to avoid creating a new variable
  // // const handleChange = ({target: {value: val}}) => {
  // const handleChange = ({ target }) => {
  //   let val = target.value;
  //   console.log(val);
  //   setMyInput(val);
  //   setOtherBox(val);
  // }
  return (
    <>
      <section id="contactus" data-nav-tooltip="Contact Me" className="pp-section pp-scrollable section dark-bg">
        <div className="container">
          <div className="title">
            <h3>Get in touch.</h3>
          </div>
          <div className="row">
            <div className="col-lg-5 col-xl-4 m-15px-tb">
              <div className="contact-info">
                <h4>What’s your story? Get in touch</h4>
                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                <ul>
                  <li className="media">
                    <i className="ti-map"></i>
                    <span className="media-body">123 Stree New York City , United States Of America 750065.</span>
                  </li>
                  <li className="media">
                    <i className="ti-email"></i>
                    <span className="media-body">princegupta.designer@gmail.com</span>
                  </li>
                  <li className="media">
                    <i className="ti-mobile"></i>
                    <span className="media-body">+91 8800724933</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8 m-15px-tb">
              <div className="contact-form">
                <h4>Say Something</h4>
                <form id="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input name="name" placeholder="Name *" className="form-control " type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input name="email" placeholder="Email *" className="form-control " type="email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input name="subject" placeholder="Subject *" className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" placeholder="Your message *" rows="5" className="form-control "></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <input className="px-btn px-btn-theme" type="submit" value="send message" />
                      </div>
                      <span id="suce_message" className="text-success" style={{ display: 'none' }}>Message Sent Successfully</span>
                      <span id="err_message" className="text-danger" style={{ display: 'none' }}>Message Sending Failed</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div className="google-map">
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe className="embed-responsive-item" title="location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;