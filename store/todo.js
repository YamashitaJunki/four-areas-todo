export const state = () => ({
  one: [],
  two: [],
  three: [],
  four: [],
})

export const mutations = {
  insert(state, obj) {
    if (obj.num === 1) {
      state.one.push({ message: obj.message, checked: false })
    }
    if (obj.num === 2) {
      state.two.push({ message: obj.message, checked: false })
    }
    if (obj.num === 3) {
      state.three.push({ message: obj.message, checked: false })
    }
    if (obj.num === 4) {
      state.four.push({ message: obj.message, checked: false })
    }
  },
  remove(state, obj) {
    const num = obj.number
    state[num].splice(obj.index, 1)
  },
  reset(state) {
    Object.keys(state).forEach((data) => {
      state[data] = []
    })
  },
}
