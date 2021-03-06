import React, { Component, PropTypes } from 'react'
import { Card, CardHeader, CardTitle, CardText, Divider, CircularProgress } from 'material-ui'
import _ from 'lodash'
import styles from 'Styles/index'

export default class About extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className={styles.FlexWrapper}>
        <h1>Общая информация</h1>
        <Card>
          <CardHeader title="Информация" subtitle="Информация о забегах" />

          <CardTitle title="Марафон" />
          <Divider/>
          <CardText>
            Марафо́н (греч. Μαραθών, Marathṓn) — дисциплина лёгкой атлетики, представляющая собой забег на дистанцию 42 километра 195 метров (26 миль 385 ярдов). Ведущие мировые марафоны проводятся под эгидой и по правилам, разработанным Ассоциацией международных марафонов и пробегов (AIMS). Правила AIMS подтверждены Международной ассоциацией легкоатлетических федераций (IAAF).

            Марафон — олимпийская дисциплина легкоатлетической программы у мужчин с 1896 года, у женщин — с 1984 года.

            Марафонские соревнования проводятся на шоссе, но само слово, в отличие от бега на длинные дистанции, часто применяют к любым длительным пробегам на пересечённой местности или в экстремальных условиях. Их дистанции могут существенно отличаться от «классической».

            Половина марафонской дистанции, полумарафон, также является популярной дистанцией в шоссейном беге, на которой проводятся отдельные забеги и чемпионаты мира и фиксируются мировые рекорды.
          </CardText>
        </Card>
      </div>
    )
  }
}
