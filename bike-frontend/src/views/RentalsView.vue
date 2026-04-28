<template>
  <div class="card">
    <h2>📝 Аренды</h2>
    
    <div class="form-group">
      <div class="input-wrapper">
        <label>ID Клиента</label>
        <input v-model.number="form.clientId" type="number" placeholder="1" />
      </div>
      
      <div class="input-wrapper">
        <label>ID Велосипеда</label>
        <input v-model.number="form.bikeId" type="number" placeholder="16" />
      </div>
      
      <div class="input-wrapper" style="justify-content: flex-end;">
        <button @click="addItem" class="btn-save">🚀 Оформить</button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Клиент</th>
          <th>Велосипед</th>
          <th>Стоимость</th>
          <th>Начало</th>
          <th>Конец</th>
          <th>Удалить?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.clientId || '-' }}</td>
          <td>{{ item.bikeId || '-' }}</td>
          <td>{{ item.totalCost || '0' }} ₽</td>
          <td>{{ formatDate(item.startTime) }}</td>
          
          <td>
            <span v-if="item.endTime" class="status-done">
              {{ formatDate(item.endTime) }}
            </span>
            <span v-else class="status-active">⏳ Активна</span>
          </td>

          <td>
            <button v-if="!item.endTime" @click="returnBike(item.id)" class="btn-return">
              🔄 Вернуть
            </button>
            <button v-else @click="deleteItem(item.id)" class="btn-del">ДА</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';

const items = ref([]);

const form = ref({ 
  clientId: null, 
  bikeId: null, 
  totalCost: 0,
  startTime: new Date().toISOString()
});

const formatDate = (dateStr) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toLocaleString('ru-RU');
};

const loadItems = async () => { 
  const res = await api.get('/rentals'); 
  items.value = res.data; 
  console.log('Получены аренды:', items.value); 
};

const addItem = async () => { 
  try {
    const payload = { 
      clientId: form.value.clientId, 
      bikeId: form.value.bikeId, 
      totalCost: 0,
      startTime: new Date().toISOString()
    };
    
    await api.post('/rentals', payload); 
    loadItems(); 
    form.value = { clientId: null, bikeId: null, totalCost: 0 };
  } catch (err) {
    console.error('Ошибка:', err.response?.data);
    alert('Ошибка: ' + (err.response?.data?.error || err.message));
  }
};

const returnBike = async (id) => {
  if(!confirm('Завершить аренду?')) return;
  
  try {
    const rental = items.value.find(r => r.id === id);
    if (!rental) return;
    
    const bikeRes = await api.get(`/bikes/${rental.bikeId}`);
    const bike = bikeRes.data;
    
    const typeRes = await api.get(`/bike-types/${bike.bikeTypeId}`);
    const hourlyRate = parseFloat(typeRes.data.hourlyRate);
    
    const start = new Date(rental.startTime);
    const end = new Date(); 
    const hours = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60))); 
    
    const totalCost = hours * hourlyRate;
    
    await api.put(`/rentals/${id}`, { 
      endTime: end.toISOString(),
      totalCost: totalCost
    });
    
    loadItems();
    alert(`Аренда завершена! Сумма: ${totalCost} ₽`);
    
  } catch (err) {
    console.error('Ошибка:', err);
    alert('Не удалось рассчитать стоимость');
  }
};

const deleteItem = async (id) => { 
  if(confirm('Удалить?')) { 
    await api.delete(`/rentals/${id}`); 
    loadItems(); 
  } 
};

onMounted(loadItems);
</script>

<style scoped>
.status-active { color: orange; font-weight: bold; }
.status-done { color: green; }
.btn-return { background: #f39c12; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px; }
.btn-return:hover { background: #e67e22; }
</style>