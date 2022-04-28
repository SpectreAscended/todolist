"use strict";



const app = function() {
    const input = document.querySelector('.todo-input');
    const postButton = document.querySelector('.form-button-post');
    const clearButton = document.querySelector('.form-button-delete');
    const delItem = document.querySelectorAll('.del-btn')
    const list = document.querySelector('.list--list');
    const item = document.querySelectorAll('.list-item')
    const listContainer = document.querySelector('.todo__list')

    const postList = function() {
        if(!input.value) return;
        const html = `<li class="list-item">${input.value}<button class="del-btn">X</button></li>`;
        list.insertAdjacentHTML('beforeend', html);
        input.value = '';
        
    };
    
    postButton.addEventListener('click', function(e) {
        e.preventDefault();
        postList();
    });
    
    input.addEventListener('keydown', function(e) {
        if(e.key === 'Enter'){
            e.preventDefault();
            postList();
        };
    });
    
    clearButton.addEventListener('click', function(e) {
        e.preventDefault();
        list.innerHTML = '';
    });

    listContainer.addEventListener('click', function(e) {
        const clicked = e.target.closest('.del-btn');
        if(!clicked) return;
        clicked.closest('li').innerHTML = '';
    });
};

app();