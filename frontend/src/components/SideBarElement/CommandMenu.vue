<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  }
});

const items = useI18n({ useScope: 'global' }).tm('sidebar.commands');
const isFocused = ref(false);
watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    if (typeof newVal === 'string' && !items.some(item => item.label === newVal) && newVal != oldVal) {
      isFocused.value = true;
    }
  }
);

const emit = defineEmits(['update:modelValue']);
function handleSelect(item) {
  if (item?.label) {
    emit('update:modelValue', item.label);
    isFocused.value = false;
  }
}

const filteredItems = computed(() => {
  if (!props.modelValue || typeof props.modelValue !== 'string') return items;
  return items.filter(item =>
    item.label.toLowerCase().includes(props.modelValue.toLowerCase())
  );
});

const showDropdown = computed(() => 
  isFocused.value && typeof props.modelValue === 'string' && props.modelValue.trim().length > 0
);
</script>

<template>
  <div class="relative">
    <div v-if="showDropdown" @click="isFocused = false" class="fixed z-40 inset-0 bg-stone-950/50 pointer-events-auto"></div>
    <div v-if="showDropdown" class="absolute z-50 mt-[-10px] w-full overflow-x-hidden bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
      <div class="py-2 px-4 border-b text-gray-700 dark:text-gray-200 font-semibold text-sm">
        Suggestions
      </div>
      <ul>
        <li
          v-for="item in filteredItems"
          :key="item.label"
          @click="handleSelect(item)"
          class="px-4 py-2 hover:bg-blue-100 dark:hover:bg-sky-800 cursor-pointer text-sm text-gray-900 dark:text-gray-100"
        >
          {{ item.label }}
        </li>
      </ul>
      <div v-if="filteredItems.length === 0" class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
        No results found for 「<span class="text-violet-600 dark:text-violet-400">{{ modelValue }}</span>」
      </div>
    </div>
  </div>
</template>
