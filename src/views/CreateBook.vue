<template>
  <ion-page>
    <!-- HEADER -->

    <ion-header :translucent="false">
      <ion-toolbar color="primary">
        <div class="toolbar">
          <ion-icon :icon="book" class="header-icon" size="large"></ion-icon>
          <ion-title>Add A Book</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- CONTENT -->

      <ion-grid>
        <ion-input v-model="title" placeholder="title"></ion-input>
        <ion-input v-model="description" placeholder="description"></ion-input>
        <ion-input v-model="author" placeholder="author"></ion-input>

        <ion-button @click="addFormSubmit()" :disabled="submitting"
          >Add Book</ion-button
        >
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  toastController
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { book } from 'ionicons/icons'
import { createBook } from '../books'

export default defineComponent({
  name: 'CreateBook',
  components: {
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },
  setup() {
    return { book }
  },
  data() {
    return {
      title: '',
      description: '',
      author: '',
      submitting: false,
      error: null
    }
  },
  methods: {
    async addFormSubmit() {
      const { title, description, author } = this

      if (!this.submitting) {
        this.submitting = true

        const newBook = await createBook({ title, description, author })

        this.openToast(`added ${newBook.data.createBook.title}`)

        this.submitting = false
        this.title = ''
        this.description = ''
        this.author = ''
      }
    },
    async openToast(message: string) {
      const toast = await toastController.create({
        message,
        duration: 2000
      })

      toast.present()
    }
  }
})
</script>

<style scoped>
.toolbar {
  display: flex;
  padding-left: 1em;
}

.header-icon {
  color: white;
}

.title-icon {
  color: --ion-color-primary;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
