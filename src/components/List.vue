<template>
  <q-list dense v-for="item in mock_list" v-bind:key="item.id" bordered separator>
    <q-item class="row">
      <q-item-section avatar class="col-1">
        <q-avatar square>
          <img v-bind:src="item.image_url"/>
        </q-avatar>
      </q-item-section>
      <q-item-section class="col">
        {{item.description}}
      </q-item-section>
      <q-item-section class="col-1">
        <q-checkbox v-model="item.checked"/>
      </q-item-section>
    </q-item>
  </q-list>
  <q-btn v-on:click="deleteItems()" class="justify-center">Delete Items</q-btn>
</template>


<script setup lang="ts">

import { ref } from 'vue';

const mock_list = ref({
  item1 : {
    id: 1,
    image_url: "https://i5.walmartimages.com/asr/a2a3a0a4-4c4e-4b28-af1e-fedb4e9609f1_1.8c73135fdbacd14c15526460b400fe0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    description: "Lego Brick",
    checked: false,
  },
  item2 : {
    id: 2,
    image_url: "https://i5.walmartimages.com/asr/a2a3a0a4-4c4e-4b28-af1e-fedb4e9609f1_1.8c73135fdbacd14c15526460b400fe0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    description: "Another Lego Brick",
    checked: false,
  },
  item3 : {
    id: 3,
    image_url: "https://i5.walmartimages.com/asr/a2a3a0a4-4c4e-4b28-af1e-fedb4e9609f1_1.8c73135fdbacd14c15526460b400fe0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    description: "A third Lego Brick",
    checked: false,
  },
  item4 : {
    id: 4,
    image_url: "https://i5.walmartimages.com/asr/a2a3a0a4-4c4e-4b28-af1e-fedb4e9609f1_1.8c73135fdbacd14c15526460b400fe0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    description: "A fourth Lego Brick",
    checked: false,
  }
});


function deleteItems(){
  //Best way to do this is probably to gather the
  //id for each item and send a dispatch to vuex. 
  //Vuex can handle the API call to delete each one.
  for (const item in mock_list.value) {
    if (mock_list.value[item].checked) {
      console.log("Deleting item: " + mock_list.value[item].id);
    }
  }
}
</script>