// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import Components
import Button from "../components/Button";

// Assets / Animation
import profileImg from "../assets/img/profile-pic.png";
import { pageAnimation } from "../styles/animation";

const Home = () => {
  return (
    <StyledHomeContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="details">
        <p>Hello,</p>
        <h1>I'm Archit Badjatya</h1>
        <h2>Full Stack Web & Mobile Developer</h2>
        <div className="btn">
          <Button as={Link} to="/about">
            More About Me
          </Button>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box inner-shadow">
          <img src={profileImg} className="outer-shadow" alt="profile-pic" />
        </div>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;

const StyledHomeContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;

  .details,
  .home-img {
    flex: 0 0 50%;
    max-width: 45%;
    padding: 0 15px;
  }

  .details {
    max-width: 50%;
  }

  p {
    color: ${({ theme }) => theme.color.text_300};
    font-size: 1.125rem;
    margin-bottom: 32px;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text_900};
    margin-bottom: 32px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.text_600};
    text-transform: capitalize;
    margin-bottom: 32px;
  }

  .img-box {
    max-width: 450px;
    display: block;
    margin: auto;
    border-radius: 50%;
    padding: 15px 15px 10px 15px;
  }

  .img-box img {
    width: 100%;
    border-radius: 50%;
    border: 10px solid transparent;
  }

  @media (max-width: 1440px) {
    padding: 150px 30px;

    .home-img {
      max-width: 50%;
    }
  }

  @media (max-width: 1024px) {
    padding: 100px 30px 80px 30px;
    width: 968px;

    .details {
      max-width: 45%;
    }
    .home-img {
      max-width: 50%;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 24px;
    }
    p {
      font-size: 1rem;
      margin-bottom: 24px;
    }
    h2 {
      font-size: 1.25rem;
      margin-bottom: 32px;
    }
    .img-box {
      max-width: 300px;
      display: block;
      margin: auto;
      border-radius: 50%;
      padding: 15px 15px 10px 15px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 50px 20px;

    .details,
    .home-img {
      flex: 0 0 50%;
      max-width: 100%;
      padding: 0 15px;
    }
    .img-box {
      max-width: 400px;
    }
    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.color.text_900};
      margin-bottom: 32px;
      text-align: center;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.text_600};
      text-transform: capitalize;
      margin-bottom: 32px;
      text-align: center;
    }

    .btn {
      display: flex;
      justify-content: center;
    }
  }
`;
