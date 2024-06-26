<template>
  <div class="title-container">
    <a href="https://github.com/scottgriv/Binary-Converter" target="_blank"><img alt="Vue logo" src="../assets/logo.png"></a>
    <h1>Binary Converter</h1>
  </div>
  <p class="description">
    Binary to text conversion involves translating <a href="https://www.mathsisfun.com/binary-number-system.html" target="_blank">Binary Code, a series of 1s and 0s</a>, into human-readable text based on character encoding standards like 
    <a href="https://en.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> or 
    <a href="https://en.wikipedia.org/wiki/Unicode" target="_blank">Unicode</a>. 
    Conversely, text to binary conversion takes characters from text and represents them as binary numbers, enabling computers to process and store textual information efficiently. 
    This process is fundamental in computing, bridging human language and machine language by encoding and decoding data.
  </p>
    <div class="binary-converter">
      <div class="sections-container">
        <div class="section">
          <label>Text → Binary</label>
          <textarea id="input-text-field" v-model="inputText" placeholder="Enter Text"></textarea>
          <button @click="convertToBinary">Convert</button>
          <div v-if="binaryResult" class="result">
            <div><strong>Binary:</strong></div> <!-- New line for label -->
            <div>{{ binaryResult }}</div> <!-- New line for result -->
            <div class="button-container">
              <button @click="copyBinaryToClipboard(binaryResult)">Copy</button>
              <div v-if="binaryCopied" class="copy-message">Binary Copied to Clipboard!</div>
            </div>
            <div>Bits: {{ binaryBits }}</div>
            <div>Bytes: {{ binaryBytes }}</div>
            <div>Kilobytes: {{ binaryKilobytes }}</div>
            <div>Megabytes: {{ binaryMegabytes }}</div>
          </div>
        </div>
        <div class="section">
          <label>Binary → Text</label>
          <textarea id="input-binary-field" v-model="binaryInput" placeholder="Enter Binary"></textarea>
          <button @click="convertToText">Convert</button>
          <div v-if="textResult" class="result">
            <div><strong>Text:</strong></div> <!-- New line for label -->
            <div>{{ textResult }}</div> <!-- New line for result -->
            <div class="button-container">
              <button @click="copyTextToClipboard(textResult)">Copy</button>
              <div v-if="textCopied" class="copy-message">Text Copied to Clipboard!</div>
            </div>
            <div>Bits: {{ textBits }}</div>
            <div>Bytes: {{ textBytes }}</div>
            <div>Kilobytes: {{ textKilobytes }}</div>
            <div>Megabytes: {{ textMegabytes }}</div>
          </div>
        </div>
      </div>
      <button class="clear-button" @click="clearFields">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: '',
        binaryInput: '',
        binaryResult: '',
        textResult: '',
        binaryCopied: false,
        textCopied: false,
      };
    },
    computed: {
      binaryBits() {
        return this.binaryResult.replace(/\s+/g, '').length;
      },
      binaryBytes() {
        return Math.ceil(this.binaryBits / 8);
      },
      binaryKilobytes() {
        return (this.binaryBytes / 1024).toFixed(2);
      },
      binaryMegabytes() {
        return (this.binaryKilobytes / 1024).toFixed(2);
      },
      textBits() {
        return this.textResult.length * 8; // UTF-16 encoding
      },
      textBytes() {
        return Math.ceil(this.textBits / 8);
      },
      textKilobytes() {
        return (this.textBytes / 1024).toFixed(2);
      },
      textMegabytes() {
        return (this.textKilobytes / 1024).toFixed(2);
      },
    },
    methods: {
      convertToBinary() {
        if (!this.inputText.trim()) {
      window.alert("Please enter valid text to convert to binary.");
      return;
    }
        const binary = this.inputText
          .split('')
          .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')) // Convert to 8-bit binary
          .join(' ');
        this.binaryResult = binary;
      },
      convertToText() {

            // Check if binary input is empty or just whitespace
    if (!this.binaryInput.trim()) {
      window.alert("Please enter valid binary code to convert to text.");
      return;
    }
    // Validate the binary input
    if (!/^[01\s]+$/g.test(this.binaryInput)) {
      window.alert("This is not valid binary. Please enter a valid binary code.");
      return;
    }

        const binaryArray = this.binaryInput.split(' ');
        const text = binaryArray
          .map(bin => String.fromCharCode(parseInt(bin, 2)))
          .join('');
        this.textResult = text;
      },
      copyBinaryToClipboard(text) {
        this.copyToClipboard(text, 'binary');
      },
      copyTextToClipboard(text) {
        this.copyToClipboard(text, 'text');
      },
      copyToClipboard(text, type) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
  
        if (type === 'binary') {
          this.binaryCopied = true;
          setTimeout(() => {
            this.binaryCopied = false;
          }, 2000);
        } else if (type === 'text') {
          this.textCopied = true;
          setTimeout(() => {
            this.textCopied = false;
          }, 2000);
        }
      },
      clearFields() {
        this.inputText = '';
        this.binaryInput = '';
        this.binaryResult = '';
        this.textResult = '';
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  @import './BinaryConverter.less';
  </style>

  