<template>
  <div class="card">
    <h2>👥 Клиенты</h2>
    <div class="form-group">
      <div class="input-wrapper">
        <label>ФИО</label>
        <input v-model="form.fullName" placeholder="Иванов И.И." required />
      </div>
      
      <div class="input-wrapper">
        <label>Email</label>
        <input v-model="form.email" type="email" placeholder="mail@example.com" required />
      </div>
      
      <div class="input-wrapper">
        <label>Телефон</label>
        <input v-model="form.phone" placeholder="+7123456789" />
      </div>

      <div class="input-wrapper" style="justify-content: flex-end;">
        <button @click="addItem" class="btn-save">Добавить</button>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>ФИО</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Удалить?</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.fullName }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone || '-' }}</td>
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
  full_name: '', 
  email: '', 
  phone: '',
  registrationDate: new Date().toISOString() 
});

const loadItems = async () => { 
  const res = await api.get('/clients'); 
  items.value = res.data; 
};

const addItem = async () => { 
  try {
    await api.post('/clients', form.value); 
    loadItems(); 
    form.value = { full_name: '', email: '', phone: '', registration_date: new Date().toISOString() };
  } catch (err) {
    console.error('Ошибка:', err.response?.data);
    alert('Ошибка при создании: ' + (err.response?.data?.error || err.message));
  }
};

const deleteItem = async (id) => { 
  if(confirm('Удалить?')) { 
    await api.delete(`/clients/${id}`); 
    loadItems(); 
  } 
};

onMounted(loadItems);
</script>