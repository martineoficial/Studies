// novas estruturas de dados

// Set - conjunto de valores únicos
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // não adiciona duplicado
console.log(set); // Set { 1, 2, 3 }

// Verifica se um valor está no Set
console.log(set.has(2)); // true
console.log(set.has(4)); // false

// Remove um valor do Set
set.delete(2);
console.log(set); // Set { 1, 3 }

// Itera sobre os valores do Set
for (const value of set) {
  console.log(value); // 1, 3
}

// Map - coleção de pares chave-valor
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map); // Map { 'name' => 'Alice', 'age' => 30 }

// Acessa um valor pelo nome da chave
console.log(map.get('name')); // Alice
console.log(map.get('age')); // 30

// Verifica se uma chave existe no Map
console.log(map.has('name')); // true
console.log(map.has('address')); // false

// Remove uma chave do Map
map.delete('age');
console.log(map); // Map { 'name' => 'Alice' }

// Itera sobre os pares chave-valor do Map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // name: Alice
}