<script setup>

</script>

<template>

  <div>

    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="aspect-w-16 aspect-h-7">
        <img class="w-full object-cover rounded-xl" style="max-width: 75%; margin: 0 auto;" src="https://i.ibb.co/5W2mShL/mapa-antigo.jpg" alt="Image Description">
      </div>

      <!-- Grid -->
      <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div class="lg:col-span-1">
          <h2 class="font-bold text-2xl md:text-3xl text-gray-800">
            #123456AN
          </h2>
          <img class="inline-block size-44 ring-2 ring-white" src="https://i.ibb.co/XzjjxhL/qr-code-26.png" alt="Image Description">
        </div>
        <!-- End Col -->

        <div class="lg:col-span-2">
          <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H576c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm184 32c9.5 0 18.1 5.6 21.9 14.3l64 144c5.4 12.1-.1 26.3-12.2 31.7s-26.3-.1-31.7-12.2l-4.3-9.7H146.3l-4.3 9.7c-5.4 12.1-19.6 17.6-31.7 12.2s-17.6-19.6-12.2-31.7l64-144c3.9-8.7 12.4-14.3 21.9-14.3zm0 83.1L167.6 280h32.8L184 243.1zM304 184c0-13.3 10.7-24 24-24h52c33.1 0 60 26.9 60 60c0 9.2-2.1 17.9-5.8 25.7c13.3 11 21.8 27.6 21.8 46.3c0 33.1-26.9 60-60 60H328c-13.3 0-24-10.7-24-24v-8V256 192v-8zm48 24v24h28c6.6 0 12-5.4 12-12s-5.4-12-12-12H352zm0 96h44c6.6 0 12-5.4 12-12s-5.4-12-12-12H380 352v24z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800">
                  Título
                </h3>
                <p class="mt-1 text-gray-600">
                  Mapa do Estado do Rio de Janeiro
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H312v72H416V192zm0 104H312v80H416V296zm0 112H312v72h72c17.7 0 32-14.3 32-32V408zM280 376V296H168v80H280zM168 408v72H280V408H168zm-32-32V296H32v80H136zM32 408v40c0 17.7 14.3 32 32 32h72V408H32zm0-144H136V192H32v72zm136 0H280V192H168v72zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32z"/>              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800">
                  Data
                </h3>
                <p class="mt-1 text-gray-600">
                  1929
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M320 48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H284.5c12 18.4 27.4 34.5 45.3 47.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V198.6c-17.2 4.9-33.4 12.3-48 21.8V64c0-8.8-7.2-16-16-16zM96 152c0-13.3 10.7-24 24-24H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24zm24 72H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm312-96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-32 48c0 8.8 7.2 16 16 16h0v48h0c-8.8 0-16 7.2-16 16s7.2 16 16 16h16 16c8.8 0 16-7.2 16-16s-7.2-16-16-16V368c0-8.8-7.2-16-16-16H416c-8.8 0-16 7.2-16 16z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800">
                  Âmbito
                </h3>
                <p class="mt-1 text-gray-600">
                  Mapa do Estado do Rio de Janeiro, com cidades e município e os principais rios.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM184 72c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800">
                  Ponto de acesso
                </h3>
                <p class="mt-1 text-gray-600">
                  Mapa, Rio de Janeiro, Cartografia, Ilustração.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M160 368H384c8.8 0 16-7.2 16-16V128H352c-17.7 0-32-14.3-32-32V48H160c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16zm224 48H160c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H325.5c17 0 33.3 6.7 45.3 18.7l58.5 58.5c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64zM24 96c13.3 0 24 10.7 24 24V376c0 48.6 39.4 88 88 88H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V120c0-13.3 10.7-24 24-24z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800">
                  Tipo
                </h3>
                <p class="mt-1 text-gray-600">
                  Imagem
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 mt-1 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zM192 208c-13.3 0-24 10.7-24 24v48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V328h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V232c0-13.3-10.7-24-24-24z"/>
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-800">
                  Extra
                </h3>
                <p class="mt-1 text-gray-600">
                  Documento preservado, pertencente ao setor de Cartografia.
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->

  </div>

</template>

<style scoped>

</style>