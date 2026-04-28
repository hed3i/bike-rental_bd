<template>
  <div class="card">
    <h2>📍 Станции</h2>
    <div class="form-group">
      <div class="input-wrapper">
        <label>Адрес</label>
        <input v-model="form.location" placeholder="ул. Ленина, 10" required />
      </div>

      <div class="input-wrapper">
        <label>Часы работы</label>
        <input v-model="form.workingHours" placeholder="08:00 - 22:00" />
      </div>

      <div class="input-wrapper">
        <label>Менеджер</label>
        <input v-model="form.managerName" placeholder="ФИО менеджера" />
      </div>

      <div class="input-wrapper" style="justify-content: flex-end;">
        <button @click="addItem" class="btn-save">Добавить</button>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>Адрес</th>
        <th>Часы работы</th>
        <th>Менеджер</th>
        <th>Удалить?</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.workingHours || '-' }}</td>
        <td>{{ item.managerName || '-' }}</td>
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
  location: '', 
  workingHours: '', 
  managerName: '' 
});

const loadItems = async () => { 
  const res = await api.get('/stations'); 
  items.value = res.data; 
};

const addItem = async () => { 
  try {
    await api.post('/stations', form.value); 
    loadItems(); 
    form.value = { location: '', workingHours: '', managerName: '' };
  } catch (err) {
    console.error('Ошибка:', err.response?.data);
    alert('Ошибка: ' + (err.response?.data?.error || err.message));
  }
};

const deleteItem = async (id) => { 
  if(confirm('Удалить?')) { 
    await api.delete(`/stations/${id}`); 
    loadItems(); 
  } 
};

onMounted(loadItems);
</script>