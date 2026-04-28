<template>
  <div class="card">
    <h2>🚲 Велосипеды</h2>
    <div class="form-group">
      <div class="input-wrapper">
        <label>Модель</label>
        <input v-model="form.model" placeholder="Например: Trek Marlin" required />
      </div>
      
      <div class="input-wrapper">
        <label>Залог (₽)</label>
        <input v-model.number="form.deposit" type="number" placeholder="1000" required />
      </div>
      
      <div class="input-wrapper">
        <label>ID Типа</label>
        <input v-model.number="form.bikeTypeId" type="number" placeholder="1-5" />
      </div>

      <div class="input-wrapper">
        <label>ID Станции</label>
        <input v-model.number="form.stationId" type="number" placeholder="1-5" />
      </div>

      <div class="input-wrapper" style="justify-content: flex-end;">
        <button @click="addItem" class="btn-save">Добавить</button>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>Модель</th>
        <th>Статус</th>
        <th>Залог</th>
        <th>ID Типа</th>
        <th>ID Станции</th>
        <th>Удалить?</th>
    </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.model }}</td>
        <td>{{ item.status || 'available' }}</td>
        <td>{{ item.deposit }}</td>
        <td>{{ item.bikeTypeId || '-' }}</td>
        <td>{{ item.stationId || '-' }}</td>
        <td><button @click="deleteItem(item.id)" class="btn-del">ДА</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';

const items = ref([]);
const form = ref({ 
  model: '', 
  deposit: 1000, 
  status: 'available',
  bikeTypeId: null,
  stationId: null
});

const loadItems = async () => { 
  const res = await api.get('/bikes'); 
  items.value = res.data; 
};

const addItem = async () => { 
  try {
    await api.post('/bikes', form.value); 
    loadItems(); 
    form.value = { model: '', deposit: 1000, status: 'available', bikeTypeId: null, stationId: null };
  } catch (err) {
    console.error('Ошибка:', err.response?.data);
    alert('Ошибка: ' + (err.response?.data?.error || err.message));
  }
};

const deleteItem = async (id) => { 
  if(confirm('Удалить?')) { 
    await api.delete(`/bikes/${id}`); 
    loadItems(); 
  } 
};

onMounted(loadItems);
</script>