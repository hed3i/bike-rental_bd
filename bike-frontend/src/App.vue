<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/bikes" class="nav-brand">🚲 Bike Rental</router-link>
      <div class="nav-links">
        <router-link to="/bikes">Велосипеды</router-link>
        <router-link to="/clients">Клиенты</router-link>
        <router-link to="/stations">Станции</router-link>
        <router-link to="/types">Типы</router-link>
        <router-link to="/rentals">Аренды</router-link>
      </div>
    </div>
  </nav>

  <main class="container">
    <router-view />
  </main>
</template>

<style>
body { font-family: 'Segoe UI', sans-serif; background: #f8f9fa; margin: 0; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.navbar { background: #2c3e50; color: white; padding: 15px 0; margin-bottom: 30px; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; }
.nav-brand { font-size: 1.3rem; font-weight: bold; color: white; text-decoration: none; }
.nav-links { display: flex; gap: 20px; } /* ← ВОТ ЭТО РАЗДВИНЕТ ПУНКТЫ */
.nav-links a { color: #bdc3c7; text-decoration: none; font-weight: 500; transition: 0.2s; }
.nav-links a:hover, .nav-links a.router-link-active { color: white; border-bottom: 2px solid #2ecc71; }
</style>