import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testData = []

for (let i = 1; i <= 10; i++) {
  testData.push({
    id: i,
    title: `Mindmap #${i}`,
    description: `This is mindmap #${i}`,
    imageURL: 'https://image.slidesharecdn.com/mindmaps-101221102049-phpapp02/95/mindmaps-1-728.jpg?cb=1292927007',
    userId: 'i % 3'
  })
}

export default new Vuex.Store({
  strict: true,
  state: {
    mindmaps: testData
  }
})
