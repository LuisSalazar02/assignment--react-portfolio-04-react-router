import React, { Component } from 'react';

class Project extends Component {

  render() {
    console.log();
    let isSoloProject = this.props.solo
    let projectName = this.props.projectName
    let renderedClassVal = ''

    if(isSoloProject){
      renderedClassVal = 'project--solo'
    } else {
      renderedClassVal = 'project--team'
    }
    return <div className={`project ${renderedClassVal}`}>
      <span className="project__title">{projectName}</span>
    </div>

  }
}

export default Project
