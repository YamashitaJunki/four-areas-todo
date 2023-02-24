export const state = () => ({
  task: {
    thisIsTestObject: {
      one: [],
      two: [],
      three: [],
      four: [],
    },
  },
})

export const mutations = {
  enterTitle(state, obj) {
    state.task[obj.title] = obj.area
  },
  insert(state, obj) {
    if (obj.num === 1) {
      state.task[obj.title].one.push({
        message: obj.message,
        checked: false,
      })
    }
    if (obj.num === 2) {
      state.task[obj.title].two.push({
        message: obj.message,
        checked: false,
      })
    }
    if (obj.num === 3) {
      state.task[obj.title].three.push({
        message: obj.message,
        checked: false,
      })
    }
    if (obj.num === 4) {
      state.task[obj.title].four.push({
        message: obj.message,
        checked: false,
      })
    }
  },
  remove(state, obj) {
    const num = obj.number
    state.task[obj.title][num].splice(obj.index, 1)
  },
  reset(state, title) {
    Object.keys(state.task[title]).forEach((data) => {
      state.task[title][data] = []
    })
  },
  changeCheck(state, obj) {
    state.task[obj.title][obj.area][obj.idx].checked =
      !state.task[obj.title][obj.area][obj.idx].checked
  },
}
