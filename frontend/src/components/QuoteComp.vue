<!-- eslint-disable -->
<template>
    <div class="quote-comp">
        <p><i>"{{ quoteobj.quote }}"</i></p>
        <p>— {{ quoteobj.author }}</p>
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "QuoteComp",
  data() {
    return {
      quoteobj: {
        quote: "",
        author: ""
      }
    };
  },
  methods: {
    async getQuote() {
    //   let res = await axios.get("http://localhost:3000/quotes/today");
    //   if(res.status !== 200) {
    //     console.error("Failed to fetch quote:", res.statusText);
    //     this.quoteobj = {
    //       quote: "No quote available",
    //       author: "Unknown"
    //     };
    //     return;
    //   }
    //   let data = res.data;
    //   console.log("Quote data received:", data);
    //   this.quoteobj = {
    //     quote: data[0].quote,
    //     author: data[0].author
    //   };
      this.quoteobj.quote ="One is never afraid of the unknown; one is afraid of the known coming to an end.";
        this.quoteobj.author = "Jiddu Krishnamurti";
    }
  },
  created() {
    this.getQuote();
  }
};
</script>

<style scoped>

</style>
