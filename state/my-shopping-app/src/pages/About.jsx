import Projects from "./Projects"


function About() {
    return (
        <div className="section2">
        <div>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and
          web development. Fast-forward to today, and I have had the
          privilege of building software for an advertising agency, a
          start-up, a huge corporation, and a digital product studio.
        </div>
        <br />
        <div>
          My main focus these days is building accessible user interfaces
          for our customers at Klaviyo. I most enjoy building software in
          the sweet spot where design and engineering meet — things that
          look good but are also built well under the hood. In my free time,
          I have also released an online video course that covers everything
          you need to know to build a web app with the Spotify API.
        </div>
        <br />
        <div>
          When I am not at the computer, I am usually rock climbing,
          reading, hanging out with my wife and two cats, or running around
          Hyrule searching for Korok seeds K o r o k s e e d s .
        </div>
        <Projects/>
      </div>
    )
}

export default About
