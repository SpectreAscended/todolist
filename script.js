"use strict";

const input = document.querySelector('.todo-input');
const postButton = document.querySelector('.form-button-post')
const delButton = document.querySelector('.form-button-delete')
const list = document.querySelector('.list--list')

const app = function() {
    const postList = function() {
        if(!input.value) return;
        const html = `<li class="list-item">${input.value}</li>`;
        list.insertAdjacentHTML('beforeend', html);
        input.value = '';
    };
    
    postButton.addEventListener('click', function(e) {
        e.preventDefault();
        postList();
    });
    
    input.addEventListener('keydown', function(e) {
        if(e.key === 'Enter'){
            postList();
        };
    });
    
    delButton.addEventListener('click', function(e) {
        e.preventDefault();
        list.innerHTML = '';
    });
};

app();