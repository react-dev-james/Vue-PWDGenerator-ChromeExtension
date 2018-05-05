<template>
  <v-container  id="app" style="width:500px">
    <v-layout row>
      <v-flex xs3>
        <v-subheader style="margin-top:7px;">length</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          name="input-3"
          v-model="length"
          placeholder="Type Number"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3>
        <v-subheader style="margin-top:7px;">Special</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          name="input-3"
          v-model="special"
          placeholder="special characters"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3>
      </v-flex>
      <v-flex xs6>
        <v-btn color="blue" @click="generate">Generate</v-btn>
      </v-flex>
    </v-layout>
    
    <v-layout row>
      <v-flex xs3>
        <v-subheader style="margin-top:7px;">Result</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          v-model="password"
          name="input-3"
          id="result"
          ref="text"
          placeholder="Result"
          disabled
        ></v-text-field><span><v-btn @click="copy">Copy</v-btn></span>
      </v-flex>
      <input type="hidden" id="testing-code" :value="password">
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: '#app',
    data: function () {
      var password = ''
      var length = ''
      var special = ''
      return {'password': password, 'length': length, 'special': special}
    },
    methods: {
      copy () {
        let testingCodeToCopy = document.querySelector('#testing-code')
        testingCodeToCopy.setAttribute('type', 'text')
        testingCodeToCopy.select()
        document.execCommand('copy')
        testingCodeToCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      },
      generate () {
        var CharacterSet = this.special
        CharacterSet += 'abcdefghijklmnopqrstuvwxyz'
        CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        CharacterSet += '0123456789'
        this.password = ''
        this.size = 8
        for (var i = 0; i < this.length; i++) {
          this.password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length))
        }
        console.log(this.password)
        // this.password = password;//aaa
      }
    }
  }
</script>
<style lang="scss">
  $purple: #5c4084;

  // body {
  //   background-color: $purple;
  //   padding: 50px;
  // }
  // .container {
  //   padding: 40px 80px 15px 80px;
  //   background-color: #fff;
  //   border-radius: 8px;
  //   max-width: 800px;
  // }
  // .heading {
  //   text-align: center;
  //   h1 {
  //     background: -webkit-linear-gradient(#fff, #999);
  //     -webkit-text-fill-color: transparent;
  //     -webkit-background-clip: text;
  //     text-align: center;
  //     margin: 0 0 5px 0;
  //     font-weight: 900;
  //     font-size: 4rem;
  //     color: #fff;
  //   }
  //   h4 {
  //     color: lighten(#5c3d86,30%);
  //     text-align: center;
  //     margin: 0 0 35px 0;
  //     font-weight: 400;
  //     font-size: 24px;
  //   }
  // }
  // .btn{
  //   outline: none !important;
  // }
  // .btn.btn-primary {
  //   background-color: $purple;
  //   border-color: $purple;
  //   outline: none;
  //   &:hover {
  //     background-color: darken($purple, 10%);
  //     border-color: darken($purple, 10%);
  //   }
  //   &:active, &:focus {
  //     background-color: lighten($purple, 5%);
  //     border-color: lighten($purple, 5%);
  //   }
  //   & .fa {
  //     padding-right: 4px;
  //   }
  // }
  // .label-primary {
  //   background-color: $purple;
  //   display: inline-block;
  //   font-size: 15px;
  //   font-weight: normal;
  // }
  // .form-group {
  //   margin-bottom: 25px;
  // }
  // small {
  //   font-weight: normal;
  //   color: #b4bcc3;
  // }
</style>