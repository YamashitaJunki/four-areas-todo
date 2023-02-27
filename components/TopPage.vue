<template>
<div class="top-main">
  <div class="header content">
        <div class="row">
          <nuxt-link to="/" class="col header-title"
            >Four Areas Todo App.</nuxt-link
          >
          <div class="text-right col">
          </div>
        </div>
      </div>
  <div class="top container-fluid">
    <div class="row">
      <div class="col-8 title">
        <div class="app-title left-fade">
          <div>Four&nbsp;Areas</div>
          <div>&emsp;ToDo&nbsp;App.</div>
        </div>
        <div class="mt-4 left-fade"> &emsp;&emsp;
          <el-button size="medium" @click="goToDo()"> Let's Try!!</el-button>
        </div>
      </div>
      <div class="col-4">
        <div class="col pc"> <img src="/pc.png" /> </div>
      </div>
    </div>
  </div>
  <div class="detail">
    <div class="text-center p-5">
      <div class="mt-5">このアプリについて</div>
    </div>
    <div class="row detail-box">
      <div class="col" style="position: relative">
        <div class="detail-box-cel">
          <div class="text-primary">「Four Areas ToDo App」とは？</div>
          <p>
            <div>重要度、緊急度によってToDoを分類し管理するToDoアプリです。</div>
            <div>ToDoが第1~第4の領域のうち、どの領域に分類するかを判断して</div>
            <div>ToDoメッセージの末部に領域の数字を付けて登録すると</div>
            <div>その領域にToDoが表示されます。</div>
            <div>目標達成のためにやるべきことや自分の欲しいものなど</div>
            <div>いろんな分野で活用いただけます。</div>
          </p>
        </div>
      </div>
      <div class="col" style="position: relative">
        <div class="detail-box-cel">
          <div class="text-warning">４つの領域とは？</div>
          <p>
            <div>書籍『7つの習慣-第3の習慣:最優先事項を優先する』によると</div>
            <div>人の行動は「4つの領域」に分けられるといいます。</div>
            <div>「緊急度」は、すぐにやらなくてはいけないことかどうか。</div>
            <div>「重要度」は、将来の成功にとって重要なことかどうかです。</div>
            <div>成功を手に入れるために必要なことはすべて</div>
            <div>第２の領域「緊急ではないけど重要なこと」の中にあります。</div>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-2">
    <div>
    </div>
    <div> 「Four Areas ToDo App」は </div>
    <div> 「充実した人生をもたらす時間の使い方」を導き出すアプリです。 </div>
    <div> 日々の活動を「重要度」と「緊急性」4つのマトリクスに分別して </div>
    <div> 第２の領域に重きを置いた生活を心掛けましょう。 </div>
  </div>
  <div class="app-title text-center mb-4"> TUTORIAL </div>
  <div>
    <div>
      <div class="d-flex align-items-center ml-5">
        <div class="flex-shrink-0"> <img src="/tutorial1.jpg" alt="..."> </div>
        <div class="flex-grow-1 ms-3 ml-5"> 1.ToDoタイトルを入力し 作成ボタンを押します </div>
      </div>
      <div class="d-flex align-items-center mt-5 ml-5">
        <div class="flex-shrink-0"> <img src="/tutorial2.jpg" alt="..."> </div>
        <div class="flex-grow-1 ms-3 ml-5">
          <div> 2.ToDoを編集します </div>
          <div class="explanation">
            <div> &nbsp; ①ToDoを入力し、語尾に領域の数字(1~4)を付けてEnterキーを押下</div>
            <div>&emsp;&emsp;→第１の領域の例：週末の試験の勉強をする１</div>
            <div> &nbsp; ②ToDoタイトルの編集 </div>
            <div>&emsp;&emsp;→タイトルをクリックし、編集完了後エンターを押下すると変更完了</div>
            <div> &nbsp; ③そのToDoが完了し、クリックすると「Complete!!」が表示 </div>
            <div> &nbsp; ④1つの項目のToDoの削除 </div>
            <div> &nbsp; ⑤現在のToDoの全領域を一括リセット </div>
            <div> &nbsp; ⑥現在のToDoを削除 </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center mt-5 ml-5">
        <div class="flex-shrink-0"> <img src="/tutorial3.jpg" alt="..."> </div>
        <div class="flex-grow-1 ms-3 ml-5">
          <div> 3.「ToDoリストを表示」よりToDoを選択します </div>
          <div class="explanation">
            <div> &nbsp; ⑦選択したToDoに移動 </div>
            <div> &nbsp; ⑧新しいToDoの作成 </div>
            <div> &nbsp; ⑨現在のタスクに戻る </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="use-warning"> ※利用上の注意
    <div> &emsp;アプリのデータはお使いの端末Webストレージ上に保存しているため </div>
    <div> &emsp;以下の場合はToDoが反映されません。 </div>
    <p>
      <div> &emsp;1.異なるブラウザを使用した場合 </div>
      <div> &emsp;2.クッキー削除を行なった場合（データが全て削除されます） </div>
    </p>
  </div>
  <hr class="mt-5" />
  <div class="row justify-content-center">
    <p>
      <el-button @click="goToGitHub()"> About Developer </el-button>
    <div>&emsp;©&nbsp;2023&nbsp;YamashitaJunki</div>
    </p>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    goToDo() {
      this.$router.push({ path: '/todo' })
    },
    goToGitHub() {
      const url = 'https://github.com/YamashitaJunki'
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&family=Shadows+Into+Light&display=swap');
.fade-in {
  animation-name: fadeInAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.top-main {
  font-size: 1.5rem;
  min-width: 1300px;
  max-width: 1800px;
  margin: auto;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  @extend .fade-in;
  background-image: linear-gradient(
    90deg,
    rgba(251, 213, 251, 1),
    rgba(149, 233, 243, 1)
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
.header-title {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-family: 'Shadows Into Light', cursive;
  color: #000000;
  transition: all 0.3s ease 0s;
}
.header-title:hover {
  text-decoration: none;
  opacity: 0.4;
}
.top {
  width: 100vw;
  height: 100vh;
}

.title {
  height: 100vh;
  text-align: center;
  padding: 20vh 0;
}

.app-title {
  font-size: 8rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-family: 'Shadows Into Light', cursive;
}
.detail-box {
  height: 80vh;
  font-size: 1.1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
.detail-box-cel{
width: 75%;
height:70%;
margin: auto;
padding: 2rem;
border: 2px solid;
border-image: linear-gradient(
    90deg,
    rgba(251, 213, 251, 1),
    rgba(149, 233, 243, 1)
  );
  border-image-slice: 1;
  border-radius: 20px;
position: absolute;
top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 1rem;
  line-height:3.2rem;
  transition:1s all;
}
.detail-box-cel:hover{
  transform:scale(1.2,1.2);
  transition:1s all;
}
.detail {
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  color: rgb(255, 255, 255);
}
.detail-2{
  height: 50vh;
  text-align: center;
  padding: 4rem;
  line-height: 4rem
}
.explanation {
  font-size: 1.2rem;
}
.pc {
  animation-name: fadeInAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  padding: 20vh 0;
  overflow: hidden;
}
.left-fade {
  animation-name: fadeLeftAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.use-warning {
  margin: 3rem auto 0;
  background-color: rgb(255, 255, 255, 0.6);
  padding: 2rem;
  width: 1000px;
  border-radius: 40px;
}

@keyframes fadeLeftAnime {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInAnime {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
