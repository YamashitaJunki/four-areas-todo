<!-- eslint-disable vue/require-v-for-key -->
<!-- Please remove this file from your project -->
<template>
  <div class="body">
    <div class="main">
      <div id="warning" class="warning">
        <div class="mb-3">タスクをリセットしますか？</div>
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
                      @change="check(`one`, idx)"
                      :value="msg.checked"
                    >
                      <div :class="{ done: msg.checked }">
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
                      @change="check(`two`, idx)"
                      :value="msg.checked"
                    >
                      <div :class="{ done: msg.checked }">
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
                      <div :class="{ done: msg.checked }">
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
                      <div :class="{ done: msg.checked }">
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
        <el-button type="danger" round class="mb-5" @click="warning()"
          >タスクのリセット</el-button
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
    }
  },
  computed: {
    TODOMessage: function () {
      const msg = {
        one: this.$store.state.todo.one,
        two: this.$store.state.todo.two,
        three: this.$store.state.todo.three,
        four: this.$store.state.todo.four,
      }
      return msg
    },
  },

  methods: {
    check(area, idx) {
      this.$store.commit('todo/changeCheck', {
        area,
        idx,
      })
    },
    submit() {
      const num = String(this.message.slice(-1))
      const taskNum = Number(this.hankaku2Zenkaku(num))
      if (taskNum <= 4 && taskNum >= 1) {
        const taskMessage = this.message.slice(0, -1)
        this.$store.commit('todo/insert', {
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
        number: num,
        index: idx,
      })
    },
    reset() {
      this.$store.commit('todo/reset')
      document.getElementById('warning').style.display = 'none'
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
    hankaku2Zenkaku(str) {
      return str.replace(/[０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      })
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
.warning {
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
  background-color: beige;
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
}
.uncomplete {
  display: none;
}
.done {
  text-decoration: line-through;
}
</style>
