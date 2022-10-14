<template>
  <v-app>
    <v-navigation-drawer
      disable-resize-watcher
      v-model="drawer"
      :clipped="clipped"
      fixed
      :right="right"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      class="white"
      height="80px"
    >

      <v-btn to="/" class="hidden-md-and-down" text plain><v-icon class="pr-2">mdi-store</v-icon>Obchod</v-btn>
      <v-btn to="/" class="hidden-md-and-down" text plain><v-icon class="pr-2">mdi-email</v-icon>Kontakt</v-btn>
      <v-col class="flex text-center">
        <b><v-toolbar-title v-text="title"/></b>
        <span class="pr-2" v-text="subtitle" />
      </v-col>
      <v-btn to="/cart" class="hidden-md-and-down" text plain>Košík<v-icon class="pl-2">mdi-cart</v-icon></v-btn>
      <v-btn to="/login" class="hidden-md-and-down" text plain>Login<v-icon class="pl-2">mdi-account</v-icon></v-btn>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-main class="grey lighten-4 pt-14">
        <Nuxt />
    </v-main>
    
    <v-footer
      absolute
      app
      class="black white--text"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  head(){
    return {
      bodyAttrs: {
        class: 'reset-body'
      }
    }
  },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-lock',
          title: 'Prihlásiť sa',
          to: '/login'
        },
        {
          icon: 'mdi-store',
          title: 'Obchod',
          to: '/'
        },
        {
          icon: 'mdi-cart',
          title: 'Košík',
          to: '/'
        },
        {
          icon: 'mdi-email',
          title: 'Kontakt',
          to: '/inspire'
        },
        
        
      ],
      right: true,
      title: 'MINiiiMAL',
      subtitle: 'Simplicity - Style - Comfort'
    }
  }
}
</script>

<style>
  .reset-body {
    margin: 0
  }
  </style>
  