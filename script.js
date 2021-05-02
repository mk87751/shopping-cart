var grandTotal = 0;
const row = document.createElement('TR');
const th = row.insertCell(-1);
th.setAttribute('data-ns-test', 'grandTotal');
th.innerText = grandTotal;
const table = document.getElementById('table');
table.appendChild(row);
var count = 0;

function insertItem() {
  const name = document.getElementById('item-name-input').value;
  const price = document.getElementById('item-price-input').value;
  if (name !== '' && price != '') {
    remove_child();
    const row = document.createElement('TR');
    const th1 = row.insertCell(0);
    const th2 = row.insertCell(1);
    th2.setAttribute('data-ns-test', 'item-name');
    const th3 = row.insertCell(2);
    th3.setAttribute('data-ns-test', 'item-price');
    th1.innerText = ++count;
    th2.innerText = name;
    th3.innerText = price;
    table.appendChild(row);
    clear_fields();
    var final_sum = findsum(price);
    add_sum(final_sum);
  }
}

function clear_fields() {
  document.getElementById('item-name-input').value = '';
  document.getElementById('item-price-input').value = '';
}
function findsum(price) {
  grandTotal += Number(price);
  return grandTotal;
}

function add_sum(sum) {
  const row = document.createElement('TR');
  const th = row.insertCell(-1);
  th.setAttribute('data-ns-test', 'grandTotal');
  th.innerText = sum;
  console.log(th);
  const table = document.getElementById('table');
  table.appendChild(row);
}

function remove_child() {
  const total = document.getElementById('table').lastElementChild;
  total.innerHTML = '';
}
