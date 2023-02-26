<template>
  <div class="top-main">
    <div class="top container w-75">
      <div class="row">
        <div class="col left-fade">
          <div class="app-title">
            Four&nbsp;Areas
            <div>&nbsp;&nbsp;&nbsp;ToDo&nbsp;App.</div>
          </div>
          <label >  
          <div class="mt-4">            
            &emsp;&emsp;<el-button size="medium" @click="goToDo()"> Let's Try!!</el-button>
          </div>
        </label>
        </div>
        <div class="col"></div>

        <div class="col pc">
          <img src="/pc.png" />
        </div>
      </div>
    </div>
    <div class="bottom text-center">
      <div>
        <div>「Four Areas ToDo App」は</div>
        <div>「充実した人生をもたらす時間の使い方」を導き出すアプリです。</div>
        <p>
          <div>
                      <div>
          日々の活動を「重要度」と「緊急性」4つのマトリクスに分別して
        </div>
        <div>第２の領域に重きを置いた生活を心掛けましょう。</div>
          </div>
        </p>
      </div>
    </div>

    <div class="app-title text-center mb-4">
      TUTORIAL
    </div>
    <div >
      <div>
      <div class="d-flex align-items-center">
      <div class="flex-shrink-0">
       <img src="/tutorial1.jpg" alt="...">
     </div>
     <div class="flex-grow-1 ms-3 ml-5">
      1.ToDoタイトルを入力し 作成ボタンを押します
     </div>
    </div>
    <div class="d-flex align-items-center mt-5">
      <div class="flex-shrink-0">
       <img src="/tutorial2.jpg" alt="...">
     </div>
     <div class="flex-grow-1 ms-3 ml-5">
      <div>
        2.Todoを編集します
      </div>
      <div class="explanation">
        <div>
          &nbsp; ①ToDoを入力し、語尾に領域の数字(1~4)を付けてEnterキーを押下
        </div>
        <div>
          &nbsp; ②ToDoタイトルの編集
        </div>
        <div>
          &nbsp; ③そのToDoが完了し、クリックすると「Complete!!」が表示
        </div>
        <div>
          &nbsp; ④ToDoの削除ボタン
        </div>
        <div>
          &nbsp; ⑤現在のToDoの全領域を一括リセット
        </div>
        <div>
          &nbsp; ⑥現在のToDoを削除
        </div>
      </div>
     </div>
    </div>
    <div class="d-flex align-items-center mt-5">
      <div class="flex-shrink-0">
       <img src="/tutorial3.jpg" alt="...">
     </div>
     <div class="flex-grow-1 ms-3 ml-5">
      <div>
        3.「ToDoリストを表示」よりToDoを選択します
      </div>
      <div class="explanation">
        <div>
          &nbsp; ⑦選択したToDoに移動
        </div>
        <div>
          &nbsp; ⑧新しいToDoの作成
        </div>
        <div>
          &nbsp; ⑨現在のタスクに戻る
        </div>
      </div>
     </div>
    </div>
    </div>
    </div>
    <div class="use-warning">
      ※利用上の注意
       <div>
        &emsp;アプリのデータはお使いの端末Webストレージ上に保存しているため
       </div>
       <div>
        &emsp;以下の場合はToDoが反映されません。
       </div>
       <p>
        <div>
          &emsp;1.異なるブラウザを使用した場合
        </div>
        <div>
          &emsp;2.クッキー削除を行なった場合（データが全て削除されます）
        </div>
       </p>
    </div>
    <hr  class="mt-5"/>
      <div class="row justify-content-center">
        <el-button @click="goToGitHub()"> About Developer </el-button>
        <div>&emsp;©&nbsp;2023&nbsp;YamashitaJunki</div>
      </div>
  </div>
</template>

<script>
export default{
  methods:{
    goToDo(){
      this.$router.push({ path: '/todo',})
    },
    goToGitHub() {
      const url = 'https://github.com/YamashitaJunki'
      window.open(url, '_blank')
    },
  }
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
  padding: 50px;
  font-size: 1.5rem;
  min-width: 1300px;
  max-width: 1800px;
  margin: auto;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  @extend .fade-in;
  font-family: 'M PLUS Rounded 1c', sans-serif;

  background-image: linear-gradient(
    90deg,
    rgba(251, 213, 251, 1),
    rgba(149, 233, 243, 1)
  );
}
.top {
  height: 250px;
  margin-top: 200px;
}
.app-title {
  font-size: 5rem;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-family: 'Shadows Into Light', cursive;
}
.bottom {
  margin-top: 100px;
  padding: 250px;
}
.explanation{
  font-size: 1.2rem;
}
.pc{
  animation-name: fadeInAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.left-fade{
  animation-name: fadeLeftAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.use-warning{

  margin: 3rem auto 0;
  background-color: rgb(255, 255, 255,0.6);
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
