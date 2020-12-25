import React from 'react';
import $ from 'jquery';

class Contact extends React.Component {
  onClickPlay() {
    var clickSound = document.getElementById('clickSound');
    clickSound.volume = 0.6;
    clickSound.play();
  }

  componentDidMount() {
    var postUrl = '/api/mail';
    var form = $('#contact-form');
    function success(b, c, a) {
      if (c === 'success') {
        $('#contact-form-waiting').css('display', 'none');
        $('#contact-form-success').css('display', 'block');
      } else {
        $('#contact-form-fail').css('display', 'block');
      }
    }
    form.submit(function (a) {
      a.preventDefault();
      var b = form.serialize();
      $.ajax({ type: 'POST', url: postUrl, data: b, success: success });
    });
  }

  render() {
    const divStyle = {
      display: 'none',
    };
    return (
      <div id="contact" className="row rowContact">
        <div id="contact-form-waiting">
          <form className="contactForm" id="contact-form" method="post">
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                className="form-control iconUser"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                required
                type="email"
                name="email"
                className="form-control iconEmail"
                id="exampleInputEmail1"
                placeholder="Email"
              />
            </div>
            <div className="check">
              {' '}
              <span>In what service you are interested?</span>
            </div>
            <div className="checkbox checkbox-inline">
              <input
                name="options"
                value="App Development"
                id="checkbox1"
                className="styled"
                type="checkbox"
              />
              <label htmlFor="checkbox1"> App Development </label>
            </div>
            <div className="checkbox checkbox-inline">
              <input
                name="options"
                value="Web Design"
                id="checkbox2"
                className="styled"
                type="checkbox"
              />
              <label htmlFor="checkbox2"> Web Design </label>
            </div>
            <div className="checkbox checkbox-inline">
              <input
                name="options"
                value="Graphic Design"
                id="checkbox3"
                className="styled"
                type="checkbox"
              />
              <label htmlFor="checkbox3"> Graphic Design </label>
            </div>
            <div className="checkbox checkbox-inline">
              <input
                name="options"
                value="SEO"
                id="checkbox4"
                className="styled"
                type="checkbox"
              />
              <label htmlFor="checkbox4"> SEO </label>
            </div>
            <div className="form-group">
              <textarea
                className="form-control iconPencil"
                name="text"
                cols="40"
                rows="5"
                required
                placeholder="Message"
              />
            </div>
            <p>
              <input
                className="form-control iconBudget"
                type="number"
                name="budget"
                required
                placeholder="Your budget"
              />
            </p>
            <button type="submit" className="btn btn-default btnGetStarted">
              Send
            </button>
            <p id="contact-form-fail" style={divStyle}>
              <span>An error occured.</span>{' '}
            </p>
          </form>
        </div>
        <div className="col-md-12" id="contact-form-success" style={divStyle}>
          <h2>Email sent.</h2>{' '}
        </div>
      </div>
    );
  }
}

export default Contact;
