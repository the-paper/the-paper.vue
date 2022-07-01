<script setup>
import { ref } from 'vue';

import InputText from './forms/InputText.vue';
import InputTextGroup from './forms/InputTextGroup.vue';
import InputTextGroup2 from './forms/InputTextGroup2.vue';
import InputTextFloating from './forms/InputTextFloating.vue';
import InputTextFloatingGroup from './forms/InputTextFloatingGroup.vue';
import InputNumber from './forms/InputNumber.vue';
import SelectString from './forms/SelectString.vue';

const name = ref('Unknown');
const age = ref(0);
const role = ref('');
const RoleOptions = [
  { value: 'S1', text: 'Soldier' },
  { value: 'M1', text: 'Miner' },
  { value: 'S2', text: 'Scientist' },
];

const handleName = (value) => {
  name.value = value;
};
const handleAge = (value) => {
  age.value = value;
};
const handleRole = (value) => {
  role.value = value;
};
</script>

<template>
  <table class="table table-sm my-3">
    <thead class="table-light">
      <tr>
        <td>성명</td>
        <td>나이</td>
        <td>직업코드</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ name }}</td>
        <td>{{ age }}</td>
        <td>{{ role }}</td>
      </tr>
    </tbody>
  </table>
  <div class="mb-3">
    <InputText
      id="userName"
      label="이름"
      placeholder="입력하세요."
      :value="name"
      @input-value="handleName"
    />
  </div>
  <div class="mb-3">
    <InputTextGroup
      id="userName"
      label="이름"
      placeholder="입력하세요."
      :value="name"
      @input-value="handleName"
      addon="님"
    />
  </div>
  <div class="mb-3">
    <InputTextGroup2
      id="userName"
      placeholder="입력하세요."
      :value="name"
      @input-value="handleName"
      addon="이름"
    />
  </div>
  <div class="mb-3">
    <InputTextFloating
      id="userName"
      label="이름"
      placeholder="입력하세요."
      :value="name"
      @input-value="handleName"
    />
  </div>
  <div class="mb-3">
    <InputTextFloatingGroup
      id="userName"
      label="이름"
      placeholder="입력하세요."
      :value="name"
      @input-value="handleName"
      addon="님"
    />
  </div>
  <div>
    <InputNumber
      id="userAge"
      label="나이"
      placeholder="입력하세요."
      :value="age"
      @input-value="handleAge"
    />
  </div>
  <div>
    <SelectString
      id="userRole"
      label="직업"
      placeholder="직업을 입력하세요."
      :value="role"
      :options="RoleOptions"
      @select-value="handleRole"
    />
  </div>
</template>
