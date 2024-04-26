import React from 'react'
import  {Navbar}  from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListing from "../components/JobListing";
import ViewAll from "../components/ViewAll";
function HomePage() {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subTitle="Find the React job that fits your skill set"
      />
      <HomeCard />
      <JobListing isHome={true} />
      <ViewAll />
    </>
  )
}

export default HomePage