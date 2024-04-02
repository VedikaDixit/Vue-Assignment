
<template>
  <div class ="mx-20">
    <div class="flex flex-row items-center justfy-between">
      <h2 class="text-5xl font-black text-gray-900"> Lists</h2>
      <Button icon-left ="plus">NewList</Button>
    </div>
    <div class="mt-2">
      <Card title="General">
        <div>
          <ul>
            <li class="flex flex-row space-y-2 item-center justify-between" v-for="actions in actions.data" :key="actions.title">
             <span> {{ actions.title }} </span>
             <Button @click="completeAction(actions.name)" icon="check"></Button>
            </li>
          </ul>       
        </div>
      </Card>
      <!-- <button @click="addActionDialogShown=true"  icon-left="plus">New Actions</button>  -->
      <button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; transition-duration: 0.4s; cursor: pointer; border-radius: 8px;" @click="addActionDialogShown=true"><i style="margin-right: 5px;" class="fas fa-plus"></i>New Actions</button>
    </div>
    <Dialog options="{title: 'Add New Action'}" v-model="addActionDialogShown"></Dialog>
  </div>
</template>
<script setup>
import {Dialog,createListResource, Card} from 'frappe-ui'
import Button from 'frappe-ui/src/components/Button.vue';
import {reactive,ref} from 'vue';

const addActionDialogShown= ref(false)

const action=reactive({
  title:'',
  category:'General'
})
const actions = createListResource({
  doctype: 'Actions',
  fields:['name', 'title', "status", 'description', 'date', 'due_date'],
  filters:{
    status:'ToDo',
  },
  limit:100
})
actions.reload()
const completeAction= (actionName) => {
  // console.log(actionName)
  actions.setValue.submit({
    name:actionName,
    status:'Complete',
    onSucess(){
      actions.reload()
    },
  })
}
const addAction=(action) =>{
  actions.insert.submit(actions)
}
</script>