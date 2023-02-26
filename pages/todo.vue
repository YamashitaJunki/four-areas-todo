<!-- eslint-disable vue/require-v-for-key -->
<!-- Please remove this file from your project -->
<template>
  <div class="body">
    <div class="main">
      <div class="header content">
        <div class="row">
          <div class="text-left col">FOUR AREAS TODO</div>
          <div class="text-right col">
            <el-button @click="factorDisplayOrInvisible(`todo-list`)"
              >ToDoリストを表示</el-button
            >
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div id="todo-list" class="todo-list">
          <h2 class="text-primary">タイトルを選択してください</h2>
          <hr />
          <div
            v-for="toDoTitle in toDoTitleList"
            class="mt-3 title-name text-info"
          >
            <div @click="changeTitle(toDoTitle)">
              <div>●{{ toDoTitle }}</div>
            </div>
          </div>
          <hr />
          <div class="mt-5">
            <el-button
              type="success"
              size="mini"
              plain
              @click="factorDisplayOrInvisible('title-create')"
            >
              新しいToDoタイトルを作成
            </el-button>
            <el-button
              v-if="$route.query.title"
              type="success"
              size="mini"
              plain
              @click="factorDisplayOrInvisible('currentToDo')"
            >
              現在のToDoに戻る
            </el-button>
          </div>
        </div>
        <div id="title-create" class="title-create">
          <div>ToDoタイトルを作成</div>
          <el-input
            v-model="title"
            class="w-50 mt-5"
            type="text"
            placeholder="タイトルを入力してください"
          />
          <el-button type="warning" @click="createNewToDoTitle()"
            >作成</el-button
          >
          <div v-if="toDoTitleList.length >= 1" class="mt-5">
            <el-button
              type="success"
              size="mini"
              plain
              @click="factorDisplayOrInvisible('todo-list')"
            >
              ToDoリストに戻る
            </el-button>
            <el-button
              v-if="$route.query.title"
              type="success"
              size="mini"
              plain
              @click="factorDisplayOrInvisible('currentToDo')"
            >
              現在のToDoに戻る
            </el-button>
          </div>
        </div>
        <div id="warning-todo-reset" class="warning-todo-reset">
          <div class="mb-3">
            タスクをリセットしますか？
            <div class="text-danger fs-5">この操作は取り消しできません</div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <el-button type="danger" round class="w-50" @click="resetToDo()"
                  >はい</el-button
                >
              </div>
              <div class="col">
                <el-button
                  type="primary"
                  round
                  class="w-50"
                  @click="factorDisplayOrInvisible(`warning-todo-reset`)"
                  >いいえ</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div id="warning-todo-delete" class="warning-todo-delete">
          <div class="mb-3">
            ToDo【{{ toDoTitleAndMessages.title }}】を削除しますか？
            <div class="text-danger fs-5">この操作は取り消しできません</div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <el-button
                  type="danger"
                  round
                  class="w-50"
                  @click="deleteToDo()"
                  >はい</el-button
                >
              </div>
              <div class="col">
                <el-button
                  type="primary"
                  round
                  class="w-50"
                  @click="factorDisplayOrInvisible(`warning-todo-delete`)"
                  >いいえ</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="enter">
          <div class="mb-3">
            <div>
              <h3>Enter ToDo!</h3>
              <el-input
                v-model="message"
                class="w-50 mt-5 shadow"
                type="text"
                placeholder="入力後Enterキーを押して下さい (入力例:試験の勉強をする2)"
                @keypress.enter.native="submitMessage()"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-center mt-5 mb-5">
            {{ toDoTitleAndMessages.title }}
          </h1>
        </div>
        <div class="d-flex">
          <div class="importance">
            <div></div>
            <div>&emsp;&emsp;&emsp;重要性&emsp;高</div>
            <div>&emsp;&emsp;&emsp;重要性&emsp;低</div>
          </div>
          <div class="chart">
            <div class="container-fluid">
              <div class="row text-center mb-3">
                <div class="col-6">緊急性&emsp;高</div>
                <div class="col-6">緊急性&emsp;低</div>
              </div>
              <div class="row">
                <div class="col-6 area-one">
                  ●第1の領域●
                  <div
                    v-for="(msg, idx) in toDoTitleAndMessages.one"
                    :key="idx"
                  >
                    <label class="message"
                      ><el-checkbox
                        :id="`area-one-${idx}`"
                        :value="msg.checked"
                        @change="confirmCheckBox(`one`, idx)"
                      >
                        <div :class="{ done: msg.checked }" class="text-dark">
                          {{ msg.message }}
                        </div>
                      </el-checkbox>
                    </label>
                    <el-button
                      type="primary"
                      class="float-right"
                      size="small"
                      round
                      @click="removeToDoMessage(`one`, idx)"
                      >削除</el-button
                    >
                    <div
                      class="float-right"
                      :class="[msg.checked ? 'complete' : 'uncomplete']"
                    >
                      complete!!&emsp;
                    </div>
                  </div>
                </div>
                <div class="col-6 area-two">
                  ●第2の領域●
                  <div v-for="(msg, idx) in toDoTitleAndMessages.two">
                    <label class="message"
                      ><el-checkbox
                        :id="`area-two-${idx}`"
                        :value="msg.checked"
                        @change="confirmCheckBox(`two`, idx)"
                      >
                        <div :class="{ done: msg.checked }" class="text-dark">
                          {{ msg.message }}
                        </div>
                      </el-checkbox>
                    </label>

                    <el-button
                      type="primary"
                      class="float-right"
                      size="small"
                      round
                      @click="removeToDoMessage(`two`, idx)"
                      >削除</el-button
                    >
                    <div
                      class="float-right"
                      :class="[msg.checked ? 'complete' : 'uncomplete']"
                    >
                      complete!!&emsp;
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 area-three">
                  ●第3の領域●
                  <div v-for="(msg, idx) in toDoTitleAndMessages.three">
                    <label class="message"
                      ><el-checkbox
                        :id="`area-three-${idx}`"
                        :value="msg.checked"
                        @change="confirmCheckBox(`three`, idx)"
                      >
                        <div :class="{ done: msg.checked }" class="text-dark">
                          {{ msg.message }}
                        </div>
                      </el-checkbox>
                    </label>
                    <el-button
                      type="primary"
                      class="float-right"
                      size="small"
                      round
                      @click="removeToDoMessage(`three`, idx)"
                      >削除</el-button
                    >
                    <div
                      class="float-right"
                      :class="[msg.checked ? 'complete' : 'uncomplete']"
                    >
                      complete!!&emsp;
                    </div>
                  </div>
                </div>
                <div class="col-6 area-four">
                  ●第4の領域●
                  <div v-for="(msg, idx) in toDoTitleAndMessages.four">
                    <label class="message"
                      ><el-checkbox
                        :id="`area-four-${idx}`"
                        :value="msg.checked"
                        @change="confirmCheckBox(`four`, idx)"
                      >
                        <div :class="{ done: msg.checked }" class="text-dark">
                          {{ msg.message }}
                        </div>
                      </el-checkbox>
                    </label>
                    <el-button
                      type="primary"
                      class="float-right"
                      size="small"
                      round
                      @click="removeToDoMessage(`four`, idx)"
                      >削除</el-button
                    >
                    <div
                      class="float-right"
                      :class="[msg.checked ? 'complete' : 'uncomplete']"
                    >
                      complete!!&emsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <el-button
          type="warning"
          round
          class="mb-5"
          @click="factorDisplayOrInvisible(`warning-todo-reset`)"
          >ToDo項目のリセット</el-button
        >
        <el-button
          type="danger"
          round
          class="mb-5"
          @click="factorDisplayOrInvisible(`warning-todo-delete`)"
          >このToDoを削除する</el-button
        >
      </div>
      <hr />
      <div class="row justify-content-center">
        <el-button>
          <a href="https://github.com/YamashitaJunki" target="_blank">
            About Developer</a
          >
        </el-button>
        <div>&emsp;©&nbsp;2023&nbsp;YamashitaJunki</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToDoApp',
  data: () => {
    return {
      message: '',
      title: '',
    }
  },
  computed: {
    toDoTitleAndMessages: function () {
      if (!this.$route.query.title) {
        return {
          title: '',
          one: [],
          two: [],
          three: [],
          four: [],
        }
      } else {
        const title = this.$route.query.title
        return {
          title,
          one: this.$store.state.todo[title].one,
          two: this.$store.state.todo[title].two,
          three: this.$store.state.todo[title].three,
          four: this.$store.state.todo[title].four,
        }
      }
    },
    toDoTitleList: {
      cache: false,
      get() {
        return Object.keys(this.$store.state.todo)
      },
      set() {},
    },
  },
  watch: {
    $route() {
      location.reload()
    },
  },
  mounted() {
    if (this.$route.query.title) {
      document.getElementById('todo-list').style.display = 'none'
      document.getElementById('title-create').style.display = 'none'
    } else {
      const numberOfToDos = Object.keys(this.$store.state.todo).length
      if (numberOfToDos === 0) {
        document.getElementById('todo-list').style.display = 'none'
        document.getElementById('title-create').style.display = 'block'
      } else {
        document.getElementById('todo-list').style.display = 'block'
        document.getElementById('title-create').style.display = 'none'
      }
    }
  },

  methods: {
    factorDisplayOrInvisible(id) {
      const display = document.getElementById(id)
      if (id === 'todo-list') {
        document.getElementById('todo-list').style.display = 'block'
        document.getElementById('title-create').style.display = 'none'
        document.getElementById('warning-todo-delete').style.display = 'none'
        document.getElementById('warning-todo-reset').style.display = 'none'
      } else if (id === 'title-create') {
        document.getElementById('title-create').style.display = 'block'
        document.getElementById('todo-list').style.display = 'none'
      } else if (id === 'currentToDo') {
        document.getElementById('todo-list').style.display = 'none'
        document.getElementById('title-create').style.display = 'none'
      } else if (display.style.display === 'block') {
        display.style.display = 'none'
      } else {
        display.style.display = 'block'
      }
      window.scroll({
        top: 0,
        behavior: 'auto',
      })
    },
    changeTitle(title) {
      this.$router.push({ path: '/todo', query: { title } })
      const display = document.getElementById('todo-list')
      if (display.style.display === 'block') {
        display.style.display = 'none'
      } else {
        display.style.display = 'block'
      }
    },
    createNewToDoTitle() {
      if (this.title.length === 0) {
        alert('タスクタイトルを入力してください')
      } else {
        const taskObj = {
          title: this.title,
          areas: { one: [], two: [], three: [], four: [] },
        }
        this.$store.commit('todo/createNewToDoTitle', taskObj)
        this.$router.push({ path: '/todo', query: { title: this.title } })
        document.getElementById('title-create').style.display = 'none'
      }
    },
    resetToDo() {
      this.$store.commit('todo/resetToDo', this.$route.query.title)
      document.getElementById('warning-todo-reset').style.display = 'none'
      this.title = ''
    },
    deleteToDo() {
      this.$store.commit('todo/deleteToDo', this.$route.query.title)
      this.$router.push({ path: '/todo' })
      const num = Object.keys(this.$store.state.todo)
      if (num.length >= 1) {
        document.getElementById('todo-list').style.display = 'block'
        document.getElementById('title-create').style.display = 'none'
        document.getElementById('warning-todo-delete').style.display = 'none'
      } else if (num.length === 0) {
        document.getElementById('todo-list').style.display = 'none'
        document.getElementById('title-create').style.display = 'block'
        document.getElementById('warning-todo-delete').style.display = 'none'
      }
    },
    submitMessage() {
      if (this.message.length < 2) {
        alert('タスクメッセージを入力してください')
      } else {
        const trailingNumber = String(this.message.slice(-1))
        const areaNumber = Number(
          this.convertFullwidthIntoHalfwidth(trailingNumber)
        )
        if (areaNumber <= 4 && areaNumber >= 1) {
          const toDoMessage = this.message.slice(0, -1)
          this.$store.commit('todo/submitMessage', {
            title: this.$route.query.title,
            toDoMessage,
            areaNumber,
            checked: false,
          })
          this.message = ''
        } else {
          alert('末尾に１～４の数字を指定してください')
        }
      }
    },
    confirmCheckBox(area, index) {
      this.$store.commit('todo/confirmCheckBox', {
        area,
        index,
        title: this.$route.query.title,
      })
    },
    removeToDoMessage(area, index) {
      this.$store.commit('todo/removeToDoMessage', {
        title: this.$route.query.title,
        area,
        index,
      })
    },
    convertFullwidthIntoHalfwidth(str) {
      return str.replace(/[０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      })
    },
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

.body {
  width: 100vw;
  background-image: linear-gradient(
    90deg,
    rgba(149, 233, 243, 1),
    rgba(251, 213, 251, 1)
  );
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  color: #000000;
  z-index: 5;
}
.main {
  position: relative;
  padding: 50px;
  font-size: 1.5rem;
  min-width: 1300px;
  max-width: 1800px;
  margin: auto;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
.otherDisplay {
  color: white;
  display: none;
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  padding: 400px;
}
.warning-todo-reset,
.warning-todo-delete {
  @extend .otherDisplay;
  background-color: rgba(0, 0, 0, 0.9);
}
.title-create {
  @extend .otherDisplay;
  background-color: rgb(195, 229, 255);
}
.todo-list {
  @extend .otherDisplay;
  background-image: linear-gradient(
    90deg,
    rgba(251, 213, 251, 1),
    rgba(149, 233, 243, 1)
  );
}
.title-name {
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.title-name:hover {
  opacity: 0.4;
}
.enter {
  width: 100%;
  height: 200px;
  text-align: center;
  margin-top: 5rem;
}
.importance div:nth-child(2),
.importance div:nth-child(3) {
  height: 300px;
  writing-mode: vertical-rl;
  text-align: center;
}
.chart {
  width: 90%;
  transform: translate(25px);
}
.area-one::-webkit-scrollbar,
.area-two::-webkit-scrollbar,
.area-three::-webkit-scrollbar,
.area-four::-webkit-scrollbar {
  display: none;
}
.area {
  padding: 40px;
  width: 45%;
  height: 300px;
  overflow: scroll;
  font-size: 1rem;
  border-radius: 30px;
}
.area-one {
  @extend .area;
  background-color: rgb(235, 87, 82);
}
.area-two {
  @extend .area;
  background-color: #fdd35c;
}
.area-three {
  @extend .area;
  background-color: #00ac97;
}
.area-four {
  @extend .area;
  background-color: #00a1e9;
}
.message {
  width: 300px;
  white-space: nowrap;
  overflow-x: scroll;
}
.message div {
  width: 300px;
}
.message::-webkit-scrollbar,
.complete {
  display: block;
  float: right;
  color: rgb(255, 255, 255);
  -webkit-text-stroke: 0.7px #0b0000;
  text-shadow: 0.5px #120101;
}
.uncomplete {
  display: none;
}
.float-right {
  float: right;
}
label {
  cursor: pointer;
}
.done {
  text-decoration: line-through;
  text-decoration-color: rgb(255, 255, 255);
}
</style>
