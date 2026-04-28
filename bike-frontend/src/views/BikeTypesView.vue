<template>
  <div class="card">
    <h2>🏷️ Типы велосипедов</h2>
    <div class="form-group">
      <div class="input-wrapper">
        <label>Название типа</label>
        <input v-model="form.typeName" placeholder="Например: Горный" required />
      </div>
      
      <div class="input-wrapper">
        <label>Цена за час (₽)</label>
        <input v-model.number="form.hourlyRate" type="number" placeholder="300" required />
      </div>
      
      <div class="input-wrapper" style="justify-content: flex-end;">
        <button @click="addItem" class="btn-save">Добавить</button>
      </div>
    </div>

    <table>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Цена</th>
        <th>Удалить?</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.typeName }}</td>
        <td>{{ item.hourlyRate }}</td>
        <td><button @click="deleteItem(item.id)" class="btn-del">ДА</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';

const items = ref([]);
const form = ref({ typeName: '', hourlyRate: 0 });

const loadItems = async () => { 
  const res = await api.get('/bike-types'); 
  items.value = res.data; 
};

const addItem = async () => { 
  try {
    await api.post('/bike-types', form.value); 
    loadItems(); 
    form.value = { typeName: '', hourlyRate: 0 };
  } catch (err) {
    console.error('Ошибка:', err.response?.data);
    alert('Ошибка: ' + (err.response?.data?.error || err.message));
  }
};

const deleteItem = async (id) => { 
  if(confirm('Удалить?')) { 
    await api.delete(`/bike-types/${id}`); 
    loadItems(); 
  } 
};

onMounted(loadItems);
</script>