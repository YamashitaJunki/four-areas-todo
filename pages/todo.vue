<!-- eslint-disable vue/require-v-for-key -->
<!-- Please remove this file from your project -->
<template>
  <div class="body">
    <div class="main">
      <div id="create-title" class="create-title">
        <div>タスク題名を入力</div>
        <el-input
          v-model="title"
          class="w-50 mt-5"
          type="text"
          placeholder=""
        />
        <el-button type="warning" @click="enterTitle()"> 決定</el-button>
        <div v-if="TODOTitleList.length >= 1" class="mt-5">
          <el-button size="small" @click="backTODOList()">
            タスクリストに戻る
          </el-button>
        </div>
      </div>
      <div id="title-list" class="title-list">
        <div>タイトルを選択してください</div>
        <div
          v-for="todoTitle in TODOTitleList"
          class="mt-3 title-name text-info"
        >
          <div @click="titleChange(todoTitle)">
            <div>●{{ todoTitle }}</div>
          </div>
        </div>
        <hr />
        <div class="mt-5">
          <el-button type="success" size="mini" plain @click="createTask()">
            タスクを作成
          </el-button>
          <el-button
            v-if="$route.query.title"
            type="success"
            size="mini"
            plain
            @click="backTask()"
          >
            タスクに戻る
          </el-button>
        </div>
      </div>
      <div id="warning" class="warning">
        <div class="mb-3">
          タスクをリセットしますか？
          <div class="text-danger fs-5">この操作は取り消しできません</div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <el-button type="danger" round class="w-50" @click="reset()"
                >はい</el-button
              >
            </div>
            <div class="col">
              <el-button type="primary" round class="w-50" @click="warning()"
                >いいえ</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <div id="delete-task" class="delete-task">
        <div class="mb-3">
          【{{ TODOMessage.title }}】タスクを削除しますか？
          <div class="text-danger fs-5">この操作は取り消しできません</div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <el-button type="danger" round class="w-50" @click="deleteTask()"
                >はい</el-button
              >
            </div>
            <div class="col">
              <el-button
                type="primary"
                round
                class="w-50"
                @click="displayDelete()"
                >いいえ</el-button
              >
            </div>
          </div>
        </div>
      </div>

      <div class="top">
        <div class="mb-3">
          <div>
            <h3>Enter task.</h3>
            <el-input
              v-model="message"
              class="w-50 mt-5 shadow"
              type="text"
              placeholder="例:英語の勉強をする2"
              @keypress.enter.native="submit()"
            />
          </div>
        </div>
        <div>
          <el-button @click="displayTaskList()"> タスクリストを表示 </el-button>
        </div>
      </div>
      <div>
        <h1 class="text-center">{{ TODOMessage.title }}</h1>
      </div>
      <div class="d-flex">
        <div class="important">
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
                <div v-for="(msg, idx) in TODOMessage.one" :key="idx">
                  <label class="message"
                    ><el-checkbox
                      :id="`areaOne-${idx}`"
                      :value="msg.checked"
                      @change="check(`one`, idx)"
                    >
                      <div :class="{ done: msg.checked }" class="text-dark">
                        {{ msg.message }}
                      </div>
                    </el-checkbox>
                  </label>
                  <el-button
                    type="primary"
                    class="delete"
                    size="small"
                    round
                    @click="remove(`one`, idx)"
                    >削除</el-button
                  >
                  <div
                    class="delete"
                    :class="[msg.checked ? 'complete' : 'uncomplete']"
                  >
                    complete!!&emsp;
                  </div>
                </div>
              </div>
              <div class="col-6 area-two">
                ●第2の領域●
                <div v-for="(msg, idx) in TODOMessage.two">
                  <label class="message"
                    ><el-checkbox
                      :id="`areaTwo-${idx}`"
                      :value="msg.checked"
                      @change="check(`two`, idx)"
                    >
                      <div :class="{ done: msg.checked }" class="text-dark">
                        {{ msg.message }}
                      </div>
                    </el-checkbox>
                  </label>

                  <el-button
                    type="primary"
                    class="delete"
                    size="small"
                    round
                    @click="remove(`two`, idx)"
                    >削除</el-button
                  >
                  <div
                    class="delete"
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
                <div v-for="(msg, idx) in TODOMessage.three">
                  <label class="message"
                    ><el-checkbox
                      :id="`areaThree-${idx}`"
                      :value="msg.checked"
                      @change="check(`three`, idx)"
                    >
                      <div :class="{ done: msg.checked }" class="text-dark">
                        {{ msg.message }}
                      </div>
                    </el-checkbox>
                  </label>
                  <el-button
                    type="primary"
                    class="delete"
                    size="small"
                    round
                    @click="remove(`three`, idx)"
                    >削除</el-button
                  >
                  <div
                    class="delete"
                    :class="[msg.checked ? 'complete' : 'uncomplete']"
                  >
                    complete!!&emsp;
                  </div>
                </div>
              </div>
              <div class="col-6 area-four">
                ●第4の領域●
                <div v-for="(msg, idx) in TODOMessage.four">
                  <label class="message"
                    ><el-checkbox
                      :id="`areaFour-${idx}`"
                      :value="msg.checked"
                      @change="check(`four`, idx)"
                    >
                      <div :class="{ done: msg.checked }" class="text-dark">
                        {{ msg.message }}
                      </div>
                    </el-checkbox>
                  </label>
                  <el-button
                    type="primary"
                    class="delete"
                    size="small"
                    round
                    @click="remove(`four`, idx)"
                    >削除</el-button
                  >
                  <div
                    class="delete"
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

      <div class="text-center mt-5">
        <el-button type="warning" round class="mb-5" @click="warning()"
          >タスク項目のリセット</el-button
        >
        <el-button type="danger" round class="mb-5" @click="displayDelete()"
          >!このタスクを削除する!</el-button
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
  name: 'NuxtTutorial',
  data: () => {
    return {
      message: '',
      title: '',
    }
  },
  computed: {
    TODOMessage: function () {
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
    TODOTitleList: {
      cache: false,
      get() {
        return Object.keys(this.$store.state.todo)
      },
    },
  },
  mounted() {
    if (this.$route.query.title) {
      document.getElementById('title-list').style.display = 'none'
      document.getElementById('create-title').style.display = 'none'
    } else {
      const numberOfTasks = Object.keys(this.$store.state.todo).length
      if (numberOfTasks === 0) {
        document.getElementById('title-list').style.display = 'none'
        document.getElementById('create-title').style.display = 'block'
      } else {
        document.getElementById('title-list').style.display = 'block'
        document.getElementById('create-title').style.display = 'none'
      }
    }
  },

  methods: {
    enterTitle() {
      const taskObj = {
        title: this.title,
        areas: { one: [], two: [], three: [], four: [] },
      }
      this.$store.commit('todo/enterTitle', taskObj)
      this.$router.push({ path: '/todo', query: { title: this.title } })
      document.getElementById('create-title').style.display = 'none'
    },
    check(area, idx) {
      this.$store.commit('todo/changeCheck', {
        area,
        idx,
        title: this.$route.query.title,
      })
    },
    submit() {
      const num = String(this.message.slice(-1))
      const taskNum = Number(this.hankaku2Zenkaku(num))
      if (taskNum <= 4 && taskNum >= 1) {
        const taskMessage = this.message.slice(0, -1)
        this.$store.commit('todo/insert', {
          title: this.$route.query.title,
          message: taskMessage,
          num: taskNum,
          checked: false,
        })
        this.message = ''
      } else {
        alert('末尾に１～４の数字を指定してください')
      }
    },
    remove(num, idx) {
      this.$store.commit('todo/remove', {
        title: this.$route.query.title,
        number: num,
        index: idx,
      })
    },
    reset() {
      this.$store.commit('todo/reset', this.$route.query.title)
      document.getElementById('warning').style.display = 'none'
      this.title = ''
    },
    warning() {
      const p1 = document.getElementById('warning')

      if (p1.style.display === 'block') {
        // noneで非表示
        p1.style.display = 'none'
      } else {
        // blockで表示
        p1.style.display = 'block'
      }
    },
    displayDelete() {
      const p1 = document.getElementById('delete-task')

      if (p1.style.display === 'block') {
        // noneで非表示
        p1.style.display = 'none'
      } else {
        // blockで表示
        p1.style.display = 'block'
      }
    },
    hankaku2Zenkaku(str) {
      return str.replace(/[０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      })
    },
    titleChange(title) {
      // eslint-disable-next-line object-shorthand
      this.$router.push({ path: '/todo', query: { title: title } })
      const p1 = document.getElementById('title-list')

      if (p1.style.display === 'block') {
        // noneで非表示
        p1.style.display = 'none'
      } else {
        // blockで表示
        p1.style.display = 'block'
      }
    },
    displayTaskList() {
      const p1 = document.getElementById('title-list')
      p1.style.display = 'block'
    },
    createTask() {
      document.getElementById('create-title').style.display = 'block'
      document.getElementById('title-list').style.display = 'none'
    },
    deleteTask() {
      this.$store.commit('todo/delete', this.$route.query.title)
      this.$router.push({ path: '/todo' })
      const num = Object.keys(this.$store.state.todo)
      if (num.length >= 1) {
        document.getElementById('title-list').style.display = 'block'
        document.getElementById('create-title').style.display = 'none'
        document.getElementById('delete-task').style.display = 'none'
      } else if (num.length === 0) {
        document.getElementById('title-list').style.display = 'none'
        document.getElementById('create-title').style.display = 'block'
        document.getElementById('delete-task').style.display = 'none'
      }
    },
    backTODOList() {
      document.getElementById('title-list').style.display = 'block'
      document.getElementById('create-title').style.display = 'none'
    },
    backTask() {
      document.getElementById('title-list').style.display = 'none'
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

.body {
  width: 100vw;
}
.main {
  position: relative;
  padding: 50px;
  font-size: 1.5rem;
  width: 1300px;
  margin: auto;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
.warning,
.delete-task {
  color: white;
  display: none;
  margin: auto;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 1300px;
  height: 100vh;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  padding: 400px;
}
.create-title {
  color: white;
  margin: auto;
  display: none;
  position: absolute;
  background-color: rgb(195, 229, 255);
  width: 1300px;
  height: 100%;
  z-index: 30;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  padding: 400px;
}
.title-list {
  color: white;
  margin: auto;
  position: absolute;
  background-image: linear-gradient(
    90deg,
    rgba(251, 213, 251, 1),
    rgba(149, 233, 243, 1)
  );
  width: 1300px;
  height: 100%;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  padding: 400px;
}

.title-name {
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.title-name:hover {
  opacity: 0.4;
}

.top {
  width: 100%;
  height: 200px;
  text-align: center;
}

.important div:nth-child(2),
.important div:nth-child(3) {
  height: 300px;
  writing-mode: vertical-rl;
  text-align: center;
}
.chart {
  width: 90%;
  transform: translate(25px);
}

.area-one {
  background-color: rgb(235, 87, 82);
  padding: 40px;
  width: 45%;
  height: 300px;
  overflow: scroll;
  font-size: 1rem;
  border-radius: 30px;
}
.area-one::-webkit-scrollbar {
  display: none;
}
.area-two {
  background-color: #fdd35c;
  padding: 40px;
  width: 45%;
  height: 300px;
  overflow: scroll;
  font-size: 1rem;
  border-radius: 30px;
}
.area-two::-webkit-scrollbar {
  display: none;
}
.area-three {
  background-color: #00ac97;
  padding: 40px;
  width: 45%;
  height: 300px;
  overflow: scroll;
  font-size: 1rem;
  border-radius: 30px;
}
.area-three::-webkit-scrollbar {
  display: none;
}
.area-four {
  background-color: #00a1e9;
  padding: 40px;
  width: 45%;
  height: 300px;
  overflow: scroll;
  font-size: 1rem;
  border-radius: 30px;
}
.area-four::-webkit-scrollbar {
  display: none;
}
.message {
  width: 300px;
  white-space: nowrap;
  overflow-x: scroll;
}
.message div {
  width: 300px;
}
/*スクロールバー非表示（Chrome・Safari）*/
.message::-webkit-scrollbar {
  display: none;
}

.delete {
  float: right;
}
label {
  cursor: pointer;
}
.bb {
  background-color: aqua;
}
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
.done {
  text-decoration: line-through;
  text-decoration-color: rgb(255, 255, 255);
}
</style>
