<template>
  <div class="test">
    <div>
      平均值: {{getAverage}}
    </div>
    <button
      @click="update"
      :disabled="loading"
    >{{loading? '加载中....': '加载更多'}}</button>
    <transition-group
      name="list-complete"
      tag="div"
    >
      <!-- 这里的key不使用item.id,因为mock的数据id会出现重复 -->
      <div
        class="list"
        v-for="(item, index) in getData"
        :key="'idx'+index"
      >
        <div class="cell">{{item.id}}</div>
        <div class="cell">{{item.data}}</div>
        <div class="cell">{{item.time}}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "test",
  data() {
    return {
      dataList: [],
      average: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters(["getAverage", "getData"])
  },
  methods: {
    update() {
      this.loading = true;
      this.$store.dispatch("getDataCall", () => {
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped lang="less">
.test {
  margin: 0 auto;
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid #e3e3e3;
    width: 600px;
    margin: 0 auto;
    transition: all 1s;
    .cell {
      min-width: 80px;
    }
  }

  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
  }
  .list-complete-leave-active {
    opacity: 1;
  }

  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.2s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    background-color: #409eff;
    border-color: #409eff;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;

    &:hover {
      background-color: #66b1ff;
      border-color: #66b1ff;
    }

    &:disabled {
      background-color: #a0cfff;
      border-color: #a0cfff;
      cursor: not-allowed;
    }
  }
}
</style>
