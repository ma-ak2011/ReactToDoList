import { expect } from 'chai'
import _ from 'lodash'
import types from '../src/js/actions/toDoList'
//import types2 from '../src/js/actions/toDoList2'

describe('Actions', () => {1
  it('ActionTypes are not duplicates', () => {
    const arr = [
      ..._.values(types)
      //,..._.values(types2)
    ]
    expect(arr).to.be.eql(_.uniq(arr))
  })
})