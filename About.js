import React from 'react'

const About = () => {
  return (
    <main>
    <div className="mypic">
        <img src={process.env.PUBLIC_URL + '/shiam.jpeg'} alt=""/>
    </div>
    <div className="about">
        <h1>Hey I am Shivam Verma</h1>
        <h2>we have created a simple "About Advocate Registration" page with sections explaining the registration process and the benefits of becoming a registered advocate
        </h2>
        <h3>Advocate Registration Process</h3>

The advocate registration process involves the following steps:
Fill out the registration form with your details.
Submit the form for review.
Our team will review your application and verify your information.
Once approved, you will receive a confirmation email.
You can then log in to your advocate account and start using our platform
    </div>
</main>
  )
}

export default About