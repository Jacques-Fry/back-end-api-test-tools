<template>
  <div class="home">
    <div>基本请求属性</div>
    <div class="home-title">
      <div>
        <el-select class="el-select" v-model="method">
          <el-option
            v-for="item in methods"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div>
        <el-select class="el-select" v-model="agreement">
          <el-option
            v-for="item in agreements"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div>
        <el-input placeholder="域名 ( 包含端口号 )" v-model="domain" clearable></el-input>
      </div>

      <div>
        <el-input placeholder="API地址" v-model="api" clearable></el-input>
      </div>
    </div>

    <div>headers参数</div>

    <div style="display:flex" v-for="(item,index) in hParam" :key="'hParam'+index">
      <div>
        <el-input placeholder="参数名" v-model="hParam[index]" clearable></el-input>
      </div>
      <div>
        <el-input placeholder="值" v-model="hValue[index]" clearable></el-input>
      </div>
    </div>

    <el-button type="primary" icon="el-icon-plus" circle @click="addHeader"></el-button>

    <div>param参数</div>
    <div style="display:flex" v-for="(item,index) in pParam" :key="'pParam'+index">
      <div>
        <el-input placeholder="参数名" v-model="pParam[index]" clearable></el-input>
      </div>
      <div>
        <el-input placeholder="值" v-model="pValue[index]" clearable></el-input>
      </div>
    </div>

    <el-button type="primary" icon="el-icon-plus" circle @click="addParam"></el-button>

    <div>data参数</div>
    <div style="display:flex" v-for="(item,index) in dParam" :key="'dParam'+index">
      <div>
        <el-input placeholder="参数名" v-model="dParam[index]" clearable></el-input>
      </div>
      <div>
        <el-input placeholder="值" v-model="dValue[index]" clearable></el-input>
      </div>
    </div>

    <el-button type="primary" icon="el-icon-plus" circle @click="addData"></el-button>

    <div>
      <el-button type="primary" :loading="loading" @click="sendApi">{{buttonName}}</el-button>
    </div>

    <div>请求结果</div>
    <div class="result">
      <pre>{{result}}</pre>
    </div>
    <p style="color:red">{{err}}</p>
  </div>
</template>
<script type="text/javascript">
import { request } from "network/request";

export default {
  name: "Home",
  data() {
    return {
      methods: [
        {
          value: "GET",
          label: "GET"
        },
        {
          value: "POST",
          label: "POST"
        },
        {
          value: "PUT",
          label: "PUT"
        },
        {
          value: "DELETE",
          label: "DELETE"
        }
      ],
      //请求类型
      method: "GET",
      agreement: "http://",
      agreements: [
        {
          value: "http://",
          label: "http://"
        },
        {
          value: "https://",
          label: "https://"
        }
      ],
      //域名
      domain: "a.com:9001",
      //api
      api: "/user/login",
      //是否请求中
      loading: false,
      //按钮名称
      buttonName: "发送请求",
      //结果
      result: "暂无结果",
      //请求头数据
      // headers: {},
      hParam: ["token"],
      hValue: [],
      //url参数
      // params: {},
      pParam: [],
      pValue: [],
      //data参数,一般为JSON格式
      // data: {},
      dParam: [],
      dValue: [],
      err: ""
    };
  },
  computed: {},
  mounted() {
    this.$bus.$on("requsetErr", this.requestErr);
  },
  methods: {
    sendApi() {
      this.loading = true;
      this.buttonName = "请求中...";
      this.err = "";

      //https://autumnfish.cn/api/joke
      request({
        method: this.method,
        url: this.agreement + this.domain + "/" + this.api,
        headers: this.getHeaders(),
        params: this.getParams(),
        data: this.getData()
      })
        .then(res => {
          this.loading = false;
          this.buttonName = "发送请求";
          this.result = res || "请求失败,请检查请求属性以及请求参数是否正确";
        })
        .catch(res => {
          console.log(res);
        });
    },
    requestErr(err) {
      this.err = err;
    },
    //头部参数
    getHeaders() {
      let data = {};
      this.hParam.forEach((item, index) => {
        if (this.hValue[index]) data[item] = this.hValue[index];
      });
      return data;
    },
    addHeader() {
      this.hParam.push("");
      this.hValue.push("");
    },
    //url参数
    getParams() {
      let data = {};
      this.pParam.forEach((item, index) => {
        if (this.pValue[index]) data[item] = this.pValue[index];
      });
      return data;
    },
    addParam() {
      this.pParam.push("");
      this.pValue.push("");
    },
    //data参数
    getData() {
      let data = {};
      this.dParam.forEach((item, index) => {
        if (this.dValue[index]) data[item] = this.dValue[index];
      });
      return data;
    },
    addData() {
      this.dParam.push("");
      this.dValue.push("");
    }
  }
};
</script>

<style scoped>
.home {
}
.el-select {
  width: 100px;
}
.home-title {
  display: flex;
}
.result {
  font-weight: 600;
  line-height: 25px;
}
</style>
