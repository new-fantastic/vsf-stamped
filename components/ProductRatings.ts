export default (productId: string) => ({
  
  watch: {
    async [productId]() {
      await this.fetchProductRatings()
    }
  },

  computed: {
    productRatings () {
      let currentProductId = this[productId]
      let productRatings = this.$store.state['vsf-stamped'] && this.$store.state['vsf-stamped'].productsRating

      if (currentProductId) {
        let currentRating = productRatings && productRatings[currentProductId+'']
        if (currentRating) {
          return currentRating
        } else {
          return {
            mocked: true,
            count: 0,
            rating: 0
          }
        }
      }
        
      return {
        mocked: true,
        count: 0,
        rating: 0
      }
    }
  },

  methods: {

    async fetchProductRatings () {
      await this.$store.dispatch('vsf-stamped/getRatings', {
        productId: this.productId
      })
    }

  },

  async serverPrefetch () {
    await this.fetchProductRatings();
  },

  async beforeMount () {
    await this.fetchProductRatings();
  }

})