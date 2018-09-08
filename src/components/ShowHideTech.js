import React, { Component } from 'react';

/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear

*/

class ShowHideTech extends Component {
  constructor(args){
    super(...args)
    this.state = {
      techIsVisible : false
    }
  }

  _handleClick(){
    if(this.state.techIsVisible){
      this.setState({techIsVisible: false})
    } else {
      this.setState({techIsVisible: true})

    }
  }

  render() {
    const techlistHiddenClassname = `techlist--hidden`
    const techlistVisibleClassname = `techlist--visible`

    let techlistStatus

    if(this.state.techIsVisible){
      techlistStatus = techlistVisibleClassname
    } else {
      techlistStatus = techlistHiddenClassname
    }

    return (
      <section>
        <h4>Technologies</h4>
        <button onClick={()=>{this._handleClick()}} className="toggle-techlist">+ Show Tech</button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech
