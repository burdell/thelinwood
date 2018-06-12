import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-home"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>the linwood</h1>
                <p>a place for friends</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>The House</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>The Residents</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>The Events</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
