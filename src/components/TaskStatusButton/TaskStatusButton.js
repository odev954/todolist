function TaskStatusButton(completed)
{
    return {
        completed: completed,
        components: {},
        styles: {},
        render: function (styles) {
            let classList = styles['ongoing']; //select style
            let button = document.createElement('button');

            button.addEventListener('click', (e) => {
                let classList = this.styles[!this.completed ? 'done' : 'ongoing'];
                
                this.completed = !this.completed;
    
                this.components.button.classList = ''; //clear styles
                this.components.button.classList.add(...classList);
    
                this.components.button.textContent = !this.completed ? 'mark as done' : 'mark as ongoing';
            });

            button.classList.add(...classList); //style component

            button.textContent = 'mark as done';

            this.components.button = button;
            this.styles = styles;

            return this.components.button;
        }
    }
}