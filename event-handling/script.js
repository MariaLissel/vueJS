Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeFruits(removedFruit) {
      this.fruitBasket = this.fruitBasket.filter(
        (fruit) => fruit !== removedFruit
      );
    },
  },
}).mount("#app");
