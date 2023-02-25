export const state = () => ({})

export const mutations = {
  enterTitle(state, obj) {
    state[obj.title] = obj.areas
  },
  insert(state, obj) {
    if (obj.num === 1) {
      state[obj.title].one.push({
        message: obj.message,
        checked: false,
      })
    }
    if (obj.num === 2) {
      state[obj.title].two.push({
        message: obj.message,
        checked: false,
      })
    }
    if (obj.num === 3) {
      state[obj.title].three.push({
        message: obj.message,
        checked: false,
      })
    }
    if (obj.num === 4) {
      state[obj.title].four.push({
        message: obj.message,
        checked: false,
      })
    }
  },
  remove(state, obj) {
    const num = obj.number
    state[obj.title][num].splice(obj.index, 1)
  },
  reset(state, title) {
    Object.keys(state[title]).forEach((data) => {
      state[title][data] = []
    })
  },
  changeCheck(state, obj) {
    state[obj.title][obj.area][obj.idx].checked =
      !state[obj.title][obj.area][obj.idx].checked
  },
  delete(state, title) {
    delete state[title]
  },
}
