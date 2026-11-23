const list = document.getElementById('list');

for (const n of NOTICES) {
  const li = document.createElement('li');

  const date = document.createElement('time');
  date.className = 'date';
  date.dateTime = n.date;
  date.textContent = n.date.replaceAll('-', '/');

  const title = document.createElement('span');
  title.textContent = n.title;

  li.append(date, title);
  list.appendChild(li);
}
