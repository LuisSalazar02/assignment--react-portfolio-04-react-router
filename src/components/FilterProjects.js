import React, { Component } from 'react';
import { projectData } from '../data/datasource'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME
       -- classes for proejct--«type» : project--solo , project--team

   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
  constructor(args){
    super(...args)
    this.state = {
      tabSelected: 'all'
    }
  }

  _projectDataJSX(){
    console.log(projectData);
    return projectData
    .filter ( p => {
      console.log(this.state.tabSelected);
      if(this.state.tabSelected === 'all') return true
      if(this.state.tabSelected === 'solo' && p.solo) return true
      if(this.state.tabSelected === 'team' && !p.solo) return true
      return false
    })
    .map( p => {
      let projectType

      if(p.solo){
        projectType = 'solo'
      } else {
        projectType = 'team'
      }
      return <div className={`project project--${projectType}`}>
        <span className="project__title">{p.projectName}</span>
      </div>

    })
  }

  _handleClick(val){
    this.setState({
      tabSelected : val
    })
  }

  render() {
    let allClassName = ''
    let soloClassName = ''
    let teamClassName = ''

    if(this.state.tabSelected === 'all') allClassName = 'project-type--selected'
    if(this.state.tabSelected === 'solo') soloClassName = 'project-type--selected'
    if(this.state.tabSelected === 'team') teamClassName = 'project-type--selected'


    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span onClick={ () => this._handleClick('all')  }
              data-ptype="all"
              className={`project-type project-type--all ${allClassName}`}>
              All
            </span>

            <span onClick={ () => this._handleClick('solo')  }
              data-ptype="solo"
              className={`project-type project-type--solo ${soloClassName}`}>
              <i className="ion-person"></i>Solo
            </span>

            <span onClick={ () => this._handleClick('team') }
              data-ptype="team"
              className={`project-type project-type--team ${teamClassName}`}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {/* Step (1) --- .map() the projectData to JSX  */}
            { this._projectDataJSX() }
          </div>
        </section>

    );
  }
}

export default FilterProjects
