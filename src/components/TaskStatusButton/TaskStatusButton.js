function TaskStatusButton()
{
    return {
        completed: false,
        render: function (styles) {
            let classList = styles['ongoing']; //select style
            let button = document.createElement('button');
            
            button.setAttribute('completed', 'false');
            button.addEventListener('click', click);
            button.classList.add(...classList); //style component

            return button;
        },
        click: () => {
            let completed = this.getAttribute('completed') === 'true';
            let classList = styles[!completed ? 'done' : 'ongoing'];

            this.setAttribute('completed', (!completed).toString());

            this.classList = ''; //clear styles
            this.classList.add(...classList);
        }
    }
}