<template>
  <div class="search-container">
    <div class="button" @click="handleClick">+</div>
    <div class="input">
      <input
          type="text"
          placeholder="请输入关键字..."
          @keyup="search"
      >
    </div>
  </div>
</template>

<script lang='ts' setup>
  const handleClick = () => {

  };
  const search = () => {

  }
</script>

<style lang="less">
  .search-container{
    height: 60px;
    background: #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    .button{
      width: 40px;
      height: 40px;
      background-color: #1e90ff;
      padding-left: 0;
      border-radius: 5px;
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      cursor: default;
    }
    .input{
      flex: 1;
      height: 36px;
      padding: 0 10px;
      input{
        height: 100%;
        width: 100%;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 10px;
      }
    }
  }
</style>
