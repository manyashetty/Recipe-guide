import React from 'react';
import './AboutUs.css'; // Import your CSS file

const Aboutus = () => {
  return (
    <div className="about-us">
      <h1 className='abt'>About Us</h1>
      <p className='pabt'>
        Welcome to RecipeMaster, your ultimate destination for culinary inspiration.
        Our passion for food has driven us to create a platform where cooking enthusiasts,
        both novice and experienced, can explore, create, and share delightful recipes.
      </p>
      <p className='pabt'>
        At RecipeMaster, we believe that cooking is not just a necessity but an art form.
        Our mission is to empower you with the knowledge, creativity, and tools to craft
        exceptional dishes that tantalize taste buds and bring joy to your kitchen.
      </p>
      <p className='pabt'>
        Whether you're looking for quick weeknight dinners, gourmet treats, or dietary-specific recipes,
        our extensive collection has you covered. Join our community of food lovers, experiment with
        new flavors, and embark on a culinary journey like never before.
      </p>
      <p className='pabt'>
        Thank you for choosing RecipeMaster as your culinary companion. Let's cook up something
        extraordinary together!
      </p>
    </div>
  );
};

export default Aboutus;