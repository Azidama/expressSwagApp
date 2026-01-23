
## JS DOM Manipulation

### 1. Select Elements
```javascript
const el = document.getElementById('myId');
const el2 = document.querySelector('.myClass');
```

### 2. Modify Content
```javascript
el.innerHTML = '<strong>New HTML</strong>';
el.textContent = 'New text';
```

### 3. Attributes
```javascript
img.setAttribute('src', 'image.jpg');
img.removeAttribute('alt');
```

### 4. Styles & Classes
```javascript
el.classList.add('newClass');
el.style.backgroundColor = 'black';
```

### 5. Create/Remove Elements
```javascript
const newEl = document.createElement('p');
newEl.textContent = 'New paragraph';
container.appendChild(newEl);
container.removeChild(newEl);
```

### 6. Event Listeners
```javascript
button.addEventListener('click', () => {
    alert('Clicked!');
});
```