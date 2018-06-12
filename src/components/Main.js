import React from 'react'
import Link from 'gatsby-link'

import pic02 from '../images/pic02.jpg'

import food from '../images/linwood1.jpg';
import house from '../images/linwood2.jpg';
import bey from '../images/beyonce.gif';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The House</h2>
          <span className="image main"><img src={house} alt="" /></span>
          <p>Built in the late 1920’s, this rustic Atlanta home has seen a beautiful array of residents in its 90+ years of existence. Although its foundation resides back to the early 1900s, ‘The Linwood’, as a household brand, was not formally established until September 2012. The Linwood was founded after a frantic Craisglist search by the original roommate, Clara, who needed to find her and her two traveling vagabond roommates, Megan and Kim, a place to live within 2 weeks. Unknown to them at the time, they stumbled upon a gem, which would later come to be known fondly in their hearts as ‘The Linwood.’</p>
          <p>In its existence, The Linwood has seen 8 roommates. 6 have come and gone – 4 of which were temporary replacements. While it may seem unstable based on the numbers, the roommates of The Linwood have found harmony and unison in the household. The constant roommate change has been due to the ‘Linwood Front Bedroom curse’…or blessing based on how you see it. As a legend holds, the girl in the front room is destined to find love and move to another city for love before her one year  at The Linwood ends.</p>
          <p>Neighboring two great Atlanta-establishments, La Fonda and Felini’s, it’s known for its charisma and charm including slanted floors & doorways, and a mysterious 2-inch deep cabinet.</p> 
          <p>Some may call it the ‘leaning tower of shit’ but regardless of opinion it’s developed a deep reputation in Poncey-Highlands and the surrounding Highlands community. </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Residents</h2>
          <span className="image main"><img src={food} alt="" /></span>
          <h3>Kim</h3>
          <p>While her business card describes her as "financial analyst", Kim describes herself as "wanderer". Known to drop everything and take off for countries people have never heard of with only a few days notice, she regularly rips a short girl-sized hole in the heart of The Linwood, which cannot travel because it's a house. Though she claims to hang out with rappers at work and hang out with Green Day <i>during</i> shows, on the road Kim prefers to sleep on couches rather than in penthouses.</p>
          <p>She also rejects the existence of goats, claiming they're just "cows that sucked too many helium balloons when they were little".</p><br />

          <h3>Mary</h3>
          <p>Armed with an an encyclopedic knowledge of rap lyrics, and entirely too many encounters with rappers at El Bar, Mary brings hard street cred to The Linwood (a neccesity when 2/3 current Linwoodarians are accountants). There are substantiated rumors that she once made a grown man cry after a verbal altercation when he claimed Beyonce cannot be someone's spirit animal and that queen bee of the Beyhive is not a lofty career goal.</p>
          <p>Congruous to her hardened ATL demeanour, Mary guides the lives of youths of the metro Atlanta area as a preschool teacher. Instead of pumping people full of lead, however, she's pumping minds full of knowledge. Rather than circling Atlanta on 285 with Gucci, she's circling spelling errors.</p>
          <p>Mary also likes so many food posts on Instagram that she no longer can even.</p>

          <h3>Megan</h3>
          <p>Hailing from the foothills of Tennesee, Megan carries on the Linwood's sleepy southern charm one dropped 'g' at a time. Responsible for continuing the culinary tradition of The Linwood, her specialities include artisanal frozen pizza and aged Krispy Kreme donuts.</p>
          <p>Voted "Most Likely to Not Throw A Party Where We Just Throw Money Around While Dancing to Beyonce Songs"*, Megan is the most responsible Linwoodarian, and as such holds the prestigious distinction of being included in all correspondance between The Linwood's current owner whether it actually concerns her or not.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Events</h2>
          <span className="image main"><img src={bey} alt="" /></span>
          <p>No events scheduled at this time</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a target="_blank" href="https://www.instagram.com/explore/tags/thelinwood/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
