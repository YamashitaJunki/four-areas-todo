export const state = () => ({})

export const mutations = {
  createNewToDoTitle(state, obj) {
    state[obj.title] = obj.areas
  },
  submitMessage(state, obj) {
    if (obj.areaNumber === 1) {
      state[obj.title].one.push({
        message: obj.toDoMessage,
        checked: false,
      })
    }
    if (obj.areaNumber === 2) {
      state[obj.title].two.push({
        message: obj.toDoMessage,
        checked: false,
      })
    }
    if (obj.areaNumber === 3) {
      state[obj.title].three.push({
        message: obj.toDoMessage,
        checked: false,
      })
    }
    if (obj.areaNumber === 4) {
      state[obj.title].four.push({
        message: obj.toDoMessage,
        checked: false,
      })
    }
  },
  removeToDoMessage(state, obj) {
    state[obj.title][obj.area].splice(obj.index, 1)
  },
  renameToDoTitle(state, obj) {
    const messageAndChecked = state[obj.before]
    delete state[obj.before]
    state[obj.after] = messageAndChecked
    this.$router.push({ path: '/todo', query: { title: obj.after } })
  },
  resetToDo(state, title) {
    Object.keys(state[title]).forEach((toDo) => {
      state[title][toDo] = []
    })
  },
  confirmCheckBox(state, obj) {
    state[obj.title][obj.area][obj.index].checked =
      !state[obj.title][obj.area][obj.index].checked
  },
  deleteToDo(state, title) {
    delete state[title]
  },
}
