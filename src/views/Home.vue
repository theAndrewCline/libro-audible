<template>
  <ion-page>
    <!-- HEADER -->

    <ion-header :translucent="false">
      <ion-toolbar color="primary">
        <div class="toolbar">
          <ion-icon :icon="book" class="header-icon" size="large"></ion-icon>
          <ion-title>Libro Audio</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- CONTENT -->

      <ion-grid>
        <ion-text>
          <ion-row>
            <ion-col>
              <ion-text color="primary">
                <div class="title">
                  <ion-icon
                    :icon="book"
                    size="large"
                    class="title-icon"
                  ></ion-icon>
                  <h1>Libro Audio</h1>
                </div>
              </ion-text>
              <p>A place for all your audio books</p>
            </ion-col>
          </ion-row>
        </ion-text>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { book } from 'ionicons/icons'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon
  },
  setup() {
    return { book }
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
