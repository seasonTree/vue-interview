<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div>{{item.id}}</div>
      <div>{{item.data}}</div>
      <div>{{item.time}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      dataList: [],
      average: ''
    }
  },
  computed: {

  },
  methods: {

    update () {

    }
  }
}
</script>

<style scoped lang="less">

.test{

  .list{
    display: flex;
    flex-direction: row;
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
