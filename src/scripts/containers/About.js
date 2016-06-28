import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SprintList from '../components/SprintList'
import * as sprintListActions from '../actions/SprintList.Actions'
import _ from 'lodash'
import styles from 'Styles/index'

export default class About extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);
    this.state = { show: false }
  }
  componentDidMount() {
    const show = ()=> {
      this.setState({ show: true })
    }
    setTimeout(()=> {
      show()
    }, 100)

  }
  render() {
    let show = styles.__active
    if(!this.state.show) show = ''
    return (
      <div className={`${styles.Wrapper} ${show}`}>
        <h1>About Page</h1>
        <p>
          Марафо́н (греч. Μαραθών, Marathṓn) — дисциплина лёгкой атлетики, представляющая собой забег на дистанцию 42 километра 195 метров (26 миль 385 ярдов). Ведущие мировые марафоны проводятся под эгидой и по правилам, разработанным Ассоциацией международных марафонов и пробегов (AIMS). Правила AIMS подтверждены Международной ассоциацией легкоатлетических федераций (IAAF).

          Марафон — олимпийская дисциплина легкоатлетической программы у мужчин с 1896 года, у женщин — с 1984 года.

          Марафонские соревнования проводятся на шоссе, но само слово, в отличие от бега на длинные дистанции, часто применяют к любым длительным пробегам на пересечённой местности или в экстремальных условиях. Их дистанции могут существенно отличаться от «классической».

          Половина марафонской дистанции, полумарафон, также является популярной дистанцией в шоссейном беге, на которой проводятся отдельные забеги и чемпионаты мира и фиксируются мировые рекорды.
        </p>
      </div>
    )
  }
}
