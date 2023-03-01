<template>
  <div class="p-5">
    <div class="main-account-book bg-warning text-center">
      <div>
        <h3>給料</h3>
        <div><el-input v-model="salary" class="w-25"></el-input>円</div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col">
            <h3>ガス代</h3>
            <div>
              <el-input
                v-model="accountBookList[`ガス代`]"
                class="w-25"
              ></el-input
              >円
            </div>
          </div>
          <div class="col">
            <h3>電気代</h3>
            <div><el-input v-model="denki" class="w-25"></el-input>円</div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="main-account-book">
      <div v-for="title in accountBookKey" :key="title">
        <div>{{ title }}:{{ accountBookList[title].price }}円</div>
      </div>
      <div>
        トータル金額:
        {{ totalPrice }}円
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      accountBookList: {},
      totalPrice: 0,
      salary: 0,
      denki: 23,
    }
  },
  computed: {
    accountBookKey() {
      return Object.keys(this.accountBookList)
    },
  },
  mounted() {
    this.getAccountBookList()
  },
  methods: {
    async getAccountBookList() {
      const getUrl = `https://az-api.hexabase.com//api/v0/applications/APP-xahAJjLJ/datastores/Db-cZLkSbo7/items/search`
      const token = process.env.HEXABASE_TOKEN
      if (!token) {
        alert('環境変数が入っていません')
      }
      const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
      }
      const data = {
        use_display_id: true,
        per_page: 0,
        page: 1,
      }
      const result = await (
        await axios.post(getUrl, data, { headers })
      ).data.items
      const unshaped = result.map((content) => {
        return {
          title: content.Title,
          price: Number(content.price),
          itemId: content.i_id,
          revNo: content.rev_no,
        }
      })
      const res = {}
      unshaped.forEach((key) => {
        res[key.title] = {
          price: key.price,
          itemId: key.itemId,
          revNo: key.revNo,
        }
      })
      this.accountBookList = res

      this.accountBookKey.forEach((title) => {
        this.totalPrice += this.accountBookList[title].price
      })
    },
  },
}
</script>

<style>
.main-account-book {
  background-color: aqua;
  height: 40vh;
  padding: 3rem;
}
</style>
