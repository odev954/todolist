class Task
{
    constructor(description, title, due) 
    {
        this.description = description;
        this.title = title;
        this.due = due;
    }

    setDescription(newDescription)
    {
        this.description = newDescription;
    }

    setTitle(newTitle)
    {
        this.title = newTitle;
    }

    setDue(newDue)
    {
        this.due = newDue;
    }

    getDescription(newDescription)
    {
        return this.description;
    }

    getTitle(newTitle)
    {
        return this.title;
    }

    getDue(newDue)
    {
        return this.due;
    }
}