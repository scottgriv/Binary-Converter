<template>
  <h1>Binary Converter</h1>
    <div class="binary-converter">
      <div class="section">
        <textarea v-model="inputText" placeholder="Enter text"></textarea>
        <button @click="convertToBinary">Convert to Binary</button>
        <div v-if="binaryResult" class="result">
          Binary: {{ binaryResult }}
          <button @click="copyBinaryToClipboard(binaryResult)">Copy</button>
          <div v-if="binaryCopied" class="copy-message">Binary Copied to Clipboard</div>
          <div>Bits: {{ binaryBits }}</div>
          <div>Bytes: {{ binaryBytes }}</div>
          <div>Kilobytes: {{ binaryKilobytes }}</div>
          <div>Megabytes: {{ binaryMegabytes }}</div>
        </div>
      </div>
      <div class="section">
        <textarea v-model="binaryInput" placeholder="Enter binary"></textarea>
        <button @click="convertToText">Convert to Text</button>
        <div v-if="textResult" class="result">
          Text: {{ textResult }}
          <button @click="copyTextToClipboard(textResult)">Copy</button>
          <div v-if="textCopied" class="copy-message">Text Copied to Clipboard</div>
          <div>Bits: {{ textBits }}</div>
          <div>Bytes: {{ textBytes }}</div>
          <div>Kilobytes: {{ textKilobytes }}</div>
          <div>Megabytes: {{ textMegabytes }}</div>
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
        const binary = this.inputText
          .split('')
          .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')) // Convert to 8-bit binary
          .join(' ');
        this.binaryResult = binary;
      },
      convertToText() {
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
  