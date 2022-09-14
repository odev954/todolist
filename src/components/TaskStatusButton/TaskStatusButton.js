function TaskStatusButton()
{
    return {
        completed: false,
        render: function (styles) {
            let classList = styles['ongoing']; //select style
            let button = document.createElement('button');
            
            button.setAttribute('completed', 'false');
            button.setAttribute('styles', JSON.stringify(styles));
            button.addEventListener('click', this.click);
            button.classList.add(...classList); //style component

            button.textContent = 'mark as done';

            return button;
        },
        click: function() {
            let completed = this.getAttribute('completed') === 'true';
            let styles = JSON.parse(this.getAttribute('styles'));
            let classList = styles[!completed ? 'done' : 'ongoing'];

            this.setAttribute('completed', (!completed).toString());

            this.classList = ''; //clear styles
            this.classList.add(...classList);

            this.textContent = completed ? 'mark as done' : 'mark as ongoing';
        }
    }
}