import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import MonsterFinder from '../components/MonsterFinder';
import * as MonsterActions from '../actions/MonsterActions';
import _ from 'lodash'

@connect(state => ({
  ...state.monster
}))

export default class MonsterFinderApp {
  render() {
    const { categories, chosenCategory, monster, dispatch } = this.props
    return (
      <MonsterFinder categories={categories} chosenCategory={chosenCategory} monster={monster}
        {...bindActionCreators(MonsterActions, dispatch)} />
    )
  }
}