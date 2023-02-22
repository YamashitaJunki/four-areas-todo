<!-- eslint-disable vue/require-v-for-key -->
<!-- Please remove this file from your project -->
<template>
  <div class="main">
    <div class="top">
      <div class="mb-3">
        <div>
          <label>タスクを入力</label>
          <textarea
            v-model="message"
            class="form-control w-50 m-auto"
            placeholder="例:英語の勉強をする2"
          ></textarea>
        </div>
        <button class="mt-3" @click="submit()">Submit</button>
      </div>
    </div>
    <div class="w-100 text-center">緊急性</div>
    <p class="arrow"></p>
    <div class="d-flex">
      <div class="arr"></div>
      <div class="box">
        <div class="bg-danger">
          <p>第１の領域</p>
          <p v-for="(msg, idx) in TODOMessage.one">
            <input type="checkbox" /> {{ msg }}
            <button @click="remove(`one`, idx)">削除</button>
          </p>
        </div>
        <div class="bg-warning">
          <p>第2の領域</p>
          <p v-for="(msg, idx) in TODOMessage.two">
            <input type="checkbox" /> {{ msg }}
            <button @click="remove(`two`, idx)">削除</button>
          </p>
        </div>
        <div class="bg-success">
          <p>第3の領域</p>
          <p v-for="(msg, idx) in TODOMessage.three">
            <input type="checkbox" /> {{ msg }}
            <button @click="remove(`three`, idx)">削除</button>
          </p>
        </div>
        <div class="bg-primary">
          <p>第4の領域</p>
          <p v-for="(msg, idx) in TODOMessage.four">
            <input type="checkbox" /> {{ msg }}
            <button @click="remove(`four`, idx)">削除</button>
          </p>
        </div>
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
    submit() {
      const num = String(this.message.slice(-1))
      const taskNum = Number(this.hankaku2Zenkaku(num))
      const taskMessage = this.message.slice(0, -1)
      this.$store.commit('todo/insert', {
        message: taskMessage,
        num: taskNum,
      })
    },
    remove(num, idx) {
      this.$store.commit('todo/remove', {
        number: num,
        index: idx,
      })
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
.main {
  padding: 100px;
}
.top {
  width: 100%;
  height: 200px;
  text-align: center;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.box div {
  padding: 40px;
  width: 45%;
  height: 400px;
}
.arrow {
  display: inline-block;
  height: 20px;
  width: 100%;
  background-color: #5bc0de;
  position: relative;
  top: 0px;
}

.arrow:before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 45px solid transparent;
  border-left: 60px solid #5bc0de;
  left: 100%;
  top: -37px;
}
.arr {
  display: inline-block;
  width: 20px;
  background-color: #5bc0de;
  position: relative;
  top: 0px;
}

.arr:before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 45px solid transparent;
  border-left: 60px solid #5bc0de;
  left: 100%;
  top: 800px;
  transform: rotate(90deg) translate(0px, 63px);
}
</style>
