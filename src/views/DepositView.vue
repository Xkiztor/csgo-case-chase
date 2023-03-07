<script>
// import { loadStripe } from '@stripe/stripe-js'
// import { defineComponent, ref, onBeforeMount } from 'vue'
// import StripeCard from '../components/StripeCard.vue'

// export default defineComponent({
//   // ...
//   components: {
//     StripeCard,
//   },

//   setup() {
//     onBeforeMount(() => {
//       const stripeLoaded = ref(false)
//       const stripePromise = loadStripe('your_key')
//       stripePromise.then(() => {
//         stripeLoaded.value = true
//       })
//     })
//   },
// })

// import { useVueStripe } from '@vue-stripe/vue-stripe'
// export default {
//   setup() {
//     const { redirectToCheckout } = useVueStripe('pk_test_51LajZRACGdXEYjhpD83fSWVS0yQx9R7EPiW0hnKrWmgRqvfIkyzu4asgbvxaLTav2UKQUVspzXSlaE0H0XjrQIT8004c2J9iCe');

//     async function onCheckout() {
//       await redirectToCheckout({
//         successUrl: window.location.origin,
//         cancelUrl: window.location.origin,
//         mode: 'subscription',
//         lineItems: [
//           {
//             price: 'price_1Mj1KwACGdXEYjhpjJtE37Zt',
//             quantity: 1
//           }
//         ]
//       });
//     }

//     return {
//       onCheckout,
//     }
//   },
// }



// import { useCheckout } from '@vue-stripe/vue-stripe';
// export default {
//   setup() {
//     const PUBLISHABLE_KEY = pk_test_51LajZRACGdXEYjhpD83fSWVS0yQx9R7EPiW0hnKrWmgRqvfIkyzu4asgbvxaLTav2UKQUVspzXSlaE0H0XjrQIT8004c2J9iCe;
//     const { redirectToCheckout } = useCheckout(PUBLISHABLE_KEY);

//     async function onCheckout() {
//       const payload = {
//         // See https://stripe.com/docs/js/deprecated/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options
//       };
//       await redirectToCheckout(payload);
//     }
//   }
// };

import { StripeElements, StripeElement } from 'vue-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { defineComponent, ref, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'CardOnly',

  components: {
    StripeElements,
    StripeElement,
  },

  setup() {
    const stripeKey = ref('pk_test_51LajZRACGdXEYjhpD83fSWVS0yQx9R7EPiW0hnKrWmgRqvfIkyzu4asgbvxaLTav2UKQUVspzXSlaE0H0XjrQIT8004c2J9iCe') // test key
    const instanceOptions = ref({
      // https://stripe.com/docs/js/initializing#init_stripe_js-options
    })
    const elementsOptions = ref({
      // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
    })
    const cardOptions = ref({
      // https://stripe.com/docs/stripe.js#element-options
      value: {
        postalCode: '12345',
      },
    })
    const stripeLoaded = ref(false)
    const card = ref()
    const elms = ref()

    onBeforeMount(() => {
      const stripePromise = loadStripe(stripeKey.value)
      stripePromise.then(() => {
        stripeLoaded.value = true
      })
    })

    const pay = () => {
      // Get stripe element
      const cardElement = card.value.stripeElement

      // Access instance methods, e.g. createToken()
      elms.value.instance.createToken(cardElement).then((result) => {
        // Handle result.error or result.token
        console.log(result)
      })
    }

    return {
      stripeKey,
      stripeLoaded,
      instanceOptions,
      elementsOptions,
      cardOptions,
      card,
      elms,
      pay
    }
  },
})

</script>

<template>
  <div class="deposit">
    <h1>Deposit</h1>
    <!-- <button @click="onCheckout">Checkout</button> -->
    <!-- <StripeCard /> -->
    <StripeElements v-if="stripeLoaded" v-slot="{ elements, instance }" ref="elms" :stripe-key="stripeKey"
      :instance-options="instanceOptions" :elements-options="elementsOptions">
      <StripeElement ref="card" :elements="elements" :options="cardOptions" />
    </StripeElements>
    <button type="button" @click="pay">Pay</button>
  </div>
</template>

<style></style>
