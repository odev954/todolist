function TextField(text='', taskList=null)
{
    return {
        text: text,
        taskList: taskList,
        components: {},
        render: function(tag='p', classList=[]) {
            let textField = document.createElement(tag);
            
            textField.classList.add(...classList); //style component

            textField.setAttribute('contenteditable', 'true');
            textField.innerHTML = text;

            textField.addEventListener("input", (e) => {
                this.text = e.target.innerHTML;
                this.taskList?.save();
            });

            this.components.textField = textField;

            return this.components.textField;
        }
    }
}