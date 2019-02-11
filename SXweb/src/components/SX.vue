<template>
  <div class="hello">
    <div class="back left">
      <img src="../assets/back-left.png" alt="">
    </div>
    <div class="year-box">
      <div class="year-sec"
      :class="{'year-1': sxNum === 1, 'year-2': sxNum === 2,
      'year-3': sxNum === 3, 'year-4': sxNum === 4,
      'year-5': sxNum === 5, 'year-6': sxNum === 6,
      'year-7': sxNum === 7, 'year-8': sxNum === 8,
      'year-9': sxNum === 9, 'year-10': sxNum === 10,
      'year-11': sxNum === 11, 'year-0': sxNum === 0}"></div>
      <form @keyup.enter="upYear()" @submit.prevent="onSubmit()">
        <DatePicker type="year" placeholder="选择年份"
        class="year-select" style="width: 218px"
        v-model="year"></DatePicker>
        <Button type="primary" class="year-button"
        @click="upYear()"
        shape="circle" size='small' icon="ios-search"></Button>
      </form>
    </div>
    <div class="back right">
      <img src="../assets/back-right.png" alt="">
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import {getAPI} from '../API.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      year: '',
      sxNum: 3
    }
  },
  methods: {
    upYear () {
      let data = {
        'year': this.year.toString().slice(11, 15)
      }
      this.$http.post(getAPI(), qs.stringify(data))
        .then(res => {
          this.sxNum = res.data.year
        })
    },
    onSubmit () {
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
  overflow: hidden;
  position: absolute;
  width: 10rem;
  z-index: -1;
}

.left {
  height: 40rem;
  left: 10rem;
  top: 2rem;
}

.right {
  right: 10rem;
  top: -10rem;
}

.back img {
  width: 100%;
}

.year-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 85vh;
}

.year-button {
  margin-left: .5rem;
}

.year-sec {
  margin: 0 2rem 1rem 0;
  width: 6.5rem;
  height: 6rem;
  background-size: 100% 100%;
  transition: all .5s ease-in-out;
}

.year-1 {
  background-image: url('../assets/kfc.png')
}

.year-2 {
  background-image: url('../assets/dog.png')
}

.year-3 {
  background-image: url('../assets/pig.png')
}

.year-4 {
  background-image: url('../assets/mouse.png')
}

.year-5 {
  background-image: url('../assets/niu.png')
}

.year-6 {
  background-image: url('../assets/tig.png')
}

.year-7 {
  background-image: url('../assets/usagi.png')
}

.year-8 {
  background-image: url('../assets/doragon.png')
}

.year-9 {
  background-image: url('../assets/snk.png')
}

.year-10 {
  background-image: url('../assets/uma.png')
}

.year-11 {
  background-image: url('../assets/sheep.png')
}

.year-0 {
  background-image: url('../assets/mk.png')
}

@media screen and (max-width: 1050px) {
  .left {
    left: 5rem;
  }

  .right {
    right: 5rem;
  }

  .back {
    width: 8rem;
  }
}

@media screen and (max-width: 780px) {
  .left {
    left: 2rem;
  }

  .right {
    right: 2rem;
  }
}

@media screen and (max-width: 500px) {
  .back {
    width: 7rem;
  }

  .left {
    top: 5rem;
  }

  .right {
    top: -5rem;
  }
}
</style>
