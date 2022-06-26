import { defineStore } from "pinia";
import { MyPlugin } from "./my-plugin";
import { StoragePlugin } from "./storage-plugin"

const login = (): Promise<{ username: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: 'admin'
      })
    }, 3000)
  })
}

const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    counter: 99,
    name: 'Eduardo',
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    // doubleCount: (state) => state.counter * 2,
    doubleCount(): number {
      return this.counter * 2;
    },
    // use getters in other getters
    doubleCountPlusOne(): number {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    async getLoginInfo() {
      let loginInfo = await login()
      console.log(loginInfo.username)
    }
  },
})

export {
  useMainStore,
  MyPlugin,
  StoragePlugin,
}