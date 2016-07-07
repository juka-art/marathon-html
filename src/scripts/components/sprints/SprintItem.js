import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress } from 'material-ui'
import _ from 'lodash'

import styles from 'Styles/Sprint.styl'

export default class SprintItem extends Component {
  handleCheck(e) {
    const { checked } = e.target
    this.props.checkItem(this.props.list, this.props.id)
  }

  render() {
    const {id, information, organization, infrastructure, type} = this.props
    const sprintType = `__${type}`
    let supText
    if(type === 'past') {
      supText = 'Прошедший'
    }else if(type === 'present') {
      supText = 'Настоящий'
    }else if(type === 'future'){
      supText = 'Будущий'
    }
    return (
      <div className={`${styles['sprint-list__item']} ${styles[sprintType]}`}>
        <Link to={`/sprint/${id}`}>
          <Card>
            <CardHeader title={`Забег: ${information}`} subtitle={supText}/>
            <Divider/>

            <CardTitle title="Организация" />
            <CardText>{organization}</CardText>
            <Divider/>

            <CardTitle title="Инфраструктура" />
            <CardText>{infrastructure}</CardText>
            <Divider/>
          </Card>
        </Link>
      </div>
    )
  }
}
